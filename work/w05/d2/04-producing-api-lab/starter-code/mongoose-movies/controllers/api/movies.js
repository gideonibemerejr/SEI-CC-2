const Movie = require('../../models/movie');

module.exports = {
  allMovies,
  oneMovie,
  createMovie,
  deleteMovie,
  updateMovie
};

function allMovies(req, res) {
  Movie.find({}).then(movies => {
    res.status(200).json(movies);
  });
}

function oneMovie(req, res) {
  Movie.findById(req.params.id).then(movie => {
    res.status(200).json(movie);
  });
}

function createMovie(req, res) {
  Movie.create(req.body).then(movie => {
    res.status(200).json(movie);
  });
}

function deleteMovie(req, res) {
  Movie.findByIdAndDelete(req.params.id).then(movie => {
    res.status(200).json(movie);
  });
}

function updateMovie(req, res) {
  Movie.findByIdAndUpdate(req.params.id, req.body, { new: true }).then(
    movie => {
      res.status(200).json(movie);
    }
  );
}
