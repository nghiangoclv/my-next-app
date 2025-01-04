# Build Stage
FROM node:18.17-alpine AS builder

WORKDIR /app

COPY --chown=node:node package.json yarn.lock ./

RUN yarn 

COPY --chown=node:node . .

RUN yarn build

# Run Stage
FROM node:18.17-alpine AS runtime

WORKDIR /app

COPY --from=builder --chown=node:node /app/.next .next
COPY --from=builder --chown=node:node /app/node_modules node_modules
COPY --from=builder --chown=node:node /app/public public
COPY --from=builder --chown=node:node /app/package.json /app/yarn.lock ./

EXPOSE 3000

USER node
CMD [ "yarn", "start" ]
