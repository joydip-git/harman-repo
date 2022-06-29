import { Person } from "./person";
export class Student extends Person {
    constructor(name: string, public marks: number) {
        super(name)
    }
    isOutstanding(): boolean {
        return this.marks > 85;
    }
    print(): string {
        return `${super.print()}, ${this.marks}`
    }
}