'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const db = require('./config/db');
const pages = require('./app/docs/static');

const port = process.env.PORT || 8000;;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));

mongoose.connect(db.url);

app.listen(port, () => {
    pages(app);
    require('./app/routes')(app);
    console.log('We are live on ' + port);
});


  