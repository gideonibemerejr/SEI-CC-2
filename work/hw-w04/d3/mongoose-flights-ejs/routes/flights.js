const express = require('express');
const router = express.Router();
const flightsCtrl = require('../controllers/flights');

/* GET flights listing. */
router.get('/', flightsCtrl.index);
router.get('/new', flightsCtrl.new);
router.get('/:id', flightsCtrl.show);
/* GET new flights form */

/* POST new flights */
router.post('/', flightsCtrl.create);

module.exports = router;
