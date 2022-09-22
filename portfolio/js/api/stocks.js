const YAHOO_RAPID_API_URL = "https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/v2/get-quotes";

function requestStocksData() {
    let request = new XMLHttpRequest();
    request.withCredentials = false;

    request.addEventListener("readystatechange", function() {
        if (this.readyState === this.DONE) {
            saveData(JSON.parse(this.responseText));
            rerender();
        }
    });

    request.open("GET", YAHOO_RAPID_API_URL + "?region=AU" + getSymbols());
    request.setRequestHeader("X-RapidAPI-Key", getYahooKey());
    request.setRequestHeader("X-RapidAPI-Host", "apidojo-yahoo-finance-v1.p.rapidapi.com");
    request.send(null);
}

function saveData(data) {
    let stocks = [];
    if (data.quoteResponse.error !== null) {
        console.error("Error getting stock data" + data.quoteResponse.error);
        return;
    }

    let stockData = data.quoteResponse.result;
    for (let i = 0; i < stockData.length; i++) {
        let stock = stockData[i];

        stocks.push({
            name: stock.longName,
            symbol: stock.symbol,
            price: stock.regularMarketPrice,
            change: stock.regularMarketChangePercent,
        });
    }

    localStorage.setItem("stocks-data", JSON.stringify(stocks));
}

function getSymbols() {
    let portfolio = getPortfolio();
    let symbols = "&symbols="
    for (let i = 0; i < portfolio.length; i++) {
        symbols += portfolio[i].name + ","
    }
    return symbols.slice(0, -1);
}

function getYahooKey() {
    return localStorage.getItem("rapid-api-key");
}
