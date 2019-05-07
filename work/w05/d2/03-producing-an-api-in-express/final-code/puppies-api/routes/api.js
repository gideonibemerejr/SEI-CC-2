var express = require('express');
var router = express.Router();
var puppiesCtrl = require('../controllers/puppies');

/* GET /api/puppies */
router.get('/puppies', puppiesCtrl.getAllPuppies);
router.get('/puppies/:id', puppiesCtrl.getOnePuppy);
router.post('/puppies', puppiesCtrl.createPuppy);
router.delete('/puppies/:id', puppiesCtrl.deletePuppy);
router.put('/puppies/:id', puppiesCtrl.updatePuppy);

module.exports = router;
