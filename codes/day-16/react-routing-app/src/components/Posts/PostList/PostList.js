import React, { useState, useEffect } from 'react'
import { getAllPosts } from "../../../services/postService";
import PostTable from '../PostTable/PostTable';

const PostList = () => {
    console.log('[PL] rendered')
    const [posts, setPosts] = useState([])
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(true)
    const [optionText, setOptionText] = useState('--select--')

    const fetchPosts = () => {
        getAllPosts()
            .then(
                (resp) => {
                    setPosts(resp.data.splice(0, 10))
                    setError('')
                    setLoading(false)
                },
                (e) => {
                    setPosts([])
                    setError(e.message)
                    setLoading(false)
                }
            )
    }

    useEffect(
        () => {
            fetchPosts()
        }, []
    )

    const sortPosts = (option) => {
        console.log(optionText)
        switch (option) {
            case 'Id':
                setPosts(
                    (currntPosts) => {
                        return currntPosts.sort(
                            (p1, p2) => p1.id - p2.id
                        )
                    }
                )
                break;
            case 'Title':
                console.log('sorting by title')
                setPosts(
                    (currntPosts) => {
                        const sorted = currntPosts.sort(
                            (p1, p2) => p1.title.localeCompare(p2.title)
                        )
                        return sorted
                    }
                )
                break;
            default:
                setPosts(
                    (currntPosts) => {
                        return currntPosts.sort(
                            (p1, p2) => p1.id - p2.id
                        )
                    }
                )
                break;
        }
        setOptionText(option)
    }

    console.log(posts)
    let postsDesign = ''
    if (loading) {
        postsDesign = <span>Loading posts....</span>
    } else if (error !== '') {
        postsDesign = <span>{error}</span>
    } else if (posts.length === 0) {
        postsDesign = <span>No records found...</span>
    } else {
        postsDesign =
            (
                <>
                    <div className='row'>
                        <span className='col-md-6'>Sort By:&nbsp;</span>
                        <div className='col-md-4'>
                            <select defaultValue={optionText}
                                onChange={
                                    (e) => {
                                        const selectedoption = e.target.options[e.target.selectedIndex]
                                        sortPosts(selectedoption.text)
                                    }
                                }>
                                <option>--select--</option>
                                <option>Id</option>
                                <option>Title</option>
                            </select>
                        </div>
                    </div>
                    <PostTable allPosts={posts} />
                </>
            )
    }

    return postsDesign
}

export default PostList