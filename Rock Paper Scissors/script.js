let userScore = 0;
let comScore = 0;

const msg = document.querySelector("#msg");
const myScoreEl = document.querySelector("#myscore");
const comScoreEl = document.querySelector("#Comscore");
const userPickImg = document.querySelector("#userPickImg");
const comPickImg = document.querySelector("#comPickImg");

const images = {
  rock: "images/Rock.jpg",
  paper: "images/Paper.jpg",
  scissors: "images/Scissors.jpg",
};

const computerChoice = () => {
  const opt = ["rock", "paper", "scissors"];
  // Math.random() gives a decimal 0–1, Math.floor rounds it down to a whole index
  const random = Math.floor(Math.random() * 3);
  return opt[random];
};

const updateScoreboard = () => {
  myScoreEl.innerText = userScore;
  comScoreEl.innerText = comScore;
};

const setMessage = (text, type) => {
  msg.innerText = text;
  msg.classList.remove("win", "lose", "draw");
  if (type) msg.classList.add(type);
};

const drawGame = () => {
  setMessage("Game is a draw", "draw");
};

const showWinner = (userWin, userChoice, comChoice) => {
  if (userWin) {
    userScore++;
    setMessage(`You win! ${userChoice} beats ${comChoice}`, "win");
  } else {
    comScore++;
    setMessage(`You lose! ${comChoice} beats ${userChoice}`, "lose");
  }
  updateScoreboard();
};

const playGame = (userChoice) => {
  const comChoice = computerChoice();

  userPickImg.src = images[userChoice];
  userPickImg.alt = userChoice;
  comPickImg.src = images[comChoice];
  comPickImg.alt = comChoice;

  if (comChoice === userChoice) {
    drawGame();
    return;
  }

  let userWin = true;
  if (userChoice === "rock") {
    userWin = comChoice !== "paper";
  } else if (userChoice === "paper") {
    userWin = comChoice !== "scissors";
  } else {
    userWin = comChoice !== "rock";
  }

  showWinner(userWin, userChoice, comChoice);
};

// Handle the user clicking a choice
const choices = document.querySelectorAll(".choice");
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});

// Reset button clears score, message, and picks
const resetBtn = document.querySelector("#resetBtn");
resetBtn.addEventListener("click", () => {
  userScore = 0;
  comScore = 0;
  updateScoreboard();
  setMessage("Play the game", null);
  userPickImg.src = "";
  comPickImg.src = "";
});
