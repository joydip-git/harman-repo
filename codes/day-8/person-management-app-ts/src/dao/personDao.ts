import { people } from "../db/persondb";
import { Person } from "../models/person";

export class PersonDao {
    insertPerson(personObj: Person) {
        people.push(personObj)
    }
    getAll(): Person[] {
        return [...people]
    }
}