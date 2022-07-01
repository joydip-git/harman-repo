var foo = function () {
    this.data = 10;
    var innerFn = function () {
        console.log(this.data);
    };
};
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
var person = /** @class */ (function () {
    function person(name, id, salary) {
        var _this = this;
        // this.print = function () {
        //     return `${this.name} has salary of ${this.salary}`
        // }
        this.print = function () {
            return "".concat(_this.name, " has salary of ").concat(_this.salary);
        };
        this.name = name;
        this.id = id;
        this.salary = salary;
    }
    return person;
}());
// const anilPerson = new person('anil', 1, 1000)
// const info = anilPerson.print()
// console.log(info)
var people = [
    new person('anil', 1, 1000),
    new person('sunil', 2, 2000),
    new person('sachin', 3, 3000)
];
for (var i = 0; i < people.length; i++) {
    var p = people[i];
    //const boundPrintFn = p.print.bind(p)
    //printSalary(boundPrintFn)
    printSalary(p.print);
}
function printSalary(printFn) {
    var info = printFn();
    console.log(info);
}
//<obj-ref>.fn() => fn is bound to <obj-ref>
//new fn() => fn will be bound to new JS object
//fn() => fn will be bound to some default object (global in node js/window in browser)
var add = function (a, b) { return console.log(a + b); };
add(10, 20);
