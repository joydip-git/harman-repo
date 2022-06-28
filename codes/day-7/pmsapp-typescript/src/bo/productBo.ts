import { Product } from "../models/product";
import { ProductDao } from "../dao/productDao";

export class ProductBo {
    private productdao: ProductDao;
    constructor() {
        this.productdao = new ProductDao()
    }

    insertProduct(productObj: Product): boolean {
        return this.productdao.addProduct(productObj)
    }

    fetchProducts(): Product[] {
        return this.productdao.getProducts()
    }
}