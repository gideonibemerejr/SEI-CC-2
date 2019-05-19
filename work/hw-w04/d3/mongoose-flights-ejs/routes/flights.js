const express = require('express');
const router = express.Router();
const flightsCtrl = require('../controllers/flights');

/* GET flights listing. */
router.get('/', flightsCtrl.index);
/* GET new flights form */
router.get('/new', flightsCtrl.new);

/* POST new flights */
router.post('/', flightsCtrl.create);
module.exports = router;
