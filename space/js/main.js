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
    const system = new System(DATA[page]);
    system.addSatellites(DATA[page].system);
    system.draw(canvas, false);
    system.setUpdate(60000 * 1); // update every minute
}

function capitalise(word) {
    return word.substring(0, 1).toUpperCase() + word.substring(1);
}

main();