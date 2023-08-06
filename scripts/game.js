function resetGame() {
  gameOverElement.style.display = "none";
  gameOverElement.firstElementChild.innerHTML =
    'You won!<span id="winner-name">PLAYER NAME</span>';
  editedPlayer = 0;
  activePlayer = 0;
  currentRound = 0;
  gameIsOver = false;
  let index = 0;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      gameData[i][j] = 0;
      field = gameFieldElements[index];
      console.log(field);
      field.classList.remove("disabled");
      field.textContent = "";
      index++;
    }
  }
  field = gameFieldElements[index];
  field.classList.remove("disabled");
  field.textContent = "";
}
function startNewGame() {
  if (!players[0].name || !players[1].name) {
    alert("enter the players' name!");
    return;
  }
  gameAreaelement.style.display = "block";
  activePlayerName.textContent = players[activePlayer].name;
  resetGame();
}

function selectGameField(event) {
  const selectedField = event.target;
  if (selectedField.textContent !== "" || gameIsOver) {
    return;
  }
  selectedField.textContent = players[activePlayer].symbol;
  selectedField.classList.add("disabled");
  gameData[selectedField.dataset.row - 1][selectedField.dataset.col - 1] =
    activePlayer + 1;
  activePlayer = +!activePlayer;
  activePlayerName.textContent = players[activePlayer].name;
  currentRound++;

  const winnerId = checkForGameOver();
  if (winnerId !== 0) {
    gameIsOver = true;
    endGame(winnerId);
  }
}

function checkForGameOver() {
  for (let i = 0; i < 3; i++) {
    if (
      gameData[i][0] > 0 &&
      gameData[i][0] === gameData[i][1] &&
      gameData[i][1] === gameData[i][2]
    ) {
      return gameData[i][0];
    }
  }

  for (let i = 0; i < 3; i++) {
    if (
      gameData[0][i] > 0 &&
      gameData[0][i] === gameData[1][i] &&
      gameData[0][i] === gameData[2][i]
    ) {
      return gameData[0][i];
    }
  }

  if (
    gameData[0][0] > 0 &&
    gameData[0][0] === gameData[1][1] &&
    gameData[1][1] === gameData[2][2]
  ) {
    return gameData[0][0];
  }

  if (
    gameData[2][0] > 0 &&
    gameData[2][0] === gameData[1][1] &&
    gameData[1][1] === gameData[0][2]
  ) {
    return gameData[2][0];
  }

  if (currentRound === 9) {
    return -1;
  }
  return 0;
}

function endGame(winnerId) {
  gameOverElement.style.display = "block";
  if (winnerId > 0) {
    gameOverElement.firstElementChild.firstElementChild.textContent =
      players[winnerId - 1].name;
  } else {
    gameOverElement.firstElementChild.textContent = "Draw!";
  }
}
