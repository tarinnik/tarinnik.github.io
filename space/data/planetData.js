const DATA = {
    "sun": {
        "name": "Sol",
        "colour": "#efd667",
        "link": "sun",
        "system": SOLAR_SYSTEM,
    },
    "mercury": {
        "name": "Mercury",
        "colour": "#525251",
        "epoch": 1648715894,
        "degPerDay": 4.092397235,
        "e": 0.2056,
        "a": 57.909e6,
        "b": 56671838.62,
        "omega": 0,
        "link": "mercury",
    },
    "venus": {
        "name": "Venus",
        "colour": "#be9f6e",
        "epoch": 1597025720,
        "degPerDay": 1.602171833,
        "e": 0.0068,
        "a": 108.210e6,
        "b": 108207498.2,
        "omega": 0,
        "link": "venus",
    },
    "earth": {
        "name": "Earth",
        "colour": "#499937",
        "epoch": 1632364920,
        "degPerDay": 0.9856474,
        "e": 0.0167,
        "a": 149.598e6,
        "b": 149577137.9,
        "omega": 0,
        "link": "earth",
        "system": TERRAN_SYSTEM
    },
    "luna": {
        "name": "Luna",
        "colour": "#525251",
        "epoch": 0,
        "degPerDay": 13.17715959,
        "e": 0.0549,
        "a": 0.3884e9,
        "omega": 0,
        "link": "luna",
    },
    "mars": {
        "name": "Mars",
        "colour": "#87403c",
        "epoch": 1599712920,
        "degPerDay": 0.524038,
        "e": 0.0935,
        "a": 227.956e6,
        "b": 226957388.5,
        "omega": 49.57854,
        "link": "mars",
    },
    "jupiter": {
        "name": "Jupiter",
        "colour": "#5c412e",
        "epoch": 0,
        "degPerDay": 0,
        "e": 0,
        "a": 0,
        "omega": 0,
        "link": "jupiter",
    }
}

const SOLAR_SYSTEM = [
    DATA.mercury,
    DATA.venus,
    DATA.earth,
    DATA.mars,
];

const TERRAN_SYSTEM = [
    DATA.luna,
];