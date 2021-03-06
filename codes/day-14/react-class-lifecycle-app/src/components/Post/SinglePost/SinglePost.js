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
        this.fetchPromise = null
        //this.socket = new WebSocket('https://www.google.com')
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
        //this.socket.send()
    }

    componentDidUpdate(oldProps, oldState) {
        console.log('[SP] updated')
        if (this.props.selectedId !== oldProps.selectedId) {
            this.fetchPost()
            //this.socket.send()
            //this.socket.close()
            //this.fetchPromise = null
        }
    }
    componentWillUnmount() {
        //do not write any side-effect causing code here, since this time the object is destroyed. it is used to clean up resources that you used in side-effect causing code in other methods
        //in this case, the entire component is unmounted from the actual dom and also the component object is destroyed
        //next time again fresh component object will be created and then mounted in the actual dom
        this.fetchPromise = null
        //this.socket.close()
        console.log('[SP] unmounted')
    }

    fetchPost = () => {
        // axios
        //     .get(`https://jsonplaceholder.typicode.com/posts/${this.props.selectedId}`)
        this.fetchPromise = getSinglePost(this.props.selectedId)

        this.fetchPromise.then(
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
        //this.fetchPromise = null
    }
}
export default SinglePost