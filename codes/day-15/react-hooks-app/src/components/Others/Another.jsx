import React, { useState } from 'react'

const Another = () => {

    //1. useState() hooks a state to your functional component externally
    //2. state data type can be anything (you can store anything in state). it need not to be an object always
    //3. you can use more than one state for a functional component
    //4. when you call useState to hook a state, that time pass initial state value to the useState() function. the passed value will determine the type of state.
    //5. useState will return an array containing copy of the state (1st index in the array) and reference of a function to update the state (2nd index of the array)
    //6. update of state replaces the old state completely by the new state
    //7. you can pass new state directly to the method to update state or you can pass a callback function to the method to update state. in the second case, the callback function can accept the copy of old state and use to calculate new state. but the callback must return the new state anyway
    //8. updation of the state will re-render this functional component which will update the actual dom, which was created the very first time

    //destructuing the array returned by the useState
    //num <- stores the copy of the state
    //setNum <- stores the reference of the function to update the state

    //following code is like slices of much bigger state
    const [num, setNum] = useState(0)
    const [name, setName] = useState('sunil')
    const [show, setShow] = useState(false)
    const [numbers, setNumbers] = useState([1, 2, 3, 4])
    const [obj, setObj] = useState({ name: 'anil', location: 'bangalore' })

    //the following is just like state of class component. it is a big fat JS object
    // const [completeState, setCompleteState] = useState({
    //     num: 0,
    //     name: '',
    //     show: false,
    //     numbers: [],
    //     obj: {
    //         name: '',
    //         location: ''
    //     }
    //})
    const increaseNumber = () => {
        setNum(
            (prevNum) => prevNum + 1
        )
    }
    return (
        <div>
            Name:&nbsp;<span>{name}</span>
            <br /><br />
            Number:&nbsp;<span>{num}</span>
            <br />
            <button onClick={increaseNumber}>Increase</button>
            <br /><br />
            Status:&nbsp;<span>{show ? 'Hide' : 'Show'}</span>
            <br /><br />
            Numbers:&nbsp;
            <br />
            <ol type='1'>
                {
                    numbers.map(
                        (n) => <li>{n}</li>
                    )
                }
            </ol>
            <br /><br />
            Person Data:&nbsp;
            <hr />
            <span>Name:&nbsp;{obj.name}</span>
            <br />
            <span>Location:&nbsp;{obj.location}</span>
        </div>
    )
}

export default Another