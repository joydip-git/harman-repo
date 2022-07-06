import React from "react";
const ProductRow = (props) => {
    const { productData } = props
    const design = (
        <tr>
            <td>
                <div className="img-responsive">
                    <img src={productData.imageUrl} alt='NA' title={productData.productName} className='imgStyle' />
                </div>
            </td>
            <td>
                {productData.productName}
            </td>
            <td>
                {productData.price}
            </td>
            <td>
                {productData.starRating}
            </td>
        </tr>
    )
    return design
}
export default ProductRow