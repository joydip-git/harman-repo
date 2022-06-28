import { ProductDao } from "../dao/productDao";

export class ProductBo {

    constructor() {
        this.productdao = new ProductDao()
    }

    insertProduct(productObj) {
        return this.productdao.addProduct(productObj)
    }

    fetchProducts() {
        return this.productdao.getProducts()
    }
}