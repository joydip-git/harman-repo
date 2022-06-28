import { Product } from "../../models/product";
import { ProductBo } from "../../bo/productBo";

const showButtonObj = document.getElementById('btnShow')
showButtonObj.onclick = showProducts

var tbl = document.getElementById('tblProducts')
tbl.hidden = true;

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