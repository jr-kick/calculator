const calculationScreen = document.getElementById('calculation');
const resultScreen = document.getElementById('result');
//const powerOfBtn = document.getElementById('power_of');
//const factorialBtn = document.getElementById('factorial');
//const clearBtn = document.getElementById('clear');
//const deleteBtn = document.getElementById('delete');
//const number_0_Btn = document.getElementById('number_0');
//const number_1_Btn = document.getElementById('number_1');
//const number_2_Btn = document.getElementById('number_2');
//const number_3_Btn = document.getElementById('number_3');
//const number_4_Btn = document.getElementById('number_4');
//const number_5_Btn = document.getElementById('number_5');
//const number_6_Btn = document.getElementById('number_6');
//const number_7_Btn = document.getElementById('number_7');
//const number_8_Btn = document.getElementById('number_8');
//const number_9_Btn = document.getElementById('number_9');
//const divideBtn = document.getElementById('divide');
//const multiplyBtn = document.getElementById('multiply');
//const minusBtn = document.getElementById('minus');
//const plusBtn = document.getElementById('plus');
//const dotBtn = document.getElementById('dot');
//const equalsBtn = document.getElementById('equals');

const allButtons = Array.from(document.querySelectorAll('#buttons button'));

let operatorMode = '';
let currentOperator = '';
let num1 = '';
let num2 = '';
let result;

allButtons.forEach(e => {e.addEventListener('click', calculate)});

function defaultState() {
    calculationScreen.textContent = '';
    resultScreen.textContent = '0';
    operatorMode = 'OFF'
};

defaultState();

function calculate(e) {
    const content = e.target.textContent;
    if (e.target.classList.contains('number')) {
        if (operatorMode === 'OFF') {
            num1 += e.target.textContent;
            calculationScreen.textContent += content;
        } else {
            num2 += e.target.textContent;
            calculationScreen.textContent += content;
        };
    };

    if (content === '+') {
        if (currentOperator != 'sumUp' && ) {
            operatorMode = 'ON';
            currentOperator = 'sumUp'
            calculationScreen.textContent += ' ' + content + ' ';
        } else console.log('You already chose it, you perky bastard!');
    };

    if (content === '-') {
        if (currentOperator != 'substract') {
            operatorMode = 'ON';
            currentOperator = 'substract'
            calculationScreen.textContent += ' ' + content + ' ';
        } else console.log('You already chose it, you perky bastard!');
    };

    if (content === '=') {
        getResult();
        calculationScreen.textContent += ' ' + content + ' ';
    };
};

function sumUp(num1, num2) {
    return Number(num1) + Number(num2);
};

function substract(num1, num2) {
    return Number(num1) - Number(num2);
};

function getResult() {
    if (currentOperator === 'sumUp') {
        result = sumUp(num1, num2);
        printResult()
    };

    if (currentOperator === 'substract') {
        result = substract(num1, num2);
        printResult()
    };
    num1 = result;
    num2 = '';
};

function printResult() {
    resultScreen.textContent = result;
}