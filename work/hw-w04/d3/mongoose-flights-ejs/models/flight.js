const mongoose = require('mongoose');
const moment = require('moment');

const Schema = mongoose.Schema;
const yearFromNow = () => {
  return moment().add(1, 'year');
};

const flightSchema = new Schema({
  airline: {
    type: String,
    enum: ["American", "Southwest", "United"],
    required: true
  },
  flightNo: {
    type: Number,
    min: 10,
    max: 9999,
    required: true
  },
  departs: {
    type: Date,
    required: true,
    default: function(){return new Date(new Date().setFullYear(new Date().getFullYear() + 1))}
  }
},{
  timestamps: true
});

module.exports = mongoose.model('Flight', flightSchema);
