var express = require('express');
var router = express.Router();
var userHelper = require('../helpers/account-helpers');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index',{admin:false,employer:false,applicant:false,home:true})
});

router.get('/contact', function (req, res, next) {
    res.render('home/contact',{admin:false,employer:false,applicant:false,home:true})
});
router.get('/about', function (req, res, next) {
    res.render('home/about',{admin:false,employer:false,applicant:false,home:true})
});
router.get('/services', function (req, res, next) {
    res.render('home/services',{admin:false,employer:false,applicant:false,home:true})
});

router.get('/jobs', function (req,res,next){
    res.render('home/all-jobs',{admin:false,employer:false,applicant:false,home:true})
})

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        console.log(req.session.user)
        res.redirect('/')
    } else {
        res.render('home/login', {"loginErr": req.session.loginErr,admin:false,employer:false,applicant:false,home:true})
        req.session.loginErr = false
    }
})

router.get('/signup', (req, res) => {
    res.render('home/signup',{admin:false,employer:false,applicant:false,home:true})
})

router.post('/signup', (req, res) => {
    userHelper.doSignup(req.body).then((response) => {
        req.session.loggedIn = true
        req.session.user = response.user
        res.redirect('/')
    })
})

router.post('/login', (req, res) => {
    userHelper.doLogin(req.body).then((response) => {
        if (response.status) {
            console.log(response.user)
            req.session.loggedIn = true
            req.session.user = response.user
            if(response.user.role === 'admin') {
                res.redirect('admin/admin-dashboard')
            }else if(response.user.role === 'employer'){
                let user = req.session.user
                res.redirect('employers/employers-dashboard')
            }else if (response.user.role === 'user'){
                let user = req.session.user
                res.redirect('/user')
            }else{
                req.session.loginErr = "Please Contact Admin"
                res.redirect('/login')
            }
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
