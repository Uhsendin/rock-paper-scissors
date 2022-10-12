let playerScore = 0;
let computerScore = 0;
const rockBtn = document.getElementById("btn1");
const paperBtn = document.getElementById("btn2");
const scissorsBtn = document.getElementById("btn3");
const resultsDiv = document.getElementById("results");
const divComp = document.getElementById("resultscomp");
const finalWinner = document.getElementById("final-winner")

function getComputerChoice() {
  const answerChoices = ["rock", "paper", "scissors"];
  const randomChoice = Math.floor(Math.random() * 3);
  let compChoice = answerChoices[randomChoice];
  return compChoice;
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === "rock" && computerSelection === "rock") {
    finalWinner.innerHTML = "Tie! You both picked rock!";
  } else if (playerSelection === "paper" && computerSelection === "paper") {
    finalWinner.innerHTML = "Tie! You both picked Paper!";
  } else if (
    playerSelection === "scissors" &&
    computerSelection === "scissors"
  ) {
    finalWinner.innerHTML = "Tie! You both picked Scissors!";
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    computerScore++;
    finalWinner.innerHTML = "You lose! Paper beats rock.";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    playerScore++;
    finalWinner.innerHTML = "You win! Rock beats scissors.";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    playerScore++;
    finalWinner.innerHTML = "You win! Paper beats rock.";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    computerScore++;
    finalWinner.innerHTML = "You lose! Scissors beats paper.";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    computerScore++;
    finalWinner.innerHTML = "You lose! Rock beats scissors.";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    playerScore++;
    finalWinner.innerHTML = "You win! Scissors beats paper.";
  }
}

function game() {
  // for (let i = 0; i < 5; i++) {

  let computerSelection = getComputerChoice();

  (playRound(playerSelection, computerSelection));
  resultsDiv.innerHTML = "Human's Score" + " "+ playerScore;
  divComp.innerHTML = "Computer's Score" + " " + computerScore;
  if (playerScore > computerScore) {
        return "You win!";
      } else if (playerScore < computerScore) {
            return "You lose!";
    } else {
          return "You tied!";
        }
}
  
  //   //   console.log(game());

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
