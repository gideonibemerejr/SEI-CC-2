var express = require('express');
router = express.Router();
var reviewsCtrl = require('../controllers/reviews');

// POST request to movies/:id/reviews
router.post('/movies/:id/reviews', reviewsCtrl.create);

module.exports = router;
