const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');

const MONGO_HOST = process.env.MONGO_HOST || 'localhost';

mongoose.connect(`mongodb://${MONGO_HOST}:27017/blogs`, {
  useUnifiedTopology: true,
  useNewUrlParser: true
});

const Blog = require('../models/blog');

function migrate() {
  Blog.find({}, async (err, blogs) => {
    if (err) {
      console.error(err);
    } else {
      for (let blog of blogs) {
        const { title, content, urlTitle, createdAt } = blog;
        const filePath = path.resolve(__dirname, `../../_posts/${urlTitle}.md`); 
        const fileContents = 
`---
title: '${title}'
date: '${createdAt.toISOString()}'
---

${content}`;
        fs.writeFileSync(filePath, fileContents);
        console.log('Written to path:');
        console.log(filePath);
      }
    }
  });
}

const db = mongoose.connection;

db.once('open', () => {
  console.log('Beginning migration');
  migrate();
});

db.on('error', (err) => {
  console.log(err);
});

