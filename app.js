function getcomputerchoice() {
  const answerChoices = ["Rock", "Paper", "Scissors"];
  const randomChoice = Math.floor(Math.random() * 3);
  const compChoice = answerChoices[randomChoice];
  return compChoice;
}
// console.log(getcomputerchoice())

function playRound(playerSelection, computerSelection) {
  if (playerSelection === "Rock" && computerSelection === "Rock") {
    return "You tied! You both picked Rock";
  } else if (playerSelection === "Paper" && computerSelection === "Paper") {
    return "You tied! You both picked Paper";
  } else if (
    playerSelection === "Scissors" &&
    computerSelection === "Scissors"
  ) {
    return "You tied! You both picked Scissors";
  } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
    return "You win! Rock beats Scissors";
  } else if (playerSelection === "Rock" && computerSelection === "Paper") {
    return "You lose! Paper beats Rock";
  } else if (playerSelection === "Paper" && computerSelection === "Rock") {
    return "You win! Paper beats Rock";
  } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
    return "You lose! Scissors beats Paper";
  } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
    return "You win! Scissors beats Paper";
  } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
    return "You lose! Rock beats Scissors";
  }
}
