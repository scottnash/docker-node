# Docker Basics
https://vsupalov.com/6-docker-basics/

## Handy Docker Commands

### Remove all containers
``` docker rm $(docker ps -aq) ```

### Remove all Images
``` docker rmi $(docker images -q) ```

### Build Docker Image
-t is used to name the image, in this case "node"

``` docker build -t node . ```

### Run Docker containers
This starts the container, setting the port to 8081.  Meaning you can browse to the container at http://localhost:8081.  It mounts 2 volumes.  The app folder where the app exists inside the container and the node_modules folder that will exist inside the app folder.  An empty node_modules will be created inside the root folder, but the install node modules will not be visible there.  There are only visible *inside* the container.

``` docker run -it -p 8081:8081 -v /c/workspace/docker-node:/app -v node_modules:/app/node_modules  node ```
