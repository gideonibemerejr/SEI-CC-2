const Ticket = require('../models/ticket');
const Flight = require('../models/flight');

module.exports = {
    new: newTicket,
    create
}


function create(req, res) {
    Ticket.findById(req.params.id)
    .populate('flight')
    .exec(function(err, ticket) {
        console.log(ticket);
         res.redirect('/');
    })
}

function newTicket(req, res) {
    Ticket.find({}, function(err, tickets){
        console.log(tickets);
        res.render('tickets/new', {
            flightId: req.params.id,
            title: 'New Ticket',
            tickets, 
        });
    })

}