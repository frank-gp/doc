```bash

docker ps
docker stop e83584fc1f73
docker container inspect postgresdb


docker build . -t fgp_image
docker run --name fgp_names1 -p 3001:3000 -d fgp_image
docker run -p 3001:3000 -d fgp_image

docker ps -a
docker stop fgp_names1
docker start fgp_names1
docker start -ai fgp_names1
docker restart fgp_names1
docker logs fgp_names1

docker run --name fgp_db_container -e POSTGRES_PASSWORD=admin -e POSTGRES_DB=postgres_db -d postgres
docker container inspect fgp_db_container
# "IPAddress": "172.17.0.3",
docker stop fgp_db_container
docker rm fgp_db_container

docker network create fgp_network
docker network ls

docker run --name fgp_db_container -e POSTGRES_PASSWORD=admin -e POSTGRES_DB=postgres_db --network fgp_network -d postgres

docker build . -t fgp_image2
docker run -p 3001:3000 --network fgp_network fgp_image2
docker run --name fgp_container2 -p 3001:3000 --network fgp_network fgp_image2
```

<!-- ========== hola mundo ========== -->

# hola mundo (nicolas)

```bash
docker image
docker pull node
docker pull node:18
docker pull mysql
docker pull mysql --platform linux/x86_64 mysql

docker image rm node:18

docker pull mongo
docker create mongo
docker container create mongo
docker start affd5381506b52289b3fbe22a7a7669c0543778cd80935a940b041ab7b035b20
docker ps
docker stop affd5381506b
docker ps -a
docker rm affd5381506b

docker create --name monguito mongo
docker stop monguito
docker rm monguito

docker create -p27017:27017 --name monguito mongo
docker start monguito

docker create -p27017 --name monguito2 mongo
docker start monguito2
docker logs monguito2
docker logs --follow monguito2

docker run mongo
docker run -d mongo
docker run --name monguito3 -p27017:27017 -d mongo

# https://hub.docker.com/_/mongo
# Environment Variables
# MONGO_INITDB_ROOT_USERNAME, MONGO_INITDB_ROOT_PASSWORD
# -e = variable de entorno
docker create -p27018:27018 --name monguito -e MONGO_INITDB_ROOT_USERNAME=nico -e MONGO_INITDB_ROOT_PASSWORD=password mongo
docker run -p 27018:27017 --name monguito -e MONGO_INITDB_ROOT_USERNAME=nico -e MONGO_INITDB_ROOT_PASSWORD=password -d mongo

docker start monguito

docker network ls
docker network create my_net
docker network rm my_net

docker build -t my_app:1 .
docker images
docker create -p 27018:27017 --name monguito --network my_net -e MONGO_INITDB_ROOT_USERNAME=nico -e MONGO_INITDB_ROOT_PASSWORD=password mongo
docker create -p3000:3000 --name chanchito --network my_net my_app:1
docker start monguito
docker start chanchito

# mongodb://nico:password@localhost:27018/test?authSource=admin

docker compose up
docker compose down

docker compose -f docker-compose-dev.yml up

```


<!-- ========== database ========== -->
## DATABASE

```bash
docker run --name postgres -e POSTGRES_PASSWORD=admin -d -p 5433:5432 postgres

docker exec -it postgres psql -U postgres

# 4. Ejemplo de Configuración de Adminer
# System	PostgreSQL
# Server	localhost:5433
# Username	postgres
# Password	admin
# Database	(vacío o nombre específico)

psql -U postgres
psql -h localhost -p 5433 -U postgres


```
