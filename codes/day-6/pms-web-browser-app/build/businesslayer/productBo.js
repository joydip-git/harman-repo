define(["exports", "../dataaccesslayer/productDao"], function (_exports, _productDao) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.ProductBusinessObject = void 0;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  var ProductBusinessObject = /*#__PURE__*/function () {
    function ProductBusinessObject() {
      _classCallCheck(this, ProductBusinessObject);

      this.productDaoObject = new _productDao.ProductDataAccessObject();
    }

    _createClass(ProductBusinessObject, [{
      key: "addProduct",
      value: function addProduct(productObj) {
        return this.productDaoObject.insertProduct(productObj);
      }
    }, {
      key: "fetchAllProducts",
      value: function fetchAllProducts() {
        var allProducts = this.productDaoObject.getAllProducts();
        return allProducts;
      }
    }, {
      key: "sortAllProducts",
      value: function sortAllProducts(choice, products) {
        var compareProducts = function compareProducts(p1, p2) {
          var result;

          switch (choice) {
            case 1:
              result = p1.id - p2.id;
              break;

            case 2:
              result = p1.name.localeCompare(p2.name);
              break;

            case 3:
              result = p1.price - p2.price;
              break;

            default:
              result = p1.id - p2.id;
              break;
          }

          return result;
        };

        return products.sort(compareProducts);
      }
    }, {
      key: "modifyProduct",
      value: function modifyProduct(modifiedProductObj) {
        this.productDaoObject.updateProduct(modifiedProductObj);
      }
    }, {
      key: "removeProduct",
      value: function removeProduct(productId) {
        this.productDaoObject.deleteProduct(productId);
      }
    }]);

    return ProductBusinessObject;
  }();

  _exports.ProductBusinessObject = ProductBusinessObject;
});