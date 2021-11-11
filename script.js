const calculatorScreen = document.querySelector('.kalkulator-screen')

const updateScreen = (number) => {
    calculatorScreen.value = number
}

const inputNumber = (number) => {
    if (currentNumber === '0'){
        currentNumber = number
    } else {
        currentNumber += number
    }  
}

const numbers = document.querySelectorAll(".number")

const operators = document.querySelectorAll(".operator")

const inputOperator = (operator) => {
    prevNumber = currentNumber
    calculationOperator = operator
    currentNumber = ''
}

const equalSign = document.querySelector('.sama-dengan')

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
        default:
            break
    }
}

const clearAll = () => {
    prevNumber = ''
    calculationOperator = ''
    currentNumber = '0'
}
const clearBtn = document.querySelector('.AC')

clearBtn.addEventListener('click', () => {
    clearAll()
    updateScreen(currentNumber)
})

inputDecimal = (dot) => {
    if (currentNumber.includes('.')) {
        return
    }
    currentNumber += dot
}

const decimal = document.querySelector('.desimal')

decimal.addEventListener('click', (event) => {
    inputDecimal(event.target.value)
    updateScreen(currentNumber)
})



currentNumber = result
calculationOperator = ''

equalSign.addEventListener('click', () => {
    calculate()
    updateScreen(currentNumber)
})

numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        inputNumber(event.target.value)
        // console.log(event.target.value)
        updateScreen(currentNumber)
    })
})

operators.forEach((operator) => {
    operator.addEventListener("click", (event) =>){
        inputOperator(event.target.value)
    }
})

let prevNumber = ''
let calculationOperator = ''
let currentNumber = '0'

