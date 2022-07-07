import axios from "axios";

const postUrl = 'https://jsonplaceholder.typicode.com/posts'

export function getAllPosts() {
    return axios.get(postUrl)
}
export function getSinglePost(postId) {
    return axios.get(`${postUrl}/${postId}`)
}
