// function to get the choice from computer
function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissor"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}
function playRound(playerChoice, computerChoice) {
  playerChoice = playerChoice.toLowerCase();
  computerChoice = computerChoice.toLowerCase();
  if (playerChoice != "rock" && playerChoice != "paper" && playerChoice != "scissor") {
    return "this is invalid give the input on rock paper or scissors"
  }
  if (playerChoice === computerChoice) {
    return "the game is tie";
  }
  else if (playerChoice == "rock" && computerChoice == "scissor" ||
    playerChoice == "paper" && computerChoice == "rock" ||
    playerChoice == "scissor" && computerChoice == "paper") {
    return `you win`;
  }
  else {
    return `you lose`;
  }
}
function game() {
  let playerScore = 0;
  let computerScore = 0;
  for (let count = 1; count <= 5; count++) {
    playerChoice = prompt("enter the choice(rock,paper,scissor)");
    computerChoice = getComputerChoice();
    const result = playRound(playerChoice,computerChoice);

    console.log(` count${round}: ${result}`);

    if (result.includes("win")) {
      playerScore++;
    } else if (result.includes("lose")) {
      computerScore++;
    }
  }

  if (playerScore > computerScore) {
    console.log("Congratulations! You won the game!");
  } else if (playerScore < computerScore) {
    console.log("Oops! You lost the game.");
  } else {
    console.log("It's a tie game!");
  }
}

// Start the game
game()