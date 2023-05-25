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


 const computerSelection = getComputerChoice();


const container = document.querySelector("div");
const buttons = document.querySelectorAll("button");
const title = document.createElement("h3");
title.textContent = "Please choose your weapon";
const body = document.querySelector("body");
body.insertBefore(title, container);
 
 
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
winningMessage.textContent = "You win! Congratulations on saving mankind!";
const losingMessage = document.createElement("p");
losingMessage.classList.add("end-message");
losingMessage.textContent = "Damn! you have just lost to a computer. Now mankind is doomed all because of you!";




function playRound(playerSelection, computerSelection) {
    
    if(playerSelection === "paper" && computerSelection === "rock") {
        player.textContent = `Player score: ${playerScore += 1}`;
        scoreMessage.textContent = `Nice! ${paperWin}`;
    }
    else if (playerSelection === "paper" && computerSelection === "scissors") {
        computer.textContent = `Computer score: ${computerScore += 1}`;
        scoreMessage.textContent = `Oops! ${paperLoss}`;
    }
    else if (playerSelection === "rock" && computerSelection === "scissors") {
        player.textContent = `Player score: ${playerScore += 1}`;
        scoreMessage.textContent = `Nice! ${rockWin}`;
    }
    else if (playerSelection === "rock" && computerSelection === "paper") {
        computer.textContent = `Computer score: ${computerScore += 1}`;
        scoreMessage.textContent = `Oops! ${rockLoss}`;
    }
    else if (playerSelection === "scissors" && computerSelection === "paper") {
        player.textContent = `Player score: ${playerScore += 1}`;
        scoreMessage.textContent = `Nice! ${scissorsWin}`;
    }
    else if (playerSelection === "scissors" && computerSelection === "Rock") {
        computer.textContent = `Computer score: ${computerScore += 1}`;
        scoreMessage.textContent = `Oops! ${scissorsLoss}`;
        
    }
    else {
        scoreMessage.textContent = `Oops! ${draw}`
        
    }
    
}


const modal = document.querySelector(".modal");
const resetGame = document.querySelector(".reset-game");
const overLay = document.querySelector(".overlay");

function openModal() {
    modal.classList.remove("hidden");
    overLay.classList.remove("hidden");
}

function closeModal() {
    modal.classList.add("hidden");
    overLay.classList.add("hidden");
}

buttons.forEach(button => {
    
    button.addEventListener("click", function() {
        let playerSelection = button.id;
        console.log(getComputerChoice());
        playRound( playerSelection, computerSelection);

        if (playerScore === 5) {
           openModal();
           modal.insertBefore(winningMessage, resetGame);
           resetGame.addEventListener("click", closeModal);
           resetGame.addEventListener("click", ()=> {
            location.reload();
           });
        }
        else if(computerScore === 5) {
            openModal();
            modal.insertBefore(losingMessage, resetGame);
            resetGame.addEventListener("click", closeModal);
            resetGame.addEventListener("click", () => {
            location.reload();
           });
        }
    });
});

