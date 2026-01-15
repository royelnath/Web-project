let button = document.querySelector("button");

let colors = [
    "red",
    "green",
    "blue",
    "yellow",
    "pink",
    "orange",
    "purple",
    "sky blue",
    "nion",
    "pink"
]

function getRandomColor() {
    let idx = Math.floor(Math.random() * colors.length);
    return colors[idx];
}

function changeColor() {
    let randomcolor = getRandomColor();
    document.body.style.backgroundColor = randomcolor;
}

button.addEventListener("click", changeColor);