let stockInfoLength = 4;

function main() {
    render();
}

function render() {
    let data = getPortfolio();
    let items = document.getElementById("items");
    for (let i = 0; i < data.length; i++) {
        items.appendChild(createItem(data[i]));
    }
    document.getElementById("rapid-api-key").value = localStorage.getItem("rapid-api-key");
}

function createItem(item) {
    let newItem = document.createElement("li");
    let name = document.createElement("input");
    let type = document.createElement("input");
    let owned = document.createElement("input");
    let price = document.createElement("input");

    name.value = item.name;
    type.value = item.type;
    owned.value = item.owned;
    price.value = item.price;

    newItem.appendChild(name);
    newItem.appendChild(type);
    newItem.appendChild(owned);
    newItem.appendChild(price);

    return newItem;
}

function addItem() {
    let items = document.getElementById("items");
    let newItem = document.createElement("li");
    for (let i = 0; i < stockInfoLength; i++) {
        newItem.appendChild(document.createElement("input"));
    }
    items.appendChild(newItem);
}

function save() {
    let rapidApiKey = document.getElementById("rapid-api-key").value;
    localStorage.setItem("rapid-api-key", rapidApiKey);

    let items = document.getElementById("items").children;
    let portfolio = [];
    for (let i = 0; i < items.length; i++) {
        let newItem = items[i].children;
        portfolio.push({
            "name": newItem[0].value,
            "type": newItem[1].value,
            "owned": parseFloat(newItem[2].value),
            "price": parseFloat(newItem[3].value),
        });
    }
    setPortfolio(portfolio);
    alert("Saved");
}

main();