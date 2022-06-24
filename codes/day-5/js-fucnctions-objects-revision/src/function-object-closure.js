function foo() {
    var x = 10;
    this.x = 20;
    console.log(x)
}
//var fooObj = new foo();

var data = 100;
var m = 200;
//outer function
function person(name, id, salary) {
    console.log(data)
    var info;
    this.personName = name;
    this.personId = id;
    this.personSalary = salary;
    //you can't access a data (local variable or object data) or anything of an inner function from outer function
    //console.log(a)
    //inner function
    this.print = function () {
        var a = 10
        //you can access a data (local variable or object data) or anything of an outer function from inner function
        info = this.personName + " " + this.personId + " " + this.personSalary
        return info
    }
    //this.print()
}

var anilPerson = new person('anil', 1, 1000)
var sunilPerson = new person('sunil', 2, 2000)

console.log(anilPerson.print())
console.log(sunilPerson.print())
