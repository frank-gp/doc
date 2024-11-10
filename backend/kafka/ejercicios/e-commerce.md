```sh
# Paso 1: Inicia el entorno Docker
docker-compose up -d
docker-compose down

# ========== Topic: pedidos ==========
# Crear un tema (topic) en Kafka para manejar los pedidos
docker exec -it curso-apache-kafka-kafka-1 kafka-topics --create --topic pedidos --bootstrap-server localhost:9092 --partitions 3 --replication-factor 1

# Publicar mensajes en el tema `pedidos` para simular nuevos pedidos
docker exec -it curso-apache-kafka-kafka-1 kafka-console-producer --topic pedidos --bootstrap-server localhost:9092

# Dentro del productor, ingresa mensajes de pedidos:
pedido_id:1, producto:camisa, cantidad:2, usuario:123
pedido_id:2, producto:zapatos, cantidad:1, usuario:456
pedido_id:3, producto:gafas, cantidad:3, usuario:789
# (Presiona Ctrl + C para salir del productor)

# Consumir mensajes del tema `pedidos` desde el inicio (por ejemplo, servicio de inventario)
docker exec -it curso-apache-kafka-kafka-1 kafka-console-consumer --topic pedidos --bootstrap-server localhost:9092 --from-beginning --group servicio-inventario


# ========== Topic: notificaciones ==========
# Crear un tema (topic) para notificaciones de pedidos
docker exec -it curso-apache-kafka-kafka-1 kafka-topics --create --topic notificaciones --bootstrap-server localhost:9092 --partitions 2 --replication-factor 1

# Publicar mensajes en el tema `notificaciones` para simular el envío de notificaciones a los usuarios
docker exec -it curso-apache-kafka-kafka-1 kafka-console-producer --topic notificaciones --bootstrap-server localhost:9092

# Dentro del productor, ingresa mensajes de notificación:
pedido_id:1, usuario:123, mensaje:"Su pedido está en proceso"
pedido_id:2, usuario:456, mensaje:"Su pedido ha sido enviado"
pedido_id:3, usuario:789, mensaje:"Su pedido ha sido entregado"
# (Presiona Ctrl + C para salir del productor)

# Consumir mensajes del tema `notificaciones` desde el inicio (por ejemplo, servicio de notificaciones)
docker exec -it curso-apache-kafka-kafka-1 kafka-console-consumer --topic notificaciones --bootstrap-server localhost:9092 --from-beginning --group servicio-notificaciones


# ========== Topic: analitica ==========
# Crear un tema (topic) para la analítica de pedidos
docker exec -it curso-apache-kafka-kafka-1 kafka-topics --create --topic analitica --bootstrap-server localhost:9092 --partitions 2 --replication-factor 1

# Publicar mensajes en el tema `analitica` para simular eventos de análisis de ventas
docker exec -it curso-apache-kafka-kafka-1 kafka-console-producer --topic analitica --bootstrap-server localhost:9092

# Dentro del productor, ingresa mensajes de analítica:
evento:venta, pedido_id:1, producto:camisa, cantidad:2, monto:40
evento:venta, pedido_id:2, producto:zapatos, cantidad:1, monto:50
evento:venta, pedido_id:3, producto:gafas, cantidad:3, monto:90
# (Presiona Ctrl + C para salir del productor)

# Consumir mensajes del tema `analitica` desde el inicio (por ejemplo, servicio de análisis)
docker exec -it curso-apache-kafka-kafka-1 kafka-console-consumer --topic analitica --bootstrap-server localhost:9092 --from-beginning --group servicio-analitica
