const calculationScreen = document.getElementById('calculation');
const resultScreen = document.getElementById('result');
const allButtons = Array.from(document.querySelectorAll('#buttons button'));
let num1;
let num2;
let result;
let operator;
let data;

allButtons.forEach(e => {e.addEventListener('mousedown', collectData)});

function sum(num1, num2) {
    return Number(num1) + Number(num2)
};

function substract(num1, num2) {
    return Number(num1) - Number(num2)
};

function multiply(num1, num2) {
    return Number(num1) * Number(num2)
};

function divide(num1, num2) {
    return Number(num1) / Number(num2)
};

function powerOf(num1, num2) {
    return Math.pow(Number(num1), Number(num2));
};

function factorial(num1) {
    if (num1 == '0') return '1';
    let num = Number(num1);
    let factorial = 1;
    for (let i = 1; i <= num; i++) {
        factorial *= i;
    };
    return factorial;
};

function collectData(e) {

    data = e.target.textContent;

    if (data == 'CLR') {
        clear();
        return;
    };

    if (data == '.') {
        if (operator != '' && num2.includes('.') == false) {
            if (num2 == '') num2 = '0';
            num2 += data;
            resultScreen.textContent = num2;
        } else if (num1.includes('.') == false) {
            if (num1 == '') num1 = '0';
            num1 += data;
            resultScreen.textContent = num1;
        };
    };

    if (data == 'DEL') {
        if (operator != '') {

            if (num2.length >= 2) {
                num2 = num2.substring(0, num2.length - 1);
                resultScreen.textContent = num2;
                return
            } else {
                num2 = '0';
                resultScreen.textContent = num2;
                return
            };

        } else {

            if (num1.length >= 2) {
                num1 = num1.substring(0, num1.length - 1);
                resultScreen.textContent = num1;
                return
            } else {
                num1 = '0';
                resultScreen.textContent = num1;
                return
            };
        };
    };

    if (e.target.classList.contains('number')) {
        if (operator != '' && (data != '0' || num2 != '0')) {
            if (num2 == '0') {
                num2 = '';
            };
            num2 += data;
            resultScreen.textContent = num2;
            return
        } else if (data != '0' || num1 != '0') {
            if (num1 == '0') {
                num1 = '';
            };
            num1 += data;
            resultScreen.textContent = num1;
            return
        };
    };

    if (num1 == '') {
        num1 = '0';
    };

    if (num2 != '' || operator == 'factorial') {

        if (data == '+') {
            getResult()
            operator = 'sum';
            calculationScreen.textContent = num1 + ' + ';
            return
        };

        if (data == '-') {
            getResult()
            operator = 'substract';
            calculationScreen.textContent = num1 + ' - ';
            return
        };

        if (data == 'x') {
            getResult()
            operator = 'multiply';
            calculationScreen.textContent = num1 + ' x ';
            return
        };

        if (data == '÷') {
            getResult()
            operator = 'divide';
            calculationScreen.textContent = num1 + ' ÷ ';
            return
        };

        if (data == 'x^') {
            getResult()
            operator = 'powerOf';
            calculationScreen.textContent = num1 + '^';
            return
        };

        if (data == '=') {
            calculationScreen.textContent += num2 + ' =';
            getResult();
            operator = '';
            return
        };
        
    } else {

        if (data == '+') {
            operator = 'sum';
            calculationScreen.textContent = num1 + ' + ';
            return
        };
    
        if (data == '-') {
            operator = 'substract';
            calculationScreen.textContent = num1 + ' - ';
            return
        };
    
        if (data == 'x') {
            operator = 'multiply';
            calculationScreen.textContent = num1 + ' x ';
            return
        };
    
        if (data == '÷') {
            operator = 'divide';
            calculationScreen.textContent = num1 + ' ÷ ';
            return
        };
    
        if (data == 'x^') {
            operator = 'powerOf';
            calculationScreen.textContent = num1 + '^';
            return
        };
    
        if (data == 'x!') {
            operator = 'factorial';
            calculationScreen.textContent = num1 + '!';
            return
        };
    };
};

function getResult() {
    if (operator == 'sum') {
        result = sum(num1, num2);
    };

    if (operator == 'substract') {
        result = substract(num1, num2);
    };

    if (operator == 'multiply') {
        result = multiply(num1, num2);
    };

    if (operator == 'divide') {
        result = divide(num1, num2);
    };

    if (operator == 'powerOf') {
        result = powerOf(num1, num2);
    };

    if (operator == 'factorial') {
        result = factorial(num1);
    };
    num1 = String(result);
    num2 = '';
    resultScreen.textContent = result;
};

function clear() {
    num1 = '';
    num2 = '';
    result = '';
    data = '';
    operator = '';
    resultScreen.textContent = '0';
    calculationScreen.textContent = '';
};

clear();