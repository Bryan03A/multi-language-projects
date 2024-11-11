# Multi-Language Docker Projects

This repository contains simple projects in various programming languages (Python, Java, Ruby, Go, and Node.js), all Dockerized. Each project creates a Docker image that serves a basic webpage displaying text and static images. These projects serve as examples of how to containerize simple web applications using Docker.

## Project Descriptions

The projects are organized in folders, each corresponding to a different programming language. Each application uses a popular web framework to provide a basic web service that listens on a specific port.

### Project Structure

- **Python (Flask)** - Listens on port `5001`
  - Folder: `python_app`
  - Framework: Flask
- **Node.js (Express)** - Listens on port `5002`
  - Folder: `node_app`
  - Framework: Express
- **Java (Spring Boot)** - Listens on port `5003`
  - Folder: `java_app`
  - Framework: Spring Boot
- **Ruby (Sinatra)** - Listens on port `5004`
  - Folder: `ruby_app`
  - Framework: Sinatra
- **Go (net/http)** - Listens on port `5005`
  - Folder: `go_app`
  - Framework: net/http

Each of these projects serves as an example of how to create basic web applications in their respective programming languages and how to containerize them using Docker for execution in an isolated container.

## Instructions to Build Docker Images

To build the Docker images for each project, navigate to the corresponding folder and run the following command:

```cmd
docker build -t bfury0329/project_name . 
```

## Use Pre-built Images from Docker Hub

If you prefer to use pre-built images instead of building them locally, you can download them directly from my Docker Hub repository. To do so, run the following command:

```cmd
docker pull bfury0329/(programming_language)
```

Replace `(programming_language)` with the corresponding language name, such as `python_app`, `node_app`, `ruby_app`, etc. Once the image is downloaded, you can run the corresponding container using the following command:

## Run the Docker Container

When you run the command `docker run -p 5004:5004 ruby_app`, the format is as follows:

```cmd
docker run -p [LOCAL_PORT]:[CONTAINER_PORT] [IMAGE_NAME]
```

- **[LOCAL_PORT]**: This is the port on your local machine (your computer) that you want to use to access the application running inside the container. This is the port you will use to navigate to the app in your browser. In this case, 5004 is the local port where you can access the Ruby app.
- **[CONTAINER_PORT]**: This is the port inside the container where the application is listening. In most projects, each app listens on a specific port (for example, 5004 for Ruby, 5001 for Python, etc.). This port must match the port in the container so that the web service inside the container is accessible externally.
- **[IMAGE_NAME]**: This is the name of the Docker image you want to run. In the case of Ruby, the image would be `ruby_app`. You should use the image name corresponding to the project you want to run (e.g., `python_app`, `node_app`, etc.).

### Permissions Notice

If you encounter permission issues (such as those that occurred with the Ruby project), you may need to run the container with elevated privileges. To do so, you can use the following command:

```cmd
docker run -d -p [LOCAL_PORT]:[CONTAINER_PORT] [IMAGE_NAME]
```

The `-d` parameter runs the container in the background, which is useful when you want the container to run as a service.

