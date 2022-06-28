import { ProductBo } from "../../bo/productBo"
import { Product } from "../../models/product"

const addButtonObj = document.getElementById('btnAdd')
addButtonObj.addEventListener('click', saveProduct)

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