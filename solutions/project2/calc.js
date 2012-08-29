(function () {
    'use strict';

    var display = document.getElementById('display'),
        controls = document.getElementById('controls'),
        numberBtns = controls.querySelectorAll('.number'),
        operatorBtns = controls.querySelectorAll('.operator'),
        enterBtn = controls.querySelector('#enter'),
        clearBtn = controls.querySelector('#clear'),
        displayText = '0',
        operand1 = '',
        operand2 = '',
        operator = '',
        updateDisplay = function () {
            display.innerHTML = displayText;
        },
        handleNumber = function (e) {
            var num = e.target.textContent;

            if (operator === '') {
                operand1 += num;
                displayText = operand1;
            } else {
                operand2 += num;
                displayText = operand2;
            }

            updateDisplay();
        },
        handleOperator = function (e) {
            var op = e.target.textContent;
            if (operator === '') {
                operator = op;
            }
        },
        computeAnswer = function () {
            var result = 0;

            if (operand1 !== '' && operator !== '' && operand2 !== '') {
                operand1 = parseInt(operand1, 10);
                operand2 = parseInt(operand2, 10);

                switch (operator) {
                case '+':
                    result = operand1 + operand2;
                    break;
                case '-':
                    result = operand1 - operand2;
                    break;
                case '*':
                    result = operand1 * operand2;
                    break;
                case '/':
                    result = operand1 / operand2;
                    break;
                }

                if (result.toString().length > 10) {
                    displayText = result.toPrecision(10).toString();
                } else {
                    displayText = result.toString();
                }

                updateDisplay();

                operand1 = '';
                operand2 = '';
                operator = '';
            }
        },
        clearDisplay = function () {
            operand1 = '';
            operand2 = '';
            operator = '';

            displayText = '0';
            updateDisplay();
        },
        ii,
        len;

    for (ii = 0, len = numberBtns.length; ii < len; ii += 1) {
        numberBtns[ii].addEventListener('click', handleNumber, false);
    }

    for (ii = 0, len = operatorBtns.length; ii < len; ii += 1) {
        operatorBtns[ii].addEventListener('click', handleOperator, false);
    }

    enterBtn.addEventListener('click', computeAnswer, false);
    clearBtn.addEventListener('click', clearDisplay, false);
}());