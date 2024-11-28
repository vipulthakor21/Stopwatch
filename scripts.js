let ms = 0, s = 0, m = 0, h = 0
let timer

let display = document.querySelector('.timer-display')
let laps = document.querySelector('.laps')

function start() {
    if (!timer) {
        timer = setInterval(run, 10)
    }
}
function run() {
    display.innerHTML = getTimer()
    ms++
    if (ms == 100) {
        ms = 0
        s++
    }
    if (s == 60) {
        s = 0
        m++
    }
    if (m == 60) {
        m = 0
        h++
    }
}
// ==>>> Button:1 Start Function
function getTimer() {
    return (h < 10 ? "0" + h : h) + " : " + (m < 10 ? "0" + m : m) + " : " + (s < 10 ? "0" + s : s) + " : " + (ms < 10 ? "0" + ms : ms)
}
// ==>>> Button:2 Pause Function
function pause() {
    stopTimer()
}
function stopTimer() {
    clearInterval(timer)
    timer = false
}
// ==>>> Button:3 Reset Function
function reset() {
    stopTimer()
    ms = 0
    s = 0
    m = 0
    h = 0
    display.innerHTML = getTimer()
}
// ==>>> Button:4 Restart Function
function restart() {
    if (timer) {
        reset()
        start()
    }
}
// ==>>> Button:5 Lap Function
function lap() {
    if (timer) {
        let li = document.createElement("li")
        li.innerHTML = getTimer()
        laps.appendChild(li)
    }
}
// ==>>> Button:6 Reset Lap Function\
function resetlap() {
    laps.innerHTML = ""
}
// ------------------------------Mode-----------------------//
let btn = document.querySelector(".btn");
let mode = "light";

btn.addEventListener("click", () => {
    if (mode === "light") {
        mode = "dark";
        //   screen.style.backgroundColor = "light";
        document.querySelector("body").style.backgroundColor = "black";
    } else {
        mode = "light";
        //   screen.style.backgroundColor = "black";
        document.querySelector("body").style.backgroundColor = "white";
    }
});