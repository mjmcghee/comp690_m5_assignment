const init = () => startGame();

const startGame = () => gamePlay();

const rockPaperScissors = () => {
    let specialMove = ["Rock", "Paper", "Scissors"];
    let randomAction = specialMove[Math.floor(Math.random() * specialMove.length)];
    return randomAction;
}

const userSelect = () => {
    let userInput = prompt("Select Rock, Paper, or Scissors.");
    return userInput;
}

const compSelect = () => {
    let compInput = rockPaperScissors();
    return compInput;
}

const gamePlay = () => {
    userInput = userSelect().toLowerCase();
    compInput = compSelect().toLowerCase();
    if (userInput == "rock" && compInput == "rock") {
        alert("You both selected Rock! It's a tie! Play again!");
        startGame();
    } else if (userInput == "rock" && compInput == "scissors") {
        alert("You selected Rock! They selected Scissors! You win!");
    } else if (userInput == "rock" && compInput == "paper") {
        alert("You selected Rock! They selected Paper! You lose!");  
    } else if (userInput == "scissors" && compInput == "scissors") {
        alert("You both selected Scissors! It's a tie! Play again!");
        startGame();
    } else if (userInput == "scissors" && compInput == "paper") {
        alert("You selected Scissors! They selected Paper! You win!");
    } else if (userInput == "scissors" && compInput == "rock") {
        alert("You selected Scissors! They selected Rock! You lose!");
    } else if (userInput == "Paper" && compInput == "paper") {
        alert("You both selected Paper! It's a tie! Play again!");
        startGame();
    } else if (userInput == "paper" && compInput == "rock") {
        alert("You selected Paper! They selected Rock! You win!");
    } else if (userInput == "paper" && compInput == "scissors") {
        alert("You selected Paper! They selected Scissors! You lose!");  
    } else {
        alert("Please input a valid option.");
        startGame();
    }
    return repeat();
};

const repeat = () => {
    let again = prompt("Play again? (y or n)");
    if (again.toLowerCase() == "y") {
        startGame();
    } else if (again.toLowerCase() == "n") {
        alert("Thanks for playing. Goodbye~!");
    } else {
        alert("Please select 'y' or 'n'.");
        return repeat();  
    }
}

init();

//"Rock destroys scissors."
//"Scissors cut paper."
//"Paper covers rock."
//"You win."
//"You lose."