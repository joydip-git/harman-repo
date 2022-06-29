import { PersonBo } from "./bo/personBo"
import { Person } from "./models/person"
import { Professor } from "./models/professor"
import { Student } from "./models/student"

//adding records in storage
document.getElementById('btnAdd').addEventListener('click', savePerson)

function savePerson() {
    const name = (<HTMLInputElement>document.getElementById('txtName')).value
    const extra = (<HTMLInputElement>document.getElementById('txtExtra')).value

    let person = null
    if ((<HTMLInputElement>document.getElementById('radioStudent')).checked) {
        //person = new Student(name, Number(extra))
        person = new Student(name, parseFloat(extra))
    } else if ((<HTMLInputElement>document.getElementById('radioProfessor')).checked) {
        person = new Professor(name, parseInt(extra))
    }
    const personBoObj = new PersonBo()
    personBoObj.add(person)
}

//showing all records
document.getElementById('btnShow').addEventListener('click', showPeople)

function showPeople() {
    const personBoObj = new PersonBo()
    const all = personBoObj.fetchAll()
    createList(all)
    console.log(all)
}

//showing outstanding records
document.getElementById('checkOutstanding').addEventListener('change', filterRecords)

function filterRecords() {

    const personBoObj = new PersonBo()
    const filtered = personBoObj.fetchOutstandingPeople()
    createList(filtered)
    console.log(filtered)
}

function createList(records: Person[]) {
    const listOfPeople = document.getElementById('listOfPeople')
    listOfPeople.innerHTML = ''

    records.forEach(function (p) {
        const li = createListItem(p)
        listOfPeople.appendChild(li)
    })
}
function createListItem(p: Person): HTMLLIElement {
    const liElement = document.createElement('li')
    liElement.classList.add("list-group-item")

    const nameSpanElement = document.createElement('span')
    nameSpanElement.innerText = p.name

    const valueSpanElement = document.createElement('span')
    valueSpanElement.classList.add("badge")
    if (p instanceof Student) {
        valueSpanElement.innerText = p.marks.toString()
    }
    if (p instanceof Professor) {
        valueSpanElement.innerText = p.booksPublished.toString()
    }

    liElement.appendChild(valueSpanElement)
    liElement.appendChild(nameSpanElement)
    return liElement
}

const obj = {
    name: 'anil',
    id: 1,
    salary: 1000
}
/*
const copyObj = {
    name: 'sunil'
}
console.log(copyObj)
// console.log(obj.name)
// console.log(obj['salary'])
for (const propertyName in obj) {
    const propertyValue = obj[propertyName]
    //console.log(`${propertyName}:${propertyValue}`)
    copyObj[propertyName] = propertyValue
}

console.log(copyObj)
*/
//spread operator (...)
const copyObj = { ...obj }
console.log(copyObj)

const numbers1 = [1, 2, 3]
const numbers2 = [10, 20, 30]
const copyNumbers = [...numbers1, ...numbers2]
console.log(copyNumbers)

const utitlity1 = {
    add: function (a: number, b: number) {
        return (a + b)
    }
}
const utitlity2 = {
    subtract: function (a: number, b: number) {
        return (a - b)
    }
}

const masterUtility = {
    ...utitlity1,
    ...utitlity2
}
console.log(masterUtility)
console.log(masterUtility.add(10, 20))
console.log(masterUtility.subtract(10, 4))

/*
//1. optional parameters with default value
function sum(a: number, b: number, c: number = 0, d: number = 0) {
    console.log(a + b + c + d)
}

sum(10, 20)
sum(10, 20, 30)
sum(10, 20, 30, 40)
sum(10, 20, 30, 40, 50)
*/

/*
//2. an array as argument
function sum(values: number[]) {
    let summation = 0
    for (let i = 0; i < values.length; i++) {
        summation += values[i]
    }
    console.log(summation)
}
sum([10, 20])
sum([10, 20, 30])
sum([10, 20, 30, 40])
sum([10, 20, 30, 40, 50])
*/

//3. variable arguments/parameters (using rest operator)
function sum(a: number, ...values: number[]) {
    let summation = 0
    for (let i = 0; i < values.length; i++) {
        summation += values[i]
    }
    console.log(`Attemp#${a}, Result:${summation}`)
}
sum(1, 10, 20)
sum(2, 10, 20, 30)
sum(3, 10, 20, 30, 40)
sum(4, 10, 20, 30, 40, 50)

