FROM debian:buster

RUN apt-get update && apt-get install -y \
      linkchecker \
  && rm -rf /var/lib/apt/lists/*
RUN useradd -ms /bin/bash linkchecker
USER linkchecker
WORKDIR /home/linkchecker
ENTRYPOINT ["linkchecker"]
CMD ["-h"]
