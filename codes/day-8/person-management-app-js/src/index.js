import { PersonBo } from "./bo/personBo"
import { Professor } from "./models/professor"
import { Student } from "./models/student"

//adding records in storage
document.getElementById('btnAdd').addEventListener('click', savePerson)

function savePerson() {
    const name = document.getElementById('txtName').value
    const extra = document.getElementById('txtExtra').value

    let person = null
    if (document.getElementById('radioStudent').checked) {
        //person = new Student(name, Number(extra))
        person = new Student(name, parseFloat(extra))
    } else if (document.getElementById('radioProfessor').checked) {
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

function createList(records) {
    const listOfPeople = document.getElementById('listOfPeople')
    listOfPeople.innerHTML = ''

    records.forEach(function (p) {
        const li = createListItem(p)
        listOfPeople.appendChild(li)
    })
}
function createListItem(p) {
    const liElement = document.createElement('li')
    liElement.classList.add("list-group-item")

    const nameSpanElement = document.createElement('span')
    nameSpanElement.innerText = p.name

    const valueSpanElement = document.createElement('span')
    valueSpanElement.classList.add("badge")
    if (p instanceof Student) {
        valueSpanElement.innerText = p.marks
    }
    if (p instanceof Professor) {
        valueSpanElement.innerText = p.booksPublished
    }

    liElement.appendChild(valueSpanElement)
    liElement.appendChild(nameSpanElement)
    return liElement
}

