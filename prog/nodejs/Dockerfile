FROM node:16
WORKDIR /src
RUN chown node:node /src
USER node
COPY --chown=node:node package.json package-lock.json /src/
RUN npm i
COPY printheadlines.js /src/
CMD [ "node", "printheadlines.js" ]

