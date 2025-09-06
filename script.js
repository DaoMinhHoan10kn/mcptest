// JavaScript test file
// Created via MCP

function sayHello(name = 'World') {
    return `Hello, ${name}!`;
}

function multiply(a, b) {
    return a * b;
}

console.log(sayHello('MCP'));
console.log(`5 * 4 = ${multiply(5, 4)}`);
