import React from 'react'

const NameComponent = (props) => {
    const { name, nameHandler } = props
    return (
        <div>
            Name:&nbsp;
            <input type='text' value={name} onChange={
                (e) => nameHandler(e.target.value)
            } />
        </div>
    )
}

export default NameComponent