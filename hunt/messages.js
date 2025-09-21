const TOPIC = "51ULzENMpv5Kbwo4pEY3eSLfj7RvQJMFwLaJjTbE4CmkAjREgm";
const DUCKS_FOUND = [];

let eventFn = null;

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