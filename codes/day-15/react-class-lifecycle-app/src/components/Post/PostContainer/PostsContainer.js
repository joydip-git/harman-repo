//import axios from "axios";
import React, { Component } from "react";
import { getAllPosts } from "../../../services/postService";
import AllPosts from "../AllPosts/AllPosts";
import SinglePost from "../SinglePost/SinglePost";

class PostsContainer extends Component {
    constructor() {
        super()
        this.state = {
            posts: [],
            fetchComplete: false,
            errorMessage: '',
            selectedPostId: 0
        }
        console.log('[Posts] created')
    }
    selectedPostIdHandler = (postId) => {
        this.setState({
            selectedPostId: postId
        })
    }
    render() {
        console.log('[Posts] rendered')
        const { fetchComplete, errorMessage, posts, selectedPostId } = this.state

        let postsDesign = ''
        if (!fetchComplete) {
            postsDesign = <span>Loading posts....</span>
        } else if (errorMessage !== '') {
            postsDesign = <span>{errorMessage}</span>
        } else if (posts.length === 0) {
            postsDesign = <span>No records found...</span>
        } else {
            postsDesign = <AllPosts postsData={posts} selectedIdHandler={this.selectedPostIdHandler} />
        }
        const design = (
            <div>
                {postsDesign}
                <br />
                <br />
                {
                    /* selectedPostId > 0 && <SinglePost /> */
                    selectedPostId > 0 ? <SinglePost selectedId={selectedPostId} /> : <span>Please select a post now...</span>
                }
            </div>
        )
        return design
    }
    componentDidMount() {
        console.log('[Posts] mounted')
        // axios
        //     .get('https://jsonplaceholder.typicode.com/posts')
        getAllPosts()
            .then(
                (resp) => {
                    const posts = resp.data.splice(0, 10)
                    this.setState({
                        posts: posts,
                        errorMessage: '',
                        fetchComplete: true
                    })
                },
                (err) => {
                    this.setState({
                        posts: [],
                        errorMessage: err.message,
                        fetchComplete: true
                    })
                }
            )

        // fetch('https://jsonplaceholder.typicode.com/posts')
        //     .then(
        //         (resp) => {
        //             resp
        //                 .json()
        //                 .then(data => console.log(data))
        //         }
        //     )
    }
}
export default PostsContainer