import ProductRow from "./ProductRow"

const ProductTable = ({ productRecords }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {
                    productRecords.map(
                        p => <ProductRow product={p} key={p.id} />
                    )
                }
            </tbody>
        </table>
    )
}

export default ProductTable