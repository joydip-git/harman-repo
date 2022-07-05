import React, { Component } from 'react'
class CalculatorWithState extends Component {
    constructor() {
        super()
        this.state = {
            first: 0,
            second: 0,
            result: 0
        }
    }
    firstHandler = (e) => {
        const value = e.target.value
        this.setState({
            first: Number(value)
        })
    }
    secondHandler = (value) => {
        this.setState({
            second: Number(value)
        })
    }
    addNumbers = () => {
        const res = this.state.first + this.state.second
        this.setState({
            result: res
        })
    }
    render() {
        const design = (
            <div>
                <form className='form form-group'>
                    <div>
                        <label htmlFor='txtFirst'>First Value:&nbsp;</label>
                        <input type='text' id='txtFirst' name='txtFirst' className='form-control' value={this.state.first} onChange={this.firstHandler} />
                    </div>
                    <div>
                        <label htmlFor='txtSecond'>Second Value:&nbsp;</label>
                        <input type='text' id='txtSecond' name='txtSecond' className='form-control' value={this.state.second}
                            onChange={
                                (e) => {
                                    this.secondHandler(e.target.value)
                                }
                            }
                        />
                    </div>
                    <br />
                    <input type='button' value='Add' className='btn btn-primary' onClick={this.addNumbers} />
                </form >
                <br />
                <span>Result:&nbsp;{this.state.result}</span>
            </div >
        )
        return design
    }
}

export default CalculatorWithState