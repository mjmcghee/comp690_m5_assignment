// IMPORT THE MODULE
import {add,sub,mul,div} from "./modules/calculator.js"

const calInput = () => {
    // COLLECT NUMBER 1, NUMBER 2, AND OPERATION FROM THE USER
    let firstNum = calFunOne();
    let secondNum = calFunTwo();
    // CHECK TO SEE WHAT OPERATION THEY'RE USING
    let operation = operator();
    let sum = calculations(operation,firstNum,secondNum);
    let sign = symbol(operation);
    alert(`${firstNum} ${sign} ${secondNum} = ${sum}`);
    repeat();
};

const calFunOne = () => {
    let numInput = parseInt(prompt("Enter the first number to calculate."));
    if (Number.isNaN() == true) {
        alert("Please enter a valid number!");
        return calFunOne();
    } else {
        return numInput;
    }
};

const calFunTwo = () => {
    let numInput = parseInt(prompt("Enter the second number to calculate."));
    if (Number.isNaN() == true) {
        alert("Please enter a valid number!");
        return calFunTwo();
    } else {
        return numInput;
    }
};

const operator = () => {
    const operators = ["addition","add","subtraction","sub","multiplication","mul","division","div"];
    let operation = prompt("What type of operation do you want to perform? [Addition (add), Subtraction (sub), Multiplication (mul), Division (div)]");
        for (const value of operators) {
            if (value === operation.toLowerCase()) {
            return value;
            };
        };
        alert("Input a valid operator!");
        return operator();
    }; 

const symbol = (operation) => {
    let sign = {
        addition        : "+",
        subtraction     : "-",
        multiplication  : "*",
        division        : "/",
        add             : "+",
        sub             : "-",
        mul             : "*",
        div             : "/"
    };
    return sign[operation];
};

// CALL THE APPROPRIATE FUNCTION
const calculations = (operate,numOne,numTwo) => {
    switch(operate) {
        case "add":
        case "addition":
            return add(numOne,numTwo);
            break;
        case "sub":
        case "subtraction":
            return sub(numOne,numTwo);
            break;
        case "mul":
        case "multiplication":
            return mul(numOne,numTwo);
            break;
        case "div":
        case "division":
            return div(numOne,numTwo);
            break;
        default:
            alert("Be sure to input two valid values to calculate.");
            calInput();
    };
};

const repeat = () => {
    let again = prompt("Start Over? (y or n)");
    if (again.toLowerCase() == "y") {
        calInput();
    } else if (again.toLowerCase() == "n") {
        alert("Thank you for using our services. Goodbye~!");
    } else {
        alert("Please select 'y' or 'n'.");
        return repeat();  
    };
};

const init = () => calInput();

init();