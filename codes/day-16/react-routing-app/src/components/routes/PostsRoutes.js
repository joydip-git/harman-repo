import React from 'react'
import { Route, Routes } from 'react-router-dom'
import PostList from "../Posts/PostList/PostList";
import PostDetail from '../Posts/PostDetail/PostDetail'
import AddPost from '../Posts/AddPost/AddPost'

const PostsRoutes = () => {
    const routes = (
        <Routes>
            <Route path='/posts'>
                <Route path='' element={<PostList />} />
                <Route path=':postId' element={<PostDetail />} />
                <Route path='add' element={<AddPost />} />
            </Route>
        </Routes>
    )
    return routes
}

export default PostsRoutes