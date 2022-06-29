import { Person } from "./person";
export class Student extends Person {
    constructor(name, marks) {
        super(name)
        this.marks = marks;
    }
    isOutstanding() {
        return this.marks > 85;
    }
    print() {
        return `${super.print()}, ${this.marks}`
    }
}