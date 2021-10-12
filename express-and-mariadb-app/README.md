# Run Express and Mariadb web applications in Docker

## Directory structure

```sh
express-and-mariadb-app
  |-- .dockerignore
  |-- docker-compose.yml
  |-- init.sql
  |-- README.md
  `-- src
      |-- app.js
      |-- db.js
      |-- Dockerfile
      |-- package-lock.json
      |-- package.json
      `-- node_modules
```

## Usage

Run container.  
-d: Run the container in the background.
```sh
docker-compose up -d
```

Check container.
```sh
docker container list
# Output: CONTAINER ID   IMAGE                         COMMAND                  CREATED          STATUS          PORTS                                       NAMES
#         0da67f795e51   express-and-mariadb-app_app   "node app.js"            11 seconds ago   Up 9 seconds    0.0.0.0:8081->3000/tcp, :::8081->3000/tcp   app
#         c9b7e0c8309d   mariadb:latest                "docker-entrypoint.s…"   12 seconds ago   Up 10 seconds   0.0.0.0:3306->3306/tcp, :::3306->3306/tcp   mariadb
```

Test.
```sh
curl http://localhost:8081/
# Outut: [{"name":"churros"},{"name":"gelato"},{"name":"halo-halo"},{"name":"mochi"}]
```

## Other commands

Check container logs.
```sh
docker logs app;
# Output: Running on http://0.0.0.0:3000
```

Connect to container.   
-i: Keep STDIN open even if not attached.  
-t: Allocate a pseudo-TTY(teletypewriter).
```sh
docker exec -it app bash
```

Dockerfile or reflect changes in build process.
```sh
docker-compose up -d --build
```

Stop & Delete (Containers and Networks).
```sh
docker-compose down
```

Stop & Delete (Containers, Networks and Images).
```sh
docker-compose down --rmi all
```

Stop & Delete (Containers, Networks and Volumes).
```sh
docker-compose down -v
```