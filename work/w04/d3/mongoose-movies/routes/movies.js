var express = require('express');
var router = express.Router();

const moviesCtrl = require('../controllers/movies');

/* GET /movies to show form */
router.get('/', moviesCtrl.index);
router.get('/new', moviesCtrl.new);
<<<<<<< HEAD
=======
router.get('/new', moviesCtrl.new);
>>>>>>> c3fa2c1a21d87f17269505844c66bcdb8d525ec9
router.post('/', moviesCtrl.create);

module.exports = router;
