import React from 'react'
import Post from '../../../models/Post'
import PostRow from '../PostRow/PostRow'
import './AllPosts.css'

type allPostsPropType = {
    postsData: Post[]
}

const AllPosts = (props: allPostsPropType) => {
    const { postsData } = props
    const postsDesign = (
        <div className='tbl-responsive'>
            <table className='table'>
                <thead className='headStyle'>
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        postsData.map(
                            (p) => <PostRow post={p} />
                        )
                    }
                </tbody>
            </table>
        </div>
    )
    return postsDesign
}

export default AllPosts