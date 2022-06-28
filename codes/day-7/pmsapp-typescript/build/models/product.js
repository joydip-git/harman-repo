define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Product = void 0;
    var Product = /** @class */ (function () {
        function Product(id, name, price) {
            this.productId = id;
            this.productName = name;
            this.price = price;
        }
        Object.defineProperty(Product.prototype, "price", {
            get: function () {
                return this._price;
            },
            set: function (value) {
                this._price = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Product.prototype, "productName", {
            get: function () {
                return this._productName;
            },
            set: function (value) {
                this._productName = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Product.prototype, "productId", {
            get: function () {
                return this._productId;
            },
            set: function (value) {
                this._productId = value;
            },
            enumerable: false,
            configurable: true
        });
        Product.prototype.print = function () {
            return "Name:".concat(this._productName, ", Id:").concat(this._productId, ", Price:").concat(this._price);
        };
        return Product;
    }());
    exports.Product = Product;
});
