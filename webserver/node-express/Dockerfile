FROM node:16
WORKDIR /src
COPY ./src/package.json /src/
RUN npm i --production
COPY /src/ /src/
EXPOSE 3000
USER node
CMD [ "node", "/src/bin/www" ]

