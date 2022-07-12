import axios, { AxiosResponse } from "axios";

const postUrl = 'https://jsonplaceholder.typicode.com/postss'

export function getAllPosts(): Promise<AxiosResponse> {
    return axios.get(postUrl)
}
export function getSinglePost(postId: number) {
    return axios.get(`${postUrl}/${postId}`)
}
