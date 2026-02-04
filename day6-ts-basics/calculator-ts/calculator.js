var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.prototype.add = function (a, b) {
        return a + b;
    };
    Calculator.prototype.subtract = function (a, b) {
        return a - b;
    };
    Calculator.prototype.multiply = function (a, b) {
        return a * b;
    };
    Calculator.prototype.divide = function (a, b) {
        if (b === 0) {
            throw new Error("Division by zero is not allowed");
        }
        return a / b;
    };
    return Calculator;
}());
var calc = new Calculator();
console.log("Add:", calc.add(10, 5));
console.log("Subtract:", calc.subtract(10, 5));
console.log("Multiply:", calc.multiply(10, 5));
console.log("Divide:", calc.divide(10, 5));
