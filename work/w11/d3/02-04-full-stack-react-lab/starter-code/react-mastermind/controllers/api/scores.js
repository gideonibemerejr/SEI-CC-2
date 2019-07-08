const Score = require('../../models/Score');

module.exports = {
  create,
  getHighScores
};

async function create(req, res) {
  try {
    await Score.create(req.body);

    // * return high scores -- this will include the newly created scores as you are awaiting the creation BEFORE running this function
    getHighScores(req, res);
  } catch (err) {
    res.json({ err });
  }
}

async function getHighScores(req, res) {
  const scores = await Score.find({})
    .sort({ numGuesses: 1, seconds: 1 })
    .limit(req.query.limit || 20);
  res.status(200).json(scores);
}
