import { AxiosError, AxiosResponse } from 'axios'
import React, { Component } from 'react'
import Post from '../../../models/Post'
import { getSinglePost } from '../../../services/postService'

type postDetailStateType = {
    selectedPost: Post | null,
    selectedPostFetchComplete: boolean,
    selectedPostErrorMessage: string
}

export default class PostDetail extends Component {
    state: postDetailStateType = {
        selectedPost: null,
        selectedPostFetchComplete: false,
        selectedPostErrorMessage: ''
    }
    render() {
        const { selectedPost, selectedPostErrorMessage, selectedPostFetchComplete } = this.state

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
    componentDidMount() {
        getSinglePost(1)
            .then(
                (resp: AxiosResponse) => {
                    this.setState({
                        selectedPost: resp.data,
                        selectedPostFetchComplete: true,
                        selectedPostErrorMessage: ''
                    })
                },
                (err: AxiosError) => {
                    this.setState({
                        selectedPost: null,
                        selectedPostFetchComplete: true,
                        selectedPostErrorMessage: err.message
                    })
                }
            )
    }
}
