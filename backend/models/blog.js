let mongoose = require('mongoose');


let blogSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
});


module.exports = Blog = mongoose.model('Blog', blogSchema);
