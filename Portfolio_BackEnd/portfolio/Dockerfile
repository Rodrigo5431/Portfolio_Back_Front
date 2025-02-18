FROM openjdk:17-jdk-alpine
RUN apk add --no-cache maven
WORKDIR /api
COPY . /api
RUN mvn clean package -DskipTests
EXPOSE 8080
CMD ["java", "-jar", "/api/target/portfolio-3.3.4.jar"]
