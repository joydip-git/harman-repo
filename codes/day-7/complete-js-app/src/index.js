import { Product } from "./models/product";
import { ProductBo } from "./bo/productBo";

//dynamically linking a button object's event with a function
const addButtonObj = document.getElementById('btnAdd')
addButtonObj.addEventListener('click', saveProduct)

const showButtonObj = document.getElementById('btnShow')
showButtonObj.onclick = showProducts

var tbl = document.getElementById('tblProducts')
tbl.hidden = true;

function saveProduct() {
    const txtIdObj = document.getElementById('txtId')
    const id = parseInt(txtIdObj.value)

    const txtNameObj = document.getElementById('txtName')
    const name = txtNameObj.value

    const txtPriceObj = document.getElementById('txtPrice')
    const price = parseFloat(txtPriceObj.value)

    const productObj = new Product(id, name, price)
    const productBo = new ProductBo();
    if (productBo.insertProduct(productObj)) {
        window.alert('product added')
    }
    else
        window.alert('could not add product')
}

function showProducts() {
    const productBo = new ProductBo()
    const productData = productBo.fetchProducts()

    var tblBody = document.getElementById('tblProductsBody')

    if (productData.length > 0) {
        tbl.hidden = false
        productData.forEach(function (p) {
            const row = createRow(p)
            tblBody.appendChild(row)
        })
    }
    else {
        tbl.hidden = true
        window.alert('no products found')
    }
}

function createRow(productObj) {
    const row = document.createElement('tr')

    const tdName = document.createElement('td')
    tdName.innerText = productObj.productName

    const tdPrice = document.createElement('td')
    tdPrice.innerText = productObj.price

    const tdId = document.createElement('td')
    tdId.innerText = productObj.productId

    row.appendChild(tdId)
    row.appendChild(tdName)
    row.appendChild(tdPrice)

    return row
}

// saveProduct()
// showProducts()