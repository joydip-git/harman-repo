const { default: axios } = require("axios")

const multiply = (a, b) => a * b
const divide = (a, b) => {
    if (b === 0)
        throw new Error('denominator can not be zero')
    return (a / b)
}
const fetchPost = async (url) => {
    try {
        const resp = await axios.get(url)
        return resp.data
    } catch (error) {
        //throw new Error(error.message)
        throw new Error('wrong URL...can not fetch data')
    }
}
module.exports = { multiply, divide, fetchPost }
// console.log(multiply(2, 2))