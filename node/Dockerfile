FROM node:lts-alpine

RUN apk update && apk add make g++

WORKDIR /app

COPY package.json .

RUN npm install

COPY src/ src/

ENV NODE_ENV=production
CMD ["node", "src/myapp.js"]

EXPOSE 3000
