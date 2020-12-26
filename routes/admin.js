var express = require('express');
var router = express.Router();

var express = require('express');
const {render} = require('../app');

router.get('/manage-jobs', function (req, res) {
    let user = req.session.user
    res.render('admin/all-jobs', {user, admin: true, employer: false, applicant: false, home: false})
});

router.get('/admin-dashboard', function (req, res) {
    let user = req.session.user
    res.render('admin/admin-dashboard', {user, admin: true, employer: false, applicant: false, home: false})
})

router.get('/view-stats', function (req, res) {
    let user = req.session.user
    res.render('admin/view-stats', {user, admin: true, employer: false, applicant: false, home: false})
});

router.get('/manage-employers', function (req, res) {
    let user = req.session.user
    res.render('admin/view-all-employers', {user, admin: true, employer: false, applicant: false, home: false})
});

router.get('/manage-users', function (req, res) {
    let user = req.session.user
    res.render('admin/view-all-users', {user, admin: true, employer: false, applicant: false, home: false})
});

module.exports = router;
