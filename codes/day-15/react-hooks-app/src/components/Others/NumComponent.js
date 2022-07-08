import React from 'react'
import { useEffect } from 'react'

const NumComponent = (props) => {
    const { value, increaseHandler } = props

    //unconditional componentDidUpdate (executed every time (1st - last))
    useEffect(
        () => {
            //side-effect  causing code
            console.log('every time side-effect')

            //this clean-up code will be excuted first next time when the component is rendered
            //clean-up code (executed everytime)
            const cleanUp = () => {
                console.log('every time cleanup ')
            }
            return cleanUp
        }
    )
    //componentDidUpdate with condition (if value changes)
    useEffect(
        () => {
            //side-effect  causing code
            console.log('side-effect only when value changes')

            //clean-up code (executed when component receives new props value)
            const cleanUp = () => {
                console.log('clean-up only when value changes')
            }
            return cleanUp
        },
        [value]
    )
    //componentDidMount
    useEffect(
        () => {
            //side-effect  causing code
            console.log('side-effect only very first time')

            //clean-up code (executed when component is unmounted)
            //componentWillUnmount
            const cleanUp = () => {
                console.log('clean up only very last time')
            }
            return cleanUp
        },
        []
    )
    return (
        <div>
            Value:&nbsp;<span>{value}</span>
            <br />
            <button onClick={increaseHandler}>Increase</button>
        </div>
    )
}

export default NumComponent