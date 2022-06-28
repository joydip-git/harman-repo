import { Circle } from "./circle";
import { Shape } from "./shape";

const circleObj: Shape = new Circle(12);
const area = circleObj.calculateArea()
console.log(area)