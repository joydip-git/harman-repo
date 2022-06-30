const sunilObj = {
    name: 'sunil',
    id: 1,
    salary: 2000
}

const copyObj = {
    ...sunilObj,
    location: 'bangalore'
}
console.log(`${copyObj.name}`)

const integers = [1, 2, 3, 4]
const copyNumbers = [10, ...integers, 20]