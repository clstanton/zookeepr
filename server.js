// will read the index.js files in each of the directories indicated //
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// to save data //
const fs = require('fs');
const path = require('path');

// route that the front-end can request data from //
const { animals } = require('./data/animals');
const express = require('express');

// Applications served over Heroku must run on port 80. If the host uses HTTPS, then the port would be set to 443. //
const PORT = process.env.PORT || 3001;

// instantiate the server //
const app = express();

// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));

// parse incoming JSON data
app.use(express.json());

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// Express.js middleware for file access. front-end code can now be accessed without having a specific server endpoint created for it. //
app.use(express.static('public'));

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  });