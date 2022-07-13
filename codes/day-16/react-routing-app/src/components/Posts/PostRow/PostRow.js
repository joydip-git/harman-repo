import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const PostRow = (props) => {
    console.log(`[PR] rendered`)
    return (
        <tr>
            <td>
                <Link to={`/posts/${props.post.id}`}>
                    {props.post.id}
                </Link>
            </td>
            <td>
                {props.post.title}
            </td>
        </tr>
    )
}

PostRow.propTypes = {
    post: PropTypes.object.isRequired
}

export default PostRow