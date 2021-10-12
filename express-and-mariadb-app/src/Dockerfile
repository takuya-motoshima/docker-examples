FROM amazonlinux:latest

# yum update & install.
RUN yum -y update

# Install Node.js
RUN curl -sL https://rpm.nodesource.com/setup_16.x | bash
RUN yum -y install nodejs

# Create an application directory.
WORKDIR /usr/src/app

# Install application dependencies.
COPY package*.json ./
RUN npm install

# Bundle application sources.
COPY . .

# The port on which the container listens.
EXPOSE 3000

# Run the app.
CMD [ "node", "app.js" ]