<!-- readme.md -->

# 🚀 Docker 🚀

https://github.com/fgp555/docker-hello-world.git

> - ps process status
> - -i (interactive)
> - -t (tty) → Asigna una pseudo-terminal.
> - --rm → Le dice a Docker que elimine automáticamente el contenedor cuando se detenga.
> - -d significa detached mode (segundo plano).
> - -p significa --project-name

### Docker Images

```sh
# Crear una imagen
docker build .
docker build . -t my_image

# Ver si existe la imagen
docker images
docker image ls

# Ver detalles de la imagen
docker inspect my_image

# Ejecutar un contenedor temporal en modo interactivo
docker run -it --rm my_image sh
docker run -it --rm my_image bash

# Ejecutar un contenedor temporal en modo interactivo
ls -la
ls -la app

# Ver detalles del sistema
cat /etc/os-release

# Eliminar todas las imagenes
docker image prune -a

# Forzar eliminación (aunque esté en uso por un contenedor detenido)
docker rmi -f <image_id>
```

### Docker Contenedores

```sh
# Crear un contenedor desde esa imagen
docker run my_image
docker run -d -p 3000:3000 --name my_container my_image

# Ver los contenedores que usan esa imagen
docker ps
docker ps -a
docker ps -a --filter ancestor=my_image

# Detener un contenedor
docker stop my_container

# Detener todos los contenedores en ejecución
docker stop $(docker ps -q)

# Eliminar todos los contenedores detenidos
docker rm $(docker ps -a -q)

# Detener y eliminar todos los contenedores (incluso en ejecución)
docker rm -f $(docker ps -aq)

```

### Comandos Docker Compose

```bash
# Start services defined in docker-compose.yml
docker compose up
docker compose -p my_stack up

# Start in background
docker compose up -d

# Stop and remove containers in background
docker compose down

# Detener y eliminar todos los contenedores (incluso en ejecución)
docker rm -f $(docker ps -aq)
docker image prune -a
docker images

```

### Comandos Docker Hub

```bash
# Login to Docker Hub
docker login

# Logout from Docker Hub
docker logout

# Tag image for Docker Hub
docker tag my_image fgp555/hello_world
docker tag my_image:latest fgp555/hello_world:1.0

docker images

# Push image to Docker Hub
docker push fgp555/hello_world
docker push fgp555/hello_world:1.0

# Pull image from Docker Hub
docker pull fgp555/hello_world
docker pull fgp555/hello_world:1.0

# Remove image from Docker Hub
docker rmi fgp555/hello_world

```

> - https://hub.docker.com/u/fgp555
> - docker pull fgp555/hello_world:1.0

### Docker Networks

```sh
# Ver las redes
docker network ls

# Ver detalles de la red
docker network inspect my_app_network

# Eliminar la red
docker network rm my_app_network
docker network rm docker-hello-world_default

```
