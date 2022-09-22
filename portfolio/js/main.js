if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("/portfolio/js/sw.js");
}

function main() {
    render();
    requestStocksData();
}

function rerender() {
    let items = document.getElementById("items");
    let numChildren = items.children.length;
    for (let i = 0; i < numChildren; i++) {
        items.removeChild(items.children[0]);
    }
    render();
}

function render() {
    let items = document.getElementById("items");
    let stocks = getPortfolio();
    let stocksData = getStockData();
    for (let i = 0; i < stocks.length; i++) {
        for (let j = 0; j < stocksData.length; j++) {
            console.log(stocks[i].name);
            console.log(stocksData[j].symbol);
            if (stocks[i].name === stocksData[j].symbol) {
                items.appendChild(createContainer(stocksData[i]));
            }
        }
    }
}

function createContainer(investment) {
    let container = document.createElement("div");
    container.className = "container col-3 col-s-6";

    let name = document.createElement("p");
    name.innerHTML = investment.name;
    name.className = "text";

    let price = document.createElement("p");
    price.innerHTML = "$" + investment.price;
    price.className = "text";

    container.appendChild(name);
    container.appendChild(price);

    return container;
}

main();