'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const spotSchema = new Schema({
  name: {
    type: String,
    required: true
  },

  description: {
    type: String,
    required: true
  }
});

const Spot = mongoose.model('Spot', spotSchema);

module.exports = Spot;
