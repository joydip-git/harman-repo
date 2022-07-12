import React from 'react'
import { Link } from 'react-router-dom'
import Post from '../../../models/Post'

type postRowPropType = {
    post: Post,
    selectPostHandler?: Function
}
const PostRow = (props: postRowPropType) => {
    const { post } = props
    return (
        <tr>
            <td>
                <Link to={`/posts/${post.id}`}>
                    {post.id}
                </Link>
            </td>
            <td>
                {post.title}
            </td>
        </tr>
    )
}

export default PostRow