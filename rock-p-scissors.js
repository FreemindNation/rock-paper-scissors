function getComputerChoice () {
    let result = ["rock", "paper", "scissors"];

    let randomIndex = Math.floor(Math.random() * result.length);

    return result[randomIndex];
}

let draw = "Draw! No winner";
let paperWin = "You Win! Paper beats Rock";
let paperLoss = "You Lose! Paper is beaten by Scissors";
let rockWin = "You Win! Rock beats Scissors";
let rockLoss = "You Lose! Rock is beaten by Paper";
let scissorsWin = "You Win! Scissors beat Paper"; 
let scissorsLoss = "You Lose! Scissors are beaten by Rock";
let warning = "Please enter a valid selection";

function playRound(playerSelection, computerSelection) {
    
    let playerSelectionLowerCase = playerSelection.toLowerCase();

    if(playerSelectionLowerCase !== "paper" && playerSelectionLowerCase !== "rock" && playerSelectionLowerCase !== "scissors") {
        return warning;
    }
    else if(playerSelectionLowerCase === "paper" && computerSelection === "rock") {
        return paperWin;
    }
    else if (playerSelectionLowerCase === "paper" && computerSelection === "scissors") {
        return paperLoss;
    }
    else if (playerSelectionLowerCase === "rock" && computerSelection === "scissors") {
        return rockWin;
    }
    else if (playerSelectionLowerCase === "rock" && computerSelection === "paper") {
        return rockLoss;
    }
    else if (playerSelectionLowerCase === "scissors" && computerSelection === "paper") {
        return scissorsWin;
    }
    else if (playerSelectionLowerCase === "scissors" && computerSelection === "Rock") {
        return scissorsLoss;
    }
    else {
        return draw;
    }
    
}

// playerSelection = "Rock";
// console.log(playRound(prompt("rock, paper or scissors?"), computerSelection));
// const computerSelection = getComputerChoice();

 function game() {

    let playerScore = 0;
    let computerScore = 0;
    let drawScore = 0;
    let overallWin = "You Win! Congratulation!";
    let overallLoss = "Damn! you've just lost to a computer! haha!";
    let overallDraw = "No Win! It's a draw! boo!"
    

    for(let i = 0; i < 5; i++) {

        let playerSelection = prompt("Rock, Paper or Scissors?").toLowerCase();
        let computerSelection = getComputerChoice();

        playRound(playerSelection, computerSelection); 
        console.log(playerSelection);
        console.log(computerSelection); 
        console.log(playRound(playerSelection, computerSelection));

        if(playerSelection != "rock" && playerSelection != "paper" && playerSelection != "scissors") {
            i -= 1;
            console.log(warning);
        }
        else if(playRound(playerSelection, computerSelection) === rockWin ||
            playRound(playerSelection, computerSelection) === paperWin ||
            playRound(playerSelection, computerSelection) === scissorsWin) {

                playerScore += 1;      
                console.log(playerScore);  
                
            }
        else if(playRound(playerSelection, computerSelection) === rockLoss ||
                playRound(playerSelection, computerSelection) === paperLoss ||
                playRound(playerSelection, computerSelection) === scissorsLoss) {

                    computerScore += 1;
                    
                    console.log(computerScore);
                }
        else {
         
            drawScore += 1;
            console.log(drawScore);
        }

    } 

    if (playerScore > computerScore) {
        return overallWin;
    }
    else if(playerScore < computerScore) {
        return overallLoss;
    }
    else {
        return overallDraw;
    }

 }
 
 console.log(game());
