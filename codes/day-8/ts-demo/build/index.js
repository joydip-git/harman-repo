function addNumbers(a, b) {
    return (a + b);
}
function subtractNumbers(a, b) {
    return (a - b);
}
function multiplyNumbers(a, b, c) {
    return (a * b * c);
}
function invoke(operation, a, b) {
    var result = operation(a, b);
    console.log(result);
}
invoke(addNumbers, 10, 20);
invoke(subtractNumbers, 10, 5);
function foo() {
    return 0;
}
var products = [];
var productRecords = [];
var Square = /** @class */ (function () {
    function Square() {
    }
    Square.prototype.calculateArea = function () {
        throw new Error("Method not implemented.");
    };
    return Square;
}());
var Triangle = /** @class */ (function () {
    function Triangle() {
    }
    Triangle.prototype.calculateArea = function () {
        throw new Error("Method not implemented.");
    };
    return Triangle;
}());
//user defined reference type (if you declare a variable of an class, you can store ONLY ADDRESS of an object which is of that class type or child type of that class)
var PersonInfo = /** @class */ (function () {
    function PersonInfo(name, id, salary) {
        this.name = name;
        this.id = id;
        this.salary = salary;
    }
    return PersonInfo;
}());
var a = 10;
var pavanObj = new PersonInfo('pavan', 1, 1000);
var m = 10;
var p1 = new PersonInfo('anil', 1, 1);
var st = { a: 10, b: 20 };
