function sendMasterMessage() {
    let message = document.getElementById("message").value;
    createMasterNotification(message);
}

function clearMessage() {
    clearMasterNotification();
}