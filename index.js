function add(num1, num2) {
    return num1 + num2;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function increment(n) {
    return n += 1;
}

function decrement(n) {
    return n -= 1;
}

function makeInt(n, base = 10) {
    return parseInt(n, base = 10);
}

function preserveDecimal(n) {
    return parseFloat(n);
}