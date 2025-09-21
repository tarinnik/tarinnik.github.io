function q1() {
    let text = document.getElementById("q1r");
    if (document.getElementById("q1c3").checked) {
        text.innerHTML = "Correct! Your clue: B";
    } else {
        text.innerHTML = "Nope! Call yourself a Twilight fan?";
    }
}
document.getElementById("q1b").onclick = () => q1();

function q2() {
    let text = document.getElementById("q2r");
    if (document.getElementById("q2c2").checked) {
        text.innerHTML = "Very nice! Your clue: A";
    } else {
        text.innerHTML = "Really bro? You're joking";
    }
}
document.getElementById("q2b").onclick = () => q2();

function q3() {
    let text = document.getElementById("q3r");
    if (document.getElementById("q3c2").checked) {
        text.innerHTML = "Yayyy! Your clue: C";
    } else {
        text.innerHTML = "Ooof this is brutal";
    }
}
document.getElementById("q3b").onclick = () => q3();

function q4() {
    let text = document.getElementById("q4r");
    if (document.getElementById("q4c2").checked) {
        text.innerHTML = "Congrats! Your clue: O";
    } else {
        text.innerHTML = "Wow I can't watch";
    }
}
document.getElementById("q4b").onclick = () => q4();

function q5() {
    let text = document.getElementById("q5r");
    if (document.getElementById("q5c4").checked) {
        text.innerHTML = "Yipee! Your clue: R";
    } else {
        text.innerHTML = "There's no way you got this wrong. Bit sad really.";
    }
}
document.getElementById("q5b").onclick = () => q5();

function q6() {
    let text = document.getElementById("q6r");
    if (document.getElementById("q6c1").checked) {
        text.innerHTML = "You're too good! Your clue: U";
    } else {
        text.innerHTML = "Better go watch the movie again";
    }
}
document.getElementById("q6b").onclick = () => q6();

function q7() {
    let text = document.getElementById("q7r");
    if (document.getElementById("q7c4").checked) {
        text.innerHTML = "Vroom vroom! Your clue: P";
    } else {
        text.innerHTML = "Unbelievable";
    }
}
document.getElementById("q7b").onclick = () => q7();

function q8() {
    let text = document.getElementById("q8r");
    if (document.getElementById("q8c3").checked) {
        text.innerHTML = "Easy clap! Your clue: D";
    } else {
        text.innerHTML = "hahahahahahaha";
    }
}
document.getElementById("q8b").onclick = () => q8();

function q9() {
    let text = document.getElementById("q9r");
    if (document.getElementById("q9c3").checked) {
        text.innerHTML = "Oh wow well done! I didn't know this one. You know have all the letters you need, you just gotta rearrange them a bit!";
    } else {
        text.innerHTML = "Yeah I don't blame you for getting this wrong.";
    }
}
document.getElementById("q9b").onclick = () => q9();
