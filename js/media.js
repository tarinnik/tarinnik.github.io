window.addEventListener('load', function () {
    let hide = window.localStorage.getItem("hide");
    if (hide === "" || hide === null) {
        highlight(DIRECTION.none);
        return;
    }
    hide = hide.split(";");
    for (let i = 0; i < hide.length; i++) {
        document.getElementById(hide[i]).remove();
    }
    highlight(DIRECTION.none);
});

let menu = false;
let selection = 0;

const DIRECTION = {
    none: 0,
    remove: 'r',
    forward: 1,
    backwards: -1,
    up: -2,
    down: 2,
};

document.addEventListener('keydown', function (event) {
    key(event);
});

function key(event) {
    switch (event.key) {
        case '1':
            break;
        case '2':
            highlight(DIRECTION.down);
            break;
        case '3':
            break;
        case '4':
            highlight(DIRECTION.backwards);
            break;
        case '5':
            select();
            break;
        case '6':
            highlight(DIRECTION.forward);
            break;
        case '7':
            break;
        case '8':
            highlight(DIRECTION.up);
            break;
        case '9':
            break;
        case '0':
            break;
        case '.':
            break;
        case '+':
            window.location = 'settings';
            break;
        case '-':
            toggle();
            break;
        case '/':
            window.location = '.';
            break;
    }

}

/**
 * Selects the services to navigate to
 */
function select() {
    if (menu) {
        getElements()[selection].click();
    } else {
        getElements()[selection].getElementsByTagName('a')[0].click();
    }
}

function getElements() {
    if (menu) {
        return document.getElementById("nav").getElementsByTagName("a");
    } else {
        return document.getElementsByClassName("grid-item");
    }
}

/**
 * Toggles between the menu and the websites
 */
function toggle() {
    if (!menu) {
        menu = true;
        highlight(DIRECTION.none);
    } else {
        highlight(DIRECTION.remove);
        selection = 0;
        menu = false;
    }
}

/**
 * Highlights in the direction specified
 * @param d direction to highlight
 */
function highlight(d) {
    let elements = getElements();
    if (d === DIRECTION.none) {
        if (menu) {
            elements[selection].classList.add("selectedText");
        } else {
            elements[selection].classList.add("selected");
        }
    } else if (d === DIRECTION.remove) {
        if (menu) {
            elements[selection].classList.remove("selectedText");
        } else {
            elements[selection].classList.remove("selected");
        }
    } else if ((d === DIRECTION.backwards && selection > 0) && (menu || (!menu && selection % 3 !== 0))) {
        highlight(DIRECTION.remove);
        selection--;
        highlight(DIRECTION.none);
    } else if ((d === DIRECTION.forward && selection < elements.length - 1) && (menu || (!menu && selection % 3 !== 2))) {
        highlight(DIRECTION.remove);
        selection++;
        highlight(DIRECTION.none);
    } else if (d === DIRECTION.up && !menu && selection > 2) {
        highlight(DIRECTION.remove);
        selection -= 3;
        highlight(DIRECTION.none);
    } else if (d === DIRECTION.down && !menu && selection < elements.length - 3) {
        highlight(DIRECTION.remove);
        selection += 3;
        highlight(DIRECTION.none);
    }
}