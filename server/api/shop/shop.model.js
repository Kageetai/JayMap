'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ShopSchema = new Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  description: String,
  stock: { type: Number, default: 100 },
  latitude: { type: Number, required: true },
  longitude: { type: Number, required: true },
  image: String,
  link: String,
  tags: [{ type: Schema.ObjectId, ref: 'Tag' }],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Shop', ShopSchema);
