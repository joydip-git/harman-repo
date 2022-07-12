import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/common/Home/Home'
import PageNotFound from '../components/common/PageNotFound/PageNotFound'
import AddPost from '../components/Posts/AddPost/AddPost'
import PostDetail from '../components/Posts/PostDetail/PostDetail'
import PostList from '../components/Posts/PostList/PostList'

const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/posts' element={<PostList />} />
            <Route path='/posts/:id' element={<PostDetail />} />
            <Route path='/posts/add' element={<AddPost />} />
            <Route path='*' element={<PageNotFound />} />
        </Routes>
    )
}

export default AppRoutes