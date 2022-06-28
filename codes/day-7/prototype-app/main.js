class foo {
    constructor() {

    }
    print() {
        console.log('hi...')
    }
}
console.log(foo.prototype)
/**
 * function foo() {
    
}
foo.prototype.print = function () {
    console.log('hi....')
}
 */
const fObj = new foo();
fObj.print()
console.log(fObj.hasOwnProperty('print'))
console.log(foo.prototype.hasOwnProperty('print'))
