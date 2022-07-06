var mongoose = require('mongoose');


var postSchema = mongoose.Schema({
  link:{
    default:'ap',
    type:String
  },
  name:String,

  

});

module.exports = mongoose.model('ap',postSchema);