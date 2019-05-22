const Performer = require('../../models/performer');

module.exports = {
  allP,
  oneP,
  createP,
  deleteP,
  updateP
};

function allP(req, res) {
  Performer.find({}).then(performers => {
    res.status(200).json(performers);
  });
}

function oneP(req, res) {
  Performer.findById(req.params.id).then(performer => {
    res.status(200).json(performer);
  });
}

function createP(req, res) {
  Performer.create(req.body).then(performer => {
    res.status(200).json(performer);
  });
}

function deleteP(req, res) {
  Performer.findByIdAndDelete(req.params.id).then(performer => {
    res.status(200).json(performer);
  });
}

function updateP(req, res) {
  Performer.findByIdAndUpdate(req.params.id, req.body, { new: true }).then(
    performer => {
      res.status(200).json(performer);
    }
  );
}
