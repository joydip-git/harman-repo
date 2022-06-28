import { add } from "./utility";
import { Product } from "./models/product";
import { ProductBo } from "./bo/productBo";

console.log(add(12, 13))

//dynamically linking a button object's event with a function
const addButtonObj = document.getElementById('btnAdd')
addButtonObj.addEventListener('click', saveProduct)

const showButtonObj = document.getElementById('btnShow')
showButtonObj.onclick = showProducts

var tbl = document.getElementById('tblProducts')
tbl.hidden = true;

function saveProduct() {
    const txtIdObj: HTMLInputElement = <HTMLInputElement>document.getElementById('txtId')
    const id = parseInt(txtIdObj.value)

    const txtNameObj: HTMLInputElement = <HTMLInputElement>document.getElementById('txtName')
    const name = txtNameObj.value

    const txtPriceObj: HTMLInputElement = <HTMLInputElement>document.getElementById('txtPrice')
    const price = parseFloat(txtPriceObj.value)

    const productObj: Product = new Product(id, name, price)
    const productBo: ProductBo = new ProductBo();
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

function createRow(productObj: Product): HTMLTableRowElement {
    const row = document.createElement('tr')

    const tdName = document.createElement('td')
    tdName.innerText = productObj.productName

    const tdPrice = document.createElement('td')
    tdPrice.innerText = productObj.price.toString()

    const tdId = document.createElement('td')
    tdId.innerText = productObj.productId.toString()

    row.appendChild(tdId)
    row.appendChild(tdName)
    row.appendChild(tdPrice)

    return row
}

// saveProduct()
// showProducts()