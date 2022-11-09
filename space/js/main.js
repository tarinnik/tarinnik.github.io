function main() {
    let page = new URLSearchParams(document.location.search).get("s")
    if (page !== null) {
        history.replaceState({}, page, page);
        document.title = capitalise(page);
    } else {
        page = "sol";
    }
    load(page);
}

function load(page) {
    const body = DATA[page];

    const canvas = document.getElementById("canvas");
    const system = new System(body);
    system.addSatellites(DATA[page].system);
    system.draw(canvas, false);
    system.setParentDot(DATA[body.parent]);
    system.setUpdate(60000 * 1); // update every minute
}

function capitalise(word) {
    return word.substring(0, 1).toUpperCase() + word.substring(1);
}

main();