const express = require('express');
const moment = require('moment');

const router = express.Router();

// Homepage render path setup
router.get('/', (req, res) => {
  const nowUnix = moment().unix();

  res.render('index', { currentUnix: nowUnix });
});

// Logic for parsing url input
router.get('/:inputTime', (req, res) => {
  const inputTime = req.params;
  const pattern = /^\d+$/g;

  if (pattern.test(inputTime)) {
    const naturalTime = moment.unix(inputTime).format('MMM D, YYYY');
    res.send({ 'unix-time': inputTime, 'natural-time': naturalTime });
  } else if (moment(inputTime).isValid()) {
    res.json({
      'unix-time': moment(inputTime).format('X'),
      'natural-time': moment(inputTime).format('MMM D, YYYY'),
    });
  } else {
    res.send({ 'unix-time': null, 'natural-time': null });
  }
});

module.exports = router;
