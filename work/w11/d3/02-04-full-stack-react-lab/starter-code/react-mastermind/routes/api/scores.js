const express = require('express');
const router = express.Router();
const scoresCtrl = require('../../controllers/api/scores');

/* GET High Scores */
router.get('/', scoresCtrl.getHighScores);

/* POST High Score */
router.post('/', scoresCtrl.create);
