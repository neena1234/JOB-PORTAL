var express = require('express');
var router = express.Router();
const userHelper = require('../helpers/account-helpers')
var jobHelper = require('../helpers/job-helpers');

/* GET home page. */
router.get('/', function (req, res, next) {
    console.log(req.session.user)
    let user = req.session.user
    res.render('user/user-dashboard',{user,admin:false,employer:false,applicant:true,home:false})
});

router.get('/user-view-jobs',function (req,res){
    let user = req.session.user
    jobHelper.getAllJobs().then((jobs) => {
        res.render('user/view-jobs', {jobs: jobs, user})
    })
})

router.get('/user-job-status',function (req,res){
    res.render('user/job-status')
})

router.get('/apply',function(req,res){
res.render('user/apply')
})

module.exports = router;
