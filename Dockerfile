FROM node:16.6.1

WORKDIR /app

COPY /server ./server
COPY package*.json .
RUN npm install

CMD [ "node", "server/index.js"]