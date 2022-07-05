import React, { createRef } from 'react'
const Calculator = () => {

    //component code

    //createing two instances of RefObj, to store references of two HTML Input element represented by two input React elemet here in my design
    //RefObj has a property "current", which actually stores the address of some other object
    // const firstInputElementRef = createRef()
    // const secondInputElementRef = createRef()

    let firstInputElementRef = null
    let secondInputElementRef = null
    const getFirstHtmlInputElementRef = (refOfFirstHtmlInputElement) => {
        firstInputElementRef = refOfFirstHtmlInputElement
    }
    const getSecondHtmlInputElementRef = (refOfSecondHtmlInputElement) => {
        secondInputElementRef = refOfSecondHtmlInputElement
    }

    let result = 0
    const addNumbers = () => {
        //const firstHtmlInput = firstInputElementRef.current
        //const secondHtmlInput = secondInputElementRef.current
        //result = Number(firstHtmlInput.value) + Number(secondHtmlInput.value)
        result = Number(firstInputElementRef.value) + Number(secondInputElementRef.value)
        console.log(result)
    }

    //component design
    const design = (
        <div>
            <form className='form form-group'>
                <div>
                    <label htmlFor='txtFirst'>First Value:&nbsp;</label>
                    {

                        /* <input type='text' id='txtFirst' name='txtFirst' className='form-control' ref={firstInputElementRef} /> */
                    }
                    <input type='text' id='txtSecond' name='txtSecond' className='form-control' ref={getFirstHtmlInputElementRef} />
                </div>
                <div>
                    <label htmlFor='txtSecond'>Second Value:&nbsp;</label>
                    {/* <input type='text' id='txtSecond' name='txtSecond' className='form-control' ref={secondInputElementRef} /> */}
                    <input type='text' id='txtSecond' name='txtSecond' className='form-control' ref={getSecondHtmlInputElementRef} />
                </div>
                <br />
                <input type='button' value='Add' className='btn btn-primary' onClick={addNumbers} />
            </form >
            <br />
            <span>Result:&nbsp;{result}</span>
        </div >
    )
    return design
}
export default Calculator