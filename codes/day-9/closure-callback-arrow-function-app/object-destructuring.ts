const anilObj = {
    name: 'anil',
    id: 1,
    salary: 1000
}
// const nameValue = anilObj.name
// const idValue = anilObj['id']
// const salValue = anilObj.salary

// const { id: idValue, name: nameValue, salary: salValue } = anilObj

//const { salary: salary } = anilObj
const { salary } = anilObj
console.log(salary)

const numbers = [1, 2, 3, 4]
const [first, , third,] = numbers
console.log(first, third)