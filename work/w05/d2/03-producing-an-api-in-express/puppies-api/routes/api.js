const express = require('express');
const router = express.Router();
const puppiesCtrl = require('../controllers/api/puppies');

/* GET users listing. */
router.get('/puppies', puppiesCtrl.getAllPuppies);
router.get('/puppies/:id', puppiesCtrl.getOnePuppy);
router.post('/puppies', puppiesCtrl.createPuppy);
router.delete('/puppies/:id', puppiesCtrl.deletePuppy);
router.put('/puppies/:id', puppiesCtrl.updatePuppy);

module.exports = router;
