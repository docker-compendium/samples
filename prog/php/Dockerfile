FROM debian:buster-slim
RUN apt-get update && apt-get install -y --no-install-recommends\
  composer \
  php7.3 \
  php7.3-dom \
  php7.3-zip \
  unzip \
  && rm -rf /var/lib/apt/lists/*
RUN useradd -ms /bin/bash php7
WORKDIR /home/php7
USER php7
RUN composer require zendframework/zend-feed \
  zendframework/zend-http
COPY printheadlines.php ./
CMD ["php", "printheadlines.php"]
