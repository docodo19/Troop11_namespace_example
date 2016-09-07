var Calculator;
(function (Calculator) {
    function addNumbers(num1, num2) {
        return num1 + num2;
    }
    Calculator.addNumbers = addNumbers;
})(Calculator || (Calculator = {}));
