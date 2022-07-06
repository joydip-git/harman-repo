import React, { Component } from "react";
/*
const Posts = () => {
    let design = <span>Fetching...</span>
    const fetchPromise = fetch('https://jsonplaceholder.typicode.com/posts/1')
    fetchPromise
        .then(
            (resp) => {
                resp
                    .json()
                    .then(
                        (data) => {
                            design = <span>{data.title}</span>
                        },
                        (err) => console.log(err)
                    )
            },
            (e) => {
                console.log(e)
            }
        )
    return design
}
*/

class Posts extends Component {
    constructor() {
        super()
        this.state = {
            fetchingCompleted: false,
            posts: [],
            errorMessage: ''
        }
        console.log('Posts created')
    }
    render() {
        console.log('Posts rendered')
        let design = null
        if (this.state.fetchingCompleted === false) {
            design = <span>Fetching..please wait</span>
        } else if (this.state.errorMessage !== '') {
            design = <span>{this.state.errorMessage}</span>
        } else if (this.state.posts.length === 0) {
            design = <span>No records found</span>
        } else {
            design = (
                <ol type='1'>
                    {
                        this.state.posts.map(
                            (p) => {
                                return <li>{p.title}</li>
                            }
                        )
                    }
                </ol>
            )
        }
        return design
    }
    componentDidMount() {
        console.log('Posts mounted (displayed in UI)')
        fetch('https://jsonplaceholder.typicode.com/posts').then(
            (resp) => {
                resp
                    .json()
                    .then(
                        (data) => {
                            this.setState({
                                posts: data,
                                fetchingCompleted: true,
                                errorMessage: ''
                            })
                        },
                        (e) => {
                            this.setState({
                                posts: [],
                                fetchingCompleted: true,
                                errorMessage: e.message
                            })
                        }
                    )
            },
            (err) => {
                this.setState({
                    posts: [],
                    fetchingCompleted: true,
                    errorMessage: err.message
                })
            }
        )
    }
}
export default Posts