window.addEventListener('DOMContentLoaded', function() {
    load();
    highlight(DIRECTION.none);
});

document.addEventListener('keydown', function (event) {
    key(event);
});

function key(event) {
    switch (event.key) {
        case '2':
            highlight(DIRECTION.forward);
            break;
        case '5':
            select();
            break;
        case '8':
            highlight(DIRECTION.backwards);
            break;
        case 'Enter':
            save();
            break;
        case '+':
            document.getElementById("check-all").click();
            break;
        case '-':
            window.location = '..';
            break;
        case '/':
            window.location = '.';
            break;
        case '.':
            toggleNavbar();
            break;
    }
}

let selection = 0;

const DIRECTION = {
    none: 0,
    remove: 'r',
    forward: 1,
    backwards: -1,
};

/**
 * Gets the hidden services and deselects them
 */
function load() {
    let media = window.localStorage.getItem("media");
    if (media !== "" && media !== null) {
        media = media.split(";");
        for (let i in media) {
            document.getElementById(media[i]).checked = false;
        }
    }
    let navbar = window.localStorage.getItem("nav-disabled");
    if (navbar === "true") {
        document.getElementById("navbar-disabled").checked = true;
    }
}

/**
 * Saves the selections
 */
function save() {
    let save = "";
    let inputs = document.getElementsByName("services");
    for (let i = 0; i < inputs.length; i++) {
        console.log(inputs[i]);
        if (!(inputs[i].checked)) {
            save += inputs[i].id + ';';
        }
    }
    save = save.slice(0, save.length - 1);
    window.localStorage.setItem("media", save);
    window.localStorage.setItem("nav-disabled", document.getElementById("navbar-disabled").checked);

    window.location = "..";
}

function checkmarks(checked) {
    let e = getSelectElements();
    for (let i = 0; i < e.length; i++) {
        e[i].checked = checked;
    }
}

function checkAll() {
    let button = document.getElementById("check-all");
    button.innerHTML = "Uncheck all (+)";
    button.setAttribute("onclick", "unCheckAll()");
    checkmarks(true);
}

function unCheckAll() {
    let button = document.getElementById("check-all");
    button.innerHTML = "Check all (+)";
    button.setAttribute("onclick", "checkAll()");
    checkmarks(false);
}

function toggleNavbar() {
    let b = document.getElementById("navbar-disabled");
    b.checked = !b.checked;
}

/**
 * Gets the elements to be highlighted
 */
function getElements() {
    return document.getElementsByClassName("option");
}

/**
 * Gets the elements to be selected
 */
function getSelectElements() {
    return document.getElementsByName("services");
}

/**
 * Selects the currently highlighted element
 */
function select() {
    if (selection === getElements().length - 1) {
        toggleNavbar();
    } else {
        let elements = getSelectElements();
        elements[selection].checked = !elements[selection].checked;
    }
}

/**
 * Highlights in the direction specified
 * @param d direction to highlight
 */
function highlight(d) {
    let elements = getElements();
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