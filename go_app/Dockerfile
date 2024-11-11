# We use the official Go image based on Alpine
FROM golang:1.23.3-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy go.mod and go.sum (if they exist)
COPY go.mod ./

# Install dependencies with go mod
RUN go mod tidy

# Copy the source code and static files
COPY . .

# Expose port 5005
EXPOSE 5005

# Command to run the application
CMD ["go", "run", "app.go"]
