window.addEventListener('DOMContentLoaded', function () {
    rearrangeOrder();
    removeMedia();
    navbar();
    setBackground();
    setHighlight();
});

let HIGHLIGHT_COLOUR = "white";

function rearrangeOrder() {
    let order = window.localStorage.getItem("order");
    if (order !== null) {
        let parent = document.getElementById("services");
        order = order.split(';');
        for (let i in order) {
            let e = document.getElementById(order[i]);
            parent.insertBefore(e, parent.getElementsByClassName("grid-item")[i]);
        }
    }
}

function removeMedia() {
    let media = window.localStorage.getItem("media");
    if (media !== "" && media !== null) {
        media = media.split(";");
        for (let i = 0; i < media.length; i++) {
            document.getElementById(media[i]).remove();
        }
    }
}

function navbar() {
    if (window.localStorage.getItem("nav-disabled") === "true") {
        document.getElementById("nav").remove();
    }
}

function setBackground() {
    let background = window.localStorage.getItem("background");
    if (background !== null && isHex(background)) {
        document.getElementsByTagName("body")[0].style.background = '#' + background;
    }
}

function setHighlight() {
    let highlight = window.localStorage.getItem("highlight");
    if (highlight !== null && isHex(highlight)) {
        HIGHLIGHT_COLOUR = '#' + highlight;
    }
    document.getElementsByTagName("img")[0].style.background = HIGHLIGHT_COLOUR;
}

function isHex(s) {
    let re = /[0-9a-fA-F]{6}/g;
    return re.test(s);
}