const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const session = require('express-session');
require('dotenv').config();

const MONGO_HOST = process.env.MONGO_HOST || 'localhost';

mongoose.connect(`mongodb://${MONGO_HOST}:27017/blogs`, {
  useUnifiedTopology: true,
  useNewUrlParser: true
});

const db = mongoose.connection;

db.once('open', () => {  // Check connection
  console.log('Connected to MongoDB');
});

db.on('error', (err) => {  // Check for DB errors
  console.log(err);
});

let Blog = require('./models/blog');

// Initialize
const app = express();
app.use(session({
  token: '',
  admin: false,
  secret: process.env.SESSION_SECRET,
  resave: true,
  saveUninitialized: false,
}));

passport.serializeUser(function(user, done) {
  done(null, user);
});
passport.deserializeUser(function(user, done) {
  done(null, user);
});
app.use(passport.initialize());
app.use(passport.session());

const router = express.Router();
app.use('/api', router);  // Use 'api' as base url
router.use(express.json());

const domainUrl = process.env.NODE_ENV === 'production' ? 'https://zrose.info' : 'http://localhost:5000';

// Authentication
// Only allow admin user identified with Google login
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: domainUrl + '/api/auth/callback',
  },
  function(accessToken, refreshToken, profile, done) {
    if (profile.id === process.env.ADMIN_PROFILE_ID) {
      return done(null, {
        token: accessToken,
        admin: true,
      });
    } else {
      return done(null, false, { message: 'You are not Zach' });
    }
  })
);

app.get('/api/auth',
  passport.authenticate('google', { scope: ['profile'] }),
);

app.get('/api/auth/callback',
  passport.authenticate('google', { failureRedirect: '/blog' }),
  function(req, res) {
    console.log('Authenticated. Redirecting home');
    res.redirect('/');
  }
);

function authenticate(req, res, next) {
  let user;
  if (req.session && req.session.passport && req.session.passport.user) {
    ({ user } = req.session.passport);
  }
  if (user && user.token && user.admin) {
    console.log("Authenticated");
    next();
  } else {
    console.log("NOT authenticated");
    return res.sendStatus(401);
  }
}


// Routes
// GET all blogs title and urlTitle
router.get('/blogs', function(req, res) {
  Blog.find({}, 'title urlTitle -_id', {sort: '-_id'}, function(err, blogs) {
    if (err) {
      console.log(err);
      res.sendStatus(400);
    } else {
      res.send(blogs);
    }
  });
});

// GET blog by urlTitle
router.get('/blogs/:urlTitle', function(req, res) {
  Blog.findOne(
    { urlTitle: req.params.urlTitle },
    'title content createdAt -_id',
    function(err, blog) {
      if (err) {
        console.log(err);
        res.sendStatus(400);
      } else if (!blog) {
        res.sendStatus(404);
      } else {
        res.send(blog);
      }
    }
  );
});

// POST update existing blog | Requires authorization
router.post('/blogs/:urlTitle', authenticate, function(req, res) {
  console.log(req.body);
  const doc = { title: req.body.title, content: req.body.content,
                urlTitle: convertTitleToUrlTitle(req.body.title) };
  Blog.updateOne({ urlTitle: req.params.urlTitle }, doc, function(err, blog) {
    if (err) {
      console.log(err);
      res.sendStatus(400);
    } else {
      res.send({ success: true});
    }
  });
});

// POST create new blog | Requires authorization
router.post('/blogs', authenticate, function(req, res) {
  const doc = { title: req.body.title, content: req.body.content,
                   urlTitle: convertTitleToUrlTitle(req.body.title) };
  Blog.create(doc, function(err, blog) {
    if (err) {
      console.log(err);
      res.sendStatus(400);
    } else {
      res.send({ success: true });
    }
  });
});

// DELETE existing blog | Requires authorization
router.delete('/blogs/:urlTitle', authenticate, function(req, res) {
  Blog.deleteOne({ urlTitle: req.params.urlTitle }, function(err) {
    if (err) {
      console.log(err);
      res.sendStatus(400);
    } else {
      res.send({ success: true });
    }
  });
});


// Convert blog title to be url friendly | My First Blog -> my-first-blog
function convertTitleToUrlTitle(title) {
  title = title.replace(/[^\w\s]/g, '');  // Remove non alphanumerics and non whitespace
  title = title.trim();
  title = title.replace(/\s+/g, '-');  // Replace spaces with dashes
  title = title.toLowerCase();
  console.log(title);
  return title;
}

const HOST = process.env.HOST || 'localhost';

app.listen(5000, HOST, () => {
  console.log('Server listening on port 5000');
});

