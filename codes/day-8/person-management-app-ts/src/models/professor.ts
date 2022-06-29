import { Person } from "./person";
export class Professor extends Person {

    constructor(name: string, public booksPublished: number) {
        super(name)
    }
    isOutstanding(): boolean {
        return this.booksPublished > 5
    }
    print(): string {
        return `${super.print()}, ${this.booksPublished}`
    }
}