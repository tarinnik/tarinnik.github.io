const DUCK_ICONS = {};
const SCORES = {};
const NEAR_DUCKS = [];
const RIDDLES_USED = [];
const DUCK_RIDDLES_USED = [];

const MAX_DISTANCE_FROM_DUCK = 10;

let map = null;
let locationMarker = null;
let notificationTimer = null;

addEventListener("load", (_event) => { setup() })

function setup() {
    checkRegistration();
    setupMap();
    getMessages(messageReceived);
    setTimeout(() => {
        navigator.geolocation.watchPosition(locationUpdate);
    }, 5000);
}

function checkRegistration() {
    if (localStorage.getItem("teamName") === null) {
        window.location.replace("register.html");
    }
}

function setupMap() {
    map = L.map('map').setView([-35.209640242440635, 150.55155538056127], 15);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    for (var i = 0; i < DUCKS.length; i++) {
        DUCK_ICONS[DUCKS[i].id] = L.marker(DUCKS[i].coords)
            .addTo(map)
            .bindPopup(DUCKS[i].message);
    }
}

function messageReceived(msg) {
    console.log("From main: ", msg);

    let score = 0;
    let message = "";

    if (msg.type === "duck_found") {
        let icon = DUCK_ICONS[msg.id];
        if (icon !== null || icon !== undefined) {
            icon.remove();
        }
        score = 2;
        message = `${msg.team} just found a duck!`
    } else if (msg.type === "riddle_success") {
        RIDDLES_USED.push(msg.riddleId);
        DUCK_RIDDLES_USED.push(msg.duckId);
        score = 1;
        message = `${msg.team} got a riddle correct!`;
    } else if (msg.type === "riddle_failure") {
        RIDDLES_USED.push(msg.riddleId);
        DUCK_RIDDLES_USED.push(msg.duckId);
        message = `${msg.team} got a riddle wrong`;
    } else {
        return;
    }

    if (SCORES[msg.team] === undefined) {
        SCORES[msg.team] = 0;
    }
    SCORES[msg.team] += score;

    displayLeaderboard();
    setNotification(message);
}

function setNotification(message) {
    document.getElementById("notification").innerText = message;

    // if (notificationTimer !== null) {
    //     clearTimeout(notificationTimer);
    // }

    // notificationTimer = setTimeout(() => {
    //     document.getElementById("notification").innerText = "";
    // }, 10000);
}

function locationUpdate(location) {
    console.log(location);

    if (locationMarker === null) {
        let icon = L.icon({
            iconUrl: "images/location.png",
            iconSize: [20, 20]
        });
        locationMarker = L.marker([location.coords.latitude, location.coords.longitude], { icon: icon })
            .addTo(map);
    } else {
        locationMarker.setLatLng([location.coords.latitude, location.coords.longitude])
    }

    checkIfCloseToMarker(location);
}

function displayLeaderboard() {
    let board = document.getElementById("leaderboard");
    board.innerHTML = "";

    let scores = Object.entries(SCORES);
    scores.sort((a, b) => b[1] - a[1]);

    for (let i = 0; i < scores.length; i++) {
        let team = document.createElement("li");
        team.innerText = `${scores[i][0]} - ${scores[i][1]}`;
        board.appendChild(team);
    }
}

function checkIfCloseToMarker(location) {
    let lat1 = location.coords.latitude;
    let lon1 = location.coords.longitude;

    for (let i = 0; i < DUCKS.length; i++) {
        let id = DUCKS[i].id;

        let distance = getDistanceFromLatLonInKm(lat1, lon1, DUCKS[i].coords[0], DUCKS[i].coords[1]) * 1000;
        console.log(`${distance} km`);
        if (distance <= MAX_DISTANCE_FROM_DUCK) {
            if (!DUCK_RIDDLES_USED.includes(id) && !NEAR_DUCKS.includes(id)) {
                NEAR_DUCKS.push(id);
                setTimeout(() => { displayQuestion(id) }, 1000);
            }
        } else if (NEAR_DUCKS.includes(id)) {
            let index = NEAR_DUCKS.indexOf(id);
            NEAR_DUCKS.splice(index, 1);
        }
    }
}

function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
    var R = 6371; // Radius of the earth in km
    var dLat = deg2rad(lat2 - lat1);  // deg2rad below
    var dLon = deg2rad(lon2 - lon1);
    var a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2)
        ;
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c; // Distance in km
    return d;
}

function deg2rad(deg) {
    return deg * (Math.PI / 180)
}

function displayQuestion(duckId) {
    let riddle = RIDDLES[0];

    let riddleQuestion = document.getElementById("riddle-question");
    riddleQuestion.innerText = riddle.riddle;

    // Answers
    let answers = document.getElementById("riddle-answers");
    for (var i = 0; i < riddle.riddleAnswerOptions.length; i++) {
        let isCorrect = riddle.riddleAnswer == i;
        let element = createRiddleAnswer(riddle.riddleAnswerOptions[i], riddle.id, duckId, isCorrect);
        answers.appendChild(element);
    }

    document.getElementById("myPopup").classList.toggle("show");
}

function createRiddleAnswer(text, riddleId, duckId, isCorrect) {
    let answer = document.createElement("p");
    answer.innerText = text;
    answer.className = "riddle-answer";

    let clickFn = (isCorrect) ? riddleCorrect : riddleIncorrect;
    answer.onclick = () => {
        clickFn(riddleId, duckId);
        resetRiddle();
    }

    return answer;
}

/**
 * 
 * @param {string} riddleId 
 * @param {string} duckId 
 */
function riddleCorrect(riddleId, duckId) {
    let message = createRiddleDoneMessage(riddleId, duckId, true)
    sendMessage(message);

    let riddleQuestion = document.getElementById("riddle-question");
    riddleQuestion.innerText = "Yay, you got it right!"
}

function riddleIncorrect(riddleId, duckId) {
    let message = createRiddleDoneMessage(riddleId, duckId, false)
    sendMessage(message);

    let riddleQuestion = document.getElementById("riddle-question");
    riddleQuestion.innerText = "Boo, you got it wrong!";
}

function resetRiddle() {
    let answers = document.getElementById("riddle-answers");
    setTimeout(() => {
        document.getElementById("myPopup").classList.toggle("show");
    }, 5000);

    while (answers.firstChild) {
        answers.removeChild(answers.lastChild);
    }
}
