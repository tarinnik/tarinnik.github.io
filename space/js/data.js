"use strict";
var SOLAR_SYSTEM = [
    "mercury",
    "venus",
    "earth",
    "mars",
    "jupiter",
    "saturn",
    "uranus",
    "neptune",
];
var TERRAN_SYSTEM = [
    "luna",
];
var MARTIAN_SYSTEM = [
    "phobos",
    "deimos",
];
var JOVIAN_SYSTEM = [
    "io",
    "europa",
    "ganymede",
    "callisto",
];
var SATURNIAN_SYSTEM = [];
var URANIAN_SYSTEM = [];
var NEPTUNIAN_SYSTEM = [];
var SOL = {
    "name": "Sol",
    "colour": "#efd667",
    "revolution": {
        "epoch": 0,
        "degrees": 0,
    },
    "rotation": {
        "epoch": 0,
        "degrees": 0,
    },
    "orbit": {
        "e": 0,
        "a": 0,
        "omega": 0,
    },
    "link": "sol",
    "system": SOLAR_SYSTEM,
    "parent": null
};
var MERCURY = {
    "name": "Mercury",
    "colour": "#525251",
    "revolution": {
        "epoch": 1648715894,
        "degrees": 4.092397235,
    },
    "rotation": {
        "epoch": 0,
        "degrees": 0,
    },
    "orbit": {
        "e": 0.2056,
        "a": 57.909e6,
        "omega": 0,
    },
    "link": "mercury",
    "system": [],
    "parent": "sol"
};
var VENUS = {
    "name": "Venus",
    "colour": "#be9f6e",
    "revolution": {
        "epoch": 1597025720,
        "degrees": 1.602171833,
    },
    "rotation": {
        "epoch": 0,
        "degrees": 0,
    },
    "orbit": {
        "e": 0.0068,
        "a": 108.210e6,
        "omega": 0,
    },
    "link": "venus",
    "system": [],
    "parent": "sol"
};
var EARTH = {
    "name": "Earth",
    "colour": "#499937",
    "revolution": {
        "epoch": 1632364920,
        "degrees": 0.9856474,
    },
    "rotation": {
        "epoch": 1632364920,
        "degrees": 360,
    },
    "orbit": {
        "e": 0.0167,
        "a": 149.598e6,
        "omega": 0,
    },
    "link": "earth",
    "system": TERRAN_SYSTEM,
    "parent": "sol"
};
var LUNA = {
    "name": "Luna",
    "colour": "#525251",
    "revolution": {
        "epoch": 1655782623,
        "degrees": 13.17715959,
    },
    "rotation": {
        "epoch": 0,
        "degrees": 0,
    },
    "orbit": {
        "e": 0.0549,
        "a": 0.3884e9,
        "omega": 0,
    },
    "link": "luna",
    "system": [],
    "parent": "earth"
};
var MARS = {
    "name": "Mars",
    "colour": "#87403c",
    "revolution": {
        "epoch": 1599712920,
        "degrees": 0.524038,
    },
    "rotation": {
        "epoch": 0,
        "degrees": 0,
    },
    "orbit": {
        "e": 0.0935,
        "a": 227.956e6,
        "omega": 49.57854,
    },
    "link": "mars",
    "system": MARTIAN_SYSTEM,
    "parent": "sol"
};
var PHOBOS = {
    "name": "Phobos",
    "colour": "#525251",
    "revolution": {
        "epoch": 1655778625,
        "degrees": 1128.844315,
    },
    "rotation": {
        "epoch": 0,
        "degrees": 0,
    },
    "orbit": {
        "e": 0.015,
        "a": 9376,
        "omega": 0,
    },
    "link": "phobos",
    "system": [],
    "parent": "mars"
};
var DEIMOS = {
    "name": "Deimos",
    "colour": "#cdc0af",
    "revolution": {
        "epoch": 1655841590,
        "degrees": 285.0356295,
    },
    "rotation": {
        "epoch": 0,
        "degrees": 0,
    },
    "orbit": {
        "e": 0.00033,
        "a": 23463.2,
        "omega": 0,
    },
    "link": "deimos",
    "system": [],
    "parent": "mars"
};
var JUPITER = {
    "name": "Jupiter",
    "colour": "#5c412e",
    "revolution": {
        "epoch": 1286740860,
        "degrees": 0.083129,
    },
    "rotation": {
        "epoch": 0,
        "degrees": 0,
    },
    "orbit": {
        "e": 0.04839266,
        "a": 778.479e6,
        "omega": 0,
    },
    "link": "jupiter",
    "system": JOVIAN_SYSTEM,
    "parent": "sol"
};
var IO = {
    "name": "Io",
    "colour": "#d6ce61",
    "revolution": {
        "epoch": 1664978900,
        "degrees": 203.38983050847,
    },
    "rotation": {
        "epoch": 0,
        "degrees": 0,
    },
    "orbit": {
        "e": 0.00472,
        "a": 422000,
        "omega": 0.0375,
    },
    "link": "io",
    "system": [],
    "parent": "jupiter"
};
var EUROPA = {
    "name": "Europa",
    "colour": "#968865",
    "revolution": {
        "epoch": 1665123715,
        "degrees": 101.40845070422,
    },
    "rotation": {
        "epoch": 0,
        "degrees": 0,
    },
    "orbit": {
        "e": 0.00981,
        "a": 671000,
        "omega": 0.462,
    },
    "link": "europa",
    "system": [],
    "parent": "jupiter"
};
var GANYMEDE = {
    "name": "Ganymede",
    "colour": "#aca192",
    "revolution": {
        "epoch": 1665262350,
        "degrees": 50.314465408805,
    },
    "rotation": {
        "epoch": 0,
        "degrees": 0,
    },
    "orbit": {
        "e": 0.00146,
        "a": 1070000,
        "omega": 0.207,
    },
    "link": "ganymede",
    "system": [],
    "parent": "jupiter"
};
var CALLISTO = {
    "name": "Callisto",
    "colour": "#466351",
    "revolution": {
        "epoch": 1665891650,
        "degrees": 21.568509975435,
    },
    "rotation": {
        "epoch": 0,
        "degrees": 0,
    },
    "orbit": {
        "e": 0.00744,
        "a": 1883000,
        "omega": 0.2,
    },
    "link": "callisto",
    "system": [],
    "parent": "jupiter"
};
var SATURN = {
    "name": "Saturn",
    "colour": "#908160",
    "revolution": {
        "epoch": 833473500,
        "degrees": 0.0334979073,
    },
    "rotation": {
        "epoch": 0,
        "degrees": 0,
    },
    "orbit": {
        "e": 0.0520,
        "a": 1432041000,
        "omega": 0,
    },
    "link": "saturn",
    "system": SATURNIAN_SYSTEM,
    "parent": "sol"
};
var URANUS = {
    "name": "Uranus",
    "colour": "#68d3e5",
    "revolution": {
        "epoch": 1297609400,
        "degrees": 0.01176904,
    },
    "rotation": {
        "epoch": 0,
        "degrees": 0,
    },
    "orbit": {
        "e": 0.04717,
        "a": 2.870972e9,
        "omega": 0,
    },
    "link": "uranus",
    "system": URANIAN_SYSTEM,
    "parent": "sol"
};
var NEPTUNE = {
    "name": "Neptune",
    "colour": "#3164a7",
    "revolution": {
        "epoch": -3447358120,
        "degrees": 0.006020076,
    },
    "rotation": {
        "epoch": 0,
        "degrees": 0,
    },
    "orbit": {
        "e": 0.008678,
        "a": 4.5e9,
        "omega": 0,
    },
    "link": "neptune",
    "system": NEPTUNIAN_SYSTEM,
    "parent": "sol"
};
var DATA = {
    "sol": SOL,
    "mercury": MERCURY,
    "venus": VENUS,
    "earth": EARTH,
    "luna": LUNA,
    "mars": MARS,
    "phobos": PHOBOS,
    "deimos": DEIMOS,
    "jupiter": JUPITER,
    "io": IO,
    "europa": EUROPA,
    "ganymede": GANYMEDE,
    "callisto": CALLISTO,
    "saturn": SATURN,
    "uranus": URANUS,
    "neptune": NEPTUNE,
};
var _ValidBody = [
    "sol",
    "mercury",
    "venus",
    "earth",
    "luna",
    "mars",
    "phobos",
    "deimos",
    "jupiter",
    "io",
    "europa",
    "ganymede",
    "callisto",
    "saturn",
    "uranus",
    "neptune",
];
function isValidBody(s) {
    return _ValidBody.includes(s);
}
