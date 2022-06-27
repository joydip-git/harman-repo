//const { products } = require('../db/productRepository')
import { products } from '../db/productRepository'

export class ProductDataAccessObject {

    insertProduct(productObj) {
        let status = false;
        const found = products.find(
            function (p) {
                return p.id === productObj.id
            }
        )
        if (found === undefined) {
            products.push(productObj)
            status = true;
        }
        return status
    }

    getAllProducts() {
        const data = []
        for (let i = 0; i < products.length; i++) {
            data.push(products[i])
        }
        return data
    }

    updateProduct(updatedProductObj) {

    }

    deleteProduct(productId) {

    }
}