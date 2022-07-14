import React, { useEffect, useState } from 'react'

const PostCard = ({ postId }) => {
    const [post, setPost] = useState(null)
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(true)

    const fetchPost = async (pid) => {
        try {
            const resp = await fetch('https://jsonplaceholder.typicode.com/posts/' + pid)
            const postData = await resp.json()
            setPost(postData)
            setError('')
            setLoading(false)
        } catch (error) {
            setPost(null)
            setError(error.message)
            setLoading(false)
        }
    }

    useEffect(
        () => {
            fetchPost(postId)
        },
        [postId]
    )

    if (loading) {
        return <span>Loading post...</span>
    } else if (error !== '') {
        return <span>{error}</span>
    } else if (post === null) {
        return <span>No post found with {postId}</span>
    } else {
        return (
            <>
                <h2 data-testid='postHeader'>Displaying details of post# {postId}</h2>
                <header>{post.title}</header>
                <details>
                    <summary>
                        {post.body}
                    </summary>
                </details>
            </>

        )
    }
}

export default PostCard