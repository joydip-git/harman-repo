import { AxiosError, AxiosResponse } from 'axios';
import React, { useState, useEffect } from 'react'
import Post from '../../../models/Post';
import { getAllPosts } from '../../../services/postService';
import AllPosts from '../AllPosts/AllPosts';

// type postListStateType = {
//     errorMessage: string,
//     posts: Post[],
//     fetchComplete: boolean
// }
const PostList = () => {

    // const [postsState, setPostsState] = useState<postListStateType>({
    //     errorMessage: '',
    //     posts: [],
    //     fetchComplete: false
    // })
    // const { fetchComplete, errorMessage, posts } = postsState

    const [posts, setPosts] = useState<Post[]>([])
    const [errorMessage, setErrorMessage] = useState<string>('')
    const [fetchComplete, setFetchComplete] = useState<boolean>(false)

    const fetchPosts = () => {
        getAllPosts()
            .then(
                (resp: AxiosResponse) => {
                    // setPostsState({
                    //     posts: resp.data.splice(0, 10),
                    //     errorMessage: '',
                    //     fetchComplete: true
                    // })
                    setPosts(resp.data.splice(0, 10))
                    setErrorMessage('')
                    setFetchComplete(true)
                },
                (e: AxiosError) => {
                    // setPostsState({
                    //     posts: [],
                    //     errorMessage: e.message,
                    //     fetchComplete: true
                    // })
                    setPosts([])
                    setErrorMessage(e.message)
                    setFetchComplete(true)
                }
            )
    }

    useEffect(
        () => {
            fetchPosts()
        }
    )
    let postsDesign;
    if (!fetchComplete) {
        postsDesign = <span>Loading posts....</span>
    } else if (errorMessage !== '') {
        postsDesign = <span>{errorMessage}</span>
    } else if (posts.length === 0) {
        postsDesign = <span>No records found...</span>
    } else {
        postsDesign = <AllPosts postsData={posts} />
    }

    return postsDesign
}

export default PostList
