const repoModule = require('../db/productRepository')
class ProductDataAccessObject {

    insertProduct(productObj) {
        let status = false;
        const found = repoModule.products.find(
            function (p) {
                return p.id === productObj.id
            }
        )
        if (found === undefined) {
            repoModule.products.push(productObj)
            status = true;
        }
        return status
    }

    getAllProducts() {
        const data = []
        for (let i = 0; i < repoModule.products.length; i++) {
            data.push(repoModule.products[i])
        }
        return data
    }

    updateProduct(updatedProductObj) {

    }
    deleteProduct(productId) {

    }
}
module.exports = { ProductDataAccessObject }