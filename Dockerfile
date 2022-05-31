FROM node:lts-slim
WORKDIR '/usr/src/app'
COPY package*.json .
RUN yarn install
COPY . .
EXPOSE 3000
CMD [ "npm", "start" ]