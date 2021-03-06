'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var questionSchema = new Schema({
    question: String,
    attribute: String,
    selectionA: String,
    selectionB: String,
  });

var Question = mongoose.model('Question', questionSchema);

module.exports = Question;