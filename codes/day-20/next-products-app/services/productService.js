const url = 'http://127.0.0.1:8081/products'

export function getProducts() {
    return fetch(url)
}
export function getProductById(pid) {
    return fetch(`${url}/${pid}`)
}