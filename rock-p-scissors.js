function getComputerChoice () {
    let result = ["rock", "paper", "scissors"];

    let randomIndex = Math.floor(Math.random() * result.length);

    return result[randomIndex];
}

let draw = "Draw! No winner. Go again";
let paperWin = "You Win! Paper beats Rock";
let paperLoss = "You Lose! Paper is beaten by Scissors";
let rockWin = "You Win! Rock beats Scissors";
let rockLoss = "You Lose! Rock is beaten by Paper";
let scissorsWin = "You Win! Scissors beat Paper"; 
let scissorsLoss = "You Lose! Scissors are beaten by Rock";
let warning = "Please enter a valid selection";

function playRound(playerSelection, computerSelection) {
    
    if(playerSelection === "paper" && computerSelection === "rock") {
        return paperWin;
    }
    else if (playerSelection === "paper" && computerSelection === "scissors") {
        return paperLoss;
    }
    else if (playerSelection === "rock" && computerSelection === "scissors") {
        return rockWin;
    }
    else if (playerSelection === "rock" && computerSelection === "paper") {
        return rockLoss;
    }
    else if (playerSelection === "scissors" && computerSelection === "paper") {
        return scissorsWin;
    }
    else if (playerSelection === "scissors" && computerSelection === "Rock") {
        return scissorsLoss;
    }
    else {
        return draw;
    }
    
}

 const computerSelection = getComputerChoice();


const container = document.querySelector("div");
const buttons = document.querySelectorAll("button");
const title = document.createElement("h3");
title.textContent = "Please choose your weapon";
const body = document.querySelector("body");
body.insertBefore(title, container);
 
 



// if(playRound(playerSelection, computerSelection) === rockWin ||
//    playRound(playerSelection, computerSelection) === paperWin ||
//    playRound(playerSelection, computerSelection) === scissorsWin) {

//                 playerScore += 1;   
//                 score  
// }


buttons.forEach(button => {
    button.addEventListener("click", function () {
        playRound(button.id, getComputerChoice());
        // console.log(playRound(button.id, getComputerChoice()));
        let result = playRound(button.id, getComputerChoice());
        console.log(result);
    

        if (result === paperWin || result === rockWin || result === scissorsWin) {
            player.textContent = `Player score: ${playerScore += 1}`
            scoreMessage.textContent = `Nice! ${result}`;
        }
        else if(result === paperLoss || result === rockLoss || result === scissorsLoss) {
            computer.textContent = `Computer score: ${computerScore += 1}`;
            scoreMessage.textContent = `Oops! ${result}`;
        }
        else {
            scoreMessage.textContent = `Oops! ${result}`;
        }

        if (playerScore === 5 ) {
            winningMessage.textContent = "You Win! Congratulations!";
            return;
        }
        else if(computer === 5) {
            losingMessage.textContent = "Damn! you've just lost to a computer! haha!";
        }
    });
});



let playerScore = 0;
let computerScore = 0;
const score = document.createElement("div");
score.id = "score"
const player = document.createElement("p");
player.textContent = `Player score: ${playerScore}`;
player.id = "player";
score.appendChild(player);
const computer = document.createElement("p");
computer.textContent = `Computer score: ${computerScore}`;
computer.id = "computer";
score.appendChild(computer);
body.appendChild(score);
let scoreMessage = document.createElement("p");
body.insertBefore(scoreMessage, score);
const winningMessage = document.createElement("p");
winningMessage.classList.add("end-message");
const losingMessage = document.createElement("p");
losingMessage.classList.add("end-message");
body.appendChild(winningMessage);
body.appendChild(losingMessage);

// playerSelection = "Rock";
// console.log(playRound(prompt("rock, paper or scissors?"), computerSelection));

//  function game() {

//     let playerScore = 0;
//     let computerScore = 0;
//     let drawScore = 0;
//     let overallWin = "You Win! Congratulation!";
//     let overallLoss = "Damn! you've just lost to a computer! haha!";
//     let overallDraw = "No Win! It's a draw! boo!"
    

//     for(let i = 0; i < 5; i++) {

//         let playerSelection = prompt("Rock, Paper or Scissors?").toLowerCase();
//         let computerSelection = getComputerChoice();

//         playRound(playerSelection, computerSelection); 
//         console.log(playerSelection);
//         console.log(computerSelection); 
//         console.log(playRound(playerSelection, computerSelection));

//         if(playerSelection != "rock" && playerSelection != "paper" && playerSelection != "scissors") {
//             i -= 1;
//             console.log(warning);
//         }
//         else if(playRound(playerSelection, computerSelection) === rockWin ||
//             playRound(playerSelection, computerSelection) === paperWin ||
//             playRound(playerSelection, computerSelection) === scissorsWin) {

//                 playerScore += 1;      
//                 console.log(playerScore);  
                
//             }
//         else if(playRound(playerSelection, computerSelection) === rockLoss ||
//                 playRound(playerSelection, computerSelection) === paperLoss ||
//                 playRound(playerSelection, computerSelection) === scissorsLoss) {

//                     computerScore += 1;
                    
//                     console.log(computerScore);
//                 }
//         else {
         
//             drawScore += 1;
//             console.log(drawScore);
//         }

//     } 

//     if (playerScore > computerScore) {
//         return overallWin;
//     }
//     else if(playerScore < computerScore) {
//         return overallLoss;
//     }
//     else {
//         return overallDraw;
//     }

//  }
 
//  console.log(game());
