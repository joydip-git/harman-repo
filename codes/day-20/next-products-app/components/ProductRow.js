import Link from "next/link"

const ProductRow = ({ product }) => {
    return (
        <tr>
            <td>
                <Link href={`/products/${product.productId}`}>
                    <a>{product.productId}</a>
                </Link>
            </td>
            <td>{product.productName}</td>
            <td>{product.price}</td>
        </tr>
    )
}

export default ProductRow