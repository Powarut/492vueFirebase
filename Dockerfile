FROM node:lts-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install vite@latest

RUN npm install

COPY . .

EXPOSE 8080
CMD [ "npm", "run", "dev" ]