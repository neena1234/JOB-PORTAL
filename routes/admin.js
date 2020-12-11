var express = require('express');
var router = express.Router();

var express = require('express');
const { render } = require('../app');

var MongoClient=require('mongodb').MongoClient

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('index')
});

module.exports = router;
