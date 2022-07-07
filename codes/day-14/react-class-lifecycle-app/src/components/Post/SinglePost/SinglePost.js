//import axios from "axios";
import React, { Component } from "react";
import { getSinglePost } from "../../../services/postService";
/**
 * {
 *  selectedId:1
 * }
 */
class SinglePost extends Component {
    constructor() {
        super()
        this.state = {
            selectedPost: null,
            selectedPostFetchComplete: false,
            selectedPostErrorMessage: ''
        }
        console.log('[SP] created')
    }
    render() {
        console.log('[SP] rendered')
        console.log(this.props)
        const { selectedPost, selectedPostErrorMessage, selectedPostFetchComplete } = this.state

        let singlePostDesign = ''
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
        console.log('[SP] mounted')
        this.fetchPost()
    }
    componentDidUpdate(oldProps, oldState) {
        console.log('[SP] updated')
        if (this.props.selectedId !== oldProps.selectedId)
            this.fetchPost()
    }

    fetchPost = () => {
        // axios
        //     .get(`https://jsonplaceholder.typicode.com/posts/${this.props.selectedId}`)
        getSinglePost(this.props.selectedId)
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
export default SinglePost