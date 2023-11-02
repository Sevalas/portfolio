FROM node:20.9.0 as app

WORKDIR /app
COPY package*.json ./
COPY src src
COPY public public
RUN npm run build
COPY server.js ./
EXPOSE 8080
CMD ["node", "server.js"]