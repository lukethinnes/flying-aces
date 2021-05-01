var express = require('express');
var router = express.Router();
var planeData = require('../data/planes')

console.log(planeData)

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(planeData);
});

module.exports = router;
