var express = require('express');
var router = express.Router();
var planeData = require('../data/planes')

const config = require('../knexfile')[process.env.NODE_ENV || 'development']
const knex = require('knex')(config);

/* GET planes listing. */
router.get('/', function(req, res, next) {
  knex('planes').then(planes => res.json(planes));
});

module.exports = router;
