const unified = require('unified');
const htmlParser = require('rehype-parse');
const markdownStringify = require('remark-stringify');
const mongoose = require('mongoose');
const rehype2remark = require('rehype-remark');

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
        const htmlTree = unified().use(htmlParser).parse(blog.content);
        const markdownTree = await unified().use(rehype2remark).run(htmlTree);
        const markdownString = unified().use(markdownStringify).stringify(markdownTree);

        blog.set({ content: markdownString });
        blog.save((err, res) => {
          if (err) console.error(err);
          else console.log(res);
        });
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

