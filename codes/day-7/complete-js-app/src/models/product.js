export class Product {
    constructor(id, name, price) {
        this.productId = id
        this.productName = name
        this.price = price
    }
    print() {
        return `Name:${this.productName}, Id: ${this.productId}, Price:${this.price}`
    }
}