//callback mechanism
function filterItems(arr, logicFn) {
    const res = [];
    for (let i = 0; i < arr.length; i++) {
        let status = logicFn(arr[i])
        if (status) {
            res.push(arr[i])
        }
    }
    return res;
}
const numbers = [1, 2, 3, 4, 5]
function filterEven(num) {
    if (num % 2 === 0) {
        return true
    }
    else
        return false
}
const resultant = filterItems(numbers, filterEven);

const names = ['pavan', 'hugin', 'yesu', 'sachin']
function filterNames(name) {
    return name.indexOf('a') !== -1
}
const filteredNames = filterItems(names, filterNames)

console.log(resultant)
console.log(filteredNames)