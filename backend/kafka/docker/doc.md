```bash

# ========== docker-compose ==========
# Inicia los servicios de Kafka y Zookeeper con Docker:
docker-compose up -d
docker-compose -p docker_fgp up -d

# verificar
docker ps

docker-compose down
docker-compose up -d


