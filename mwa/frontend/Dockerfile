# Datei: mwa/frontend/Dockerfile (docbuc/mwafe:2)
FROM node:16 as builder
RUN npm i -g --save @vue/cli
WORKDIR /src/vue
COPY vue/package* /src/vue/
RUN chown -R node:node /src
USER node
RUN npm install
COPY vue/ /src/vue/
RUN npm run-script build
COPY dev-entrypoint.sh /src/
ENTRYPOINT [ "/src/dev-entrypoint.sh" ]
CMD [ "npm", "run-script", "serve" ]

FROM nginx:alpine
WORKDIR /usr/share/nginx/html
COPY --from=builder /src/vue/dist/ .
COPY default.conf /etc/nginx/conf.d/
RUN touch /var/run/nginx.pid && \
  chown -R nginx:nginx /var/run/nginx.pid
# USER nginx
EXPOSE 8080
HEALTHCHECK --interval=10s --timeout=3s CMD wget -O - \
  http://localhost:8080/ || exit 1

