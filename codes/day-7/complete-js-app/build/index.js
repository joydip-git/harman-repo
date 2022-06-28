define(["./models/product", "./bo/productBo"], function (_product, _productBo) {
  "use strict";

  //dynamically linking a button object's event with a function
  var addButtonObj = document.getElementById('btnAdd');
  addButtonObj.addEventListener('click', saveProduct);
  var showButtonObj = document.getElementById('btnShow');
  showButtonObj.onclick = showProducts;
  var tbl = document.getElementById('tblProducts');
  tbl.hidden = true;

  function saveProduct() {
    var txtIdObj = document.getElementById('txtId');
    var id = parseInt(txtIdObj.value);
    var txtNameObj = document.getElementById('txtName');
    var name = txtNameObj.value;
    var txtPriceObj = document.getElementById('txtPrice');
    var price = parseFloat(txtPriceObj.value);
    var productObj = new _product.Product(id, name, price);
    var productBo = new _productBo.ProductBo();

    if (productBo.insertProduct(productObj)) {
      window.alert('product added');
    } else window.alert('could not add product');
  }

  function showProducts() {
    var productBo = new _productBo.ProductBo();
    var productData = productBo.fetchProducts();
    var tblBody = document.getElementById('tblProductsBody');

    if (productData.length > 0) {
      tbl.hidden = false;
      productData.forEach(function (p) {
        var row = createRow(p);
        tblBody.appendChild(row);
      });
    } else {
      tbl.hidden = true;
      window.alert('no products found');
    }
  }

  function createRow(productObj) {
    var row = document.createElement('tr');
    var tdName = document.createElement('td');
    tdName.innerText = productObj.productName;
    var tdPrice = document.createElement('td');
    tdPrice.innerText = productObj.price;
    var tdId = document.createElement('td');
    tdId.innerText = productObj.productId;
    row.appendChild(tdId);
    row.appendChild(tdName);
    row.appendChild(tdPrice);
    return row;
  } // saveProduct()
  // showProducts()

});