import React, { useState, useEffect } from 'react'
import { getAllPosts } from "../../../services/postService";
import PostTable from '../PostTable/PostTable';

const PostList = () => {
    const [posts, setPosts] = useState([])
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(true)

    const fetchPosts = () => {
        getAllPosts()
            .then(
                (resp) => {
                    setPosts(resp.data.splice(0, 10))
                    setError('')
                    setLoading(false)
                },
                (e) => {
                    setPosts([])
                    setError(e.message)
                    setLoading(false)
                }
            )
    }

    useEffect(
        () => {
            fetchPosts()
        }, []
    )


    let postsDesign = ''
    if (loading) {
        postsDesign = <span>Loading posts....</span>
    } else if (error !== '') {
        postsDesign = <span>{error}</span>
    } else if (posts.length === 0) {
        postsDesign = <span>No records found...</span>
    } else {
        postsDesign = <PostTable allPosts={posts} />
    }

    return postsDesign
}

export default PostList