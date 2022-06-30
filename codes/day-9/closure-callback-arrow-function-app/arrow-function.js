// function add(a: number, b: number) {
//     console.log(a + b)
// }
const add = (a, b) => console.log(a + b)
const subtract = function (a, b) {
    console.log(a - b)
}

const multiply = (a, b) => console.log(a * b)

// const divide = (a: number, b: number) => {
//     if (a > b) {
//         return a / b
//     } else
//         return b / a
// }

const divide = (a, b) => a > b ? a / b : b / a

const arrayValues = [1, 2, 3, 4, 5]
// arrayValues.filter(function (num) {
//     return num % 2 === 0
// })
arrayValues.filter((num) => num % 2 === 0)
arrayValues.sort((a, b) => a - b)

let m = 100
/*
function outerFn() {
    this.outerData = 10
    var a = 10
    console.log(this.outerData)

    //1.
    //let ref = this;
    //currently innerFn is not bound to any object , untill it is called
    let innerFn = function () {
        var b = 20
        this.innerData = 20
        console.log(a + b)
        //2.
        console.log(this.innerData + this.outerData)
        console.log(this)
        //1.
        //console.log(this.innerData + ref.outerData)
    }
    //you are saying, when the innerFn will be called, that time the function will be bound to the same object as that of the outerFn
    innerFn = innerFn.bind(this)
    innerFn()
    //new innerFn()
    console.log(this)
}

//outerFn()
//outerFn will be connected to "global" object of node js
//outerFn will be connected to "window" object of browser DOM
new outerFn()
//outerFn will be connected to a fresh, brand new object
*/

function outerFn() {
    this.outerData = 10
    var a = 10
    console.log(this.outerData)
    //3.
    //arrow function:you are saying, when the innerFn will be called, that time the function will be bound to the same object as that of the outerFn. it is oing the same job as that of bind() method
    let innerFn = () => {
        var b = 20
        console.log(a + b)

        this.innerData = 20
        console.log(this)
        console.log(this.innerData + this.outerData)
    }
    innerFn()
    console.log(this)
}

new outerFn()
