//type filterLogicType = (value: any) => boolean
function filterValues(arr: any[], logicFn: (value: any) => boolean) {

    const result: any[] = []
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        if (logicFn(arr[index])) {
            result.push(arr[index])
        }
    }
    return result
}

const values = [1, 2, 3, 4, 5]
function isEven(num: number) {
    return num % 2 === 0
}
filterValues(values, isEven)