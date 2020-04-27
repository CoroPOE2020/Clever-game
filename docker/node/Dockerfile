# Specifies where to get the base image (Node v12 in our case) and creates a new container for it
FROM node:12.16.2

# Set working directory. Paths will be relative this WORKDIR.
WORKDIR /home/wwwroot

COPY /frontend/package*.json ./

# Copy source files from host computer to the container
COPY . .

# Specify port app runs on
EXPOSE 3000


