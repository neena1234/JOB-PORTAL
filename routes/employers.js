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

router.get('', function (req, res) {
    res.render('')
});

router.post('', ((req, res) => {
    jobHelper.addJobs(req.body, (result) => {
        res.render('')
    })
}))

module.exports = router;
