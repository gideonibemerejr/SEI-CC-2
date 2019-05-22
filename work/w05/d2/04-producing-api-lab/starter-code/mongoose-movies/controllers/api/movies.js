const Movie = require('../../models/movie');

module.exports = {
  allM,
  oneM,
  createM,
  deleteM,
  updateM
};

function allM(req, res) {
  Movie.find({}).then(movies => {
    res.status(200).json(movies);
  });
}

function oneM(req, res) {
  Movie.findById(req.params.id)
    .populate('cast')
    .then(movie => {
      res.status(200).json(movie);
    });
}

function createM(req, res) {
  Movie.create(req.body).then(movie => {
    res.status(200).json(movie);
  });
}

function deleteM(req, res) {
  Movie.findByIdAndDelete(req.params.id).then(movie => {
    res.status(200).json(movie);
  });
}

function updateM(req, res) {
  Movie.findByIdAndUpdate(req.params.id, req.body, { new: true }).then(
    movie => {
      res.status(200).json(movie);
    }
  );
}
