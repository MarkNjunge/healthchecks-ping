# Builder image
FROM node:18.17.0-alpine3.18 as builder

WORKDIR /app

COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json

RUN npm install

COPY . .

RUN npm run build

RUN npm prune --production

# Final image
FROM node:18.17.0-alpine3.18

WORKDIR /app

COPY --from=builder /app/dist /app/dist
COPY --from=builder /app/package.json .
COPY --from=builder /app/node_modules node_modules

CMD [ "npm", "run", "start:prod" ]
