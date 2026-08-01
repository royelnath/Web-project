let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset");
let newGameBtn = document.querySelector("#newGameBtn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector(".msg");
let main = document.querySelector("main");
let turnLabel = document.querySelector("#turnLabel");
let scoreOEl = document.querySelector("#scoreO");
let scoreXEl = document.querySelector("#scoreX");
let scoreDrawEl = document.querySelector("#scoreDraw");

let count = 0;
let turnO = true;
let scoreO = 0;
let scoreX = 0;
let scoreDraw = 0;

const winPtrn = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

// Print X or O on click, then check for a winner or a draw
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (box.innerText !== "" || box.disabled) return;

        if (turnO) {
            box.innerText = "O";
            turnO = false;
        } else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        turnLabel.innerText = turnO ? "O" : "X";

        count++;

        const winner = checkWinner();
        if (!winner && count === 9) {
            gameDraw();
        }
    });
});

const disabledBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};

let enabledBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
        box.classList.remove("win-cell");
    }
};

const updateScoreboard = () => {
    scoreOEl.innerText = scoreO;
    scoreXEl.innerText = scoreX;
    scoreDrawEl.innerText = scoreDraw;
};

const showWinner = (winner, pattern) => {
    if (winner === "O") {
        scoreO++;
    } else {
        scoreX++;
    }
    updateScoreboard();

    pattern.forEach((i) => boxes[i].classList.add("win-cell"));

    msg.innerText = `Congratulations, winner is ${winner}!`;
    msgContainer.classList.remove("hide");
    disabledBoxes();
};

const checkWinner = () => {
    for (let ptrn of winPtrn) {
        let pos0val = boxes[ptrn[0]].innerText;
        let pos1val = boxes[ptrn[1]].innerText;
        let pos2val = boxes[ptrn[2]].innerText;

        if (pos0val !== "" && pos1val !== "" && pos2val !== "") {
            if (pos0val === pos1val && pos1val === pos2val) {
                showWinner(pos0val, ptrn);
                return true;
            }
        }
    }
    return false;
};

const gameDraw = () => {
    scoreDraw++;
    updateScoreboard();

    msg.innerText = `Game was a draw.`;
    msgContainer.classList.remove("hide");
    disabledBoxes();
};

const resetGame = () => {
    turnO = true;
    count = 0;
    turnLabel.innerText = "O";
    enabledBoxes();
    msgContainer.classList.add("hide");
    main.classList.remove("hide");
};

newGameBtn.addEventListener("click", resetGame);
resetbtn.addEventListener("click", resetGame);
