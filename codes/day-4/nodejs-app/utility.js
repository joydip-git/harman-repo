function add(first, second) {
    return first + second;
}
function subtract(first, second) {
    return first - second;
}
var arr = []
var exportableMembers = {
    addFn: add,
    subFn: subtract
}

module.exports = exportableMembers;
//console.log(module)