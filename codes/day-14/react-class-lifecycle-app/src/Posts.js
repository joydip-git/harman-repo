import axios from "axios";
import React, { Component } from "react";

class Posts extends Component {
    constructor() {
        super()
        this.state = {
            num: 0,
            posts: [],
            fetchComplete: false,
            errorMessage: '',
            selectedPostId: 0,
            selectedPost: null,
            selectedPostFetchComplete: false,
            selectedPostErrorMessage: ''
        }
        console.log('[Sample] created')
    }
    selectedPostIdHandler = (postId) => {
        this.setState({
            selectedPostId: postId
        })
    }
    increase = () => {
        this.setState(
            (cs) => {
                return {
                    num: cs.num + 1
                }
            }
        )
    }
    render() {
        console.log('[Sample] rendered')
        const { num, fetchComplete, errorMessage, posts, selectedPostErrorMessage, selectedPostFetchComplete, selectedPost, selectedPostId } = this.state

        let postsDesign = ''
        if (!fetchComplete) {
            postsDesign = <span>Loading posts....</span>
        } else if (errorMessage !== '') {
            postsDesign = <span>{errorMessage}</span>
        } else if (posts.length === 0) {
            postsDesign = <span>No records found...</span>
        } else {
            postsDesign = (
                <div>
                    <ol type="1">
                        {
                            posts.map(
                                (p) => {
                                    return (
                                        <li onClick={
                                            () => {
                                                this.selectedPostIdHandler(p.id)
                                            }
                                        }>
                                            {p.title}
                                        </li>
                                    )
                                }
                            )
                        }
                    </ol>
                </div>
            )
        }

        let singlePostDesign = ''
        if (!selectedPostFetchComplete) {
            singlePostDesign = <span>Loading selected post....</span>
        } else if (selectedPostErrorMessage !== '') {
            singlePostDesign = <span>{errorMessage}</span>
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
        const design = (
            <div>
                Number:&nbsp;<span>{num}</span>
                <br />
                <button onClick={this.increase}>Increase</button>
                <br />
                <br />
                {postsDesign}
                <br />
                <br />
                {
                    /*selectedPostId > 0 && singlePostDesign*/
                    selectedPostId > 0 ? singlePostDesign : <span>Please select a post now...</span>
                }
            </div>
        )
        return design
    }
    componentDidMount() {
        console.log('[Sample] mounted')
        axios
            .get('https://jsonplaceholder.typicode.com/posts')
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
    componentDidUpdate(oldProps, oldState) {
        //this.state (current state)
        //this.props (current props)
        console.log('[Sample] updated')
        if (this.state.selectedPostId > 0) {
            if (oldState.selectedPostId !== this.state.selectedPostId)
                axios
                    .get(`https://jsonplaceholder.typicode.com/posts/${this.state.selectedPostId}`)
                    .then(
                        (resp) => {
                            this.setState({
                                selectedPost: resp.data,
                                selectedPostFetchComplete: true,
                                selectedPostErrorMessage: ''
                            })
                        },
                        (err) => {
                            this.setState({
                                selectedPost: null,
                                selectedPostFetchComplete: true,
                                selectedPostErrorMessage: err.message
                            })
                        }
                    )
        }
    }
}
export default Posts