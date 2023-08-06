function openPlayerConfig(event) {
  editedPlayer = +event.target.dataset.playerid;
  backdropElement.style.display = "block";
  playerConfigOverlayElement.style.display = "block";
}

function closePlayerConfig() {
  backdropElement.style.display = "none";
  playerConfigOverlayElement.style.display = "none";
  formElement.firstElementChild.classList.remove("error");
  errorOutputElement.textContent = "";
  formElement.firstElementChild.lastElementChild.value = "";
}

function savePlayerConfig(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const enterPlayername = formData.get("playername").trim();
  if (!enterPlayername) {
    event.target.firstElementChild.classList.add("error");
    errorOutputElement.textContent = "please enter a valid name!";
    return;
  }

  const updatedPlayerDataElement = document.getElementById(
    "player-" + editedPlayer + "-data"
  );

  updatedPlayerDataElement.children[1].textContent = enterPlayername;

  players[editedPlayer - 1].name = enterPlayername;
  closePlayerConfig();
}
