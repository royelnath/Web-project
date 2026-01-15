let inputb = document.querySelector("#input");
let count = document.querySelector("#count");

inputb.addEventListener("input", () => {
    let charcter = inputb.value;
    count.textContent = charcter.length;
})
