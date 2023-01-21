FROM node:12 as builder
RUN npm i -g --save vue-cli
WORKDIR /src/vue
COPY vue/package* /src/vue/
RUN chown -R node:node /src
USER node
RUN npm install
COPY vue/ /src/vue/
RUN npm run-script build
COPY dev-entrypoint.sh /src/
ENTRYPOINT [ "/src/dev-entrypoint.sh" ]
CMD [ "node", "build/dev-server.js" ]

FROM nginx:alpine
WORKDIR /usr/share/nginx/html
COPY --from=builder /src/vue/dist/ .
COPY default.conf /etc/nginx/conf.d/
HEALTHCHECK --interval=10s --timeout=3s CMD wget -O - \
  http://localhost/ || exit 1

