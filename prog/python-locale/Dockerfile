FROM python:3
WORKDIR /src
RUN apt-get update \
	&& apt-get install -y locales \
	&& rm -rf /var/lib/apt/lists/*
RUN sed -i -e 's/# de_DE.UTF-8 UTF-8/de_DE.UTF-8 UTF-8/' /etc/locale.gen \
	&& locale-gen
COPY umlaut.py /src/
USER www-data
CMD [ "python", "umlaut.py" ]
