var m = 100
/*
function outer() {
    var a = 10
    console.log(a)
    function inner() {
        var b = 20
        console.log(m + a + b)
    }
    inner()
}
outer()
*/

function outer() {
    var a = 10
    console.log(a)
    function inner() {
        var b = 20
        console.log(m + a + b)
    }
    return inner
}
var innerFnRef = outer()
innerFnRef()

console.log('hello')

//1. preparation stage
//2. execution stage