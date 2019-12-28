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

function getColumns() {
    let a = document.getElementById("services");
    let b = window.getComputedStyle(a).getPropertyValue("grid-template-columns");
    return b.split(' ').length;
}

/**
 * Highlights in the direction specified
 * @param d direction to highlight
 */
function highlight(d) {
    let elements = getElements();
    let columns = getColumns();
    if (d === DIRECTION.none) {
        if (menu) {
            elements[selection].classList.add("selectedText");
        } else {
            let e = elements[selection].getElementsByTagName("img")[0].src;
            e = e.split('/');
            e = e[e.length -1 ];
            elements[selection].getElementsByTagName("img")[0].src = "/images/" + e.split('.')[0] + "-selected.jpg";
        }
    } else if (d === DIRECTION.remove) {
        if (menu) {
            elements[selection].classList.remove("selectedText");
        } else {
            let e = elements[selection].getElementsByTagName("img")[0].src;
            e = e.split('/');
            e = e[e.length -1 ];
            elements[selection].getElementsByTagName("img")[0].src = "/images/" + e.split('-')[0] + '.jpg';
        }
    } else if ((d === DIRECTION.backwards && selection > 0) && (menu || (!menu && selection % columns !== 0))) {
        highlight(DIRECTION.remove);
        selection--;
        highlight(DIRECTION.none);
    } else if ((d === DIRECTION.forward && selection < elements.length - 1) && (menu || (!menu && selection % columns !== columns - 1))) {
        highlight(DIRECTION.remove);
        selection++;
        highlight(DIRECTION.none);
    } else if (d === DIRECTION.up && !menu && selection > columns - 1) {
        highlight(DIRECTION.remove);
        selection -= columns;
        highlight(DIRECTION.none);
    } else if (d === DIRECTION.down && !menu && selection < elements.length - columns) {
        highlight(DIRECTION.remove);
        selection += columns;
        highlight(DIRECTION.none);
    }
}