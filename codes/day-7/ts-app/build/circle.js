define(["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
    exports.Circle = void 0;
    var Circle = /** @class */ (function () {
        function Circle(radius) {
            this._radius = radius;
        }
        Circle.prototype.calculateArea = function () {
            return this._radius * this._radius * Math.PI;
        };
        return Circle;
    }());
    exports.Circle = Circle;
});
