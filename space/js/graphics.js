const SVGNS = "http://www.w3.org/2000/svg"
const CENTRE_OBJECT_RADIUS = 30;
const SATELLITE_RADIUS = 10;
const STROKE_THICKNESS = 2;
const ORBIT_DASH_PATTERN = "20,10";
const BACKGROUND = "#121212";

class Satellite {
    constructor(details) {
        this.details = details;
        this.body = document.createElementNS(SVGNS, "circle");
        this.orbit = document.createElementNS(SVGNS, "ellipse");
    }

    getName() {
        return this.details.name;
    }

    getColour() {
        return this.details.colour;
    }

    getEpoch() {
        return this.details.epoch;
    }

    getDegPerDay() {
        return this.details.degPerDay;
    }

    getE() {
        return this.details.e;
    }

    getA() {
        return this.details.a;
    }

    getB() {
        return this.getA() * Math.sqrt(1 - Math.pow(this.getE, 2));
    }

    getOmega() {
        return this.details.omega;
    }

    getLink() {
        return this.details.link;
    }
}

class System {
    constructor(centreDetails) {
        this.centre = new Satellite(centreDetails);
        this.satellites = [];
        this.canvas = null;
        this.accurate = null;
        this.intervalId = null;
    }

    addSatellite(s) {
        this.satellites.push(new Satellite(DATA[s]));
    }

    addSatellites(ss) {
        for (let i = 0; i < ss.length; i++) {
            this.addSatellite(ss[i]);
        }
    }

    draw(canvas, accurate) {
        this.canvas = canvas;
        this.accurate = accurate;

        let viewBox = canvas.getAttribute("viewBox").split(" ");
        let width = viewBox[2];
        let height = viewBox[3];
        let cx = width / 2;
        let cy = height / 2;
        
        this.setBodyAttributes(this.centre, CENTRE_OBJECT_RADIUS);
        this.centre.body.setAttribute("cx", cx);
        this.centre.body.setAttribute("cy", cy);
        canvas.appendChild(this.centre.body);

        let radiusStep = (!accurate) ? cx / (this.satellites.length + 1) : 0;

        for (let i = 0; i < this.satellites.length; i++) {
            this.setBodyAttributes(this.satellites[i], SATELLITE_RADIUS);
            this.setOrbitAttributes(this.satellites[i], cx, cy, accurate, radiusStep, i + 1);
            this.calculateBodyPosition(this.satellites[i], cx, cy, accurate);
            canvas.appendChild(this.satellites[i].orbit);
            canvas.appendChild(this.satellites[i].body);
        }
    }

    setUpdate(time) {
        if (time === 0) {
            this.stopUpdate();
            return;
        }
        if (this.intervalId !== null) {
            this.stopUpdate();
        }
        if (this.canvas === null || this.accurate === null) {
            console.error("Cannot set update, canvas has not been drawn to.");
            return;
        }
        this.intervalId = setInterval(this.draw.bind(this), time, this.canvas, this.accurate);
    }

    stopUpdate() {
        clearInterval(this.intervalId);
        this.intervalId = null;
    }

    setBodyAttributes(s, radius) {
        let b = s.body;
        b.setAttribute("r", radius);
        b.setAttribute("stroke", s.getColour());
        b.setAttribute("stroke-width", STROKE_THICKNESS);
        b.setAttribute("fill", BACKGROUND);
        b.addEventListener("click", () => {
            window.location = `/space?s=${s.getLink()}`;
        });
        b.classList.add("clickable");
    }

    setOrbitAttributes(s, x, y, accurate, radiusStep, i) {
        let o = s.orbit;
        o.setAttribute("cx", x);
        o.setAttribute("cy", y);
        o.setAttribute("stroke", s.getColour());
        o.setAttribute("stroke-width", STROKE_THICKNESS);
        o.setAttribute("stroke-dasharray", ORBIT_DASH_PATTERN);
        o.setAttribute("fill", "none");

        if (accurate) {
            o.setAttribute("rx", s.getA() / 1e6);
            let b = (accurate) ? s.getB() / 1e6 : s.getA() / 1e6;
            o.setAttribute("ry", b);
            o.setAttribute("transform", `rotate(${360 - s.getOmega()}, ${x}, ${y})`);
        } else {
            o.setAttribute("rx", radiusStep * i);
            o.setAttribute("ry", radiusStep * i);
        }
    }

    calculateBodyPosition(s, x, y, accurate) {
        let time = Math.floor(Date.now() / 1e3) - s.getEpoch();
        let days = time / 60 / 60 / 24;
        let deg = (s.getDegPerDay() * days) % 360;
        let theta = deg2rad(deg);
        let cx = parseFloat(s.orbit.getAttribute("rx")) * Math.cos(theta) + x;
        let cy = parseFloat(s.orbit.getAttribute("ry")) * -Math.sin(theta) + y;
        s.body.setAttribute("cx", cx);
        s.body.setAttribute("cy", cy);
        if (accurate) s.body.setAttribute("transform", `rotate(${360 - s.getOmega()}, ${x}, ${y})`);
    }
}

function deg2rad(deg) {
    return Math.PI * (deg / 180);
}