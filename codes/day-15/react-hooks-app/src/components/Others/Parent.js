import React, { useState } from 'react'
import NameComponent from './NameComponent'
import NumComponent from './NumComponent'

const Parent = () => {
    const [nameState, setNameState] = useState('')
    const [numState, setNumState] = useState(0)
    const [showState, setShowState] = useState(false)
    const increaseNum = () => {
        setNumState(
            (oldNum) => oldNum + 1
        )
    }
    const changeNameHandler = (newName) => {
        setNameState(newName)
    }
    const changeShow = () => {
        setShowState(
            (oldStatus) => {
                return !oldStatus
            }
        )
    }
    return (
        <div>
            <button onClick={changeShow}>{showState ? 'Hide' : 'Show'}</button>
            <br /><br />
            {
                showState && <NumComponent value={numState} increaseHandler={increaseNum} />
            }
            <br />
            <br />
            <NameComponent name={nameState} nameHandler={changeNameHandler} />
        </div>
    )
}

export default Parent