"use strict";
var SVGNS = "http://www.w3.org/2000/svg";
var CENTRE_OBJECT_RADIUS = 30;
var SATELLITE_RADIUS = 10;
var STROKE_THICKNESS = 2;
var ORBIT_DASH_PATTERN = "20,10";
var BACKGROUND = "#121212";
var Satellite = (function () {
    function Satellite(details) {
        this.details = details;
        this.body = document.createElementNS(SVGNS, "circle");
        this.orbit = document.createElementNS(SVGNS, "ellipse");
        this.b = details.orbit.a * Math.sqrt(1 - Math.pow(details.orbit.e, 2));
    }
    return Satellite;
}());
var System = (function () {
    function System(details) {
        this.satellites = [];
        this.accurate = false;
        this.intervalId = null;
        this.centre = new Satellite(details);
        this.canvas = document.getElementById("canvas");
        this.rotationIndicator = document.createElementNS(SVGNS, "rect");
        this.addSatellites(details.system);
    }
    System.prototype.addSatellite = function (s) {
        this.satellites.push(new Satellite(DATA[s]));
    };
    System.prototype.addSatellites = function (ss) {
        for (var i = 0; i < ss.length; i++) {
            this.addSatellite(ss[i]);
        }
    };
    System.prototype.draw = function (accurate) {
        this.accurate = accurate;
        document.getElementById("title").innerText = this.centre.details.name;
        var viewBox = this.canvas.getAttribute("viewBox").split(" ");
        var width = Number(viewBox[2]);
        var height = Number(viewBox[3]);
        var cx = width / 2;
        var cy = height / 2;
        this.setBodyAttributes(this.centre, CENTRE_OBJECT_RADIUS);
        this.centre.body.setAttribute("cx", cx.toString());
        this.centre.body.setAttribute("cy", cy.toString());
        this.canvas.appendChild(this.centre.body);
        var radiusStep = (!accurate) ? cx / (this.satellites.length + 1) : 1;
        for (var i = 0; i < this.satellites.length; i++) {
            this.setBodyAttributes(this.satellites[i], SATELLITE_RADIUS);
            this.setOrbitAttributes(this.satellites[i], cx, cy, radiusStep, i + 1);
            this.calculateBodyPosition(this.satellites[i], cx, cy);
            this.canvas.appendChild(this.satellites[i].orbit);
            this.canvas.appendChild(this.satellites[i].body);
        }
        if (this.centre.details.parent !== null) {
            this.setParentDot(this.centre.details.parent);
        }
    };
    System.prototype.setBodyAttributes = function (s, radius) {
        var b = s.body;
        b.setAttribute("r", radius.toString());
        b.setAttribute("stroke", s.details.colour);
        b.setAttribute("stroke-width", STROKE_THICKNESS.toString());
        b.setAttribute("fill", BACKGROUND);
        b.addEventListener("click", function () {
            window.location.href = "/space?s=".concat(s.details.link);
        });
        b.classList.add("clickable");
    };
    System.prototype.setOrbitAttributes = function (s, x, y, radiusStep, i) {
        var o = s.orbit;
        o.setAttribute("cx", x.toString());
        o.setAttribute("cy", y.toString());
        o.setAttribute("stroke", s.details.colour);
        o.setAttribute("stroke-width", STROKE_THICKNESS.toString());
        o.setAttribute("stroke-dasharray", ORBIT_DASH_PATTERN);
        o.setAttribute("fill", "none");
        if (this.accurate) {
            o.setAttribute("rx", (s.details.orbit.a / 1e6).toString());
            o.setAttribute("ry", (s.b / 1e6).toString());
            o.setAttribute("transform", "rotate(".concat(360 - s.details.orbit.omega, ", ").concat(x, ", ").concat(y, ")"));
        }
        else {
            o.setAttribute("rx", (radiusStep * i).toString());
            o.setAttribute("ry", (radiusStep * i).toString());
        }
    };
    System.prototype.calculateBodyPosition = function (s, x, y) {
        var time = Math.floor(Date.now() / 1e3) - s.details.revolution.epoch;
        var days = time / 60 / 60 / 24;
        var deg = (s.details.revolution.degrees * days) % 360;
        var theta = deg2rad(deg);
        var cx = parseFloat(s.orbit.getAttribute("rx")) * Math.cos(theta) + x;
        var cy = parseFloat(s.orbit.getAttribute("ry")) * -Math.sin(theta) + y;
        s.body.setAttribute("cx", cx.toString());
        s.body.setAttribute("cy", cy.toString());
        if (this.accurate)
            s.body.setAttribute("transform", "rotate(".concat(360 - s.details.orbit.omega, ", ").concat(x, ", ").concat(y, ")"));
    };
    System.prototype.setParentDot = function (parentName) {
        var parent = DATA[parentName];
        var time = Math.floor(Date.now() / 1e3) - this.centre.details.revolution.epoch;
        var days = time / 60 / 60 / 24;
        var deg = (this.centre.details.revolution.degrees * days - 180) % 360;
        var theta = deg2rad(deg);
        var cx = 445 * Math.cos(theta) + parseFloat(this.centre.body.getAttribute("cx"));
        var cy = 445 * -Math.sin(theta) + parseFloat(this.centre.body.getAttribute("cy"));
        var parentDot = document.createElementNS(SVGNS, "circle");
        parentDot.setAttribute("r", "5");
        parentDot.setAttribute("cx", cx.toString());
        parentDot.setAttribute("cy", cy.toString());
        parentDot.setAttribute("fill", parent.colour);
        this.canvas.appendChild(parentDot);
    };
    System.prototype.setUpdate = function (time) {
        if (this.intervalId !== null) {
            this.stopUpdate();
        }
        this.intervalId = setInterval(this.draw.bind(this), time, this.accurate);
    };
    System.prototype.stopUpdate = function () {
        if (this.intervalId !== null) {
            clearInterval(this.intervalId);
            this.intervalId = null;
        }
    };
    return System;
}());
function deg2rad(deg) {
    return Math.PI * (deg / 180);
}
