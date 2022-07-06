var mongoose = require('mongoose');


var postSchema = mongoose.Schema({
  post:String,
  likes:
  [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
    }],
  userid:
  {
  type: mongoose.Schema.Types.ObjectId,
  ref: 'user'
  },
  

});

module.exports = mongoose.model('post',postSchema);