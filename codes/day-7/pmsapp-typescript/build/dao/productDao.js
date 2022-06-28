var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
define(["require", "exports", "../repository/products"], function (require, exports, products_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ProductDao = void 0;
    var ProductDao = /** @class */ (function () {
        function ProductDao() {
        }
        ProductDao.prototype.addProduct = function (productObj) {
            if (this.productDoesExist(productObj) === undefined) {
                products_1.products.push(productObj);
                return true;
            }
            else
                return false;
        };
        ProductDao.prototype.getProducts = function () {
            //spread operator
            return __spreadArray([], products_1.products, true);
        };
        ProductDao.prototype.productDoesExist = function (p) {
            return products_1.products.find(function (p1) {
                return p1.productId === p.productId;
            });
        };
        return ProductDao;
    }());
    exports.ProductDao = ProductDao;
});
