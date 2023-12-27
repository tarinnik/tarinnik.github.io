"use strict";
function main() {
    var page = new URLSearchParams(document.location.search).get("s");
    if (page !== null) {
        history.replaceState({}, page, page);
        document.title = capitalise(page);
    }
    else {
        page = "sol";
    }
    load(page);
}
function load(page) {
    if (isValidBody(page)) {
        var body = DATA[page];
        var system = new System(body);
        system.draw(false);
    }
}
function capitalise(word) {
    return word.substring(0, 1).toUpperCase() + word.substring(1);
}
main();
