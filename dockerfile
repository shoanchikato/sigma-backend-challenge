FROM node:18-alpine3.15

WORKDIR /app
COPY package.json .
COPY yarn.lock .
RUN yarn install --frozen-lockfile
COPY . .

EXPOSE 3000
CMD ["yarn", "start"]
