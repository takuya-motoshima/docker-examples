FROM node

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