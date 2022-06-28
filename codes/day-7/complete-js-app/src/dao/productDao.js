import { products } from "../repository/products";

export class ProductDao {

    addProduct(productObj) {
        if (this.productDoesExist(productObj) === undefined) {
            products.push(productObj)
            return true
        } else
            return false
    }

    getProducts() {
        //spread operator
        return [...products]
    }

    productDoesExist(p) {
        return products.find(function (p1) {
            return p1.productId === p.productId
        })
    }
}