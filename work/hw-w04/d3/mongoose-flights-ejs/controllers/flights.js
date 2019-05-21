const Flight = require('../models/flight');
const Ticket = require('../models/ticket');
const today = Date.now();
var options = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric'
};

module.exports = {
  index,
  new: newFlight,
  create,
  show
  //ascend,
  //descend
};

function show(req, res) {
  Flight.findById(req.params.id).exec(function(err, flight) {
    Ticket.find({ flight: flight._id }, function(err, tickets) {
      res.render('flights/show', {
        title: 'Flight Details',
        today,
        flight,
        options,
        tickets
      });
    });
  });
}

function create(req, res) {
  var flight = new Flight(req.body);
  flight.save(function(err) {
    if (err) {
      console.log(err);
      return res.redirect('/flights/new');
    }
    res.redirect('/flights');
  });
}

function newFlight(req, res) {
  res.render('flights/new', {
    title: 'Add Flight'
  });
}

function index(req, res) {
  Flight.find({})
    .sort({ departs: 'asc' })
    .exec(function(err, flights) {
      res.render('flights/index', {
        title: 'All Flights',
        today,
        options,
        flights
      });
    });
}
