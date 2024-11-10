```sh
# Paso 1: Inicia el entorno Docker
docker-compose up -d
docker-compose down

# ========== Topic: pedidos ==========
# Crear un tema (topic) en Kafka
docker exec -it curso-apache-kafka-kafka-1 kafka-topics --create --topic pedidos --bootstrap-server localhost:9092 --partitions 2 --replication-factor 1

# Publicar mensajes en el tema `pedidos`
docker exec -it curso-apache-kafka-kafka-1 kafka-console-producer --topic pedidos --bootstrap-server localhost:9092

# Dentro del productor, ingresa los mensajes:
# pedido: Producto A, cantidad: 5, precio: 20
# pedido: Producto B, cantidad: 2, precio: 50
# pedido: Producto C, cantidad: 10, precio: 15
# (Presiona Ctrl + C para salir del productor)

# Consumir mensajes del tema `pedidos` desde el inicio
docker exec -it curso-apache-kafka-kafka-1 kafka-console-consumer --topic pedidos --bootstrap-server localhost:9092 --from-beginning

# Consumir solo los mensajes relacionados con "Producto A" usando `grep`
docker exec -it curso-apache-kafka-kafka-1 kafka-console-consumer --topic pedidos --bootstrap-server localhost:9092 --from-beginning | grep "Producto A"


