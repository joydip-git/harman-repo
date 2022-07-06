import React, { Component } from 'react'
class Sample extends Component {
    //1. initialize state through constructor
    constructor() {
        super()
        //initialization of state with properties assigned to some default values
        //state property must be assigned to an object containing properties and their values
        this.state = {
            name: '',
            num: 0,
            show: true,
            numbers: [],
            anilObj: {
                name: 'anil',
                id: 1,
                salary: 1000
            }
        }
    }

    //by default an event object is passed here, which gives you complete information abou the event which is invoking this method, such as event of which control (target) etc.

    nameChangeHandler = (e) => {
        //target property of event object gives you the control, whose event it is
        console.log(e.target)
        //to access value of the target element
        console.log(e.target.value)

        //this.state.name = e.target.value

        //use this when new value is independent of the old value. in this case, you don't need copy of the existing state
        this.setState({
            name: e.target.value
        })

        console.log('state getting updated')
    }

    numIncreaseHandler = () => {
        //setState passes a copy of the existing state object
        //use this when new value is calculated based on previous value. you need copy of the existing state to do that
        this.setState(
            (currentState) => {
                let newState = {
                    num: currentState.num + 1
                }
                return newState
            }
        )
        // const copy = { ...this.state }
        // this.state = {
        //     ...copy,           
        //     ...newState
        // }
    }


    render() {
        console.log('rendered')
        const design = (
            <div>
                <span>Welcome to a class component</span>
                <br />
                Name:&nbsp;<input type='text' value={this.state.name} onChange={this.nameChangeHandler} />
                <br />
                Number:&nbsp;<span>{this.state.num}</span>
                <br />
                <button onClick={this.numIncreaseHandler}>Increment</button>
            </div>
        )
        return design
    }
}
export default Sample