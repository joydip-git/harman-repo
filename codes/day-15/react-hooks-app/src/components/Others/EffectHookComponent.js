import React, { useEffect, useState } from 'react'

const EffectHookComponent = ({ postId }) => {
    const [post, setPost] = useState({ id: 0, userId: 0, title: '', body: '' })
    const [error, setError] = useState('')
    const [fetchComplete, setFetchComplete] = useState(false)

    const fetchAPost = () => {
        fetch('https://jsonplaceholder.typicode.com/posts/' + postId)
            .then(
                (resp) => {
                    resp
                        .json()
                        .then(
                            (data) => {
                                setPost({
                                    id: data.id,
                                    userId: data.userId,
                                    title: data.title,
                                    body: data.body
                                })
                                setFetchComplete(true)
                            },
                            (e) => {
                                setError(e.message)
                                setFetchComplete(true)
                            }
                        )
                },
                (e) => {
                    setError(e.message)
                    setFetchComplete(true)
                }
            )
    }

    useEffect(
        () => {
            fetchAPost()
        },
        [postId]
    )

    let design = ''
    if (!fetchComplete) {
        design = <span>Loading...</span>
    } else if (error !== '') {
        design = <span>{error}</span>
    } else if (post.title === '') {
        design = <span>No post found</span>
    } else {
        design = (
            <div>
                Title:&nbsp;<span>{post.title}</span>
                <br />
                Body:&nbsp;
                <br />
                <p>{post.body}</p>
            </div>
        )
    }
    return design
}

export default EffectHookComponent