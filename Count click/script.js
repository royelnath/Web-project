let button = document.querySelector("button");
let counter = document.querySelector("span");
let count = 0;

button.addEventListener("click", () => {
    count++;
    counter.textContent = count;
    console.log(count);
})