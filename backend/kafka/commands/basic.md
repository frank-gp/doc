```bash
# Conéctate a la terminal del contenedor Kafka
docker exec -it kafka-containers-kafka-1 /bin/bash

# Verifica la conexión a Kafka dentro del contenedor
kafka-topics --bootstrap-server localhost:9092 --list

# Crear un tema:
kafka-topics --bootstrap-server localhost:9092 --create --topic my-topic
kafka-topics --bootstrap-server localhost:9092 --create --topic my-topic --partitions 1 --replication-factor 1

# Describir un tema:
kafka-topics --bootstrap-server localhost:9092 --describe --topic my-topic

# Produce un mensaje:
kafka-console-producer --bootstrap-server localhost:9092 --topic my-topic

# Consume un mensaje:
kafka-console-consumer --bootstrap-server localhost:9092 --topic my-topic --from-beginning
kafka-console-consumer --bootstrap-server localhost:9092 --topic my-topic --from-beginning --consumer-property group.id=my-consumer-id

# ========== debug ==========

docker-compose logs kafka-1

