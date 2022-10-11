let playerScore = 0;
let computerScore = 0;
const rockBtn = document.getElementById("btn1");
const paperBtn = document.getElementById("btn2");
const scissorsBtn = document.getElementById("btn3");

rockBtn.addEventListener("click", () => {
  playerSelection = "rock"
  game();
})

paperBtn.addEventListener("click", () => {
  playerSelection = "paper"
  game();
})

scissorsBtn.addEventListener("click", () => {
  playerSelection = "scissors"
  game();
})

function getComputerChoice() {
  const answerChoices = ["rock", "paper", "scissors"];
  const randomChoice = Math.floor(Math.random() * 3);
  let compChoice = answerChoices[randomChoice];
  return compChoice;
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === "rock" && computerSelection === "rock") {
    return "Tie! You both picked rock!";
  } else if (playerSelection === "paper" && computerSelection === "paper") {
    return "Tie! You both picked Paper!";
  } else if (
    playerSelection === "scissors" &&
    computerSelection === "scissors"
    ) {
      return "Tie! You both picked Scissors!";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
      computerScore++;
      return "You lose! Paper beats rock.";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
      playerScore++;
      return "You win! Rock beats scissors.";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    playerScore++;
    return "You win! Paper beats rock.";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    computerScore++;
    return "You lose! Scissors beats paper.";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    computerScore++;
    return "You lose! Rock beats scissors.";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    playerScore++;
    return "You win! Scissors beats paper.";
  }
  }



function game() {
  // for (let i = 0; i < 5; i++) {
   
    let computerSelection = getComputerChoice();
    
    console.log(playRound(playerSelection, computerSelection));
  }
//   if (playerScore > computerScore) {
//     return "You win!";
//   } else if (playerScore < computerScore) {
//     return "You lose!";
//   } else {
//     return "You tied!";
//   }
// }

// console.log(game());
