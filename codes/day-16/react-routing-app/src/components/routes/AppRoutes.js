import React from 'react'
import { Routes, Route } from 'react-router-dom'
import AddPost from '../Posts/AddPost/AddPost'
import PostList from '../Posts/PostList/PostList'
import PostDetail from '../Posts/PostDetail/PostDetail'
import Home from '../common/Home/Home'
import PageNotFound from '../common/PageNotFound/PageNotFound'

//import CommonRoutes from './CommonRoutes'
//import PostsRoutes from './PostsRoutes'

// const AppRoutes = () => {
//     return (
//         <>
//             <CommonRoutes />
//             <PostsRoutes />
//         </>
//     )
// }

const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/'>
                <Route path='' element={<Home />} />
                <Route path='home' element={<Home />} />
            </Route>
            <Route path='/posts'>
                <Route path='' element={<PostList />} />
                <Route path=':postId' element={<PostDetail />} />
                <Route path='add' element={<AddPost />} />
            </Route>
            <Route path='*' element={<PageNotFound />} />
        </Routes>
    )
}

export default AppRoutes