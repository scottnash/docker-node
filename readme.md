# What is Docker?
Docker is a tool designed to make it easier to create, deploy, and run applications by using containers. Containers allow a developer to package up an application with all of the parts it needs, such as libraries and other dependencies, and ship it all out as one package. By doing so, thanks to the container, the developer can rest assured that the application will run on any other machine regardless of any customized settings that machine might have that could differ from the machine used for writing and testing the code.

### Docker Basics
https://vsupalov.com/6-docker-basics/

## Handy Docker Commands

### Remove all containers
``` docker rm $(docker ps -aq) ```

### Remove all Images
``` docker rmi $(docker images -q) ```

### Build Docker Image
-t is used to name the image, in this case "node"

``` docker build -t node . ```

### Run Docker Container
This starts the container, setting the port to 8081.  Meaning you can browse to the container at http://localhost:8081.  It mounts 2 volumes.  The app folder where the app exists inside the container and the node_modules folder that will exist inside the app folder.  An empty node_modules folder will be created inside the root folder, but the installed node modules will not be visible there.  They are only visible *inside* the container.

*Note* - You can run the following command without the -it, but if you do, when you exit the container [ctrl-C], the container will still be running in the background.

``` docker run -it -p 8081:8081 -v /c/workspace/docker-node:/app -v node_modules:/app/node_modules  node ```

## Node Modules
When installing node modules, wheter through npm or--more preferably--yarn, it's important that you install them *inside* the running container. To do this, make sure the container is running and then in a new terminal/power shell window, run the following commands.

First, list docker containers to get the container id

``` docker container ps ```

If you only have one container, it will be easy to see which container we want, but if there are multiple, look for the one with the image that matches the name of the container that you used when you ran the container. You will use the container id in the following command. Note, you can copy the entire container id and paste it into command, or you only have to type enough of it for the command line to recognize which one you're referring to.

``` docker exec -it 86a89 /bin/bash ```

This will drop you to a command line *inside* the running container.  From here you can install any node modules that you need, and your package.json will be updated with the new dependencies.  Note that while here inside your container, you can ls to see the contents of your app and cd into the node_modules folder where you will see all off the installed node packages.
