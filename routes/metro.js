var mongoose = require('mongoose');


var postSchema = mongoose.Schema({
  link:{
    default:'metro',
    type:String
  },
  name:String,

  

});

module.exports = mongoose.model('metro',postSchema);