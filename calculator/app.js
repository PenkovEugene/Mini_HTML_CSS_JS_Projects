const resultElement = document.getElementById('result')
const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')
const submitButton = document.getElementById('submit')
const plusButton = document.getElementById('plus')
const minusButton = document.getElementById('minus')
const multiplicationButton = document.getElementById('multiplication')
const divisionButton = document.getElementById('division')
let action = '+'

plusButton.onclick = function() {
    action = '+'
}

minusButton.onclick = function() {
    action = '-'
}

multiplicationButton.onclick = function() {
    action = '*'
}

divisionButton.onclick = function() {
    action = '/'
}

function printResult(result) {
    if (result < 0) {
        resultElement.style.color = 'red'
    } else {
        resultElement.style.color = 'green'
    }
    resultElement.textContent = result
}

function calculateAction(input1, input2, actionSymbol) {
    const num1 = Number(input1.value)
    const num2 = Number(input2.value)
    if (actionSymbol == '+') {
        return num1 + num2
    } else if (actionSymbol == '-') {
        return num1 - num2
    } else if (actionSymbol == '*') {
        return num1 * num2
    } else if (actionSymbol == '/') {
        return num1 / num2
    }
}


submitButton.onclick = function() {
    const result = calculateAction(input1, input2, action)
    printResult(result)

    // if (action == '+') {
    //     const math = Number(input1.value) + Number(input2.value)
    //     printResult(math)
    // } else if (action == '-') {
    //     const math = Number(input1.value) - Number(input2.value)
    //     printResult(math)
    // }
}