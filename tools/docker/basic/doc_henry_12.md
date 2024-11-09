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
docker stop cb5d78675c3a
docker rm cb5d78675c3a


docker build . -t nest-demo-docker
docker run -p 3001:3000 nest-demo-docker

docker build . -t express-demo-docker
docker run -p 3002:3000 express-demo-docker

# https://hub.docker.com/_/postgres

docker run --name postgresdb -e POSTGRES_PASSWORD=admin -e POSTGRES_DB=m4_hw_back -d postgres
docker container inspect postgresdb
"IPAddress": "172.17.0.3",

docker network create nestnetwork
docker network ls


docker ps
docker stop postgresdb
docker rm postgresdb


docker run --name postgresdb -e POSTGRES_PASSWORD=admin -e POSTGRES_DB=m4_hw_back --network nestnetwork -d postgres


docker build . -t m4_hw_back
docker run -p 3000:3000 --network nestnetwork m4_hw_back


docker run --name postgresdb -e POSTGRES_PASSWORD=admin -e POSTGRES_DB=m4_hw_back --network nestnetwork -v pgdata:/var/lib/postgresql/data -d postgres

docker ps
# docker-compose.yml
docker compose up
# en segundo plano
docker compose up -d
docker compose stop
docker compose rm
