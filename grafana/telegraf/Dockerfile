# Datei: grafana/telegraf/Dockerfile (docbuc/telegraf)
FROM telegraf
COPY telegraf.conf /etc/telegraf
COPY entrypoint.sh /
ENTRYPOINT ["/bin/bash", "/entrypoint.sh"]
CMD ["telegraf"]

