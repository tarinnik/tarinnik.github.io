window.addEventListener('DOMContentLoaded', function() {
    load();
    highlight(DIRECTION.none);
});

document.addEventListener('keydown', function (event) {
    key(event);
});

function key(event) {
    if (document.getElementById("highlight-colour") === document.activeElement ||
            document.getElementById("background-colour") === document.activeElement) {
        return;
    }

    switch (event.key) {
        case '2':
            if (move) {
                moveDown();
            } else {
                highlight(DIRECTION.forward);
            }
            break;
        case '4':
            left();
            break;
        case '5':
            select();
            break;
        case '6':
            right();
            break;
        case '8':
            if (move) {
                moveUp();
            } else {
                highlight(DIRECTION.backwards);
            }
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
let move = false;
let moveSelected = false;

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

    let order = window.localStorage.getItem("order");
    if (order !== null) {
        let parent = document.getElementsByClassName("services")[0];
        order = order.split(';');
        for (let i in order) {
            let e = document.getElementById(order[i]).parentNode;
            parent.insertBefore(e, parent.getElementsByTagName("label")[i]);
        }
    }

    let background = window.localStorage.getItem("background");
    if (background !== null) {
        document.getElementById("background-colour").value = background;
    }

    let highlight = window.localStorage.getItem("highlight");
    if (highlight !== null) {
        document.getElementById("highlight-colour").value = highlight;
    }

}

/**
 * Saves the selections
 */
function save() {
    let save = "";
    let inputs = document.getElementsByName("services");
    for (let i = 0; i < inputs.length; i++) {
        if (!(inputs[i].checked)) {
            save += inputs[i].id + ';';
        }
    }
    save = save.slice(0, save.length - 1);
    window.localStorage.setItem("media", save);
    window.localStorage.setItem("nav-disabled", document.getElementById("navbar-disabled").checked);

    let order = document.getElementsByName("services");
    let orderText = "";
    for (let i = 0; i < order.length; i++) {
        orderText += order[i].id + ';';
    }
    orderText = orderText.slice(0, orderText.length - 1);
    window.localStorage.setItem("order", orderText);

    window.localStorage.setItem("background", document.getElementById("background-colour").value);
    window.localStorage.setItem("highlight", document.getElementById("highlight-colour").value);

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
    if (moveSelected) {
        rearrange();
        return;
    } else if (move) {
        stopRearrange();
        return;
    }

    if (selection === getElements().length - 1) {
        toggleNavbar();
    } else {
        let elements = getSelectElements();
        elements[selection].checked = !elements[selection].checked;
    }
}

function stopRearrange() {
    move = false;
    let e = document.getElementsByClassName("rearranging-text")[0].parentElement.getElementsByTagName("span");
    for (let i = 0; i < e.length; i++) {
        e[i].classList.remove("rearranging-text");
        if (e[i].classList.contains("rearrange")) {
            e[i].classList.add("hidden");
        }
    }
    highlight(DIRECTION.none);
}

function rearrange() {
    moveSelected = false;
    move = true;
    getElements()[selection].classList.add("rearranging-text");
    let m = document.getElementsByClassName("rearrange")[selection];
    m.classList.add("rearranging-text");
    m.classList.remove("selectedText");
}

function moveUp() {
    let e = document.getElementsByClassName("rearranging-text")[0].parentNode;
    if (e.previousElementSibling) {
        e.parentNode.insertBefore(e, e.previousElementSibling);
    }
}

function moveDown() {
    let e = document.getElementsByClassName("rearranging-text")[0].parentNode;
    if (e.nextElementSibling) {
        e.parentNode.insertBefore(e.nextElementSibling, e);
    }
}

function left() {
    getElements()[selection].classList.add("selectedText");
    document.getElementsByClassName("rearrange")[selection].classList.remove("selectedText");
    moveSelected = false;
}

function right() {
    if (selection === getElements().length - 1) return;
    getElements()[selection].classList.remove("selectedText");
    document.getElementsByClassName("rearrange")[selection].classList.add("selectedText");
    moveSelected = true;
}

/**
 * Highlights in the direction specified
 * @param d direction to highlight
 */
function highlight(d) {
    let elements = getElements();
    if (d === DIRECTION.none) {
        elements[selection].classList.add("selectedText");
        document.getElementsByClassName("rearrange")[selection].classList.remove("hidden");
    } else if (d === DIRECTION.remove) {
        elements[selection].classList.remove("selectedText");
        let move = document.getElementsByClassName("rearrange")[selection];
        move.classList.add("hidden");
        move.classList.remove("selectedText");
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