const mongoose = require('mongoose');
const moment = require('moment');

const Schema = mongoose.Schema;
const airlines = ['American', 'Southwest', 'United'];
const yearFromNow = () => {
  return moment().add(1, 'year');
};

const flightSchema = new Schema({
  airline: {
    type: String,
    enum: airlines
  },
  flightNo: {
    type: Number,
    min: 10,
    max: 9999
  },
  departs: {
    type: Date,
    default: yearFromNow
  }
});

module.exports = mongoose.model('Flight', flightSchema);
