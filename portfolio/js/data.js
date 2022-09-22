function getPortfolio() {
    data = localStorage.getItem("portfolio");
    if (data === null) {
        return [];
    }
    return JSON.parse(data);
}

function setPortfolio(data) {
    localStorage.setItem("portfolio", JSON.stringify(data));
}

function getStockData() {
    data = localStorage.getItem("stocks-data");
    if (data === null) {
        return [];
    }
    return JSON.parse(data);
}