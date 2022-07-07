import React from "react";
const AllPosts = (props) => {
    const { postsData, selectedIdHandler } = props
    const allPostsDesign = (
        <div>
            <ol type="1">
                {
                    postsData.map(
                        (p) => {
                            return (
                                <li onClick={
                                    () => {
                                        selectedIdHandler(p.id)
                                    }
                                }>
                                    {p.title}
                                </li>
                            )
                        }
                    )
                }
            </ol>
        </div>
    )
    return allPostsDesign
}
export default AllPosts