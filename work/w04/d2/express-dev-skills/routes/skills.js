var express = require('express');
var router = express.Router();
const skillsCtrl = require('../controllers/skills');

/* GET users listing. */
router.get('/', skillsCtrl.index);

router.get('/:id', skillsCtrl.show);

module.exports = router;
