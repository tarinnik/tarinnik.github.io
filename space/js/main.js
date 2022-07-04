function main() {
    let page = new URLSearchParams(document.location.search).get("s");
    page = (page === null) ? "sun" : page;
    load(page);
}

function load(page) {
    const canvas = document.getElementById("canvas");
    const overview = new System(DATA[page]);
    console.log(DATA[page].system);
    overview.addSatellites(DATA[page].system);
    overview.draw(canvas, false);
}

console.log(DATA);
main();