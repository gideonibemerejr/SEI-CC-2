var express = require('express');
var router = express.Router();
var todoCtrl = require('../controllers/todos');

/* GET /todos */
router.get('/', todoCtrl.index);
router.get('/new', todoCtrl.new);
router.get('/:id', todoCtrl.show);
router.post('/', todoCtrl.create);
router.delete('/:id', todoCtrl.delete);
router.get('/:id/edit', todoCtrl.edit);
router.put('/:id', todoCtrl.update);

module.exports = router;
