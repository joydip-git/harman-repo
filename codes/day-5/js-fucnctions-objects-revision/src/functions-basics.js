var addRes = add(10, 20)
console.log(addRes)

//1. function declaration style
//function func-name(parameters){}
function add(a, b) {
    return (a + b)
}

var subRes = subtract(12, 3)
console.log(subRes)

//2. function expression style
//var var-name=anonymous-function
var subtract = function (a, b) {
    return (a - b)
}

var addRes = add(10, 20)
console.log(addRes)

var subRes = subtract(12, 3)
console.log(subRes)
