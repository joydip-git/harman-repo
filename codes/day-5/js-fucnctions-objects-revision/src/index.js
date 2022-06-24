// function foo() {
//     //in JS there is scoping of variables in a function
//     var x = 10
//     for (var i = 0; i < 2; i++) {
//         var x = 20;
//         console.log(x)//20
//     }
//     console.log(x)//10
// }
function foo() {
    let x = 10
    for (let i = 0; i < 2; i++) {
        let x = 20;
        console.log(x)//20
    }
    console.log(x)//10
}
foo()

let m = 100
m = 'pavan'

const a = 100;
//a = 200;
console.log(a)

const arr = new Array()
arr.push(12)
arr.push(13)
console.log(arr)
//arr = new Array(102, 20)

// function person(name, id, salary) {
//     this.personName = name;
//     this.personId = id;
//     this.personSalary = salary;
// }
// person.prototype.print = function () {
//     return this.personName + " " + this.personId + " " + this.personSalary
// }

class Person {
    constructor(name, id) {
        this.personName = name;
        this.personId = id;
    }
    // get Name() {
    //     return this.name
    // }
    // set Name(value) {
    //     this.name = value
    // }
    print() {
        return this.personName + " " + this.personId
    }
}

class Student extends Person {
    constructor(name, id, marks) {
        super(name, id)
        this.marks = marks;
    }
    print() {
        return super.print() + " " + this.marks
    }
}
