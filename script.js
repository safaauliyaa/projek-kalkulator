const calculatorScreen = document.querySelector('.kalkulator-screen')
const numbers = document.querySelectorAll(".number")
const operators = document.querySelectorAll(".operator")
const equalSign = document.querySelector('.sama-dengan')
const clearBtn = document.querySelector('.AC')
const decimal = document.querySelector('.desimal')
const percentage = document.querySelector('.persen')


let prevNumber = ''
let calculationOperator = ''
let currentNumber = '0'


const updateScreen = (number) => {
    calculatorScreen.value = number
}

numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        inputNumber(event.target.value)
        updateScreen(currentNumber)
    })
})

const inputNumber = (number) => {
    if (currentNumber === '0') {
        currentNumber = number
    } else {
        currentNumber += number
    }
}

operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        inputOperator(event.target.value)
        updateScreen(calculationOperator)
        // updateScreen(currentNumber)
    })
})

const inputOperator = (operator) => {
    if (currentNumber === '0') {
        return false
    } else {
        currentNumber += operator
    }
    calculationOperator = operator
    // currentNumber = '0'
    prevNumber = currentNumber
    currentNumber = ''
}

const inputPersen = (percentage) => {
    currentNumber /= 100
}

percentage.addEventListener('click', (event) => {
    checkPersen = true
    inputPersen(event.target.value)
    updateScreen(calculationOperator)
})

equalSign.addEventListener('click', () => {
    calculate()
    updateScreen(currentNumber)
})


const calculate = () => {
    let result = ''
    switch(calculationOperator) {
        case "+":
            result = parseFloat(prevNumber) + parseFloat(currentNumber)
            break
        case "-":
            result = parseFloat(prevNumber) - parseFloat(currentNumber)
            break
        case "*":
            result = parseFloat(prevNumber) * parseFloat(currentNumber)
            break
        case "/":
            result = parseFloat(prevNumber) / parseFloat(currentNumber)
            break
        case "%":
            result = parseFloat(currentNumber) / 100
            break
        default:
            break
    }
    currentNumber = result
    calculationOperator = ''
}

clearBtn.addEventListener('click', () => {
    clearAll()
    updateScreen(currentNumber)
})

const clearAll = () => {
    prevNumber = ''
    calculationOperator = ''
    currentNumber = '0'
    checkResult = true
}

decimal.addEventListener('click', (event) => {
    inputDecimal(event.target.value)
    updateScreen(currentNumber)
})

inputDecimal = (dot) => {
    if (currentNumber.includes('.')) {
        return
    }
    currentNumber += dot
}