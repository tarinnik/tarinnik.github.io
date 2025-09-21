const DUCK_ICONS = {};
const SCORES = {};

let map = null;
let locationMarker = null;
let notificationTimer = null;

addEventListener("load", (_event) => { setup() })

function setup() {
    checkRegistration();
    setupMap();
    getMessages(messageReceived);
    navigator.geolocation.watchPosition(locationUpdate);
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

    if (msg.type === "duck_found") {
        let icon = DUCK_ICONS[msg.id];
        if (icon !== null || icon !== undefined) {
            icon.remove();
        }

        if (SCORES[msg.team] === undefined) {
            SCORES[msg.team] = 0;
        }

        SCORES[msg.team] += 1;

        displayLeaderboard();
        setNotification(`${msg.team} just found a duck!`);
    }
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
        if (DUCKS_FOUND.includes(DUCKS[i].id)) {
            continue;
        }

        let distance = getDistanceFromLatLonInKm(lat1, lon1, DUCKS[i].coords[0], DUCKS[i].coords[1]) * 1000;
        console.log(`${distance} km`);
        if (distance <= 50) {
            alert("You're close!");
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