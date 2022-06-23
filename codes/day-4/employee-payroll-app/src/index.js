//1. employee constructor function
function employee(name, id, basic, da, hra) {
    this.empName = name;
    this.empId = id;
    this.empBasic = basic;
    this.empDa = da;
    this.empHra = hra;
    this.calculateSalary = function () {
        return this.empBasic + this.empDa + this.empHra;
    }
}

//2. an array to store employee objects
//var employees = [];
var employees = new Array();

//3. sample employee objects
var anilEmployee = new employee('anil', 1, 1000, 2000, 3000);
var sunilEmployee = new employee('sunil', 2, 2000, 3000, 4000);

//4. storing the objects in the array
employees.push(anilEmployee);
employees.push(sunilEmployee);

//5. printing the name and salary of the employees stored in the array
for (var i = 0; i < employees.length; i++) {
    var emp = employees[i];
    var empSalary = emp.calculateSalary();
    console.log('salary of ' + emp.empName + ' is ' + empSalary);
}

for (var x = 5; x > 0; x--) {
    console.log(x)
}