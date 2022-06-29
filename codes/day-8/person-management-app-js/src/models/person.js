export class Person {
    constructor(name) {
        this.name = name
    }
    isOutstanding() {
        return false
    }
    print() {
        return `${this.name}`
    }
}