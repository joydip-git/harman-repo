//constructor function
function add(first, second) {
    var res = (first + second);
    this.result = res;
    return res;
}

console.log(add.prototype)
var addResult = new add(10, 20);
console.log(addResult)


//1. object literal syntax
var joydipPerson = {
    //value properties
    name: 'Joydip',
    id: 1,
    salary: 1000,
    //functional properties
    print: function () {
        return this.name + ' ' + this.salary;
    }
}
var ChakravarthyPerson = {
    //value properties
    name: 'CC',
    id: 2,
    salary: 2000,
    //functional properties
    print: function () {
        return this.name + ' ' + this.salary;
    }
}

console.log(joydipPerson.id)
console.log(joydipPerson.print())

//2. constructor function
// function person(name, id, salary) {
//     var x = 10;
//     this.personId = id;
//     this.personName = name;
//     this.personSalary = salary;
// }
// person.prototype.print = function () {
//     var info = this.personName + ' ' + this.personSalary;
//     return info;
// }
//3. use class: this feature has been introduced in 2015 in JS
class person {
    // #personName
    // #personId
    // #personSalary
    constructor(name, id, salary) {
        this.personId = id;
        this.personName = name;
        this.personSalary = salary;
    }
    print() {
        var info = this.personName + ' ' + this.personSalary;
        return info;
    }
}

console.log(person.prototype)

var anilPerson = new person('anil', 3, 3000);
var sunilPerson = new person('sunil', 4, 4000);

anilPerson.location = "Bangalore";
anilPerson.show = function () { console.log('hello') }

console.log(anilPerson.print())
console.log(sunilPerson.print())

console.log(anilPerson.location)
anilPerson.show()

