# Docker Basics
[https://vsupalov.com/6-docker-basics/]

## Handy Docker Commands

### Remove all containers
`docker rm $(docker ps -aq)``

### Remove all Images
`docker rmi $(docker images -q)``

### Build Docker Image
-t is used to name the image, in this case "node"

`docker build -t node .``
