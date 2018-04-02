const express        = require('express');
const MongoClient    = require('mongodb').MongoClient;
const bodyParser     = require('body-parser');
const db             = require('./config/db');

const app            = express();

const port = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }));

MongoClient.connect(db.url, (err, database) => {
    if (err) return console.log(err);
    
    let db1 = database.db("heroku_gd4hnr9m")
    require('./app/routes')(app, db1);

    require('./app/routes')(app, {});
    app.listen(port, () => {
    console.log('We are live on ' + port);
    });
})
