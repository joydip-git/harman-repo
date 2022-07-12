import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from "react-router-dom";
import { getSinglePost } from '../../../services/postService';
import './PostDetail.css'

const PostDetail = () => {
    const allParams = useParams()
    const postId = Number(allParams.postId)

    const navigator = useNavigate()

    const [post, setPost] = useState(null)
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(true)

    const fetchPost = () => {
        getSinglePost(postId)
            .then(
                (resp) => {
                    setPost(resp.data)
                    setError('')
                    setLoading(false)
                },
                (e) => {
                    setPost(null)
                    setError(e.message)
                    setLoading(false)
                }
            )
    }

    useEffect(
        () => {
            fetchPost()
        }, [postId]
    )
    let postDesign = ''
    if (loading) {
        postDesign = <span>Loading posts....</span>
    } else if (error !== '') {
        postDesign = <span>{error}</span>
    } else if (post === null) {
        postDesign = <span>No records found...</span>
    } else {
        postDesign = (
            <form className='form-group'>
                <label htmlFor='postTitle'>Title:&nbsp;</label>
                <span id='postTitle'>{post.title}</span>
                <br />
                <label htmlFor='postBody'>Body:&nbsp;</label>
                <br />
                <textarea readOnly id='postBody' className='postBodyStyle'>
                    {post.body}
                </textarea>
                <br />
                <button className='btn btn-primary'
                    onClick={
                        () => {
                            navigator('/posts')
                        }
                    }>Go Back</button>
            </form>
        )
    }

    return postDesign
}

export default PostDetail