import { render, unmountComponentAtNode } from "react-dom"
import { act } from "react-dom/test-utils"
import PostCard from "./PostCard"

describe(
    'testing post card render',
    () => {

        let container = null
        beforeEach(
            () => {
                container = document.createElement('div')
                document.body.appendChild(container)
            }
        )

        afterEach(
            () => {
                unmountComponentAtNode(container)
                //root.unmount()
                container.remove()
                container = null
            }
        )

        it(
            "post card renders post data",
            async () => {

                const fakePost = {
                    userId: 1,
                    id: 1,
                    title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                    body: "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto"
                }

                jest
                    .spyOn(global, "fetch")
                    .mockImplementation(
                        () => {
                            return Promise.resolve(
                                {
                                    json: () => { return Promise.resolve(fakePost) }
                                }
                            )
                        }
                    )

                //use the async version of act to apply resolved promises
                await act(
                    async () => {
                        render(<PostCard postId={1} />, container)
                    }
                )
                // expect(container.querySelector('span').textContent).toBe("Loading post...")
                expect(container.querySelector('[data-testid="postHeader"]').textContent).toMatch(/1/)
                expect(container.querySelector('header').textContent).toBe(fakePost.title)

                //remove the mock to make sure the tests run completely isolated
                global.fetch.mockRestore()
            }
        )

    }
)