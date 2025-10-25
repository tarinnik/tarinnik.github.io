let data = [];
let markerLocation = [];
let marker = null;
let map = null;

addEventListener("load", (_event) => { setup() })

function setup() {
    setupMap();
}

function setupMap() {
    map = L.map('map').setView([-35.209640242440635, 150.55155538056127], 15);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    map.on('click', (e) => {
        setMarkerLocation(e.latlng.lat, e.latlng.lng);
    });
}

function setMarkerLocation(lat, long) {
    markerLocation = [lat, long];

    if (marker) {
        marker.remove();
    }

    marker = L.marker(markerLocation).addTo(map);
}

function createDuck() {
    let id = crypto.randomUUID();
    let newDuck = {
        "id": id,
        "coordinates": markerLocation,
        "message": "",
        "riddle": "",
        "riddleAnswerOptions": ["", "", "", ""],
        "riddleAnswer": 0,
    };
    data.push(newDuck);

    let text = JSON.stringify(data);
    downloadData(text, "ducks.json");

    navigator.clipboard.writeText(`https://tpk.net.au/hunt/duck?id=${id}`);
    alert(`Copied URL for ${id}`);
}

function downloadData(text, name) {
    let blob = new Blob([text], { type: "text/plain" });

    let link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = name;

    link.click();

    URL.revokeObjectURL(link.href);
}

function failedToGetLocation(error) {
    alert(`Unable to get location: ${err}`);
}