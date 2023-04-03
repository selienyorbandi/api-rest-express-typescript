FROM node:18-buster-slim

RUN npm install -g ts-node

RUN mkdir -p /app
WORKDIR /app

COPY package*.json ./

COPY . .

RUN npm install

EXPOSE 80

CMD ["npm", "run", "start"]