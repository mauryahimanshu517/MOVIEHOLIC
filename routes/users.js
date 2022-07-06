const mongoose=require('mongoose')
const passportlocalmongoose = require("passport-local-mongoose");

mongoose.connect("mongodb://localhost/travel");

const userSchema=mongoose.Schema({
  username:String,
  email:String,
  password:String,
  images:{
    type:String,
    default:"images/1/user.png",
  },
  posts: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'post'
    }]
})

userSchema.plugin(passportlocalmongoose);

module.exports=mongoose.model("user",userSchema)