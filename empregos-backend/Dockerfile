FROM eclipse-temurin:17-jdk-alpine

COPY . .

RUN ./mvnw clean install

ENTRYPOINT ["java","-jar","target/empregos-0.0.1-SNAPSHOT.jar"]