const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();


mongoose.connect('mongodb://localhost/blogs', { useNewUrlParser: true });
let db = mongoose.connection;

// Check connection
db.once('open', () => {
  console.log('Connected to MongoDB');
})

// Check for DB errors
db.on('error', (err) => {
  console.log(err);
});

const app = express();
app.use('/api', router);

// Bring in Models
let Blog = require('./models/blog');

router.get('/', function(req, res) {
  Blog.find({}, function(err, blogs) {
    if (err) {
      console.log(err);
    } else {
      res.send(blogs);
    }
  });
})

app.listen(5000, () => {
  console.log('Server listening on port 5000');
});
