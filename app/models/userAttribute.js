'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userAttributeSchema = new Schema({
    userEmail: String,    
    Attributes: []
  });

var UserAttribute = mongoose.model('UserAttribute', userAttributeSchema);

module.exports = UserAttribute;