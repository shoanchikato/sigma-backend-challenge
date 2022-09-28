FROM node:18-alpine3.15

ARG CI=true

WORKDIR /app
COPY package.json .
COPY yarn.lock .
RUN yarn install --frozen-lockfile
COPY . .

RUN yarn test