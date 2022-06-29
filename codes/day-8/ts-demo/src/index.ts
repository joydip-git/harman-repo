function addNumbers(a: number, b: number): number {
    return (a + b)
}
function subtractNumbers(a: number, b: number): number {
    return (a - b)
}
function multiplyNumbers(a: number, b: number, c: number): number {
    return (a * b * c)
}
//createing a function type
type operationType = (x: number, y: number) => number;
interface OperationType {
    (x: number, y: number): number;
}

function invoke(operation: OperationType, a: number, b: number): void {
    const result = operation(a, b)
    console.log(result)
}

invoke(addNumbers, 10, 20)
invoke(subtractNumbers, 10, 5)
//invoke(multiplyNumbers, 10, 20)
// number, boolean, string, object, undefined, null, function, [any, object]

// type productType = {
//     id: number;
//     name: string;
//     price: number;
// }
interface Product {
    id: number;
    name: string;
    price: number;
}
type productType = Product

interface IShape {
    calculateArea(): number;
}
type shapeType = {
    calculateArea(): number;
}

type shapeType1 = {
    shape: IShape,
    (a: number): boolean,
    show: Function
}

type returnType = number | {} | undefined | null;

function foo(): returnType {
    return 0
}

const products: productType[] = []
const productRecords: Product[] = []

class Square implements IShape {
    calculateArea(): number {
        throw new Error("Method not implemented.");
    }
}

class Triangle implements shapeType {
    calculateArea(): number {
        throw new Error("Method not implemented.");
    }
}


//name, id, salary
//user defined reference type (if you declare a variable of an interface, you can store ONLY ADDRESS of an object which is of that interface type or child type of that interface)
interface IPersonInfo {
    name: string;
    id: number;
    salary: number;
}
//user defined reference type (if you declare a variable of an class, you can store ONLY ADDRESS of an object which is of that class type or child type of that class)
class PersonInfo implements IPersonInfo {
    constructor(public name: string, public id: number, public salary: number) {

    }
}

const a: number = 10
const pavanObj: IPersonInfo = new PersonInfo('pavan', 1, 1000)

type myType = number
const m: myType = 10

type personType = IPersonInfo
const p1: personType = new PersonInfo('anil', 1, 1)

type someType = { a: number, b: number }

const st: someType = { a: 10, b: 20 }
