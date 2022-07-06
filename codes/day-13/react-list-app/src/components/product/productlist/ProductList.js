import React, { Component } from "react";
import Product from '../../../models/product'
import ProductRow from "../productrow/ProductRow";
import './ProductList.css'

class ProductList extends Component {
    constructor() {
        super()
        this.state = {
            products: [
                new Product(1, 'dell xps', 10000, 'new laptop from dell', '../../../images/dell.jpg', 4, '6/1/2022'),
                new Product(2, 'hp probook', 20000, 'new laptop from hp', '../../../images/hp.jpg', 3.8, '5/1/2022'),
                new Product(3, 'iphone 6', 30000, 'new phone from apple', '../../../images/iphone.jpg', 4.5, '1/1/2021')
            ]
        }
    }
    render() {
        const design = (
            <div className="tbl-responsive">
                <table className="table">
                    <thead className="headerStyle">
                        <tr>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Rating</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.products.map(
                                (p) => {
                                    return <ProductRow productData={p} />
                                }
                            )
                        }
                    </tbody>
                </table>
            </div>
        )
        return design
    }
}
/**
 * {
 *  productData=p
 * }
 */
export default ProductList