window.addEventListener('DOMContentLoaded', function () {
    let hide = window.localStorage.getItem("hide");
    if (hide === "" || hide === null) {
        cleanup();
        return;
    }
    hide = hide.split(";");
    for (let i = 0; i < hide.length; i++) {
        document.getElementById(hide[i]).remove();
    }
    cleanup();
});

function cleanup() {
    hideSelected();
    highlight(DIRECTION.none);
}

function hideSelected() {
    let elements = getElements();
    for (let i = 0; i < elements.length; i++) {
        elements[i].getElementsByTagName("img")[1].classList.add("hidden");
    }
}

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
    getElements()[selection].getElementsByTagName('a')[0].click();

}

function getElements() {
    return document.getElementsByClassName("grid-item");
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
        elements[selection].getElementsByTagName("img")[1].classList.remove("hidden");
        elements[selection].getElementsByTagName("img")[0].classList.add("hidden");
    } else if (d === DIRECTION.remove) {
        elements[selection].getElementsByTagName("img")[0].classList.remove("hidden");
        elements[selection].getElementsByTagName("img")[1].classList.add("hidden");
    } else if (d === DIRECTION.backwards && selection > 0 && selection % columns !== 0) {
        highlight(DIRECTION.remove);
        selection--;
        highlight(DIRECTION.none);
    } else if (d === DIRECTION.forward && selection < elements.length - 1 && selection % columns !== columns - 1) {
        highlight(DIRECTION.remove);
        selection++;
        highlight(DIRECTION.none);
    } else if (d === DIRECTION.up && selection > columns - 1) {
        highlight(DIRECTION.remove);
        selection -= columns;
        highlight(DIRECTION.none);
    } else if (d === DIRECTION.down && selection < elements.length - columns) {
        highlight(DIRECTION.remove);
        selection += columns;
        highlight(DIRECTION.none);
    }
}