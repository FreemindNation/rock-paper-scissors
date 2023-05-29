function getComputerChoice () { //  function to create randomized computer's choice.
    let result = ["rock", "paper", "scissors"];

    let randomIndex = Math.floor(Math.random() * result.length);

    return result[randomIndex];  //
}
// return messages after every round of play.
let draw = "Draw! No winner. Go again";
let paperWin = "You Win! Paper beats Rock";
let paperLoss = "You Lose! Paper is beaten by Scissors";
let rockWin = "You Win! Rock beats Scissors";
let rockLoss = "You Lose! Rock is beaten by Paper";
let scissorsWin = "You Win! Scissors beat Paper"; 
let scissorsLoss = "You Lose! Scissors are beaten by Rock";


 const computerSelection = getComputerChoice();


const container = document.querySelector("div");
const buttons = document.querySelectorAll("button"); //create buttons for player choice.
const title = document.createElement("h3");     // create game's title.
title.textContent = "Please choose your weapon";
const body = document.querySelector("body");
body.insertBefore(title, container);    
const para = document.querySelector("p");
para.classList.add("para");

 
 
let playerScore = 0;
let computerScore = 0;
const score = document.createElement("div"); // div to store all the scores.
score.id = "score"
const player = document.createElement("p"); //para to store player's score.
player.textContent = `Player score: ${playerScore}`;
player.id = "player";
score.appendChild(player);
const computer = document.createElement("p"); // para to store computer's score.
computer.textContent = `Computer score: ${computerScore}`;
computer.id = "computer";
score.appendChild(computer);
body.appendChild(score);
let scoreMessage = document.createElement("p");
body.insertBefore(scoreMessage, score);
const winningMessage = document.createElement("p");
winningMessage.classList.add("end-message"); //message at the end if player wins.
winningMessage.textContent = `You won ${playerScore}:${computerScore}! Congratulations on saving mankind!`;
const losingMessage = document.createElement("p");
losingMessage.classList.add("end-message"); //message at the end if player loses.
losingMessage.textContent = `Damn! you have just lost ${computerScore}:${playerScore} to a computer. Now mankind is doomed all because of you!`;



//function for a round of the game with all possible outcomes.
function playRound(playerSelection, computerSelection) {
    
    if(playerSelection === "paper" && computerSelection === "rock") {
        player.textContent = `Player score: ${playerScore += 1}`;
        scoreMessage.textContent = `Nice! ${paperWin}`;
        scoreMessage.classList.remove("lose-message", "draw-message");
        scoreMessage.classList.add("win-message");

    }
    else if (playerSelection === "paper" && computerSelection === "scissors") {
        computer.textContent = `Computer score: ${computerScore += 1}`;
        scoreMessage.textContent = `Oops! ${paperLoss}`;
        scoreMessage.classList.remove("win-message", "draw-message");
        scoreMessage.classList.add("lose-message");
    }
    else if (playerSelection === "rock" && computerSelection === "scissors") {
        player.textContent = `Player score: ${playerScore += 1}`;
        scoreMessage.textContent = `Nice! ${rockWin}`;
        scoreMessage.classList.remove("lose-message", "draw-message");
        scoreMessage.classList.add("win-message");
    }
    else if (playerSelection === "rock" && computerSelection === "paper") {
        computer.textContent = `Computer score: ${computerScore += 1}`;
        scoreMessage.textContent = `Oops! ${rockLoss}`;
        scoreMessage.classList.remove("win-message", "draw-message");
        scoreMessage.classList.add("lose-message");
    }
    else if (playerSelection === "scissors" && computerSelection === "paper") {
        player.textContent = `Player score: ${playerScore += 1}`;
        scoreMessage.textContent = `Nice! ${scissorsWin}`;
        scoreMessage.classList.remove("lose-message", "draw-message");
        scoreMessage.classList.add("win-message");
    }
    else if (playerSelection === "scissors" && computerSelection === "Rock") {
        computer.textContent = `Computer score: ${computerScore += 1}`;
        scoreMessage.textContent = `Oops! ${scissorsLoss}`;
        scoreMessage.classList.remove("win-message", "draw-message");
        scoreMessage.classList.add("lose-message");
        
    }
    else {
        scoreMessage.textContent = `Oops! ${draw}`;
        scoreMessage.classList.remove("lose-message", "win-message");
        scoreMessage.classList.add("draw-message");
        
    }
    
}


const modal = document.querySelector(".modal"); //create modal.
const resetGame = document.querySelector(".reset-game");
const overLay = document.querySelector(".overlay");

function openModal() {                  //function to open modal.
    modal.classList.remove("hidden");
    overLay.classList.remove("hidden");
}

function closeModal() {                 //function to close modal.
    modal.classList.add("hidden");
    overLay.classList.add("hidden");
}

buttons.forEach(button => {
    
    button.addEventListener("click", function() { //add a click event listener to every choice button.
        let playerSelection = button.id;
        playRound( playerSelection, getComputerChoice());

        if (playerScore === 5) {    //open modal and display winning message if player gets 5 points first.
           openModal();
           winningMessage.textContent = `You won ${playerScore}:${computerScore}! Congratulations on saving mankind!`;
           modal.insertBefore(winningMessage, resetGame);
           resetGame.addEventListener("click", closeModal); //close modal and reset the game.
           resetGame.addEventListener("click", ()=> {   
            location.reload();
           });
        }
        else if(computerScore === 5) {  //open modal and display the losing message if computer gets 5 points first.
            openModal();
            losingMessage.textContent = `Damn! you have just lost ${computerScore}:${playerScore} to a computer. Now mankind is doomed all because of you!`;
            modal.insertBefore(losingMessage, resetGame);
            resetGame.addEventListener("click", closeModal); // close modal and reset the game.
            location.reload();
            resetGame.addEventListener("click", () => {     
           });
        }
    });
});

