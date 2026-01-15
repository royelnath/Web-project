let button = document.querySelector("button");
let colorCode = "0123456789ABCDEF";
function getcolor() {
    let color = "#";
    for (i = 0; i < 6; i++) {
        color = color + colorCode[Math.floor(Math.random() * 16)];
    }
    return color;
}
console.log("the color code is ", getcolor());

button.addEventListener("click", () => {
    document.body.style.backgroundColor = getcolor();
    console.log("the color code is ", getcolor());
    document.querySelector("span").textContent = getcolor();
})