import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const PostRow = ({ post }) => {
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

PostRow.propTypes = {
    post: PropTypes.object.isRequired
}

export default PostRow