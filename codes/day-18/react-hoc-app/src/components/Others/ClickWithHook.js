import React from 'react'
import useCount from './useCount'
import useStyle from './useStyle'

const ClickWithHook = (props) => {
    const [countValue, increaseValue] = useCount(20)
    const [backgroundColorValue, applyStyleHandler] = useStyle('grey')
    return (
        <div style={{ backgroundColor: backgroundColorValue }}>
            X:&nbsp;{props.x === undefined ? 'NA' : props.x}
            <br />
            Click Count:&nbsp;<span>{countValue}</span>
            <br />
            <button onClick={increaseValue}>Increase</button>
            &nbsp;
            <button onClick={
                () =>
                    applyStyleHandler('lime')
            }
            >Apply New Style</button>
        </div>
    )
}

export default ClickWithHook