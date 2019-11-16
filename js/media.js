window.addEventListener('load', function () {
    let url = window.location.href;
    let i;
    if (i = url.indexOf("?"), i !== -1) {
        if (url[i + 1] === "m" && url.length === i + 2) {
            m();
        }
    }
});

function m() {
    document.getElementById("7plus").remove();
    document.getElementById("9now").remove();
    document.getElementById("tenplay").remove();
    document.getElementById("twitch").remove();
    document.getElementById("youtube").remove();
}