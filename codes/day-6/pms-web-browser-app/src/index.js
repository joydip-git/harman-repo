import { ProductBusinessObject } from "./businesslayer/productBo";
import { Product } from "./entities/product";

function addData() {

    const txtIdObj = document.getElementById('txtId')
    const id = parseInt(txtIdObj.value)

    const txtNameObj = document.getElementById('txtName')
    const name = txtNameObj.value

    const txtPriceObj = document.getElementById('txtPrice')
    const price = parseFloat(txtPriceObj.value)

    const txtDescObj = document.getElementById('txtDesc')
    const desc = txtDescObj.value

    const txtImgPathObj = document.getElementById('txtImgPath')
    const imgPath = txtImgPathObj.value

    //1. add new products into the storage
    const productObj = new Product(id, name, price, desc, imgPath)

    const productBoObject = new ProductBusinessObject()
    productBoObject.addProduct(productObj)
}


//2. read all records and later sort them and display them
function showData() {
    const productBoObject = new ProductBusinessObject()
    const allRecords = productBoObject.fetchAllProducts()
    // const sortedRecords = productBoObject.sortAllProducts(1, allRecords)
    var tbl = document.getElementById('tblProducts')
    var tblBody = document.getElementById('tblProductsBody')
    if (allRecords.length === 0) {
        tbl.hidden = true
    } else {
        tbl.hidden = false
        allRecords.forEach(function (p) {
            const row = createRow(p)
            tblBody.appendChild(row)
        })
    }
}

function createRow(productObj) {
    const row = document.createElement('tr')

    const tdName = document.createElement('td')
    tdName.innerText = productObj.name

    const tdPrice = document.createElement('td')
    tdPrice.innerText = productObj.price

    const tdDesc = document.createElement('td')
    tdDesc.innerText = productObj.description

    row.appendChild(tdName)
    row.appendChild(tdPrice)
    row.appendChild(tdDesc)

    return row
}