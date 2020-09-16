FROM node:latest

WORKDIR /app

COPY . .

ENV PORT=3000

ENV MONGO_URI=mongodb://172.17.0.2:27017/endpoints

RUN npm install

EXPOSE $PORT

ENTRYPOINT ["node", "dist/server.js"]