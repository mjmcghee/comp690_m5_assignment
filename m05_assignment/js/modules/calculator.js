// ADD A PRIVATE FUNCTION CALLED CALCULATE
const calculate = () => {};
// ADD FOUR PUBLIC FUNCTIONS BELOW
// ADD FUNCTION
const add = (numOne,numTwo) => {return numOne + numTwo;};
// SUBTRACT FUNCTION
const sub = (numOne,numTwo) => {return numOne - numTwo;};
// MULTIPLY FUNCTION
const mul = (numOne,numTwo) => {return numOne * numTwo;};
// DIVIDE FUNCTION
const div = (numOne,numTwo) => {
    if (numTwo === 0) {
        return alert("You cannot divide by zero!");
    };
    return numOne / numTwo;
};
// EXPORT THE FOUR PUBLIC FUNCTIONS
export {add,sub,mul,div};