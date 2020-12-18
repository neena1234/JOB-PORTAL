var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index')
});

router.get('/contact', function (req, res, next) {
    res.render('home/contact')
});
router.get('/about', function (req, res, next) {
    res.render('home/about')
});
router.get('/services', function (req, res, next) {
    res.render('home/services')
});
module.exports = router;
