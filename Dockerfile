FROM eclipse-temurin:17-jdk-alpine

RUN apk --no-cache add curl

VOLUME /tmp

ARG JAR_FILE=/target/empregos-0.0.1-SNAPSHOT.jar
COPY ${JAR_FILE} app.jar
EXPOSE 8080
ENTRYPOINT ["java","-jar","/app.jar"]