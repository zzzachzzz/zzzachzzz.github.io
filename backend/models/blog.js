let mongoose = require('mongoose');


let blogSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  urlTitle: {
    type: String,
    required: true,
  },
}, {
  timestamps: true
});


module.exports = Blog = mongoose.model('Blog', blogSchema);
