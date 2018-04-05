const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const db = require('./config/db')

const port = process.env.PORT || 8000;
app.use(bodyParser.json({ extended: true }));

mongoose.connect(db.url)

app.listen(port, () => {
    require('./app/routes')(app)
    console.log('We are live on ' + port);
});