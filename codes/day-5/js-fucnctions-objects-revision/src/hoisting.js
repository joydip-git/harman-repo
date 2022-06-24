console.log(x) //undefined
var x
x = 10
console.log(x) //10

//foo();
function foo() {
    var m = 100;
    console.log('foo')
}
foo();


//foo1();
var foo1
foo1 = function () {
    console.log('foo1')
}
foo1();
