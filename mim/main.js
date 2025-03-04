const land = 1741984380;

function main() {
    calculate();
    setInterval(calculate, 1000);
}

function calculate() {
    let now = Math.floor(Date.now() / 1000);
    let difference = land - now;

    if (difference <= 0) {
        zero();
        return;
    }

    let seconds = difference % 60;
    let minutes = Math.floor(difference / 60) % 60;
    let hours = Math.floor(difference / 60 / 60) % 24;
    let days = Math.floor(difference / 60 / 60 / 24);

    document.getElementById("days").innerHTML = days.toString().padStart(2, "0");
    document.getElementById("hours").innerHTML = hours.toString().padStart(2, "0");
    document.getElementById("minutes").innerHTML = minutes.toString().padStart(2, "0");
    document.getElementById("seconds").innerHTML = seconds.toString().padStart(2, "0");
}

function zero() {
    document.getElementById("days").innerHTML = "00";
    document.getElementById("hours").innerHTML = "00";
    document.getElementById("minutes").innerHTML = "00";
    document.getElementById("seconds").innerHTML = "00";
}

main();
