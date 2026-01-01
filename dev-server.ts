import * as http from 'http';
import * as url from 'url';
import next from 'next';
import chokidar from 'chokidar';
import { WebSocketServer } from 'ws';
import { getPostByFilepath, writeNewPostToFile } from './lib/api';
import { slugToFilepath, postsDirectory, filepathToSlug } from './lib/utils';

const app = next({ dev: true });
const handleReq = app.getRequestHandler();

app.prepare().then(() => {
  const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true)
    if (parsedUrl.pathname === '/blog/edit/new/save') {
      writeNewPostToFile();
      res.end();
    } else {
      handleReq(req, res, url.parse(req.url, true));
    }
  });

  const wss = new WebSocketServer({ noServer: true });

  server.on('upgrade', (req, socket, head) => {
    const { pathname } = url.parse(req.url, true);

    if (pathname === '/hot-blog-edit') {
      wss.handleUpgrade(req, socket, head, (ws: any) => {
        wss.emit('connection', ws, req);
      });
    }
  });

  const fsWatcher = chokidar.watch(postsDirectory);

  wss.on('connection', (ws) => {
    // Each connection gets updates for one watched slug / post.
    // May have multiple browser tabs open on multiple posts
    // and each will receive the correct updates.
    let watchedSlug: string | null = null;

    ws.on('message', (data) => {
      const postSlug = data.toString();
      if (!postSlug) return;
      watchedSlug = postSlug;
      const filepath = slugToFilepath(postSlug);
      sendPost(filepath);
    });

    const sendPost = (filepath: string): void => {
      const post = getPostByFilepath(filepath);
      ws.send(JSON.stringify(post));
    };

    fsWatcher.on('change', (filepath) => {
      const slug = filepathToSlug(filepath);
      if (watchedSlug !== slug) return;
      sendPost(filepath);
    });
  });

  server.listen(3000);
});

