function getArrayParams(...arr) {
    let min = Infinity
    let max = -Infinity
    let sum = 0
    for (i = 0; i < arr.length; i++) {
        max = Math.max(...arr)
        min = Math.min(...arr)
        sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue)
       
    }
        avg = sum / arr.length

        return {
            min: min,
            max: max,
            avg: parseFloat(avg.toFixed(2))
        };
    }

function summElementsWorker(...arr) {
    let sum = 0
    for (i = 0; i < arr.length; i++) {
        sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue)
        
    }
    if (arr.length === 0) {
            sum = 0
        }
    return sum
}

function differenceMaxMinWorker(...arr) {
    let result
    max = Math.max(...arr)
    min = Math.min(...arr)
    result = max - min
    if (arr.length === 0) {
        result = 0
    }
    return result
}

function differenceEvenOddWorker(...arr) {
    let sumEvenElement = 0
    let sumOddElement = 0
    let result 
    for (i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            sumEvenElement += arr[i]
        } else {
            sumOddElement += arr[i]
        }
    }
    result = sumEvenElement - sumOddElement
    if (arr.length === 0) {
        result = 0
    }
    return result
}

function averageEvenElementsWorker(...arr) {
    let sumEvenElement = 0
    let countEvenElement = 0
    let result
    for (i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            sumEvenElement += arr[i]
            countEvenElement += 1
        }
    }
    result = sumEvenElement / countEvenElement
    if (arr.length === 0) {
        result = 0
    }
    return result
}

function makeWork(arrOfArr, func) {
    let maxWorkerResult = -Infinity

    for (let i = 0; i < arrOfArr.length; i++) {
        
        const res = func(...arrOfArr[i])

        if (res > maxWorkerResult) {
            maxWorkerResult = res
        }
    }

    return maxWorkerResult
}