const gameData = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

let editedPlayer = 0;
let activePlayer = 0;
let currentRound = 0;
let gameIsOver = false;

const players = [
  {
    name: "",
    symbol: "X",
  },
  {
    name: "",
    symbol: "O",
  },
];

const playerConfigOverlayElement = document.getElementById("config-overlay");
const backdropElement = document.getElementById("backdrop");
const errorOutputElement = document.getElementById("config-errors");
const startNewGameBtnelement = document.getElementById("start-new-game-btn");
const gameAreaelement = document.getElementById("active-game");
const gameFieldElements = document.querySelectorAll("#game-board li");
const activePlayerName = document.getElementById("active-player-name");

const editPlayer1BtnElement = document.querySelector("#edit-player-1-btn");
const editPlayer2BtnElement = document.querySelector("#edit-player-2-btn");
const cancelConfigBtnElement = document.getElementById("cancel-config-btn");
const formElement = document.querySelector("form");
const gameOverElement = document.getElementById("game-over");

editPlayer1BtnElement.addEventListener("click", openPlayerConfig);
editPlayer2BtnElement.addEventListener("click", openPlayerConfig);
cancelConfigBtnElement.addEventListener("click", closePlayerConfig);
backdropElement.addEventListener("click", closePlayerConfig);
formElement.addEventListener("submit", savePlayerConfig);
startNewGameBtnelement.addEventListener("click", startNewGame);

for (let i = 0; i <= 8; i++) {
  gameFieldElements[i].addEventListener("click", selectGameField);
}
