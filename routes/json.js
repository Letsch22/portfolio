var express = require("express");
var router = express.Router();

var projects = require("../data/json/projects.json");
var resume = require("../data/json/resume.json");
var skills = require("../data/json/skills.json");
var icons = require("../data/json/icons.json");
var about = require("../data/json/about.json");

router.get("/projects", function (req, res, next) {
    res.send(projects);
});

router.get("/resume", function (req, res, next) {
    res.send(resume);
});

router.get("/skills", function (req, res, next) {
    res.send(skills);
});

router.get("/icons", function (req, res, next) {
    res.send(icons);
});

router.get("/about", function (req, res, next) {
    res.send(about);
});

module.exports = router;