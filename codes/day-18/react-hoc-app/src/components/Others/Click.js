import React, { Component } from 'react'
import withCommonFunctionalities from './withCommonFunctionalities'

/*
export default class Click extends Component {
    state = {
        count: 0,
        backgroundColor: 'blue'
    }
    increaseHandler = () => {
        this.setState(
            (oldState) => {
                return {
                    count: oldState.count + 1
                }
            }
        )
    }
    applyStyle = () => {
        this.setState({
            backgroundColor: 'yellow'
        })
    }
    render() {
        return (
            <div style={{ backgroundColor: this.state.backgroundColor }}>
                Click Count:&nbsp;<span>{this.state.count}</span>
                <br />
                <button onClick={this.increaseHandler}>Increase</button>
                &nbsp;
                <button onClick={this.applyStyle}>Apply New Style</button>
            </div>
        )
    }
}
*/
let Click = (props) => {
    const { x, increaseValue, applyStyleHandler, backgroundColorValue, countValue } = props
    return (
        <div style={{ backgroundColor: backgroundColorValue }}>
            X:&nbsp;{x === undefined ? 'NA' : x}
            <br />
            Click Count:&nbsp;<span>{countValue}</span>
            <br />
            <button onClick={increaseValue}>Increase</button>
            &nbsp;
            <button onClick={applyStyleHandler}>Apply New Style</button>
        </div>
    )
}

Click = withCommonFunctionalities(Click)
export default Click
