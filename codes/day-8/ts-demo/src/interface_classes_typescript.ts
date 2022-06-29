function add(a: number, b: number): number {
    return (a + b)
}
interface Shape {
    calculateArea(): number;
}
class Circle implements Shape {
    calculateArea(): number {
        return 0
    }
}
//in interface you can also declare data members along with abstract methods
interface IProduct {
    id: number;
    name: string;
    price: number;
    print(): string;
}
//Note: in interface members ae by default public. While implementing in the class, do not change the accessibility of the members
class Product implements IProduct {
    public id: number;
    public name: string;
    public price: number;
    constructor(id: number, name: string, price: number) {
        this.id = id
        this.name = name;
        this.price = price;
    }
    print(): string {
        return `${this.name}`
    }
}

const dellXps: IProduct = {
    id: 1,
    name: 'dellxps',
    price: 1000,
    print: function (): string {
        return `${this.name}, ${this.price}`
    }
}
//in this example, the interface is being used to create a type "Employee"
interface Employee {
    name: string;
    id: number;
    salary: number;
}
//this is not possible since interface here is being used as a data type and interface can't be used to create instance. Use class for that purpose
//const emp = new Employee()
const empAnil: Employee = {
    id: 1,
    name: 'anil',
    salary: 1000
}
const empSunil: Employee = {
    id: 2,
    name: 'sunil',
    salary: 2000
}
const employees: Employee[] = [empAnil, empSunil]

/*
class Person {
    private id: number;
    private name: string;
    private location: string;
    constructor(id: number, name: string, location: string) {
        this.id = id;
        this.name = name;
        this.location = location;
    }
}
*/
/*
class Person {
    public get location(): string {
        return this._location;
    }
    public set location(value: string) {
        this._location = value;
    }
    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }
    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }
    constructor(private _id: number, private _name: string, private _location: string) {

    }
}
*/
class Person {
    /*
    protected _id: number;
    protected _name: string;
    protected _location: string;

    constructor(_id: number, _name: string, _location: string) {
        this._id = _id;
        this._name = _name;
        this._location = _location;
    }
   */
    constructor(protected _id: number, protected _name: string, protected _location: string) {

    }
    print() {
        return `${this._name}, ${this._location}`
    }
}
class Student extends Person {
    /*
    protected _marks: number;

    constructor(_id: number, _name: string, _location: string, _marks: number) {
        super(_id, _name, _location)
        this._marks = _marks;
    }
    */
    constructor(_id: number, _name: string, _location: string, public _marks: number) {
        super(_id, _name, _location)
    }
    print(): string {
        return `${super.print()}, ${this._marks}`
    }
}
const joyStudent: Student = new Student(1, 'joy', 'bng', 78)