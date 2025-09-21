addEventListener("load", (_event) => { duckFound() })

async function duckFound() {
    getMessages(null);

    var id = getDuckId();
    if (id === null) {
        noId();
        return;
    }

    if (!checkValidDuck(id)) {
        notValid();
        return;
    }

    await sleep(3000);

    if (DUCKS_FOUND.includes(id)) {
        alreadyFound();
        return;
    }

    var message = createDuckFoundMessage(id);
    sendMessage(message);

    document.getElementById("message").innerText = "Congratulations! You found a duck!";
}

/**
 * Gets the ID of the duck from the url
 * @returns the ID of the duck as a string, or null if there is no ID
 */
function getDuckId() {
    let params = new URLSearchParams(window.location.search);
    return params.get("id");
}

/**
 * Checks whether the id is a valid duck id
 * @param {String} id the id of the duck 
 * @returns true if its a valid duck
 */
function checkValidDuck(id) {
    for (let i = 0; i < DUCKS.length; i++) {
        if (DUCKS[i].id === id) {
            return true;
        }
    }

    return false;
}

function noId() {
    console.warn("no-id");
    document.getElementById("message").innerText = "This duck doesn't exist!";
}

function notValid() {
    console.warn("id not valid");
    document.getElementById("message").innerText = "This duck doesn't exist!";
}

function alreadyFound() {
    console.warn("already exists")
    document.getElementById("message").innerText = "This duck was already found";
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}