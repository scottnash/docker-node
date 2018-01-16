FROM node:7

# Install Yarn
RUN mkdir -p /opt
RUN cd /opt && wget https://yarnpkg.com/downloads/0.24.6/yarn-v0.24.6.tar.gz && tar zvxf yarn-v0.24.6.tar.gz
RUN mv /opt/dist /opt/yarn
ENV PATH "$PATH:/opt/yarn/bin"

# Create app directory
RUN mkdir -p /app
WORKDIR /app

# Bundle app source
COPY . /app

#Install dependencies
RUN yarn


EXPOSE 8081
CMD node index.js
