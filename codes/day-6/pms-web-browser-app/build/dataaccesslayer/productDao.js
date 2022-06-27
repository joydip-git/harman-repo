define(["exports", "../db/productRepository"], function (_exports, _productRepository) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.ProductDataAccessObject = void 0;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  var ProductDataAccessObject = /*#__PURE__*/function () {
    function ProductDataAccessObject() {
      _classCallCheck(this, ProductDataAccessObject);
    }

    _createClass(ProductDataAccessObject, [{
      key: "insertProduct",
      value: function insertProduct(productObj) {
        var status = false;

        var found = _productRepository.products.find(function (p) {
          return p.id === productObj.id;
        });

        if (found === undefined) {
          _productRepository.products.push(productObj);

          status = true;
        }

        return status;
      }
    }, {
      key: "getAllProducts",
      value: function getAllProducts() {
        var data = [];

        for (var i = 0; i < _productRepository.products.length; i++) {
          data.push(_productRepository.products[i]);
        }

        return data;
      }
    }, {
      key: "updateProduct",
      value: function updateProduct(updatedProductObj) {}
    }, {
      key: "deleteProduct",
      value: function deleteProduct(productId) {}
    }]);

    return ProductDataAccessObject;
  }();

  _exports.ProductDataAccessObject = ProductDataAccessObject;
});