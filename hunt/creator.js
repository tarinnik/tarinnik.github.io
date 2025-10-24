let data = [];

function createNew() {
    navigator.geolocation.getCurrentPosition(createDuck, failedToGetLocation);
}

function createDuck(location) {
    let id = crypto.randomUUID();
    let newDuck = {
        "id": id,
        "coordinates": [location.coords.latitude, location.coords.longitude],
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