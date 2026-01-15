let userInput = document.querySelector("#userInput");
let check = document.querySelector("#check");
let showRandomNumber = document.querySelector(".random");
let randomNumberButton = document.querySelector("#showRandom");
let message = document.querySelector("#message");
let result = document.querySelector(".result");
//generate a random number
let randomnumber = Math.floor(Math.random() * 100);
let a = check.addEventListener("click", () => {
    let uservalue = userInput.value;
    console.log("You guess", uservalue);
    checkWinner();
});
console.log(randomnumber);

let checkWinner = () => {
    if (userInput.value == randomnumber) {
        message.textContent = "You win the game";
    } else {
        message.textContent = "You lose the game";
    }
}