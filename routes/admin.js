var express = require('express');
var router = express.Router();

var express = require('express');
const {render} = require('../app');
var jobHelper = require('../helpers/job-helpers');

var MongoClient = require('mongodb').MongoClient

/* GET user listing. */
router.get('/', function (req, res, next) {
    jobHelper.getAllJobs().then((jobs) => {
        res.render('admin/view-jobs', {jobs: jobs, admin: true})
    })
});

router.get('/admin-dashboard',function (req,res){
    res.render('admin/admin-dashboard')
})


router.get('/add-job', function (req, res) {
    res.render('admin/add-job')
});

router.post('/add-jobs', ((req, res) => {
    jobHelper.addJobs(req.body, (result) => {
        res.render('admin/add-job')
    })
}))

module.exports = router;
