const foo = function () {
    this.data = 10
    const innerFn = () => {
        console.log(this.data)
    }
}
// foo = foo.bind(this)

//const foo = () => { }
/*
function person(name, id, salary) {
    this.name = name
    this.id = id
    this.salary = salary
    // this.print = function () {
    //     return `${this.name} has salary of ${this.salary}`
    // }
    this.print = () => {
        return `${this.name} has salary of ${this.salary}`
    }
}
*/
class person {
    name: string;
    id: number;
    salary: number;
    constructor(name: string, id: number, salary: number) {
        this.name = name
        this.id = id
        this.salary = salary
    }
    // this.print = function () {
    //     return `${this.name} has salary of ${this.salary}`
    // }
    print = () => {
        return `${this.name} has salary of ${this.salary}`
    }
}

// const anilPerson = new person('anil', 1, 1000)
// const info = anilPerson.print()
// console.log(info)
const people = [
    new person('anil', 1, 1000),
    new person('sunil', 2, 2000),
    new person('sachin', 3, 3000)
]
for (let i = 0; i < people.length; i++) {
    const p = people[i];
    //const boundPrintFn = p.print.bind(p)
    //printSalary(boundPrintFn)
    printSalary(p.print)
}
function printSalary(printFn) {
    const info = printFn()
    console.log(info)
}

//<obj-ref>.fn() => fn is bound to <obj-ref>
//new fn() => fn will be bound to new JS object
//fn() => fn will be bound to some default object (global in node js/window in browser)

const add = (a, b) => console.log(a + b)
add(10, 20)



