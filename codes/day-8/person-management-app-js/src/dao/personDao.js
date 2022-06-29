import { people } from "../db/persondb";

export class PersonDao {
    insertPerson(personObj) {
        people.push(personObj)
    }
    getAll() {
        return [...people]
    }
}