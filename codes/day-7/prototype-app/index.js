function foo() {
    // this.print = function () {
    //     console.log('hi....')
    // }
}
Object.prototype.print = function () {
    console.log('hi....')
}
//use "prototype" property of the function to access the prototype object of the function
console.log(foo.prototype)

const fooObject = new foo()
//any JS object has a property proto
//whereas any prototype object has an additional property "constructor"
fooObject.print()
console.log(fooObject.hasOwnProperty("print"))
console.log(foo.prototype.hasOwnProperty("print"))
console.log(Object.prototype.hasOwnProperty("print"))