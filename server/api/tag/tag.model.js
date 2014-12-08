'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var TagSchema = new Schema({
  name: { type: String, required: true },
  info: String,
  image: String
});

module.exports = mongoose.model('Tag', TagSchema);
