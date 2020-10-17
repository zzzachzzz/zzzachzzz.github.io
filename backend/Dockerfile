FROM node:14
WORKDIR /usr/src/backend
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 5000
CMD ["node", "app.js"]

