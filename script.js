let screenContent = "";


function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x,y) {
    return x * y;
}

function divide(x, y) {
    return x / y;
}

function operate(expression) {
    let expressionArr = expression.split(" ");
    let num1 = Number(expressionArr[0]);
    let operator = expressionArr[1];
    let num2 = Number(expressionArr[2]);
    if (operator === "+") {
        return add(num1, num2)
    }
    if (operator === "-") {
        return subtract(num1, num2);
    }
    if (operator === "*") {
        return multiply(num1, num2);
    }
    if (operator === "/") {
        return divide(num1, num2);
    }
}

let display = document.querySelector(".screen");
let zero = document.getElementById("0");
let one = document.getElementById("1");
let two = document.getElementById("2");
let three = document.getElementById("3");
let four = document.getElementById("4");
let five = document.getElementById("5");
let six = document.getElementById("6");
let seven = document.getElementById("7");
let eight = document.getElementById("8");
let nine = document.getElementById("9");
let plus = document.getElementById("add");
let minus = document.getElementById("subtract");
let times = document.getElementById("multiply");
let divisor = document.getElementById("divide");
let equal = document.getElementById("equals");
let clear = document.querySelector(".clear");

clear.addEventListener("click", () => {
    display.textContent = "";
    screenContent = "";
});

one.addEventListener("click", () => {
    screenContent = screenContent + "1";
    display.textContent = screenContent;
});

two.addEventListener("click", () => {
    screenContent = screenContent + "2";
    display.textContent = screenContent;
});

three.addEventListener("click", () => {
    screenContent = screenContent + "3";
    display.textContent = screenContent;
});

four.addEventListener("click", () => {
    screenContent = screenContent + "4";
    display.textContent = screenContent;
});

five.addEventListener("click", () => {
    screenContent = screenContent + "5";
    display.textContent = screenContent;
});

six.addEventListener("click", () => {
    screenContent = screenContent + "6";
    display.textContent = screenContent;
});

seven.addEventListener("click", () => {
    screenContent = screenContent + "7";
    display.textContent = screenContent;
});

eight.addEventListener("click", () => {
    screenContent = screenContent + "8";
    display.textContent = screenContent;
});

nine.addEventListener("click", () => {
    screenContent = screenContent + "9";
    display.textContent = screenContent;
});

zero.addEventListener("click", () => {
    screenContent = screenContent + "0";
    display.textContent = screenContent;
});

plus.addEventListener("click", () => {
    screenContent = screenContent + " + ";
    display.textContent = screenContent;
});

minus.addEventListener("click", () => {
    screenContent = screenContent + " - ";
    display.textContent = screenContent;
});

times.addEventListener("click", () => {
    screenContent = screenContent + " x ";
    display.textContent = screenContent;
});

divisor.addEventListener("click", () => {
    screenContent = screenContent + " / ";
    display.textContent = screenContent;
});

equal.addEventListener("click", () => {
    let answer = operate(screenContent);
    display.textContent = answer;
    screenContent = "";
});

