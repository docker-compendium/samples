# Datei Dockerfile
FROM ubuntu:20.04
LABEL maintainer "name@somehost.com"
RUN apt-get update && \
    apt-get install -y joe && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*
CMD ["/bin/bash"]
