namespace Main {

    var userInputs = Utilities.getNumbers();
    var result = Calculator.addNumbers(userInputs.num1, userInputs.num2);
    Utilities.displayAnswer(result);

}
