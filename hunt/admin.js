function sendMasterMessage() {
    let message = document.getElementById("message").value;
    createMasterNotification(message);
}

function clearMessage() {
    clearMasterNotification();
}

function changePoints() {
    let team = document.getElementById("team-name").value;
    let points = document.getElementById("points").value;
    points = parseFloat(points);

    addPoints(team, points);
}