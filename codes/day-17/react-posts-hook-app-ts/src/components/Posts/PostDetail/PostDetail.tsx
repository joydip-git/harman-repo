import { AxiosError, AxiosResponse } from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Post from '../../../models/Post'
import { getSinglePost } from '../../../services/postService'

type postDetailStateType = {
    selectedPost: Post | null,
    selectedPostFetchComplete: boolean,
    selectedPostErrorMessage: string
}

const PostDetail = () => {

    const allParams = useParams()
    const postId = Number(allParams["id"])

    const [postState, setPostState] = useState<postDetailStateType>({
        selectedPost: null,
        selectedPostFetchComplete: false,
        selectedPostErrorMessage: ''
    })

    const { selectedPost, selectedPostErrorMessage, selectedPostFetchComplete } = postState


    const fetchPost = () => {
        getSinglePost(postId)
            .then(
                (resp: AxiosResponse) => {
                    setPostState({
                        selectedPost: resp.data,
                        selectedPostFetchComplete: true,
                        selectedPostErrorMessage: ''
                    })
                },
                (e: AxiosError) => {
                    setPostState({
                        selectedPost: null,
                        selectedPostFetchComplete: true,
                        selectedPostErrorMessage: e.message
                    })
                }
            )
    }

    useEffect(
        () => {
            fetchPost()
        }
    )

    let singlePostDesign;
    if (!selectedPostFetchComplete) {
        singlePostDesign = <span>Loading selected post....</span>
    } else if (selectedPostErrorMessage !== '') {
        singlePostDesign = <span>{selectedPostErrorMessage}</span>
    } else if (selectedPost === null) {
        singlePostDesign = <span>No post found...</span>
    } else {
        singlePostDesign = (
            <table>
                <tr>
                    <td>Title</td><td>{selectedPost.title}</td>
                </tr>
                <tr>
                    <td>Body</td><td>{selectedPost.body}</td>
                </tr>
            </table>
        )
    }
    return singlePostDesign

}

export default PostDetail
