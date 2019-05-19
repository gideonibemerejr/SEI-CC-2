const express = require("express");
const router = express.Router();
const destCtrl = require("../controllers/destinations");


router.post('/flights/:id/destinations', destCtrl.create);

module.exports = router;