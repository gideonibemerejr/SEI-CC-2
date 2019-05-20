const Ticket = require('../models/ticket');
const Flight = require('../models/flight');

module.exports = {
  new: newTicket,
  create
};

function create(req, res) {
  console.log(req);
}

function newTicket(req, res) {
  Ticket.find({}, function(err, tickets) {
    console.log(tickets);
    Ticket.findById(req.params.id)
      .populate('Flight')
      .exec(function(err, ticket) {
        res.render('tickets/new', {
          flightId: req.params.id,
          title: 'New Ticket',
          tickets
        });
      });
  });
}
