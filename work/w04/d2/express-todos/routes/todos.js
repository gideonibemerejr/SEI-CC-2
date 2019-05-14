var express = require('express');
var router = express.Router();
var todoCtrl = require('../controllers/todos');

/* GET /todos */
router.get('/', todoCtrl.index);

router.get('/:id', todoCtrl.show);

module.exports = router;
