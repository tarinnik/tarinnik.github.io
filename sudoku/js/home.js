function play() {
    let select = document.getElementById('difficulty');
    let difficulty = select.options[select.selectedIndex].value;
    window.location = "play.html?difficulty=" + difficulty;
}

function settings() {
    window.location = "settings.html";
}