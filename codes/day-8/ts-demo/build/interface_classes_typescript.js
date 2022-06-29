var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function add(a, b) {
    return (a + b);
}
var Circle = /** @class */ (function () {
    function Circle() {
    }
    Circle.prototype.calculateArea = function () {
        return 0;
    };
    return Circle;
}());
//Note: in interface members ae by default public. While implementing in the class, do not change the accessibility of the members
var Product = /** @class */ (function () {
    function Product(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
    Product.prototype.print = function () {
        return "".concat(this.name);
    };
    return Product;
}());
var dellXps = {
    id: 1,
    name: 'dellxps',
    price: 1000,
    print: function () {
        return "".concat(this.name, ", ").concat(this.price);
    }
};
//this is not possible since interface here is being used as a data type and interface can't be used to create instance. Use class for that purpose
//const emp = new Employee()
var empAnil = {
    id: 1,
    name: 'anil',
    salary: 1000
};
var empSunil = {
    id: 2,
    name: 'sunil',
    salary: 2000
};
var employees = [empAnil, empSunil];
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
var Person = /** @class */ (function () {
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
    function Person(_id, _name, _location) {
        this._id = _id;
        this._name = _name;
        this._location = _location;
    }
    Person.prototype.print = function () {
        return "".concat(this._name, ", ").concat(this._location);
    };
    return Person;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    /*
    protected _marks: number;

    constructor(_id: number, _name: string, _location: string, _marks: number) {
        super(_id, _name, _location)
        this._marks = _marks;
    }
    */
    function Student(_id, _name, _location, _marks) {
        var _this = _super.call(this, _id, _name, _location) || this;
        _this._marks = _marks;
        return _this;
    }
    Student.prototype.print = function () {
        return "".concat(_super.prototype.print.call(this), ", ").concat(this._marks);
    };
    return Student;
}(Person));
var joyStudent = new Student(1, 'joy', 'bng', 78);
