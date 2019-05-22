const express = require('express');
const router = express.Router();
const moviesCtrl = require('../controllers/api/movies');
const performersCtrl = require('../controllers/api/performers');

/* GET x2 (index, 'show') */
router.get('/movies', moviesCtrl.allM);
router.get('/movies/:id', moviesCtrl.oneM);
/* POST */
router.post('/movies/', moviesCtrl.createM);
/* DELETE */
router.delete('/movies/:id', moviesCtrl.deleteM);
/* PUT */
router.put('/movies/:id', moviesCtrl.updateM);

/* GET x2 (index, 'show') */
router.get('/performers', performersCtrl.allP);
router.get('/performers/:id', performersCtrl.oneP);
/* POST */
router.post('/performers/', performersCtrl.createP);
/* DELETE */
router.delete('/performers/:id', performersCtrl.deleteP);
/* PUT */
router.put('/performers/:id', performersCtrl.updateP);

module.exports = router;
