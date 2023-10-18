//STEP 1
const halfNumInput = () => {
    let numInput = parseInt(prompt("Input a number."));
    if (Number.isNaN(numInput) == true) {
        alert("Please enter a valid number!");
        return halfNumInput();
    } else {
        halfNumber(numInput);
    }
}

const halfNumber = aNumber => {
        let result = aNumber / 2;
        alert(`Half of ${aNumber} is ${result}.`);
        repeat();
    }

//STEP 2
const squareNumInput = () => {
    let numInput = parseInt(prompt("Input a number."));
    if (Number.isNaN(numInput) == true) {
        alert("Please enter a valid number!");
        return squareNumInput();
    } else {
        squareNumber(numInput);
    }
}

const squareNumber = aNumber => {
    let result = aNumber * aNumber;
    alert(`The result of squaring ${aNumber} is ${result}.`);
    repeat();
}

//STEP 3
const twoNumInput = () => {
    let inputOne = parseInt(prompt("Input the first number."));
    let inputTwo = parseInt(prompt("Input the second number."));
    if (Number.isNaN(inputOne) == true || Number.isNaN(inputTwo) == true ) {
        alert("Please enter valid numbers!");
        return twoNumInput();
    } else {
        percentOf(inputOne, inputTwo);
    }
}

const percentOf = (numOne, numTwo) => {
    let result = numOne / numTwo;
    let percent = Math.round(result * 100);
    alert(`${numOne} is ${percent}% of ${numTwo}.`);
    repeat();
}

//STEP 4

const dualNumInput = () => {
    let inputOne = parseInt(prompt("Input the first number."));
    let inputTwo = parseInt(prompt("Input the second number."));
    if (Number.isNaN(inputOne) == true || Number.isNaN(inputTwo) == true ) {
        alert("Please enter valid numbers!");
        return dualNumInput();
    } else {
        findModulus(inputOne, inputTwo);
    }
}

const findModulus = (numOne, numTwo) => {
    let result = numOne % numTwo;
    alert(`${result} is the modulus of ${numOne} and ${numTwo}.`);
    repeat();
}

//STEP 5

const init = () => {
    // halfNumInput();
    // squareNumInput();
    // twoNumInput();
    dualNumInput();
}

const repeat = () => {
    let again = prompt("Start Over? (y or n)");
    if (again.toLowerCase() == "y") {
        // halfNumInput();
        // squareNumInput();
        // twoNumInput();
        dualNumInput();
    } else if (again.toLowerCase() == "n") {
        alert("Thank you for using our services. Goodbye~!");
    } else {
        alert("Please select 'y' or 'n'.");
        return repeat();  
    }
}

init();