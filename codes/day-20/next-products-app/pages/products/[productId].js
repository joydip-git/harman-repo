//dynamic page (which displays data using the same template dynamically based on dynamic route parameter)
import { getProductById, getProducts } from '../../services/productService'
import { useRouter } from "next/router";

const ProductDetail = (props) => {
    const { error, product, loading } = props

    const router = useRouter()
    if (router.isFallback) {
        return <span>Loding...please wait</span>
    }

    if (loading)
        return "loading"
    if (error !== '')
        return <span>{error}</span>
    if (!product)
        return "no product found"

    return (
        <span>{product.productName}</span>
    )
}



export async function getStaticPaths() {
    const resp = await getProducts()
    const data = await resp.json()
    const allParams = data.map(
        p => {
            return {
                params:
                {
                    productId: p.productId.toString()
                }
            }
        }
    )

    return {
        paths: allParams.slice(0, 3),
        fallback: true
    }
}

export async function getStaticProps(context) {
    const { params } = context
    const productId = Number(params.productId)
    console.log('pre-fetching data for ' + productId)
    try {
        const resp = await getProductById(productId)
        const data = await resp.json()
        return {
            props: {
                product: data,
                error: '',
                loading: false
            }
        }
    } catch (error) {
        return {
            props: {
                product: null,
                error: error.message,
                loading: false
            }
        }
    }
}

export default ProductDetail