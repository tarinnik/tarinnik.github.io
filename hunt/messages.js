const TOPIC = "51ULzENMpv5Kbwo4pEYdeSLfj7RvQJMFwLaJjTbE4CmkAjREgm";
const DUCKS_FOUND = [];

let eventFn = null;
let hasLoaded = false;

/**
 * Initiates the receive side of ntfy
 * @param {Function} fn a function to do further handling of an incoming message
 */
function getMessages(fn) {
    eventFn = fn;
    events = new WebSocket(`wss://ntfy.sh/${TOPIC}/ws?since=all`);
    events.onmessage = (e) => {
        receiveMessage(e.data);
    }
    events.onerror = (_e) => {
        if (hasLoaded) {
            window.location.reload();
        } else {
            alert("No internet connection!");
        }
    }
    events.onopen = (_e) => {
        hasLoaded = true;
    }
}

/**
 * Creates a duck found message 
 * @param {String} duckid the id of the duck found
 * @returns the message as a string
 */
function createDuckFoundMessage(duckid) {
    let team = localStorage.getItem("teamName");
    if (team === null) {
        window.location.href = "register.html";
        return "";
    }

    let message = {
        "type": "duck_found",
        "id": duckid,
        "team": team,
    };
    return JSON.stringify(message);
}

/**
 * Creates a riddle done message
 * @param {string} riddleId the id of the riddle
 * @param {bool} success if the riddle was answered correctly
 * @returns 
 */
function createRiddleDoneMessage(duckId, success) {
    let team = localStorage.getItem("teamName");
    if (team === null) {
        window.location.href = "register.html";
        return "";
    }

    let type = (success) ? "riddle_success" : "riddle_fail";

    let message = {
        "type": type,
        "duckId": duckId,
        "team": team,
    };
    return JSON.stringify(message);
}

/**
 * Creates and sends an overriding notification that displays over others
 * @param {string} message the message to send
 */
function createMasterNotification(message) {
    let msg = {
        "type": "master_notification",
        "message": message,
    };

    sendMessage(JSON.stringify(msg));
}

function clearMasterNotification() {
    let message = {
        "type": "clear_notification",
    };

    sendMessage(JSON.stringify(message));
}

/**
 * Creates and sends a points message
 * @param {string} team 
 * @param {number} points 
 */
function addPoints(team, points) {
    let msg = {
        "type": "add_points",
        "team": team,
        "points": points
    };

    sendMessage(JSON.stringify(msg))
}

/**
 * Sends a message to ntfy
 * @param {String} message the message to send
 */
function sendMessage(message) {
    fetch(`https://ntfy.sh/${TOPIC}`, {
        method: "POST",
        body: message
    });
}

function receiveMessage(message) {
    console.debug(message);
    let ntfyData = JSON.parse(message);
    if (ntfyData.event !== "message") {
        return;
    }

    console.debug(ntfyData.message);
    let msg = JSON.parse(ntfyData.message);

    if (msg.type === "duck_found") {
        DUCKS_FOUND.push(msg.id);
    }

    if (typeof (eventFn) === "function") {
        eventFn(msg)
    }
}