var express = require("express");
var router = express.Router();

var projects = require("../data/json/projects.json");
var resume = require("../data/json/resume.json");
var skills = require("../data/json/skills.json");


router.get("/projects", function (req, res, next) {
    res.send(projects);
});

router.get("/resume", function (req, res, next) {
    res.send(resume);
});

router.get("/skills", function (req, res, next) {
    res.send(skills);
});

module.exports = router;