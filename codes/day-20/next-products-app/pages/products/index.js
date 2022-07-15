import ProductTable from "../../components/ProductTable"
import { getProducts } from "../../services/productService"

const ProductList = (props) => {
    console.log('pre-rendering the page with data')
    const { loading, error, allProducts } = props
    if (loading)
        return "loading"
    if (error !== '')
        return <span>{error}</span>
    if (allProducts.length === 0)
        return "no products found"

    return (
        <div>
            <ProductTable productRecords={allProducts} />
        </div>
    )
}

//executed by nextjs engine before it can pre-render the ProductList.html from ProductList.js
//never part of production code. never sent to client sie browser
//server side function
/*
export async function getStaticProps() {
    console.log('pre-fetching data')
    try {
        const resp = await getProducts()
        const data = await resp.json()
        return {
            props: {
                allProducts: data,
                error: '',
                loading: false
            }
        }
    } catch (error) {
        return {
            props: {
                allProducts: [],
                error: error.message,
                loading: false
            }
        }
    }
}
*/

export async function getServerSideProps() {
    console.log('pre-fetching data')
    try {
        const resp = await getProducts()
        const data = await resp.json()
        return {
            props: {
                allProducts: data,
                error: '',
                loading: false
            }
        }
    } catch (error) {
        return {
            props: {
                allProducts: [],
                error: error.message,
                loading: false
            }
        }
    }
}
export default ProductList