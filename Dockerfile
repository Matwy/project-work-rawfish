FROM node:16.15-alpine3.14
RUN mkdir /app
WORKDIR /app
COPY package.json /app
RUN npm install
RUN npm install nodemon
COPY . /app
EXPOSE 3000
CMD [ "npm", "run", "start-dev" ]