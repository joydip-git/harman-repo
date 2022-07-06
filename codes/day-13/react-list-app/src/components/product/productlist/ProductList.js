import React, { Component } from "react";
import Product from '../../../models/product'

class ProductList extends Component {
    constructor() {
        super()
        this.state = {
            products: [
                new Product(1, 'dell xps', 10000, 'new laptop from dell', '', 4, '6/1/2022'),
                new Product(2, 'hp probook', 20000, 'new laptop from hp', '', 3.8, '5/1/2022'),
                new Product(3, 'iphone 6', 30000, 'new phone from apple', '', 4.5, '1/1/2021')
            ]
        }
    }
    render() {
        const design = (
            <div>
                <span>Product Management System</span>
                <ul>

                </ul>
            </div>
        )
        return design
    }
}
export default ProductList