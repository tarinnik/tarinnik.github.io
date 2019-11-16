window.addEventListener('load', function () {
    let url = window.location.href;
    let i;
    if (i = url.indexOf("?"), i !== -1) {
        if (url[i + 1] === "m" && url.length === i + 2) {
            m();
        }
    }
});

function m() {
    document.getElementById("twitch").remove();
}

document.addEventListener('keydown', function (event) {
    key(event);
});

function key(event) {
    switch (event.key) {
        case '1':
            select(6);
            break;
        case '2':
            select(7);
            break;
        case '3':
            select(8);
            break;
        case '4':
            select(3);
            break;
        case '5':
            select(4);
            break;
        case '6':
            select(5);
            break;
        case '7':
            select(0);
            break;
        case '8':
            select(1);
            break;
        case '9':
            select(2);
            break;
    }
}

function select(i) {
    const services = document.getElementById("services").childElementCount;
    if (i < services) {
        document.getElementsByClassName("grid-item")[i].getElementsByTagName("a")[0].click();
    }
}