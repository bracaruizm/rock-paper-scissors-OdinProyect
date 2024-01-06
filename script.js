let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3) + 1;
  return randomNumber;
}

function convertPickToString(number) {
  switch (number) {
    case 1:
      return "rock";
    case 2:
      return "paper";
    case 3:
      return "scissors";
    default:
      return "";
  }
}

function playRound(playerPick) {
  let computerPick = getComputerChoice();
  let computerPickString = convertPickToString(computerPick);

  if (playerPick === computerPick) {
    displayResult(`It's a draw! Both chose ${computerPickString}`);
  } else if (
    (playerPick == 1 && computerPick == 3) ||
    (playerPick == 2 && computerPick == 1) ||
    (playerPick == 3 && computerPick == 2)
  ) {
    playerScore++;
    displayResult(
      `You win! ${convertPickToString(playerPick)} beats ${computerPickString}`
    );
  } else {
    computerScore++;
    displayResult(
      `You lost! ${computerPickString} beats ${convertPickToString(playerPick)}`
    );
  }

  updateScore();
  checkWinner();
}

function displayResult(message) {
  document.getElementById("result").innerText = message;
}

function updateScore() {
  document.getElementById("player-score").innerText = playerScore;
  document.getElementById("computer-score").innerText = computerScore;
}

function checkWinner() {
  if (playerScore === 5) {
    displayResult("Congratulations! You are the winner!");
    resetGame();
  } else if (computerScore === 5) {
    displayResult("Sorry, you lost. Better luck next time!");
    resetGame();
  }
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  updateScore();
}

document.getElementById("rock").addEventListener("click", function () {
  playRound(1);
});

document.getElementById("paper").addEventListener("click", function () {
  playRound(2);
});

document.getElementById("scissors").addEventListener("click", function () {
  playRound(3);
});

// function getComputerChoice() {
//   let randomNumber = Math.floor(Math.random() * 4);
//   if (randomNumber === 0) {
//     return getComputerChoice();
//   }
//   return randomNumber;
// }

// function convertPickToString(number) {
//   let pick;
//   if (number == 1) {
//     pick = "rock";
//   } else if (number == 2) {
//     pick = "paper";
//   } else {
//     pick = "scissors";
//   }
//   return pick;
// }

// function askChoice() {
//   let userPick;
//   let askPick = prompt("Please, submit 'rock', 'paper' or 'scissors':")
//     .toLowerCase()
//     .trim();
//   switch (askPick) {
//     case "rock":
//       return 1;
//     case "paper":
//       return 2;
//     case "scissors":
//       return 3;
//     default:
//       return 0;
//   }
// }

// function playGame() {
//   let userPick = askChoice();
//   if (userPick == 0) {
//     alert("Sorry, but the option submitted is not valid. Try again");
//     return;
//   }
//   let randomNumber = getComputerChoice();
//   let computerPickString = convertPickToString(randomNumber);

//   if (userPick == randomNumber) {
//     alert(`The computer chose ${computerPickString}. It's a draw!`);
//     return;
//   } else if (
//     (userPick == 1 && randomNumber == 3) ||
//     (userPick == 2 && randomNumber == 1) ||
//     (userPick == 3 && randomNumber == 2)
//   ) {
//     alert(`The computer chose ${computerPickString}. You win!`);
//     return;
//   } else {
//     alert(`The computer chose ${computerPickString}. You lost!`);
//     return;
//   }
// }

// while (true) {
//   playGame();
// }
