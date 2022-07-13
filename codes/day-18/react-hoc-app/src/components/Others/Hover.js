import React, { Component } from 'react'
import './Hover.css'
import withCommonFunctionalities from './withCommonFunctionalities'

/*
export default class Hover extends Component {
    state = {
        count: 0,
        backgroundColor: 'grey'
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
            <div
                className='divStyle'
                onMouseOver={this.applyStyle}
                onClick={this.increaseHandler}
                style={{ backgroundColor: this.state.backgroundColor }}
            >
                Hover Count:&nbsp;{this.state.count}
            </div>
        )
    }
}

*/

/*
let Hover = (props) => {
    const { y, increaseValue, applyStyleHandler, backgroundColorValue, countValue } = props
    return (
        <div
            className='divStyle'
            onMouseOver={applyStyleHandler}
            onClick={increaseValue}
            style={{ backgroundColor: backgroundColorValue }}
        >
            Y:&nbsp;{y === undefined ? 'NA' : y}
            <br />
            Hover Count:&nbsp;{countValue}
        </div>
    )
}
*/
class Hover extends Component {
    render() {
        const { y, increaseValue, applyStyleHandler, backgroundColorValue, countValue } = this.props
        return (
            <div
                className='divStyle'
                onMouseOver={applyStyleHandler}
                onClick={increaseValue}
                style={{ backgroundColor: backgroundColorValue }}
            >
                Y:&nbsp;{y === undefined ? 'NA' : y}
                <br />
                Hover Count:&nbsp;{countValue}
            </div>
        )
    }
}
Hover = withCommonFunctionalities(Hover)
export default Hover
