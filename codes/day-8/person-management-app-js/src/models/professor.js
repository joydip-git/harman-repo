import { Person } from "./person";
export class Professor extends Person {
    constructor(name, booksPublished) {
        super(name)
        this.booksPublished = booksPublished
    }
    isOutstanding() {
        return this.booksPublished > 5
    }
    print() {
        return `${super.print()}, ${this.booksPublished}`
    }
}