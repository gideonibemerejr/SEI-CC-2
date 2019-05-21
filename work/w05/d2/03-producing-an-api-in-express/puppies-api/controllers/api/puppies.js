const Puppy = require('../../models/puppy');

module.exports = {
  getAllPuppies,
  createPuppy,
  getOnePuppy,
  deletePuppy,
  updatePuppy
};

function updatePuppy(req, res) {
  Puppy.findByIdAndUpdate(req.params.id, req.body, { new: true }).then(pup => {
    res.status(200).json(pup);
  });
}

function deletePuppy(req, res) {
  Puppy.findByIdAndDelete(req.params.id).then(pup => {
    res.status(200).json(pup);
  });
}

function getOnePuppy(req, res) {
  Puppy.findById(req.params.id).then(pup => {
    res.status(200).json(pup);
  });
}

function createPuppy(req, res) {
  Puppy.create(req.body).then(pup => {
    res.status(201).json(pup);
  });
}

function getAllPuppies(req, res) {
  Puppy.find({}).then(puppies => {
    res.status(200).json(puppies);
  });
}
