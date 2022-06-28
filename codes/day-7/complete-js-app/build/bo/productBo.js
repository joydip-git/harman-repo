define(["exports", "../dao/productDao"], function (_exports, _productDao) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.ProductBo = void 0;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  var ProductBo = /*#__PURE__*/function () {
    function ProductBo() {
      _classCallCheck(this, ProductBo);

      this.productdao = new _productDao.ProductDao();
    }

    _createClass(ProductBo, [{
      key: "insertProduct",
      value: function insertProduct(productObj) {
        return this.productdao.addProduct(productObj);
      }
    }, {
      key: "fetchProducts",
      value: function fetchProducts() {
        return this.productdao.getProducts();
      }
    }]);

    return ProductBo;
  }();

  _exports.ProductBo = ProductBo;
});