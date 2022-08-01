FROM node:16

WORKDIR /app_rest

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 80:3001

CMD [ "npm", "run", "start" ]