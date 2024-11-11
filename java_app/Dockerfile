# Use a base OpenJDK image
FROM openjdk:17-jdk-slim AS build

# Set the working directory inside the container
WORKDIR /app

# Copy the JAR file from your local machine to the container
# Make sure the JAR file name is correct
COPY target/world-0.0.1-SNAPSHOT.jar /app/java-app.jar

# Expose the port on which the Spring Boot application listens (default is 8080)
EXPOSE 5003

# Define the command to run the application when the container starts
ENTRYPOINT ["java", "-jar", "java-app.jar"]