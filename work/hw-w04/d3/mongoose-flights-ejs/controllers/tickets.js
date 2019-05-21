const Ticket = require('../models/ticket');
const Flight = require('../models/flight');

module.exports = {
  new: newTicket,
  create
};

function create(req, res) {
  let ticketData = req.body;
  ticketData.flight = req.params.id;
  let ticket = new Ticket(ticketData);
  ticket
    .save()
    .then(ticket => console.log(ticket))
    .catch(error => console.log(error));
  Ticket.findOne({ flight: req.params.id })
    .populate('flight')
    .exec((err, ticket) => {
      if (err) {
        console.log(err);
        res.redirect('/tickets/new');
      }
      console.log(ticket);
    });
  res.redirect('/flights');
  // Ticket.findById(req.params.id)
  //   //   .then(result => console.log(result))
  //   //   .catch(error => console.log(error));
  //   .populate('flight')
  //   .exec(function(err, ticket) {
  //     if (err) console.log(err);
  //     ticket = new Ticket(req.body);
  //     ticket.save(function(err) {
  //       if (err) {
  //         console.log(err);
  //         return res.redirect('/tickets/new');
  //       }
  //       console.log(ticket);
  //       res.redirect('/flights');
  //     });
  //   });
}

function newTicket(req, res) {
  res.render('tickets/new', {
    flightId: req.params.id,
    title: 'New Ticket'
  });
}
