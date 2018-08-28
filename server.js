const express = require('express');
const path = require('path');

const index = require('./routes');

const app = express();

// Port setup
const port = process.env.PORT || 8080;

// Set up path for views and view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Set up directory for static served files
app.use(express.static(path.join(__dirname, 'public')));

// Set up index as router on root
app.use('/', index);

// Start server
app.listen(port, () => {
  console.log(`Timestamp server is listening on port ${port}`);
});
