'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ShopSchema = new Schema({
  name: String,
  address: String,
  description: String,
  stock: { type: Number, default: 100 },
  location: {
    latitude: Number,
    longitude: Number
  },
  image: String,
  link: String,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Shop', ShopSchema);
