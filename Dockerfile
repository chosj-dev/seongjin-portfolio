FROM node:lts-alpine

WORKDIR /app

COPY . .

COPY package.json yarn.lock .

RUN yarn install

RUN yarn build

CMD ["yarn", "start"]

