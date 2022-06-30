function foo() {
    console.log('foo')
}
function foo1() {
    console.log('foo1')
}
function call(fnRef) {
    fnRef()
}
call(foo)
call(foo1)

const numbers = [3, 2, 1, 5, 4]

//filter
// function isEven(num) {
//     return num % 2 === 0
// }
//numbers.filter(isEven)
const filteredArray = numbers.filter(function (num) {
    return num % 2 === 0
})
//class Array{
//filter(fnRef){
// const result = []
// for (let i = 0; i < this.length; i++) {
//     const isTrue = fnRef(this[i])
//     if (isTrue) {
//         result.push(numbers[i])
//     }
// }
//}
//}

//forEach (pass such a callback function which does not return any value)
filteredArray.forEach(function (num) {
    console.log(num)
})
//class Array{
//function forEach(fnRef) {
// for (let index = 0; index < this.length; index++) {
//     const element = result[index];
//     fnRef(element)
// }
//}
//}


//find
const foundElement = numbers.find(function (num) { return num === 4 })
console.log(foundElement)

//find(fnRef){
//let found=undefined
// for (let index = 0; index < numbers.length; index++) {
//     const element = numbers[index];
//     const isTrue = fnRef(element)
//     if (isTrue) {
//         found=element
//         break;
//     }
// }
// return found
//}

//findIndex
numbers.findIndex(function (num) { return num === 4 })
//findIndex(fnRef){
//let i=-1
// for (let index = 0; index < numbers.length; index++) {
//     const element = numbers[index];
//
//     if (fnRef(element)) {
//         i=index
//         break;
//     }
// }
//return i
//}

//sort
numbers.sort(function (a, b) {
    //0 => same
    //<0 => a<b
    //>0 => a>b
    return a - b
})
// sort(fnRef){
//     for (let i = 0; i < this.length; i++) {
//         for (let j = i + 1; j < this.length; j++) {
//             let compValue= fnRef(this[i],this[j])
//             if (compValue>0) {
//                 let temp = this[i]
//                 this[i] = this[j]
//                 this[j] = temp
//             }
//             else if(compValue<0)
//                 let temp = this[j]
//                 this[j] = this[i]
//                 this[i] = temp
//             }
//         }
//     }
// }

console.log(numbers)