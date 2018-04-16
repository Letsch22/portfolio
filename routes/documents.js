var express = require("express");
var router = express.Router();
var fs = require("fs");

// TODO fix this
router.get("/exosite.pdf", function (req, res, next) {
    var filePath = __dirname + "/../data/documents/exosite.pdf";
    var file = fs.createReadStream(filePath);
    res.type("pdf");
    res.setHeader("Content-Disposition", "inline; filename=exosite.pdf");
    file.pipe(res);
});

module.exports = router;