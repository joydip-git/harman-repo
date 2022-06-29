export abstract class Person {
    constructor(public name: string) {
    }
    abstract isOutstanding(): boolean;
    print(): string {
        return `${this.name}`
    }
}