import { PersonDao } from "../dao/personDao";

export class PersonBo {
    constructor() {
        this.personDaoObj = new PersonDao()
    }
    add(personObj) {
        this.personDaoObj.insertPerson(personObj)
    }

    fetchAll() {
        return this.personDaoObj.getAll()
    }

    fetchOutstandingPeople() {
        const all = this.personDaoObj.getAll()
        const filteredPeople = all.filter(function (p) {
            return p.isOutstanding()
        })
        return filteredPeople
    }
}