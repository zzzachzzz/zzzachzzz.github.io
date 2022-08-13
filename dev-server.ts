import { createServer } from 'http';
import { parse } from 'url';
import next from 'next';
import chokidar from 'chokidar';
import { WebSocketServer } from 'ws';
import { getPostBySlug, writeNewPostToFile } from './lib/api';
import { getPathToBlogPost } from './lib/utils';
const app = next({ dev: true });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = createServer((req, res) => {
    const parsedUrl = parse(req.url, true)
    if (parsedUrl.pathname === '/blog/edit/new/save') {
      writeNewPostToFile();
      res.end();
    } else {
      handle(req, res, parse(req.url, true))
    }
  });

  const wss = new WebSocketServer({ noServer: true });

  server.on('upgrade', (req, socket, head) => {
    const { pathname } = parse(req.url, true)

    if (pathname === '/hot-blog-edit') {
      wss.handleUpgrade(req, socket, head, (ws: any) => {
        wss.emit('connection', ws, req);
      });
    }
  });

  let watchedSlug: string | null = null;
  const watcher = new chokidar.FSWatcher();
  wss.on('connection', (ws) => {
    ws.on('message', (data) => {
      const postSlug = data.toString();
      if (postSlug) {
        watchedSlug = postSlug;
        let post = null;
        try {
          post = getPostBySlug(watchedSlug, ['title', 'date', 'slug', 'content']);
          watcher.add(getPathToBlogPost(watchedSlug));
        } catch (err) {
          // Throws an error when the .md file does not exist on disk
          console.error(err);
        }
        ws.send(JSON.stringify(post));
      }
    });

    ws.on('close', () => {
      if (watchedSlug) {
        watcher.unwatch(getPathToBlogPost(watchedSlug));
        watchedSlug = null;
      }
    });

    watcher.removeAllListeners('change');
    watcher.on('change', (filePath) => {
      if (new RegExp(`.*/${watchedSlug}\.md$`).test(filePath)) {
        const post = getPostBySlug(watchedSlug, ['title', 'date', 'slug', 'content']);
        ws.send(JSON.stringify(post));
      }
    });
  });

  server.listen(3000);
});

