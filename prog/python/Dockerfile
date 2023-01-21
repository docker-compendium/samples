FROM python:3
WORKDIR /src
RUN pip install --no-cache-dir feedparser
COPY printheadlines.py /src/
USER www-data
CMD [ "python", "/src/printheadlines.py" ]
