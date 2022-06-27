export class Product {
    constructor(id, name, price, description, imagePath) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.description = description;
        this.imagePath = imagePath;
    }
    print() {
        return `Name: ${this.name}, Id: ${this.id}, Price:${this.price}, Description: ${this.description}`
    }
}