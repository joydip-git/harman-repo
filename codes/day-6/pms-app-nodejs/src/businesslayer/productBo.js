const productDaoModule = require('../dataaccesslayer/productDao')
class ProductBusinessObject {
    constructor() {
        this.productDaoObject = new productDaoModule.ProductDataAccessObject()
    }

    addProduct(productObj) {
        return this.productDaoObject.insertProduct(productObj)
    }

    fetchAllProducts() {
        const allProducts = this.productDaoObject.getAllProducts()
        return allProducts
    }
    sortAllProducts(choice, products) {
        const compareProducts = function (p1, p2) {
            let result
            switch (choice) {
                case 1:
                    result = p1.id - p2.id
                    break;
                case 2:
                    result = p1.name.localeCompare(p2.name)
                    break;
                case 3:
                    result = p1.price - p2.price
                    break;
                default:
                    result = p1.id - p2.id
                    break;
            }
            return result
        }
        return products.sort(compareProducts)
    }

    modifyProduct(modifiedProductObj) {
        this.productDaoObject.updateProduct(modifiedProductObj)
    }

    removeProduct(productId) {
        this.productDaoObject.deleteProduct(productId)
    }
}
module.exports = { ProductBusinessObject }