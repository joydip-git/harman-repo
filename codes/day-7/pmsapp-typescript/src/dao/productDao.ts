import { Product } from "../models/product";
import { products } from "../repository/products";

export class ProductDao {

    addProduct(productObj: Product): boolean {
        if (this.productDoesExist(productObj) === undefined) {
            products.push(productObj)
            return true
        } else
            return false
    }

    getProducts(): Product[] {
        //spread operator
        return [...products]
    }

    productDoesExist(p: Product): Product | undefined {
        return products.find(function (p1) {
            return p1.productId === p.productId
        })
    }
}