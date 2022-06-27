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
    function Product(id, name, price, description, imagePath) {
      _classCallCheck(this, Product);

      this.id = id;
      this.name = name;
      this.price = price;
      this.description = description;
      this.imagePath = imagePath;
    }

    _createClass(Product, [{
      key: "print",
      value: function print() {
        return "Name: ".concat(this.name, ", Id: ").concat(this.id, ", Price:").concat(this.price, ", Description: ").concat(this.description);
      }
    }]);

    return Product;
  }();

  _exports.Product = Product;
});