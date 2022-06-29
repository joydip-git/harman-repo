import { PersonDao } from "../dao/personDao";
import { Person } from "../models/person";

export class PersonBo {
    private personDaoObj: PersonDao;
    constructor() {
        this.personDaoObj = new PersonDao()
    }
    add(personObj: Person) {
        this.personDaoObj.insertPerson(personObj)
    }

    fetchAll(): Person[] {
        return this.personDaoObj.getAll()
    }

    fetchOutstandingPeople(): Person[] {
        const all = this.personDaoObj.getAll()
        const filteredPeople = all.filter(function (p) {
            return p.isOutstanding()
        })
        return filteredPeople
    }
}