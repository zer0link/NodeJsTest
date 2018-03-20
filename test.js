const mongoose       = require('mongoose');
const dbConfig       = require('./config/db');

mongoose.connect(dbConfig.url);

mongoose.connection.once('open', function() {
    console.log('Connection has been made, now making fireworks...');
}).on('error', function(error) {
    console.log('Connection error:', error );
});