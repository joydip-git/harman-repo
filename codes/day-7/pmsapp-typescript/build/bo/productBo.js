define(["require", "exports", "../dao/productDao"], function (require, exports, productDao_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ProductBo = void 0;
    var ProductBo = /** @class */ (function () {
        function ProductBo() {
            this.productdao = new productDao_1.ProductDao();
        }
        ProductBo.prototype.insertProduct = function (productObj) {
            return this.productdao.addProduct(productObj);
        };
        ProductBo.prototype.fetchProducts = function () {
            return this.productdao.getProducts();
        };
        return ProductBo;
    }());
    exports.ProductBo = ProductBo;
});
