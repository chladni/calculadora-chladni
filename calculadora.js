const obj = {
    currentOperand: '',
    previousOperand: '',
    operation: '',
};

function clear(){
    obj.currentOperand = '';
    obj.previousOperand = '';
    obj.operation = '';
};

// function delete() {
// }

function appendNumber(number) {
    console.log(`estou sendo chamado: ${number}`)
    obj.currentOperand = obj.currentOperand.toString() + number.toString()
}

function chooseOperation(operation) {
}

function compute() {
}

function updateDisplay() {
    obj.currentOperandTextElement.innerText = obj.currentOperand
}



const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButtons = document.querySelectorAll('[data-equals]')
const deleteButtons = document.querySelectorAll('[data-delete]')
const allClearButtons = document.querySelectorAll('[data-all-clear]')
const previousOperandTextElement = document.querySelectorAll('[data-previous-operand]')
const currentOperandTextElement = document.querySelectorAll('[data-current-operand]')

// const icalculator = new calculator(previousOperandTextElement, currentOperandTextElement)

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        icalculator.appendNumber(button.innerText)
        icalculator.updateDisplay()
    })
})
