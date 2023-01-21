# Datei: mwa/frontend/setup/Dockerfile (docbuc/mwafe-setup:2)
FROM node:16-alpine
RUN apk add --no-cache git
RUN npm i -g --save @vue/cli
WORKDIR /src
CMD ["vue", "create", "vue"]

