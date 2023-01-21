FROM alpine:3.14 AS build

ENV HUGO_VERSION=0.85.0

WORKDIR /tmp
RUN wget https://github.com/gohugoio/hugo/releases/download/v$HUGO_VERSION/hugo_${HUGO_VERSION}_Linux-64bit.tar.gz \
  -O /tmp/hugo.tar.gz && \
  tar xf /tmp/hugo.tar.gz && \
  mv /tmp/hugo /usr/local/bin && \
  rm /tmp/hugo.tar.gz
WORKDIR /src
COPY dockerbuch.info/ /src/
RUN hugo

FROM nginx:1-alpine
COPY --from=build /src/public/ /usr/share/nginx/html/
VOLUME ["/usr/share/nginx/html/"]
