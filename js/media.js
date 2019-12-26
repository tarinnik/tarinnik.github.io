window.addEventListener('load', function () {
    let hide = window.localStorage.getItem("hide");
    if (hide === "" || hide === null) return;
    hide = hide.split(";");
    for (let i = 0; i < hide.length; i++) {
        document.getElementById(hide[i]).remove();
    }
});

let menu = false;
let selection = 0;

const DIRECTION = {
    none: 0,
    remove: 'r',
    forward: 1,
    backwards: -1,
};

document.addEventListener('keydown', function (event) {
    key(event);
});

function key(event) {
    if (event.key === '-') toggle();
    else if (event.key === '/') window.location = '.';
    else if (event.key === '+') window.location = 'settings';
    if (menu) {
        switch (event.key) {
            case '4':
                highlight(DIRECTION.backwards);
                break;
            case '5':
                select(selection);
                break;
            case '6':
                highlight(DIRECTION.forward);
        }
    } else {
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
            case '0':
                select(9);
                break;
            case '.':
                select(10);
                break;
        }
    }
}

/**
 * Selects the services to navigate to
 * @param i index in list
 */
function select(i) {
    if (menu) {
        menuElements()[i].click();
    } else {
        const services = document.getElementById("services").childElementCount;
        if (i < services) {
            document.getElementsByClassName("grid-item")[i].getElementsByTagName("a")[0].click();
        }
    }
}

function menuElements() {
    return document.getElementById("nav").getElementsByTagName("a");
}

/**
 * Toggles between the menu and the websites
 */
function toggle() {
    menu = !menu;
    if (menu) {
        highlight(DIRECTION.none);
    } else {
        highlight(DIRECTION.remove);
        selection = 0;
    }
}

/**
 * Highlights in the direction specified
 * @param d direction to highlight
 */
function highlight(d) {
    let elements = menuElements();
    if (d === DIRECTION.none) {
        elements[selection].classList.add("selectedText");
    } else if (d === DIRECTION.remove) {
        elements[selection].classList.remove("selectedText");
    } else if (d === DIRECTION.backwards && selection > 0) {
        highlight(DIRECTION.remove);
        selection--;
        highlight(DIRECTION.none);
    } else if (d === DIRECTION.forward && selection < elements.length - 1) {
        highlight(DIRECTION.remove);
        selection++;
        highlight(DIRECTION.none);
    }
}