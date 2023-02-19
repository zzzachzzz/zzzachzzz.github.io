import * as fs from 'fs';
import { generateBlogRssFeed } from './lib/rss';

const rss = generateBlogRssFeed();

const outDir = './public/blog';
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir);
fs.writeFileSync(outDir + '/rss.xml', rss);

