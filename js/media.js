window.addEventListener('load', function () {
    let url = window.location.href;
    let i = url.indexOf("?");
    if (i !== -1) {
        redirect(i, false);
    } else {
        let r = localStorage.getItem("redirect");
        if (r !== null) {
            redirect(r, true);
        }
    }
});

function redirect(item, load) {
    let url = window.location.href;
    if (load) {
        if (item === 'm') {
            m(load);
        }
    } else {
        // m
        if (url[item + 1] === 'm' && url.length === item + 2) {
            m(load);
        }
    }
}

function m(load) {
    if (load) history.replaceState({}, "Media", "?m");
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