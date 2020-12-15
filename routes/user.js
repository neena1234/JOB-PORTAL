var express = require('express');
var router = express.Router();
const userHelper = require('../helpers/user-helpers')

/* GET home page. */
router.get('/', function(req, res, next) {
    let jobs = [
        {
            title:"FRONTEND DEVELOPMENT ",
            company: "Tata Consultancies Services",
            vacancies: "450 vacancies"
        },
        {
            title:"FRONTEND DEVELOPMENT ",
            company: "Tata Consultancies Services",
            vacancies: "450 vacancies"
        },
        {
            title:"FRONTEND DEVELOPMENT ",
            company: "Tata Consultancies Services",
            vacancies: "450 vacancies"
        },
        {
            title:"FRONTEND DEVELOPMENT ",
            company: "Tata Consultancies Services",
            vacancies: "450 vacancies"
        }
    ]

    res.render('index',{jobs,admin:false});
});



router.get('/login', (req,res)=>{
  if(req.session.loggedIn){
      res.redirect('/')
  }else {
      res.render('user/login',{"loginErr":req.session.loginErr})
      req.session.loginErr=false
  }
})

router.get('/signup',(req,res)=>{
  res.render('user/signup')
})

router.post('/signup',(req,res)=>{
  userHelper.doSignup(req.body).then((response)=>{
      req.session.loggedIn=true
      req.session.user=response
      res.redirect('/')
  })
})

router.post('/login',(req,res)=>{
  userHelper.doLogin(req.body).then((response)=>{
      if(response.status){
          req.session.loggedIn=true
          req.session.user = response.user
          res.redirect('/')
      }else {
          req.session.loginErr="Invalid username or password"
          res.redirect('/login')
      }
  })
})

router.get('/logout',(req,res)=>{
  req.session.destroy()
  res.redirect('/')
})

module.exports = router;
