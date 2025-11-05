
let duckData = {};
let teamData = {};
let map = null;

addEventListener("load", (_event) => { setup() })

function setup() {
    setupMap();
    calculateResults();
    plot();
    writeScores();
}

function setupMap() {
    map = L.map('map').setView([-35.209640242440635, 150.55155538056127], 15);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
}

function calculateResults() {
    for (let i = 0; i < MESSAGES.length; i++) {
        let message = MESSAGES[i];
        if (!message.team) {
            console.warn(message);
            continue;
        }
        let team = message.team.trim();
        let duck = message.duckId ?? message.id;

        if (team === "The three fleas" || team === "Mim's Favourites"
            || team === "The Three fleas"
        ) {
            continue;
        }

        if (!teamData[team]) {
            addTeam(team);
        }

        if (!duckData[duck]) {
            addDuck(duck);
        }

        switch (MESSAGES[i].type) {
            case "riddle_success":
                if (teamData[team].riddlesDone.includes(duck)) {
                    continue;
                }
                teamData[team].correctRiddles += 1;
                teamData[team].riddlesDone.push(duck);
                duckData[duck].correctTeams.push(team);

                break;
            case "riddle_fail":
                if (teamData[team].riddlesDone.includes(duck)) {
                    continue;
                }
                teamData[team].incorrectRiddles += 1;
                teamData[team].riddlesDone.push(duck);
                duckData[duck].incorrectTeams.push(team);
                break;
            case "duck_found":
                teamData[team].ducksFound += 1;
                duckData[duck].foundingTeam = team;
                break;
        }
    }
}

function addTeam(team) {
    teamData[team] = {
        correctRiddles: 0,
        incorrectRiddles: 0,
        ducksFound: 0,
        riddlesDone: [],
    };
}

function addDuck(duck) {
    duckData[duck] = {
        foundingTeam: "No one",
        riddle: "",
        correctAnswer: "",
        correctTeams: [],
        incorrectTeams: [],
    }
}

function plot() {
    let goodIcon = L.icon({
        iconUrl: "images/good_duck.png",
        iconSize: [20, 30]
    });

    let badIcon = L.icon({
        iconUrl: "images/bad_duck.png",
        iconSize: [20, 30]
    });

    for (let i = 0; i < DUCKS.length; i++) {
        let duck = DUCKS[i]
        let data = duckData[duck.id];
        let icon;
        if (data.foundingTeam == "No one") {
            icon = goodIcon;
        } else {
            icon = badIcon;
        }

        let correct = data.correctTeams.join(", ");
        if (correct == "") {
            correct = "No one";
        }
        let incorrect = data.incorrectTeams.join(", ");
        if (incorrect == "") {
            incorrect = "No one";
        }

        L.marker(duck.coordinates, { icon: icon })
            .addTo(map)
            .bindPopup(`Found by: ${data.foundingTeam} <br>
                Question: ${duck.riddle} <br>
                Answer: ${duck.riddleAnswerOptions[duck.riddleAnswer]} <br>
                Answered correctly: ${correct} <br>
                Answered incorrectly: ${incorrect}`);
    }
}

function writeScores() {
    let teams = Object.entries(teamData);
    let parent = document.getElementById("scores");
    for (let i = 0; i < teams.length; i++) {
        let team = teams[i][0];
        let data = teams[i][1];

        let e = document.createElement("p");
        e.innerText = `${team} found ${data.ducksFound} ducks, got ${data.correctRiddles} questions right and ${data.incorrectRiddles} questions wrong.`;
        parent.appendChild(e);
    }
}