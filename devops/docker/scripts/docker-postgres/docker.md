### Install docker

https://docs.docker.com/desktop/install/windows-install/

```bash

docker
docker -v
docker build .

docker run -p 3001:3000 90b33ceeb15ade2318ed15a038a6cbc3a4daaf1823c0db12df9

# in new CMD or Powershell

# display all run container
docker ps

# stop container ID
docker stop e83584fc1f73


docker build . -t nodejs_image
docker run -p 3001:3000 nodejs_image

docker build . -t express-demo-docker
docker run -p 3002:3000 express-demo-docker

# https://hub.docker.com/_/postgres

docker run --name postgres_container -e POSTGRES_PASSWORD=admin -e POSTGRES_DB=m4_lec_back -d postgres

docker container inspect postgres_container
docker inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' postgres_container
# "IPAddress": "172.20.0.2",

# acceder a la base de datos por la terminal
docker exec -it postgres_container psql -U postgres -d postgres


docker network create my_network
docker network ls

docker stop postgres_container
docker rm postgres_container


docker run --name postgres_container -e POSTGRES_PASSWORD=admin -e POSTGRES_DB=postgres --network my_network -d postgres


docker build . -t nodejs_image
docker run --name nodejs_container -p 3001:3000 --network my_network nodejs_image


docker run --name postgres_container -e POSTGRES_PASSWORD=admin -e POSTGRES_DB=m4_lec_back --network my_network -v pgdata:/var/lib/postgresql/data -d postgres

# docker-compose.yml
docker compose up
# en segundo plano
docker compose up -d
docker compose stop
docker compose rm
