var express = require('express');
var router = express.Router();
const userHelper = require('../helpers/account-helpers')
var jobHelper = require('../helpers/job-helpers');

/* GET home page. */
router.get('/', function (req, res, next) {
    let user = req.session.user
    jobHelper.getAllJobs().then((jobs) => {
        res.render('user/view-jobs', {jobs: jobs, user})
    })
});

router.get('/apply',function(req,res){
res.render('user/apply')
})

module.exports = router;
