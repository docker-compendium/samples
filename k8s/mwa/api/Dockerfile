FROM node:12 as dev
WORKDIR /src
RUN chown node:node /src
USER node
COPY package.json /src/
RUN npm i
COPY server.js routes.js dev-entrypoint.sh /src/
ENV TZ="Europe/Amsterdam"
ENTRYPOINT [ "/src/dev-entrypoint.sh" ]
CMD [ "node_modules/.bin/nodemon", "server.js" ]

FROM node:12-alpine
WORKDIR /src
COPY package.json /src/
RUN npm i --production
COPY server.js routes.js health.js /src/
HEALTHCHECK --interval=10s --timeout=3s CMD node /src/health.js \
  || exit 1
EXPOSE 3000
ENV TZ="Europe/Amsterdam"
CMD [ "npm", "start" ]

