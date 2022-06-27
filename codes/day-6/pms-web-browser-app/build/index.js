define(["./businesslayer/productBo", "./entities/product"], function (_productBo, _product) {
  "use strict";

  function addData() {
    var txtIdObj = document.getElementById('txtId');
    var id = parseInt(txtIdObj.value);
    var txtNameObj = document.getElementById('txtName');
    var name = txtNameObj.value;
    var txtPriceObj = document.getElementById('txtPrice');
    var price = parseFloat(txtPriceObj.value);
    var txtDescObj = document.getElementById('txtDesc');
    var desc = txtDescObj.value;
    var txtImgPathObj = document.getElementById('txtImgPath');
    var imgPath = txtImgPathObj.value; //1. add new products into the storage

    var productObj = new _product.Product(id, name, price, desc, imgPath);
    var productBoObject = new _productBo.ProductBusinessObject();
    productBoObject.addProduct(productObj);
  } //2. read all records and later sort them and display them


  function showData() {
    var productBoObject = new _productBo.ProductBusinessObject();
    var allRecords = productBoObject.fetchAllProducts(); // const sortedRecords = productBoObject.sortAllProducts(1, allRecords)

    var tbl = document.getElementById('tblProducts');
    var tblBody = document.getElementById('tblProductsBody');

    if (allRecords.length === 0) {
      tbl.hidden = true;
    } else {
      tbl.hidden = false;
      allRecords.forEach(function (p) {
        var row = createRow(p);
        tblBody.appendChild(row);
      });
    }
  }

  function createRow(productObj) {
    var row = document.createElement('tr');
    var tdName = document.createElement('td');
    tdName.innerText = productObj.name;
    var tdPrice = document.createElement('td');
    tdPrice.innerText = productObj.price;
    var tdDesc = document.createElement('td');
    tdDesc.innerText = productObj.description;
    row.appendChild(tdName);
    row.appendChild(tdPrice);
    row.appendChild(tdDesc);
    return row;
  }
});