```sh

# Paso 1: Inicia el entorno Docker
docker-compose up -d
docker-compose down

# ========== Topic: transacciones ==========
#  Crear un tema (topic) en Kafka
docker exec -it curso-apache-kafka-kafka-1 kafka-topics --create --topic transacciones --bootstrap-server localhost:9092 --partitions 3 --replication-factor 1

# Publicar mensajes en el tema
docker exec -it curso-apache-kafka-kafka-1 kafka-console-producer --topic transacciones --bootstrap-server localhost:9092

# Consumir mensajes del tema:
docker exec -it curso-apache-kafka-kafka-1 kafka-console-consumer --topic transacciones --bootstrap-server localhost:9092 --from-beginning


# ========== ==========
# ========== ==========
# ========== ==========
# ========== ==========
