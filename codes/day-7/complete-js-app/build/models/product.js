define(["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.Product = void 0;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  var Product = /*#__PURE__*/function () {
    function Product(id, name, price) {
      _classCallCheck(this, Product);

      this.productId = id;
      this.productName = name;
      this.price = price;
    }

    _createClass(Product, [{
      key: "print",
      value: function print() {
        return "Name:".concat(this.productName, ", Id: ").concat(this.productId, ", Price:").concat(this.price);
      }
    }]);

    return Product;
  }();

  _exports.Product = Product;
});