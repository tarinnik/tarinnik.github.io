const canvas = document.getElementById("canvas");
const earthSystem = new System(DATA.earth);
earthSystem.addSatellites(TERRAN_SYSTEM);
earthSystem.draw(canvas, false);