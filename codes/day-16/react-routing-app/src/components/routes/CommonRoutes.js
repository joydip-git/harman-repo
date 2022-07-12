import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from "../common/Home/Home";

const CommonRoutes = () => {
    return (
        <Routes>
            <Route path='/'>
                <Route path='' element={<Home />} />
                <Route path='home' element={<Home />} />
            </Route>
        </Routes>
    )

}

export default CommonRoutes