function chooseCalculation(choice, ...args) {
    switch (choice) {
        case 1:
            const add = function () {
                console.log(`choice:${choice}`)
                return (args[0] + args[1])
            }
            return add;
            break;
        case 1:
            const subtract = function () {
                console.log(`choice:${choice}`)
                return (args[0] + args[1])
            }
            return subtract
            break;
        default:
            return undefined
            break;
    }
}

const calculationOp = chooseCalculation(1, 10, 20)
var result = calculationOp()
console.log(result)