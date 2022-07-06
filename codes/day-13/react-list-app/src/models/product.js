class Product {
    constructor(id, name, price, description, imagepath, rating, releasedOn) {
        this.productId = id
        this.productName = name
        this.price = price
        this.description = description
        this.imageUrl = imagepath
        this.starRating = rating
        this.releaseDate = releasedOn
    }
}
export default Product