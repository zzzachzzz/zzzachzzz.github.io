---
title: 'Dockerizing a MERN App for Development and Production'
date: '2020-10-25T16:30:43.234Z'
---

Creating a Dockerfile for a single service usually isn't too bad. The example Dockerfile provided by the official guide for Node.js, [Dockerizing a Node.js web app](https://nodejs.org/en/docs/guides/nodejs-docker-webapp/), can be copied almost exactly.

However, things start to get a little more complicated when we want to:
* Create configurations for both development and production environments
* Enable hot reloading in development (avoid needing Docker to re-build for every change)
* Orchestrate connecting multiple services together (relevant for any web app with a frontend, backend, database, etc.)
* Persist data in a database between runs (with Docker volumes)

The app I'll be using as an example can be found here: https://github.com/zzzachzzz/portfolio (this blog site!), but I will also include the various Docker files in this post.

To Dockerize a React app, we'll definitely want a config for developemnt, and production. In development, webpack-dev-server (`npm run [start|react-scripts-start]` in CRA) will be used with hot-reloading. In production, there are multiple ways to go about it, but I'll be using Nginx to serve the bundle, and proxying `/api` requests to the Express app.

`frontend/Dockerfile.dev`:
```dockerfile
FROM node:14
WORKDIR /usr/src/frontend
COPY package*.json ./
RUN npm install
EXPOSE 3000
CMD ["npm", "run", "start"]
```

One thing to note for proxying requests in development. If using CRA, you've likely set `"proxy": "http://localhost:<port>"` in `package.json` before, to proxy requests from React to a server, like Express. When running the frontend and the backend in separate Docker containers, they don't share the same localhost. Instead, we need to provide the network address created by Docker to connect the two together. You'll see more of this in later steps involving the Docker Compose `.yml` files, but as far as webpack is concerned, we'll need to provide it a config file for the proxy: 

`frontend/src/setupProxy.js`:
```js
const { createProxyMiddleware } = require('http-proxy-middleware');

const EXPRESS_HOST = process.env.EXPRESS_HOST || 'localhost';

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: `http://${EXPRESS_HOST}:5000`
    })
  );
};
```

Since I don't know of a way to embed an environment variable in the `package.json` file, this more advanced `setupProxy.js` file is necessary. Notice the environment variable `EXPRESS_HOST`. We will provide this variable to our Docker container, through our Docker Compose config. More on the above proxy config here: https://create-react-app.dev/docs/proxying-api-requests-in-development/#configuring-the-proxy-manually

`frontend/Dockerfile.prod`:
```dockerfile
FROM node:14 as builder
WORKDIR /usr/src/frontend
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx
COPY --from=builder /usr/src/frontend/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
```

This is considered a multi-stage Docker build, due to the multiple `FROM` statements. We build our webpack bundle, beginning from the `node:14` base image, and then switch to the `nginx` base image to serve that webpack bundle. Notice the line `COPY nginx.conf /etc/nginx/conf.d/`, which refers to a `nginx.conf` file I keep in Git.

`frontend/nginx.conf`:
```
server {
    listen 8080;

    location /api {
        proxy_pass http://backend:5000;
    }

    location / {
        root /usr/share/nginx/html;
        try_files $uri /index.html;
    }
}
```

**Note that my `nginx.conf` is a bit abnormal**, since my server hosting the site has another Nginx instance running outsie of Docker, which I have setup with `location / { proxy_pass http://localhost:8080; }`. I have it setup this way so I can host multiple sites, and have Nginx handle routing traffic based on the `server_name`. You'll probably want your `nginx.conf` setup to include sections for Certbot, to manage SSL certificates, and listen on port 80 & 443. Consult another tutorial on Certbot & Nginx for that.

The portion of this `nginx.conf` file that is applicable to you is the `proxy_pass` setup for `/api` requests, which sends it to the network host `backend` on port `5000`. This is Docker managing networking again. In this case, `backend`, is the name of our docker-compose service for Express, so Docker provides us the address for that specific container under the hostname `backend`.

Before we get to those Docker Compose files that link everything together, there's one more Dockerfile:

`backend/Dockerfile`:
```dockerfile
FROM node:14
WORKDIR /usr/src/backend
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 5000
CMD ["node", "app.js"]
```

For the backend, I don't currently have a separate dev & prod Dockerfile, however I would recommend it, with the use of `nodemon` in place of `node` in the `CMD` statement in `Dockerfile.dev`, to enable hot reloading in development.

Now onto the `docker-compose.yml` files. I have 3 of these under the filenames `docker-compose.yml`, `docker-compose.override.yml`, and `docker-compose.prod.yml`. You can choose different filenames, but there is a rational for these specific filenames. Both `docker-compose.yml` and `docker-compose.override.yml` are [filenames that Docker specifically looks for](https://docs.docker.com/compose/extends/). In both dev & prod, we 2 of these 3 docker-compose files.

* `docker-compose.yml` - The base config for dev & prod
* `docker-compose.override.yml` - The dev config overrides
* `docker-compose.prod.yml` - The prod config overrides

As shown in the Docker Compose docs linked above, multiple compose files can be specified with the `-f` like so (also see `docker-compose --help`):  
`docker-compose -f docker-compose.yml -f docker-compose.prod.yml [COMMAND] [ARGS...]`

Compose files specified are read from left to write, which mean `docker-compose.prod.yml` will be read last, giving it priority over our base `docker-compose.yml`.

If no files are specified with `-f`, Docker will do this:
`docker-compose -f docker-compose.yml -f docker-compose.override.yml [COMMAND] [ARGS...]`

Why does this matter? In development, when you want to use the dev config, **you don't have to specify compose files for every `docker-compose` command you want to execute**. Running your entire application's stack in development becomes one short command: `docker-compose up`. That's it. Finally, here are those compose files:

`docker-compose.yml`:
```yml
version: "3.8"

services:
  frontend:
    build:
      context: ./frontend
    environment:
      EXPRESS_HOST: backend

  backend:
    build:
      context: ./backend
      dockerfile: Dockerfile
    ports:
      - "5000:5000"
    env_file: ./backend/.env
    environment:
      HOST: 0.0.0.0
      MONGO_HOST: mongo

  mongo:
    image: mongo:latest
    ports:
      - "127.0.0.1:27017:27017"
    volumes:
      - mongo-data:/data/db

volumes:
  mongo-data:
```

`docker-compose.override.yml`:
```yml
services:
  frontend:
    build:
      dockerfile: ./Dockerfile.dev
    ports:
      - "3000:3000"
    environment:
      NODE_ENV: development
    volumes:
      - ./frontend:/usr/src/frontend
      - /usr/src/frontend/node_modules
    # Due to stupid react-scripts bug still present in v3.4.3
    # https://github.com/facebook/create-react-app/issues/8688
    stdin_open: true

  backend:
    environment:
      NODE_ENV: development
    volumes:
      - ./backend:/usr/src/backend
      - /usr/src/backend/node_modules
```

`docker-compose.prod.yml`:
```yml
services:
  frontend:
    build:
      dockerfile: ./Dockerfile.prod
    ports:
      - "127.0.0.1:8080:8080"
    environment:
      NODE_ENV: production

  backend:
    environment:
      NODE_ENV: production
```

There's a lot we could go over in these compose files. I mentioned in the beginning that we want to enable hot-reloading in development, so that changes to code made on our host computer, are reflected in our Docker container, triggering a hot-reload from webpack-dev-server (or nodemon). The way we reflect file changes between host and container is through specifying `volumes`:

```yml
volumes:
  - ./frontend:/usr/src/frontend
  - /usr/src/frontend/node_modules
```

`./frontend:/usr/src/frontend` maps our host's `./frontend` directory, to our container's `/usr/src/frontend` directory. Since our host may have its own `node_modules` directory inside `./frontend`, we don't want this to be shared with the container. The container needs to maintain its own installed dependencies in isolation. To prevent our container's `node_modules` from being overwritten, we create an anonymous volume of our container's `/usr/src/frontend/node_modules` directory. The ordering of the two volumes listed is important, so that our container's `node_modules` stored in a volume have highest priority (applied last). I would recommend doing other research on Docker volumes to better understand the different types of volumes that Docker supports, but just note that we can tell Docker to persist its own `node_modules` by creating an anonymous volume (we don't assign a name to it), that Docker keeps track of with a generated hash as the volume name. This volume persists between container instances.

On the subject of volumes, another volume is very important to persist data in our Mongo database. Without a volume, our Mongo data would be lost every time out container stops and starts again, and we definitely don't want to lose our DB data, at least in production. You'll notice this volume is mentioned in two places:

```yml
  mongo:
    image: mongo:latest
    ports:
      - "127.0.0.1:27017:27017"
    volumes:
      - mongo-data:/data/db

volumes:
  mongo-data:
```

Why does `mongo-data` appear twice? In this situation, we're using a "named volume" (again, highly recommend reading more on these volume types). A named volume behaves quite similar to the anonymouse volume I described earlier, except it's named! We could technically make this volume anonymous, but it's good to be able to identify the volume in case we need to manipulate it somehow, like making a backup of our database data. Named volumes must be defined in the top-level `volumes` key, that's why it appears in two places, unlike anonymouse volumes.

See the Docker Compose docs on volumes: https://docs.docker.com/compose/compose-file/#volumes

You may have noticed that ports are usually mapped like `"<port>:<port>"`, without specifying a host. With this shorthand, the host is implied to be `0.0.0.0`, listening on all interfaces. This makes it publicly accessible outside of the machine. If you don't need to access Mongo remotely, and can instead do so over SSH, and then localhost. I highly recommend that for security. Especially with the default Mongo config for Docker, there will be no credentials required to access Mongo. This means that an attacker who only knows the IP address of your server can remotely access your database! Yes, I did learn that the hard way, thankfully with non-consequential data. :sweat_smile:

