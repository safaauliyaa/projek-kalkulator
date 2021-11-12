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


let checkResult = false
let checkPersen = false
let count = 0


const updateScreen = (number) => {
    // calculatorScreen.value = number
    if (calculatorScreen.value === '0' || checkResult === true || count >= 2) {
        calculatorScreen.value = number
    } else{
        calculatorScreen.value += number
    }
    checkResult = false
}

numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        inputNumber(event.target.value)
        // console.log(event.target.value)
        updateScreen(currentNumber)
    })
})

const inputNumber = (number) => {
    if (currentNumber === '0') {
        currentNumber = number
    } else {
        currentNumber += number
    }
    count += 1
}

operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        inputOperator(event.target.value)
        updateScreen(calculationOperator)
    })
})

const inputOperator = (operator) => {
    // if (calculationOperator === '') {
    //     prevNumber = currentNumber
    // }
    // calculationOperator = operator
    // currentNumber = '0'
    prevNumber = currentNumber
    calculationOperator = operator
    currentNumber = ''
    count = 0
}

const inputPersen = (percentage) => {
    calculationOperator = percentage
    currentNumber += calculationOperator
}

percentage.addEventListener('click', (event) => {
    checkPersen = true
    inputPersen(event.target.value)
    updateScreen(calculationOperator)
})

equalSign.addEventListener('click', () => {
    checkResult = true
    calculate()
    updateScreen(currentNumber)
})

const calculate = () => {
    // let result = ''
    // switch(calculationOperator) {
    //     case "+":
    //         result = parseFloat(prevNumber) + parseFloat(currentNumber)
    //         break
    //     case "-":
    //         result = parseFloat(prevNumber) - parseFloat(currentNumber)
    //         break
    //     case "*":
    //         result = parseFloat(prevNumber) * parseFloat(currentNumber)
    //         break
    //     case "/":
    //         result = parseFloat(prevNumber) / parseFloat(currentNumber)
    //         break
    //     case "%":
    //         result = parseFloat(currentNumber) / 100
    //         break
    //     default:
    //         break
    // }
    // currentNumber = result
    // calculationOperator = ''
    if (checkPersen === true) {
        currentNumber = parseFloat(currentNumber) / 100
        checkPersen = false
    }
    if (checkPersen === false) {
        let calculationResult = eval(calculatorScreen.value)
        currentNumber = calculationResult
    }
    calculationOperator =''
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