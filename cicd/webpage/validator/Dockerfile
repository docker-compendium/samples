FROM openjdk:16-alpine

ENV VALIDATOR_VERSION=20.6.30

WORKDIR /src

RUN wget "https://github.com/validator/validator/releases/download/$VALIDATOR_VERSION/vnu.jar_$VALIDATOR_VERSION.zip" \
  -O /src/vnu.jar.zip \
  && unzip /src/vnu.jar.zip \
  && rm /src/vnu.jar.zip

EXPOSE 8888
RUN adduser -S validator
USER validator
WORKDIR /home/validator
ENTRYPOINT ["java", "-jar", "/src/dist/vnu.jar" ]
CMD ["--help"]
