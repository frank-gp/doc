```sh

# Paso 1: Inicia el entorno Docker
docker-compose up -d
docker-compose down

# ========== Topic: notificaciones ==========
# Crear un tema (topic) en Kafka para el sistema de notificaciones
docker exec -it curso-apache-kafka-kafka-1 kafka-topics --create --topic notificaciones --bootstrap-server localhost:9092 --partitions 3 --replication-factor 1

# Simular la publicación de eventos de notificaciones en el tema `notificaciones`
docker exec -it curso-apache-kafka-kafka-1 kafka-console-producer --topic notificaciones --bootstrap-server localhost:9092

# Dentro del productor, ingresa mensajes de notificaciones:
notification: new_message, user_id: 123, content: "Hola, tienes un nuevo mensaje"
notification: friend_request, user_id: 456, content: "Alguien te ha enviado una solicitud de amistad"
notification: like, user_id: 789, content: "A alguien le gusta tu publicación"
# (Presiona Ctrl + C para salir del productor)

# Suscribir múltiples consumidores para simular la distribución de notificaciones a diferentes servicios
# Consumidor 1: Servicio de Mensajería (escucha todos los mensajes)
docker exec -it curso-apache-kafka-kafka-1 kafka-console-consumer --topic notificaciones --bootstrap-server localhost:9092 --from-beginning --group servicio-mensajeria

# Consumidor 2: Servicio de Notificaciones de Amistad (escucha solo solicitudes de amistad)
docker exec -it curso-apache-kafka-kafka-1 kafka-console-consumer --topic notificaciones --bootstrap-server localhost:9092 --from-beginning --group servicio-amistad | grep "friend_request"

# Consumidor 3: Servicio de Interacciones (escucha todos los 'likes')
docker exec -it curso-apache-kafka-kafka-1 kafka-console-consumer --topic notificaciones --bootstrap-server localhost:9092 --from-beginning --group servicio-interacciones | grep "like"
