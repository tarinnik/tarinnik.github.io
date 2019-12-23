let selection = 0;

const DIRECTION = {
    none: 0,
    remove: 'r',
    forward: 1,
    backwards: -1,
};

window.addEventListener('load', function() {
    load();
    highlight(DIRECTION.none);
});

/**
 * Gets the hidden services and deselects them
 */
function load() {
    let hide = window.localStorage.getItem("hide");
    if (hide === "" || hide === null) return;
    hide = hide.split(";");
    for (let i in hide) {
        document.getElementById(hide[i]).checked = false;
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
    window.localStorage.setItem("hide", save);
    window.location = "..";
}

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
    }
}

/**
 * Gets the elements to be highlighted
 */
function getElements() {
    let e = [];
    e.push(document.getElementById("back"));
    let selections = document.getElementsByTagName("span");
    for (let i = 0; i < selections.length; i++) {
        e.push(selections[i]);
    }
    e.push(document.getElementById("save"));
    return e;
}

/**
 * Gets the elements to be selected
 */
function getSelectElements() {
    let e = [];
    e.push(document.getElementById("back"));
    let selections = document.getElementsByName("services");
    for (let i = 0; i < selections.length; i++) {
        e.push(selections[i]);
    }
    e.push(document.getElementById("save"));
    return e;
}

/**
 * Selects the currently highlighted element
 */
function select() {
    let elements = getSelectElements();
    if (selection === 0 || selection === elements.length - 1) {
        elements[selection].click();
    } else {
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
        elements[selection].classList.add("selected");
    } else if (d === DIRECTION.remove) {
        elements[selection].classList.remove("selected");
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