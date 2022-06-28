import { Shape } from "./shape";
export class Circle implements Shape {
    private _radius: number;
    constructor(radius: number) {
        this._radius = radius
    }
    calculateArea(): number {
        return this._radius * this._radius * Math.PI
    }
}