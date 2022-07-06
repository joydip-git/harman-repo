import React, { Component, createRef } from 'react'
/*
class CallbackRefClassComp extends Component {
    constructor() {
        super()
        this.inputElementRef = null
    }
    getInputRef = (htmlInputRef) => {
        this.inputElementRef = htmlInputRef
    }
    validate = () => {
        if (this.inputElementRef !== null) {
            if (this.inputElementRef.value === '') {
                window.alert('enter value')
            }
        }
    }
    render() {
        return (
            <div>
                Value:&nbsp;
                <input type='text' ref={this.getInputRef} />
                <br />
                <button onClick={this.validate}>Submit</button>
            </div>
        )
    }
}
*/
const CallbackRefClassComp = () => {
    //let inputElementRef = null
    let inputElementRef = createRef()

    // const getInputRef = (htmlInputRef) => {
    //     inputElementRef = htmlInputRef
    // }

    const validate = () => {
        // if (inputElementRef !== null) {
        //     if (inputElementRef.value === '') {
        //         window.alert('enter value')
        //     }
        // }
        if (inputElementRef.current !== null) {
            if (inputElementRef.current.value === '') {
                window.alert('enter value')
            }
        }
    }
    return (
        <div>
            Value:&nbsp;
            {/* <input type='text' ref={getInputRef} /> */}
            <input type='text' ref={inputElementRef} />
            <br />
            <button onClick={validate}>Submit</button>
        </div>
    )
}
export default CallbackRefClassComp