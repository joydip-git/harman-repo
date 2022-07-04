//promise helps you to create asynchronous methods
//promise helps to achieve asynchronity in JS application
//promise: state (pending/rejected/resolved) and result (undefined/value) property
/*
const divide = (a, b) => {
    const p = new Promise(
        function (resolveFnRef, rejectFnRef) {
            const divRes = a / b
            if (divRes === Infinity)
                // throw new Error('can not divide by zero')
                //Promise.reject()
                rejectFnRef('can not divide by zero')
            else
                //Promise.resolve(divRes)
                resolveFnRef(divRes)
        }
    )
    return p
}
*/
const divide = async (a, b) => {
    const divRes = a / b
    if (divRes === Infinity)
        throw new Error('can not divide by zero')
    //return 'can not divide by zero'
    else
        return divRes
}
const subtract = (a, b) => a - b

//asynchronous way
const divPromiseObj = divide(12, 0)
divPromiseObj
    .then(
        function (data) {
            console.log(data)
        },
        function (e) {
            console.log(e.message)
        }
    )
const subRes = subtract(12, 3)
//console.log(divRes)
console.log(subRes)
