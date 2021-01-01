var express = require('express');
var router = express.Router();

var express = require('express');
const {render} = require('../app');
var jobHelper = require('../helpers/job-helpers');

var MongoClient = require('mongodb').MongoClient

/* GET user listing. */
router.get('/all-jobs', function (req, res, next) {
    let user = req.session.user
    jobHelper.getAllJobs().then((jobs) => {
        res.render('employers/view-jobs', {jobs: jobs,user, admin:false,employer:true,applicant:false,home:false})
    })
});

router.get('/employers-dashboard',function (req,res){
    let user = req.session.user
    res.render('employers/employers-dashboard',{user,admin:false,employer:true,applicant:false,home:false})
})

router.get('/add-job',function (req,res){
    let user = req.session.user
    res.render('employers/add-job',{user,admin:false,employer:true,applicant:false,home:false})
})

router.post('/add-job', ((req, res) => {
    jobHelper.addJobs(req.body, (result) => {
        res.redirect('/employers/all-jobs')
    })
}))

module.exports = router;
