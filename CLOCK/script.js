let clock = document.querySelector("h1");

function clockupdate() {
    const now = new Date();
    let hour = now.getHours();
    let minutes = now.getMinutes();
    let second = now.getSeconds();
    hour = (hour < 10 ? "0" : "") + hour;
    minutes = (minutes < 10 ? "0" : "") + minutes;
    second = (second < 10 ? "0" : "") + second;
    let time = `${hour}:${minutes}:${second}`;
    clock.textContent = time;
}

setInterval(clockupdate, 100);
clockupdate();