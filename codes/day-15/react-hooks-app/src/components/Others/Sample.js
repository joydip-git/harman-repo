//rafce for this code
import React, { Fragment, useState } from 'react'

const Sample = () => {
    console.log('[Sample] rendered')
    //this.state={ num: 0}
    //this.setState()
    // const numbers = [1, 2]
    // const [x, y] = numbers
    // const stateInfo = useState(0)
    // const [value, setValue] = stateInfo

    //using state hook (useState function hooks up a state with this functional component)
    const [value, setValue] = useState(0)
    const [name, setName] = useState('')
    const [empState, setEmpState] = useState({ name: '', id: 0, salary: 0 })
    return (
        <Fragment>
            <div onClick={
                () => {
                    setValue(10)
                }
            }>Value:{value}</div>
            <div>
                Name:&nbsp;<input type='text' value={name} onChange={
                    (e) => {
                        setName(e.target.value)
                    }
                } />
            </div>
            <br />
            Employee Data:<hr />
            <form>
                <label>Name:&nbsp;</label>
                <input type='text' value={empState.name}
                    onChange={
                        (e) => {
                            // setEmpState({
                            //     name: e.target.value
                            // })
                            setEmpState(
                                (oldEmpObj) => {
                                    return {
                                        ...oldEmpObj,
                                        name: e.target.value
                                    }
                                }
                            )
                        }
                    }
                />
                <br />
                <label>Id:&nbsp;</label>
                <input type='text' value={empState.id} onChange={
                    (e) => {
                        setEmpState(
                            (oldEmpObj) => {
                                return {
                                    ...oldEmpObj,
                                    id: Number(e.target.value)
                                }
                            }
                        )
                    }
                } />
                <br />
                <label>Salary:&nbsp;</label>
                <input type='text' value={empState.salary} onChange={
                    (e) => {
                        // setEmpState({
                        //     ...empState,
                        //     salary: Number(e.target.value)
                        // })
                        setEmpState(
                            (oldEmpObj) => {
                                return {
                                    ...oldEmpObj,
                                    salary: Number(e.target.value)
                                }
                            }
                        )
                    }
                } />
                <br />
                <input type='button' value='Udate' onClick={
                    () => {
                        console.log(empState)
                    }
                } />
            </form>
        </Fragment>
    )
}

export default Sample

// function useStateHook(initialValue) {
//     let data = initialValue
//     const setData = (newValue) => {
//         data = newValue
//     }
//     return [data, setData]
// }