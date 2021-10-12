# docker-examples

This is a docker example.

## Usage

A description of the examples in this package.  
See the README for each example for details.

|name|explanation|
|--|--|
|[express-app](./express-app)|Run the ExpressWeb application with Docker|
|[express-and-mariadb-app](./express-and-mariadb-app)|Run Express and Mariadb web applications in Docker|

Directory structure.

```sh
.
|-- express-app
|     |-- .dockerignore
|     |-- app.js
|     |-- Dockerfile
|     |-- package.json
|     `-- README.md
`-- express-and-mariadb-app
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