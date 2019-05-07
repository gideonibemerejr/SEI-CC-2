const Puppy = require('../models/puppy');

module.exports = {
  getAllPuppies,
  getOnePuppy,
  createPuppy,
  deletePuppy,
  updatePuppy
};

function updatePuppy(req, res) {
  Puppy.findByIdAndUpdate(req.params.id, req.body, {new: true}).then(function(puppy) {
    res.status(200).json(puppy);
  });
}

function deletePuppy(req, res) {
  Puppy.findByIdAndRemove(req.params.id).then(function(puppy) {
    res.status(200).json(puppy);
  });
}

function getOnePuppy(req, res) {
  Puppy.findById(req.params.id).then(function(puppy) {
    res.status(200).json(puppy);
  });
}

function createPuppy(req, res) {
  Puppy.create(req.body).then(function(puppy) {
    res.status(201).json(puppy);
  });
}

function getAllPuppies(req, res) {
  Puppy.find({}).then(function(puppies) {
    res.status(200).json(puppies);
  });
}