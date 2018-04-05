var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userAnswerSchema = new Schema({
    userEmail: String,    
    answers: []
  });

var UserAnswer = mongoose.model('UserAnswer', userAnswerSchema);

module.exports = UserAnswer;