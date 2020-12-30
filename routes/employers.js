var express = require('express');
var router = express.Router();

var express = require('express');
const {render} = require('../app');
var jobHelper = require('../helpers/job-helpers');

var MongoClient = require('mongodb').MongoClient

/* GET user listing. */
router.get('/', function (req, res, next) {
    jobHelper.getAllJobs().then((jobs) => {
        res.render('', {jobs: jobs, admin: true})
    })
});

router.get('/employers-dashboard',function (req,res){
    let user = req.session.user
    res.render('employers/employers-dashboard',{user,admin:false,employer:true,applicant:false,home:false})
})


router.get('', function (req, res) {
    res.render('')
});

router.post('/employers/add-job', ((req, res) => {
    jobHelper.addJobs(req.body, (result) => {
        res.render('/employers/add-job')
    })
}))

module.exports = router;
