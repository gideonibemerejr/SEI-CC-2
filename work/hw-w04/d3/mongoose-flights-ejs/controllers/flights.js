const Flight = require('../models/flight');
const today = Date.now();

module.exports = {
  index,
  new: newFlight,
  create,
  //ascend,
  //descend

};

function create(req, res) {
  var flight = new Flight(req.body);
  flight.save(function(err){
    if (err) return res.redirect("/flights/new");
    res.redirect(`/flights`);
  });
}

function newFlight(req, res) {
    res.render('flights/new', {
      title: 'Add Flight',
    });
}

function index(req, res) {
  Flight.find({}, function(err, flights) {
    res.render('flights/index', { title: 'All Flights', dates:{today}, flights });
    console.log(flights, today);
  });
}
