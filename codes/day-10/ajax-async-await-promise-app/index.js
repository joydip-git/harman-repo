function processData() {
    console.log(req.readyState)
    if (req.readyState === 4 && req.status === 200) {
        console.log(req.responseText)
    }
}
function getData() {
    setTimeout(
        () => {
            // const req = new XMLHttpRequest()
            // req.addEventListener('readystatechange', processData)
            // //req.onreadystatechange = processData
            // req.open('GET', 'https://jsonplaceholder.typicode.com/posts')
            // req.send()

            //state => pending->resolved/rejected, result
            const fetchPromiseObj = fetch('https://jsonplaceholder.typicode.com/posts')
            fetchPromiseObj
                .then(
                    function (resp) {
                        resp
                            .json()
                            .then(
                                (data) => console.log(data),
                                (er) => console.log(er)
                            )
                    },
                    function (err) {
                        console.log(err)
                    }
                )
        }
    )
}

async function getPosts() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}
//cveate: yiu can use awit keyword in a function declared with async keyword
async function other() {
    // divide(10, 20)
    //     .then(
    //         (data) => console.log(data),
    //         (e) => console.log(e)
    //     )
    try {
        var res = await divide(10, 0)
        console.log(res)
    } catch (e) {
        console.log(e)
    }
}

async function divide(a, b) {
    const res = a / b
    if (res === Infinity) {
        throw new Error('can not divide by zero')
    }
    return res
}

// function divide(a, b) {
//     const p = new Promise(
//         //executor function
//         (resolveFn, rejectFn) => {
//             const res = (a / b)
//             if (res === Infinity) {
//                 rejectFn('can not divide by zero')
//             }
//             resolveFn(res)
//         }
//     )
//     return p;
// }

