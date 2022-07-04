function main() {
    let page = new URLSearchParams(document.location.search).get("s")
    if (page !== null) {
        history.replaceState({}, page, page);
        document.title = capitalise(page);
    } else {
        page = "sun";
    }
    load(page);
}

function load(page) {
    const canvas = document.getElementById("canvas");
    const overview = new System(DATA[page]);
    overview.addSatellites(DATA[page].system);
    overview.draw(canvas, false);
}

function capitalise(word) {
    return word.substring(0, 1).toUpperCase() + word.substring(1);
}

main();