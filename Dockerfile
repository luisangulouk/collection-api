FROM node:16.6.1

WORKDIR /app

COPY package*.json .
RUN npm install
COPY /server ./server

CMD [ "node", "server/index.js"]