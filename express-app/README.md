# Run the ExpressWeb application with Docker

## Directory structure

```sh
express-app
  |-- .dockerignore
  |-- app.js
  |-- Dockerfile
  |-- package.json
  `-- README.md
```

## Usage

Build an image.
```sh
docker build . -t express-app
```

Check image.
```sh
docker image list express-app
# Output: REPOSITORY    TAG       IMAGE ID       CREATED              SIZE
#         express-app   latest    62d4139ebb35   About a minute ago   913MB
```

Run image.  
-d: Run the container in the background.  
-p: Redirects the public port (8080) to the private port (3000) in the container.
```sh
docker run -p 8080:3000 -d express-app
```

Check container.
```sh
docker container list
# Output: CONTAINER ID   IMAGE         COMMAND                  CREATED          STATUS          PORTS                                       NAMES
#         dd21dbfea1a9   express-app   "docker-entrypoint.s…"   54 seconds ago   Up 53 seconds   0.0.0.0:8080->3000/tcp, :::8080->3000/tcp   hungry_franklin
```

Test.
```sh
curl http://localhost:8080/
# Outut: Hello express-app
```

## Other commands

Check container logs.
```sh
docker logs <container id>;
# Output: Running on http://0.0.0.0:3000
```

Connect to container.   
-i: Keep STDIN open even if not attached.  
-t: Allocate a pseudo-TTY(teletypewriter).
```sh
docker exec -it <container id> bash
```