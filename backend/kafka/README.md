# Docker

### Examples

- https://github.com/fgp555/nestjs-kafka-microservices
- https://github.com/fgp555/nestjs-kafka-info


## Instalación

Download for Windows - AMD64 https://docker.com 

```bash

# ========== comandos para docker-compose ==========
# Inicia los servicios con Docker:
docker-compose up -d
docker-compose -p kafka-containers up -d

# verificar
docker ps

# detener y eliminar
docker-compose down


```

# Kafdrop Kafka Web UI

https://github.com/obsidiandynamics/kafdrop

https://github.com/obsidiandynamics/kafdrop/blob/master/docker-compose/kafka-kafdrop/docker-compose.yaml

# Offset Explorer

The Ultimate UI Tool for Kafka https://kafkatool.com

---

# docker-compose.yml

```yml
services:
  zookeeper:
    image: confluentinc/cp-zookeeper:latest
    networks:
      - broker-kafka
    ports:
      - "2181:2181"
      - "2888:2888"
      - "3888:3888"
    environment:
      ZOOKEEPER_CLIENT_PORT: 2181
      ZOOKEEPER_TICK_TIME: 2000

  kafka:
    image: confluentinc/cp-kafka:latest
    networks:
      - broker-kafka
    depends_on:
      - zookeeper
    ports:
      - "9092:9092"
    environment:
      KAFKA_BROKER_ID: 1
      KAFKA_ZOOKEEPER_CONNECT: zookeeper:2181
      KAFKA_ADVERTISED_LISTENERS: PLAINTEXT://kafka:29092,PLAINTEXT_HOST://localhost:9092
      KAFKA_LISTENER_SECURITY_PROTOCOL_MAP: PLAINTEXT:PLAINTEXT,PLAINTEXT_HOST:PLAINTEXT
      KAFKA_INTER_BROKER_LISTENER_NAME: PLAINTEXT
      KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR: 1

  kafdrop:
    image: obsidiandynamics/kafdrop:latest
    networks:
      - broker-kafka
    depends_on:
      - kafka
    ports:
      - "9000:9000"
    environment:
      KAFKA_BROKERCONNECT: kafka:29092

networks:
  broker-kafka:
    driver: bridge
```

# Continuar con....

### Comandos para Kafka

- [commands-basic](./commands/basic.md)

### Video Tutoriales

- [videos](./learn/youtube.md)
