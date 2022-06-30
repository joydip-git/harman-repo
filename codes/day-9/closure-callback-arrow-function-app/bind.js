/*
const someObj = {
    data: 10
}

let show = function () {
    console.log(this)
    console.log(this.data)
}
show = show.bind(someObj)
show()
*/
// const someObj = {
//     data: 10,
//     show: function () {
//         console.log(this.data)
//     }
// }
// someObj.show()

class Person {
    constructor(name) {
        this.name = name
    }
    print = () => {
        console.log(this)
        //console.log(this.name)
    }
}
// function Person(name) {
//     this.name = name;
//     this.print = () => {
//         console.log(this.name)
//     }
// }
const p = new Person('anil')
p.print()
// let printFn = p.print.bind(p);
let printFn = p.print;
printFn()

