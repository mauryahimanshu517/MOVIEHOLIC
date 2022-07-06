var express = require('express');
const passport=require("passport")
const passportlocal = require("passport-local");
const users = require('./users');
// const post=require("./post");
var router = express.Router();
const multer=require("multer")
const metro=require('./metro');
const ap=require('./ap');

var router = express.Router();


passport.use(new passportlocal(users.authenticate()));


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/images/1')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now()+Math.floor(Math.random()*1000)+file.originalname
    cb(null,uniqueSuffix)
  }
})

const upload = multer({ storage: storage })


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/1', function(req, res, next) {
  res.render('login');
});


router.get('/rlogin', function(req, res, next) {
  res.render('login');
});

router.get('/signup', function(req, res, next) {
  res.render('resister'); 
});


router.post('/register',function(req, res, next) {
  var newuser=new users({
    username:req.body.username,
    email:req.body.email,
    password:req.body.password,
  })
  users.register(newuser,req.body.password)
  .then(function(data){
    passport.authenticate("local")(req,res,function(){
      res.render('content',{data})
    })
  })
}); 

router.get('/landingpage',function(req,res){
  res.render("landingpage")
})

router.post('/login',passport.authenticate('local',{
  successRedirect:'/landingpage',
  failureRedirect:'/',
}),function(req,res,next){});

router.get('/logout',function(req,res,next){
  req.logOut();
  res.redirect("/");
})
router.get('/profile',isLoggedIn,function(req,res){
  users.findOne({
    username:req.session.passport.user
  })
  .then(function(data){
    res.render('profile',{data});
  })
})


router.post('/upload',isLoggedIn,upload.single("images"), function(req, res, next) {
  users.findOne({username:req.session.passport.user})
  .then(function(udata){
    udata.images=req.file.filename;
    udata.save()
    .then(function(){
      res.redirect("/profile")
    })
  })
});

router.get('/back', function(req, res, next) {
  res.render('landingpage');
});
router.get('/palaces/:link', function(req, res, next) {
  metro.findOne({
    link:req.params.link
  }).then(function(data){
    res.render('metro',{data});
  })
});
// router.get('/palaces/:link', function(req, res, next) {
//   ap.findOne({
//     link:req.params.link
//   }).then(function(data){
//     res.render('ap',{data});
//   })
// });

router.get('/create/:name',function(req,res){
  metro.create({
    name:req.params.name
  }).then(function(dat){
  
  })
})

router.post('/edit/:id', function(req, res, next) {
  users.findOneAndUpdate({id: req.params.id}, {email:req.body.email})
  .then(function(updateduser){
    res.redirect("/profile");
  })
});

router.get('/edit/:id', function(req, res, next) {  
  users.findOne({id:req.params.id})
  .then(function(data){
    res.render("update",{data})
  })
});
router.get('/delete/:id', function(req, res, next) {
  users.findOneAndDelete(id=req.params.id)
  .then(function(alldata){
    console.log(alldata)
    res.redirect("/landingpage")
  })
 });


function isLoggedIn(req,res,next)
{ if(req.isAuthenticated()){
  return next();
}
else{
  res.redirect('/')
}
}

module.exports = router;
