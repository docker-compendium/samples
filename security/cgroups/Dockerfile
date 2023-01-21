FROM debian:buster

RUN apt-get update && apt-get install -y \
  stress \
  htop \
  && rm -rf /var/lib/apt/lists/*
CMD [ "stress" ]
