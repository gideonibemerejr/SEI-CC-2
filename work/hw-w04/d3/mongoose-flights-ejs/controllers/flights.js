const Flight = require('../models/flight');
const today = new Date();
const tomorrow = (today.getDate())

module.exports = {
  index,
  new: newFlight,
  create
};

function create(req, res) {
  var flight = new Flight(req.body);
  flight.save(function(err){
    if (err) return res.redirect("/flights/new");
    res.redirect(`/flights`);
  });
}

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
    res.render('flights/index', { title: 'All Flights', dates:{today, tomorrow}, flights });
    console.log(tomorrow, today);
  });
}
