namespace Utilities {

    export function getNumbers(){
        var numbers:any = {};

        numbers.num1 = prompt("Enter first number");
        numbers.num2 = prompt("Enter second number");

        return numbers;
    }

    export function displayAnswer(answer) {
        alert("The answer is " + answer);
    }
}
