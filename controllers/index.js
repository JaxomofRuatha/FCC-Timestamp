const express = require('express');
const moment = require('moment');
const router = express.Router();

//Homepage render path setup
router.get("/", (req, res) => {
    res.render("index");
});

//Logic for parsing url input
router.get("/:inputTime", (req, res) => {
    let inputTime = req.params.inputTime;
    let pattern = /^\d+$/g;
    if (pattern.test(inputTime)) {
        let naturalTime = moment.unix(inputTime).format("MMM D, YYYY");
        res.send({ "unix-time": inputTime, "natural-time": naturalTime });
    }
    else if (moment(inputTime).isValid()) {
        res.json({ "unix-time": moment(inputTime).format("X"), "natural-time": moment(inputTime).format("MMM D, YYYY") });
    }
    else {
        res.send({ "unix-time": 'null', "natural-time": 'null' });
    }
});

module.exports = router;