//1. spread operator
const pavanObj = {
    name: 'pavan',
    id: 1,
    salary: 1000,
    print: function () {
        return `${this.name}, ${this.salary}`
    }
}
pavanObj.location = 'bangalore'
pavanObj['department'] = 'HR'
pavanObj['salary'] = 2000
//pavanObj.salary=2000

//dot operator (obj.propname)
console.log(pavanObj.name)
//indexer (obj[propname])
console.log(pavanObj['salary'])

const copyOfPavanObj = {
    ...pavanObj
}
console.log(copyOfPavanObj)
const anotherCopyOfPavanObj = {

}
for (let propName in pavanObj) {
    //console.log(`${propName}:${pavanObj[propName]}`)
    anotherCopyOfPavanObj[propName] = pavanObj[propName]
}
console.log(anotherCopyOfPavanObj)

const numbers = [1, 2, 3, 4]
const copyNumbers = [...numbers]
