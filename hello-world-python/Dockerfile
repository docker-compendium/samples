FROM python:3
ENV TZ="Europe/Amsterdam"
COPY server.py /src/
EXPOSE 8080
USER www-data
CMD ["python", "/src/server.py"]
