import { AxiosError, AxiosResponse } from 'axios';
import React, { Component } from 'react'
import Post from '../../../models/Post';
import { getAllPosts } from '../../../services/postService';
import AllPosts from '../AllPosts/AllPosts';

type postListStateType = {
    errorMessage: string,
    posts: Post[],
    fetchComplete: boolean
}
export default class PostList extends Component {
    state: postListStateType = {
        errorMessage: '',
        posts: [],
        fetchComplete: false
    };

    render() {
        const { fetchComplete, posts, errorMessage } = this.state

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
    componentDidMount() {
        getAllPosts()
            .then(
                (resp: AxiosResponse) => {
                    this.setState({
                        posts: resp.data.splice(0, 10),
                        errorMessage: '',
                        fetchComplete: true
                    })
                },
                (e: AxiosError) => {
                    this.setState({
                        posts: [],
                        errorMessage: e.message,
                        fetchComplete: true
                    })
                }
            )
    }
}
