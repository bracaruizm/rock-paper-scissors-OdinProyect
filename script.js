function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 4);
  if (randomNumber === 0) {
    return getComputerChoice();
  }
  return randomNumber;
}

function convertPickToString(number) {
  let pick;
  if (number == 1) {
    pick = "rock";
  } else if (number == 2) {
    pick = "paper";
  } else {
    pick = "scissors";
  }
  return pick;
}

function askChoice() {
  let userPick;
  let askPick = prompt("Please, submit 'rock', 'paper' or 'scissors':")
    .toLowerCase()
    .trim();
  switch (askPick) {
    case "rock":
      return 1;
    case "paper":
      return 2;
    case "scissors":
      return 3;
    default:
      return 0;
  }
}

function playGame() {
  let userPick = askChoice();
  if (userPick == 0) {
    alert("Sorry, but the option submitted is not valid. Try again");
    return;
  }
  let randomNumber = getComputerChoice();
  let computerPickString = convertPickToString(randomNumber);

  if (userPick == randomNumber) {
    alert(`The computer chose ${computerPickString}. It's a draw!`);
    return;
  } else if (
    (userPick == 1 && randomNumber == 3) ||
    (userPick == 2 && randomNumber == 1) ||
    (userPick == 3 && randomNumber == 2)
  ) {
    alert(`The computer chose ${computerPickString}. You win!`);
    return;
  } else {
    alert(`The computer chose ${computerPickString}. You lost!`);
    return;
  }
}

while (true) {
  playGame();
}
