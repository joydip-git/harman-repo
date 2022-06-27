const productModule = require('./entities/product')
const productBoModule = require('./businesslayer/productBo')


//1. add new products into the storage
const dellXpsProduct = new productModule.Product(2, 'dell xps', 10000, 'new laptop from dell', '')
const probookProduct = new productModule.Product(1, 'hp probook', 30000, 'new laptop from hp', '')
const iphoneProduct = new productModule.Product(3, 'iphone 6', 20000, 'new mobile from apple', '')

const productBoObject = new productBoModule.ProductBusinessObject()
productBoObject.addProduct(dellXpsProduct)
productBoObject.addProduct(probookProduct)
productBoObject.addProduct(iphoneProduct)


//2. read all records and later sort them and display them
const allRecords = productBoObject.fetchAllProducts()
const sortedRecords = productBoObject.sortAllProducts(1, allRecords)
sortedRecords.forEach(function (p) {
    console.log(p.print())
})




