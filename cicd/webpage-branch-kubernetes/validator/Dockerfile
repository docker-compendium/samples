FROM openjdk:13-alpine

ENV VALIDATOR_VERSION=18.11.5

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
