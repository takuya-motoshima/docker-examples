# Run Express and Mariadb web applications in Docker

## Directory structure

```sh
express-and-mariadb-app
  |-- .dockerignore
  |-- app.js
  |-- Dockerfile
  |-- package.json
  `-- README.md
```

## Usage

Run container.  
-d: Run the container in the background.
```sh
docker-compose up -d
```

Test.
```sh
curl http://localhost:8081/
# Outut: Hello express-and-mariadb-app
```

Check express log.
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

## Other commands

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