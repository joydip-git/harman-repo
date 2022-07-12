import React from 'react'
import PropTypes from 'prop-types'
import PostRow from '../PostRow/PostRow'

const PostTable = ({ allPosts }) => {
    const postsDesign = (
        <div className='tbl-responsive'>
            <table className='table'>
                <thead style={{ backgroundColor: 'burlywood' }}>
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allPosts.map(
                            (p) => <PostRow post={p} />
                        )
                    }
                </tbody>
            </table>
        </div>
    )
    return postsDesign
}

PostTable.propTypes = {
    allPosts: PropTypes.array.isRequired
}

export default PostTable