const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const destinationSchema = new Schema({
  airport: {
    type: String,
    enum: ["AUS", "DAL", "LAX", "SEA"]
  },
  arrival: Date
});

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
  }, 
  airport: {
    type: String,
    enum: ['AUS', 'LAX', 'SEA', 'DAL'],
    default: 'SEA'
  },
  destinations: [destinationSchema]
},{
  timestamps: true
});

module.exports = mongoose.model('Flight', flightSchema);
