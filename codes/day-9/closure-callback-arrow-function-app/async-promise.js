const f3 = () => console.log('f3')
const divide = (a, b) => {
    const promiseObj = new Promise(
        (resolveFn, rejectFn) => {
            const res = a / b
            if (res === Infinity) {
                rejectFn('can not divide by zero')
            }
            resolveFn(res)
        }
    )
    return promiseObj;
}

const divPromise = divide(10, 0)
divPromise
    .then(
        //if promise is in resolved state
        (data) => {
            console.log(data)
        },
        //if promise is in rejected state
        (err) => {
            console.log(err)
        }
    )

const fsModule = require('fs')
fsModule.readFile(
    './data.txt',
    function (error, data) {
        if (error)
            console.log(error)

        if (data)
            console.log(data.toString())
    }
)

f3()
console.log('divide is going on')



const asyncFn = () => {
    const p = new Promise(
        function (resolve, reject) {
            //code
            //resolve(10)
            reject('error')
        }
    )
    return p;
}
asyncFn().then(
    (d) => console.log(d),
    (e) => console.log(e)
)

