import React from 'react'
import { Link } from 'react-router-dom'

const DashBoard = () => {
    const design = (

        <nav className="navbar navbar-default">
            <div className="container-fluid">
                <Link to='/home'>
                    <button type='button' className="btn btn-group">
                        Home
                    </button>
                </Link>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Link to='/posts'>
                    <button type='button' className="btn btn-group">
                        Posts
                    </button>
                </Link>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Link to='/posts/add'>
                    <button type='button' className="btn btn-group">
                        Add Post
                    </button>
                </Link>
            </div>
        </nav>
    )
    return design
}

export default DashBoard