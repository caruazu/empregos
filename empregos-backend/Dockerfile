# compilando a aplicação
FROM maven:3-eclipse-temurin-17-alpine AS build

WORKDIR /app
COPY pom.xml .
RUN mvn dependency:go-offline -B
COPY src ./src
RUN mvn package -DskipTests

# inicializano a aplicação
FROM eclipse-temurin:17-jdk-alpine

VOLUME /tmp
COPY --from=build /app/target/*.jar app.jar

EXPOSE 8080

ENV DEV_MODE=${DEV_MODE}
ENV POSTGRES_DB=${POSTGRES_DB}
ENV POSTGRES_USER=${POSTGRES_USER}
ENV POSTGRES_PASSWORD=${POSTGRES_PASSWORD}
ENV POSTGRES_URL=${POSTGRES_URL}

ENTRYPOINT ["java", "-jar", "/app.jar"]
