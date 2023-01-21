FROM ubuntu:18.04
SHELL ["/bin/bash", "-c"]
RUN apt-get update && \
  apt-get install -y curl && \
  eval "$(curl -sL https://apt.vapor.sh | \
          sed 's,python-software-properties,,')" && \
  apt-get install -y vapor && \
  rm -rf /var/lib/apt/lists/*
WORKDIR /swiftcode
RUN git config --global user.email "you@example.com" \
 && git config --global user.name  "Your Name"
