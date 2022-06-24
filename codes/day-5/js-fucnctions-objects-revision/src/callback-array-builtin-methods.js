const numbers = [1, 2, 3, 4, 5]
function print(value) {
    console.log(value)
}

function isOdd(num) {
    return num % 2 !== 0
}
const oddNumbers = numbers.filter(isOdd)
oddNumbers.forEach(print)

function multiplyElements(num) {
    return "Value: " + (num * 2)
}
const multipliedValues = numbers.map(multiplyElements)
multipliedValues.forEach(print);

/*
function mapValues(arr, logic) {
    const result = []
    for (let i = 0; i < arr.length; i++) {
        let value = logic(arr[i])
        result.push(value)
    }
    return result;
}
*/

const products = [
    { name: 'dell xps', id: 2, price: 1000 },
    { name: 'hp probook', id: 1, price: 3000 },
    { name: 'iphone6', id: 3, price: 2000 }
]

// for (let i = 0; i < products.length; i++) {
// if(doesExist(products[i])){}
// }
function doesExist(p) {
    return p.id === 2
}
const found = products.find(doesExist)
console.log(found)

const foundProductIndex = products.findIndex(
    function (p) {
        return p.price === 2000
    }
)
products.splice(foundProductIndex, 1)
console.log(products)
