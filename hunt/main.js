const DUCK_ICONS = {};
const SCORES = {};
const NEAR_DUCKS = [];
const DUCK_RIDDLES_USED = [];

const MAX_DISTANCE_FROM_DUCK = 20;

let map = null;
let locationMarker = null;
let notificationTimer = null;

let masterNotication = false;
let lastNotification = "";

let doingRiddle = false;
let riddleQueue = [];

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
    let teamName = localStorage.getItem("teamName");
    if (teamName) {
        document.getElementById("team-name").innerText = teamName;
    } else {
        window.location.replace("register.html");
    }
}

function setupMap() {
    map = L.map('map').setView([-35.209640242440635, 150.55155538056127], 15);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    let icon = L.icon({
        iconUrl: "images/good_duck.png",
        iconSize: [20, 30]
    });

    for (var i = 0; i < DUCKS.length; i++) {
        DUCK_ICONS[DUCKS[i].id] = L.marker(DUCKS[i].coordinates, { icon: icon })
            .addTo(map)
            .bindPopup(DUCKS[i].message);
    }
}

function messageReceived(msg) {
    console.log("From main: ", msg);

    let score = 0;
    let message = null

    switch (msg.type) {
        case "duck_found":
            duckFound(msg);
            score = 2;
            message = `${msg.team} just found a duck!`
            break;
        case "riddle_success":
            riddleDone(msg);
            score = 1;
            message = `${msg.team} got a riddle correct!`;
            break;
        case "riddle_failure":
            riddleDone(msg);
            message = `${msg.team} got a riddle wrong`;
            break;
        case "master_notification":
            setMasterNotification(msg.message);
            break;
        case "clear_notification":
            clearMasterNotification();
            break;
        case "add_points":
            score = msg.points;
            message = `${msg.team} just got ${msg.points} points`;
            break;
        default:
            return;
    }

    if (msg.team) {
        if (!SCORES[msg.team]) {
            SCORES[msg.team] = 0;
        }
        SCORES[msg.team] += score;
    }

    displayLeaderboard();

    if (message) {
        setNotification(message);
    }
}

function duckFound(msg) {
    let icon = DUCK_ICONS[msg.id];
    if (icon) {
        icon.remove();

        let duck = getDuck(msg.id);
        if (!duck) {
            return;
        }

        let newIcon = L.icon({
            iconUrl: "images/bad_duck.png",
            iconSize: [20, 30]
        });
        DUCK_ICONS[msg.id] = L.marker(duck.coordinates, { icon: newIcon })
            .addTo(map)
            .bindPopup(duck.message);
    }
}

function riddleDone(msg) {
    let thisTeam = localStorage.getItem("teamName");
    if (thisTeam === null) {
        window.location.href = "register.html";
        return;
    }

    if (msg.team === thisTeam) {
        DUCK_RIDDLES_USED.push(msg.duckId);
    }
}

function setNotification(message) {
    lastNotification = message;

    if (!masterNotication) {
        document.getElementById("notification").innerText = message;
    }
}

function setMasterNotification(message) {
    vibrate();
    masterNotication = true;
    document.getElementById("notification").innerText = message;
    document.getElementById("notification-container").classList.add("master-notification");
}

function clearMasterNotification() {
    masterNotication = false;
    document.getElementById("notification").innerText = lastNotification;
    document.getElementById("notification-container").classList.remove("master-notification");
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

    let thisTeam = localStorage.getItem("teamName");
    if (thisTeam === null) {
        window.location.href = "register.html";
        return;
    }

    let score = document.getElementById("score");
    score.innerText = SCORES[thisTeam] ?? 0;
}

function checkIfCloseToMarker(location) {
    let lat1 = location.coords.latitude;
    let lon1 = location.coords.longitude;

    for (let i = 0; i < DUCKS.length; i++) {
        let id = DUCKS[i].id;

        let distance = getDistanceFromLatLonInKm(lat1, lon1, DUCKS[i].coordinates[0], DUCKS[i].coordinates[1]) * 1000;
        console.log(`${distance} m`);
        if (distance <= MAX_DISTANCE_FROM_DUCK) {
            if (!DUCK_RIDDLES_USED.includes(id) && !NEAR_DUCKS.includes(id)) {
                NEAR_DUCKS.push(id);
                DUCK_RIDDLES_USED.push(id);
                addRiddleToQueue(id);
            }
        } else if (NEAR_DUCKS.includes(id)) {
            let index = NEAR_DUCKS.indexOf(id);
            NEAR_DUCKS.splice(index, 1);
        }
    }
}

function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
    var r = 6371; // Radius of the earth in km
    var dLat = deg2rad(lat2 - lat1);
    var dLon = deg2rad(lon2 - lon1);
    var a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2)
        ;
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = r * c; // Distance in km
    return d;
}

function deg2rad(deg) {
    return deg * (Math.PI / 180)
}

function addRiddleToQueue(id) {
    riddleQueue.push(id);

    if (!doingRiddle) {
        getQuestion();
    }
}

function getQuestion() {
    if (!doingRiddle && riddleQueue.length != 0) {
        doingRiddle = true;
        let id = riddleQueue.shift();
        setTimeout(() => { displayQuestion(id) }, 1000);
    }
}

function displayQuestion(duckId) {
    vibrate();
    let duck = getDuck(duckId);
    let riddle = duck?.riddle;
    let riddleAnswerOptions = duck?.riddleAnswerOptions;
    let riddleAnswer = duck?.riddleAnswer;

    let riddleQuestion = document.getElementById("riddle-question");
    riddleQuestion.innerText = riddle;

    // Answers
    let answers = document.getElementById("riddle-answers");
    for (var i = 0; i < riddleAnswerOptions.length; i++) {
        let isCorrect = riddleAnswer == i;
        let element = createRiddleAnswer(riddleAnswerOptions[i], duckId, isCorrect);
        answers.appendChild(element);
    }

    document.getElementById("myPopup").classList.toggle("show");
}

function createRiddleAnswer(text, duckId, isCorrect) {
    let answer = document.createElement("p");
    answer.innerText = text;
    answer.className = "riddle-answer";

    let clickFn = (isCorrect) ? riddleCorrect : riddleIncorrect;
    answer.onclick = () => {
        clickFn(duckId);
        resetRiddle();
    }

    return answer;
}

/**
 * 
 * @param {string} duckId 
 */
function riddleCorrect(duckId) {
    let message = createRiddleDoneMessage(duckId, true)
    sendMessage(message);

    let riddleQuestion = document.getElementById("riddle-question");
    riddleQuestion.innerText = "Yay, you got it right!"
}

function riddleIncorrect(duckId) {
    let message = createRiddleDoneMessage(duckId, false)
    sendMessage(message);

    let riddleQuestion = document.getElementById("riddle-question");
    riddleQuestion.innerText = "Boo, you got it wrong!";
}

function resetRiddle() {
    let answers = document.getElementById("riddle-answers");
    setTimeout(() => {
        document.getElementById("myPopup").classList.toggle("show");
    }, 1000);

    while (answers.firstChild) {
        answers.removeChild(answers.lastChild);
    }

    doingRiddle = false;
    getQuestion();
}

function vibrate() {
    if (navigator.vibrate) {
        navigator.vibrate([300, 100, 300]);
    }
}

/**
 * 
 * @param {string} id 
 * @returns string
 */
function getDuck(id) {
    for (let i = 0; i < DUCKS.length; i++) {
        if (DUCKS[i].id == id) {
            return DUCKS[i];
        }
    }

    return null;
}