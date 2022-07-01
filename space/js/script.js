//https://www.planetary.org/articles/3380

const info = {
    "sun": {
        "colour": "#efd667",
    },
    "mercury": {
        "colour": "#525251",
        "epoch": 1648715894,
        "degPerDay": 4.092397235,
        "e": 0.2056,
        "a": 57.909e6,
        "b": 56671838.62,
        "omega": 0,
    },
    "venus": {
        "colour": "#be9f6e",
        "epoch": 1597025720,
        "degPerDay": 1.602171833,
        "e": 0.0068,
        "a": 108.210e6,
        "b": 108207498.2,
        "omega": 0,
    },
    "earth": {
        "colour": "#499937",
        "epoch": 1632364920,
        "degPerDay": 0.9856474,
        "e": 0.0167,
        "a": 149.598e6,
        "b": 149577137.9,
        "omega": 0,
    },
    "mars": {
        "colour": "#87403c",
        "epoch": 1599712920,
        "degPerDay": 0.524038,
        "e": 0.0935,
        "a": 227.956e6,
        "b": 226957388.5,
        "omega": 49.57854,
    },
    "jupiter": {
        "name": "jupiter",
        "colour": "#5c412e",
        "epoch": 0,
        "degPerDay": 0,
        "e": 0,
        "a": 0,
        "omega": 0
    }
}

const system = [
    info.mercury,
    info.venus,
    info.earth,
    info.mars,
];

const svgns = "http://www.w3.org/2000/svg"

createMap();

function createMap() {
    let canvas = document.getElementById("canvas");
    canvas.appendChild(createCircle(500, 500, 30, info.sun.colour));

    for (let i in system) {
        let planet = system[i];
        canvas.appendChild(createOrbit(500, 500, planet));
        let circle = createCircle(500, 500, 10, planet.colour)
        canvas.appendChild(circle);
        calculateOrbit(circle, planet);
    }
}

function createCircle(x, y, radius, colour) {
    let circle = document.createElementNS(svgns, "circle");
    circle.setAttribute("cx", x);
    circle.setAttribute("cy", y);
    circle.setAttribute("r", radius);
    circle.setAttribute("stroke", colour);
    circle.setAttribute("stroke-width", 2);
    circle.setAttribute("fill", "#121212");
    circle.addEventListener("click", () => {
        alert("test");
    });
    return circle;
}

function createOrbit(x, y, details) {
    let b = minorAxis(details.e, details.a);
    let orbit = document.createElementNS(svgns, "ellipse");
    orbit.setAttribute("cx", x);
    orbit.setAttribute("cy", y);
    orbit.setAttribute("rx", details.a / 1e6);
    orbit.setAttribute("ry", b / 1e6);
    orbit.setAttribute("stroke", details.colour);
    orbit.setAttribute("stroke-width", 2);
    orbit.setAttribute("stroke-dasharray", "20,10")
    orbit.setAttribute("fill", "none");
    orbit.setAttribute("transform", `rotate(${360 - details.omega}, ${x}, ${y})`);
    return orbit;
}

function calculateOrbit(planet, details) {
    let time = Math.floor(Date.now() / 1e3) - details.epoch;
    let days = time / 60 / 60 / 24;
    let deg = (details.degPerDay * days) % 360;
    let theta = deg2rad(deg);
    let x = details.a/1e6 * Math.cos(theta) + 500;
    let y = details.b/1e6 * -Math.sin(theta) + 500;
    planet.setAttribute("cx", x);
    planet.setAttribute("cy", y);
    planet.setAttribute("transform", `rotate(${360 - details.omega}, ${x}, ${y})`);
    setTimeout(calculateOrbit, 60000 * 15, planet, details);
}

function deg2rad(deg) {
    return 2 * Math.PI * (deg / 360);
}

function minorAxis(e, a) {
    return a*Math.sqrt(1-Math.pow(e, 2));
}