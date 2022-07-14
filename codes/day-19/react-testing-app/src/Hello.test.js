import React from 'react';
import Hello from './Hello';
import { act } from "react-dom/test-utils";
import { unmountComponentAtNode } from 'react-dom';
import { render } from 'react-dom';
//import { createRoot } from 'react-dom/client';

describe(
    'testing Hello component render',
    () => {

        let container = null
        //let root = null
        beforeEach(
            () => {
                container = document.createElement('div')
                //root = createRoot(container)
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
            'testing Hello component render with no name prop passed',
            () => {
                //act
                act(
                    () => {
                        //root.render(<App />)
                        render(<Hello />, container)
                    }
                )
                //assert
                expect(container.textContent).toBe('Hello, stranger')
            }
        )

        it(
            'testing Hello component render with name prop passed',
            () => {
                //act
                act(
                    () => {
                        //root.render(<App name='Huggin' />)
                        render(<Hello name='Huggin' />, container)
                    }
                )
                //assert
                expect(container.textContent).toBe('Hello, Huggin')
            }
        )
    }
)




