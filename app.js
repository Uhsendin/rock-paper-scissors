let playerScore = 0;
let computerScore = 0;
const rockBtn = document.getElementById("btn1");
const paperBtn = document.getElementById("btn2");
const scissorsBtn = document.getElementById("btn3");
const playerScoreDom = document.getElementById("results");
const computerScoreDom = document.getElementById("resultscomp");
const roundWinner = document.getElementById("final-winner")
const gameWinner = document.getElementById("game-winner")
const restartBtn = document.getElementById("btn-restart")

function getComputerChoice() {
  const answerChoices = ["rock", "paper", "scissors"];
  const randomChoice = Math.floor(Math.random() * 3);
  let compChoice = answerChoices[randomChoice];
  return compChoice;
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === "rock" && computerSelection === "rock") {
    roundWinner.innerHTML = "Tie! You both picked rock!";
  } else if (playerSelection === "paper" && computerSelection === "paper") {
    roundWinner.innerHTML = "Tie! You both picked Paper!";
  } else if (
    playerSelection === "scissors" &&
    computerSelection === "scissors"
  ) {
    roundWinner.innerHTML = "Tie! You both picked Scissors!";
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    computerScore++;
    roundWinner.innerHTML = "You lose! Paper beats rock.";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    playerScore++;
    roundWinner.innerHTML = "You win! Rock beats scissors.";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    playerScore++;
    roundWinner.innerHTML = "You win! Paper beats rock.";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    computerScore++;
    roundWinner.innerHTML = "You lose! Scissors beats paper.";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    computerScore++;
    roundWinner.innerHTML = "You lose! Rock beats scissors.";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    playerScore++;
    roundWinner.innerHTML = "You win! Scissors beats paper.";
  }
}

function game() {
  
  let computerSelection = getComputerChoice();

  (playRound(playerSelection, computerSelection));
  playerScoreDom.innerHTML = "Human's Score" + " "+ playerScore;
  computerScoreDom.innerHTML = "Computer's Score" + " " + computerScore;
  if (playerScore === 5) {
        gameWinner.innerHTML = "Game over! You win!";
        stopGame()
  } else if (computerScore === 5) {
    gameWinner.innerHTML = "Game over! You lose!"
    stopGame()
  } else if (playerScore === 5 || computerScore === 5) {
    gameWinner.innerHTML = "Game over! You tied!"
    stopGame()
  }
}

function stopGame() {
  rockBtn.classList.add("disabled")
  rockBtn.setAttribute("disabled", "disabled")
  paperBtn.classList.add("disabled")
  paperBtn.setAttribute("disabled", "disabled")
  scissorsBtn.classList.add("disabled")
  scissorsBtn.setAttribute("disabled", "disabled")
}
 
function restartGame() {
  playerScore = 0
  computerScore = 0
  window.location.reload(true)
}

  

rockBtn.addEventListener("click", () => {
  playerSelection = "rock";
  game();
});

paperBtn.addEventListener("click", () => {
  playerSelection = "paper";
  game();
});

scissorsBtn.addEventListener("click", () => {
  playerSelection = "scissors";
  game();
});

restartBtn.addEventListener("click", restartGame)