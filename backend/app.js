const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

mongoose.connect('mongodb://localhost/blogs', { useNewUrlParser: true });
let db = mongoose.connection;

// Check connection
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Check for DB errors
db.on('error', (err) => {
  console.log(err);
});

const app = express();
app.use('/api', router);  // Use 'api' as base url
router.use(express.json());

// Bring in Models
let Blog = require('./models/blog');

// GET all blogs title and urlTitle
router.get('/blogs', function(req, res) {
  Blog.find({}, 'title urlTitle', function(err, blogs) {
    if (err) {
      console.log(err);
    } else {
      res.send(blogs);
    }
  });
});

// GET blog by urlTitle
router.get('/blogs/:urlTitle', function(req, res) {
  Blog.findOne({ urlTitle: req.params.urlTitle }, function(err, blog) {
    if (err) {
      console.log(err);
    } else {
      res.send(blog);
    }
  });
});

// POST update existing blog
router.post('/blogs/:urlTitle', function(req, res) {
  console.log(req.body);
  Blog.updateOne({ urlTitle: req.params.urlTitle }, {}, function(err, blog) {
    if (err) {
      console.log(err);
    } else {
      res.send(blog);
    }
  });
});

// POST create new blog
router.post('/blogs', function(req, res) {
  Blog.create(
    { title: req.body.title, content: req.body.content, urlTitle: convertTitleToUrlTitle(req.body.title) },
    function(err, blog) {
      if (err) {
        console.log(err);
      } else {
        res.send(blog);
      }
    }
  );
});

// DELETE existing blog
router.delete('/blogs/:urlTitle', function(req, res) {
  console.log(req.params.urlTitle);
  Blog.deleteOne({ urlTitle: req.params.urlTitle }, function(err) {
    if (err) {
      console.log(err);
    } else {
      res.send({ 'success': true });
    }
  });
});


const convertTitleToUrlTitle = (title) => {
  title = title.replace(/[^\w\s]/g, '');  // Remove non alphanumerics and non whitespace
  title = title.trim();
  title = title.replace(/\s+/g, '-');  // Replace spaces with dashes
  title = title.toLowerCase();
  console.log(title);
  return title;
};

app.listen(5000, () => {
  console.log('Server listening on port 5000');
});
