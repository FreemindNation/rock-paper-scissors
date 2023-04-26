function getComputerChoice () {
    let result = ["Rock", "Paper", "Scissors"];

    let randomIndex = Math.floor(Math.random() * result.length);

    return result[randomIndex];
}

let draw = "Draw! No winner";
let paperWin = "You Win! Paper beats Rock";
let paperLoss = "You Lose! Paper beats Rock";
let rockWin = "You Win! Rock beats Scissors";
let rockLoss = "You Lose! Rock beats Scissors";
let scissorsWin = "You Win! Scissors beat Paper"; 
let scissorsLoss = "You Lose! Scissors beat Papers";

function playRound(playerSelection, computerSelection) {
    
    let playerSelectionNoCase = playerSelection.charAt(0).toUpperCase().concat(playerSelection.slice(1).toLowerCase());
    
    if(playerSelectionNoCase === "Paper" && computerSelection === "Rock") {
        return paperWin;
    }
    else if (playerSelectionNoCase === "Paper" && computerSelection === "Scissors") {
        return scissorsLoss;
    }
    else if (playerSelectionNoCase === "Rock" && computerSelection === "Scissors") {
        return rockWin;
    }
    else if (playerSelectionNoCase === "Rock" && computerSelection === "Paper") {
        return paperLoss;
    }
    else if (playerSelectionNoCase === "Scissors" && computerSelection === "Paper") {
        return scissorsWin;
    }
    else if (playerSelectionNoCase === "Scissors" && computerSelection === "Rock") {
        return rockLoss;
    }
    else {
        return draw;
    }

}

// playerSelection = "Rock";
// console.log(playRound("rock", getComputerChoice()));

function game() {

    let playerWins = 0;
    let computerWins = 0;
    let draws = 0;
    let overallWin = "You Win! Congratulation!";
    let overallLoss = "Damn! you lost to a computer! haha!";
    let overallDraw = "No Win! It's a draw! boo!"
    let playerInput = prompt("Rock, Paper or scissors?");

    for(let i = 1; i < 6; i++) {

        playRound(playerInput, getComputerChoice());
       


        if(playRound(playerInput, getComputerChoice) === paperWin || 
            playRound(playerInput, getComputerChoice) === rockWin ||
            playRound(playerInput, getComputerChoice) === scissorsWin) {

                playerWins ++;
            }
        else if(playRound(playerInput, getComputerChoice) === paperLoss || 
        playRound(playerInput, getComputerChoice) === rockLoss ||
        playRound(playerInput, getComputerChoice) === scissorsLoss) {

            computerWins ++;
        }
        else {
            draws ++;
        }
     }

    if (playerWins > computerWins) {

        return overallWin;
    }
    else if (playerWins < computerWins) {
        return overallLoss;
    }
    else {
        return overallDraw;
    }

}

console.log(game());

