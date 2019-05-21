const express = require('express');
const router = express.Router();
const moviesCtrl = require('../controllers/api/movies');

/* GET x2 (index, 'show') */
router.get('/movies', moviesCtrl.allMovies);
router.get('/movies/:id', moviesCtrl.oneMovie);
/* POST */
router.post('/movies/', moviesCtrl.createMovie);
/* DELETE */
router.delete('/movies/:id', moviesCtrl.deleteMovie);
/* PUT */
router.put('/movies/:id', moviesCtrl.updateMovie);

module.exports = router;
