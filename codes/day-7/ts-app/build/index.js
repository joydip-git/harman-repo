define(["require", "exports", "./circle"], function (require, exports, circle_1) {
    "use strict";
    exports.__esModule = true;
    var circleObj = new circle_1.Circle(12);
    var area = circleObj.calculateArea();
    console.log(area);
});
