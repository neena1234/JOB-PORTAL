var express = require('express');
var router = express.Router();
var userHelper = require('../helpers/account-helpers');

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
router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/')
    } else {
        res.render('home/login', {"loginErr": req.session.loginErr})
        req.session.loginErr = false
    }
})

router.get('/signup', (req, res) => {
    res.render('home/signup')
})

router.post('/signup', (req, res) => {
    userHelper.doSignup(req.body).then((response) => {
        req.session.loggedIn = true
        req.session.user = response
        res.redirect('/')
    })
})

router.post('/login', (req, res) => {
    userHelper.doLogin(req.body).then((response) => {
        if (response.status) {
            req.session.loggedIn = true
            req.session.user = response.user
            res.redirect('/user')
        } else {
            req.session.loginErr = "Invalid username or password"
            res.redirect('/login')
        }
    })
})

router.get('/logout', (req, res) => {
    req.session.destroy()
    res.redirect('/')
})
module.exports = router;
