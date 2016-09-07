var Utilities;
(function (Utilities) {
    function getNumbers() {
        var numbers = {};
        numbers.num1 = prompt("Enter first number");
        numbers.num2 = prompt("Enter second number");
        return numbers;
    }
    Utilities.getNumbers = getNumbers;
    function displayAnswer(answer) {
        alert("The answer is " + answer);
    }
    Utilities.displayAnswer = displayAnswer;
})(Utilities || (Utilities = {}));
