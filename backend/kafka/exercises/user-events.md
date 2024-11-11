```sh
# Paso 1: Inicia el entorno Docker
docker-compose up -d
docker-compose down

# ========== Topic: user-events ==========
# Crear un tema (topic) en Kafka para registrar eventos de usuario
docker exec -it curso-apache-kafka-kafka-1 kafka-topics --create --topic user-events --bootstrap-server localhost:9092 --partitions 2 --replication-factor 1

# Publicar mensajes en el tema `user-events`
docker exec -it curso-apache-kafka-kafka-1 kafka-console-producer --topic user-events --bootstrap-server localhost:9092

# Dentro del productor, ingresa los mensajes para simular eventos de usuario:
user:12345, event:login
user:12345, event:purchase, item:book, price:15
user:67890, event:login
user:67890, event:logout
user:12345, event:logout
# (Presiona Ctrl + C para salir del productor)

# Consumir mensajes del tema `user-events` desde el inicio
docker exec -it curso-apache-kafka-kafka-1 kafka-console-consumer --topic user-events --bootstrap-server localhost:9092 --from-beginning

# Filtrar mensajes para un usuario específico (por ejemplo, `user:12345`)
docker exec -it curso-apache-kafka-kafka-1 kafka-console-consumer --topic user-events --bootstrap-server localhost:9092 --from-beginning | grep "user:12345"

# Filtrar eventos de `purchase` para ver solo las compras
docker exec -it curso-apache-kafka-kafka-1 kafka-console-consumer --topic user-events --bootstrap-server localhost:9092 --from-beginning | grep "event:purchase"
