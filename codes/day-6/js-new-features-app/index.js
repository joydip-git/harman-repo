const anilObj = {
    name: 'anil',
    id: 1,
    salary: 1000
}
const mod = {
    exports: {
        anilObj: anilObj,
        add: function () { },
        sub: function () { }
    }
}

// const id = anilObj.id
// const name = anilObj.name
// const sal = anilObj.salary

//object destructuring
const { anilObj: anilData, add: a, sub: s } = mod.exports
console.log(anilData)