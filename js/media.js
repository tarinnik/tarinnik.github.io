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

function select(i) {
    const services = document.getElementById("services").childElementCount;
    if (i < services) {
        document.getElementsByClassName("grid-item")[i].getElementsByTagName("a")[0].click();
    }
}

const map = {};
onkeydown = onkeyup = function(e){
    map[e.keyCode] = e.type === 'keydown';

    // Numpad 7
    if (map[103]) {
        select(0);
    }

    // Numpad 8
    else if (map[104]) {
        select(1);
    }

    //Numpad 9
    else if (map[105]) {
        select(2);
    }

    //Numpad 4
    else if (map[100]) {
        select(3);
    }

    // Numpad 5
    else if (map[101]) {
        select(4);
    }

    //Numpad 6
    else if (map[102]) {
        select(5);
    }

    // Numpad 1
    else if (map[97]) {
        select(6);
    }

    // Numpad 2
    else if (map[98]) {
        select(7);
    }

    //Numpad 3
    else if (map[99]) {
        select(8);
    }
};