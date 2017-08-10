const express = require('express');
const moment = require('moment');
const path = require('path');
const app = express();

const port = process.env.PORT || 8080;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(express.static(path.join(__dirname, "public")));

app.use("/", index);

app.use((req, res, next) => {
    let error = new Error("Not found");
    error.status = 404;
    next(error);
})

app.get("/:inputTime", (req, res) => {
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

app.listen(port, () => {
    console.log('Timestamp server is listening on port ' + port);
});