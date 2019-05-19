const Flight = require('../models/flight');

module.exports = {
  index,
  new: newFlight
};

function newFlight(req, res) {
  Flight.find({}, function(err, flights) {
    res.render('flights/new', {
      title: 'Add Flight',
      carriers: flights.airlines
    });
  });
}

function index(req, res) {
  Flight.find({}, function(err, flights) {
    res.render('flights/index', { title: 'All Flights', flights });
    console.log(flights.airline);
  });
}
