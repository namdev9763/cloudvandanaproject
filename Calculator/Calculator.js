let display = document.getElementById('display');
let equation = '';

function appendToDisplay(value) {
    equation += value;
    display.value = equation;
}

function clearDisplay() {
    equation = '';
    display.value = '';
}

function calculate() {
    try {
        equation = eval(equation);
        display.value = equation;
    } catch (error) {
        display.value = 'Error';
    }
}
function deleteLastDigit() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
  }