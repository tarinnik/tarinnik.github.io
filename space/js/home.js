const canvas = document.getElementById("canvas");
const overview = new System(DATA.sun);
overview.addSatellites(SOLAR_SYSTEM);
overview.draw(canvas, false);