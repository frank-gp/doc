# Instalar Kafka

```sh
sudo apt update
sudo apt install -y openjdk-11-jdk
sudo apt install openjdk-17-jdk -y

java -version

cd ~

wget https://archive.apache.org/dist/kafka/3.7.0/kafka_2.13-3.7.0.tgz

tar -xzf kafka_2.13-3.7.0.tgz
mv kafka_2.13-3.7.0 kafka

# Iniciar Zookeeper
cd ~/kafka
bin/zookeeper-server-start.sh config/zookeeper.properties

# Iniciar Kafka (nueva terminal)
cd ~/kafka
bin/kafka-server-start.sh config/server.properties

# Probar Kafka
bin/kafka-topics.sh --create --topic prueba --bootstrap-server localhost:9092 --partitions 1 --replication-factor 1

# Ver lista de tópicos:
bin/kafka-topics.sh --list --bootstrap-server localhost:9092

# Producir mensajes
bin/kafka-console-producer.sh --topic prueba --bootstrap-server localhost:9092

# Consumir mensajes
bin/kafka-console-consumer.sh --topic prueba --from-beginning --bootstrap-server localhost:9092
```

# Instalar Kafdrop

```sh
wget https://github.com/obsidiandynamics/kafdrop/releases/download/4.0.1/kafdrop-4.0.1.jar -O kafdrop.jar

java -jar ~/kafdrop.jar \
  --kafka.brokerConnect=localhost:9092 \
  --server.port=9000


# Ejecutar en segundo plano
nohup java -jar kafdrop.jar \
  --kafka.brokerConnect=localhost:9092 \
  --server.port=9000 > kafdrop.log 2>&1 &



http://localhost:9000/
```

# iniciar Zookeeper y Kafka automáticamente

```sh
#!/bin/bash

# Ruta a Kafka
KAFKA_DIR=~/kafka

# Crear una nueva sesión de tmux llamada "kafka-cluster"
tmux new-session -d -s kafka-cluster "$KAFKA_DIR/bin/zookeeper-server-start.sh $KAFKA_DIR/config/zookeeper.properties"

# Crear una nueva ventana en la misma sesión para Kafka
tmux new-window -t kafka-cluster -n kafka "$KAFKA_DIR/bin/kafka-server-start.sh $KAFKA_DIR/config/server.properties"

# Adjuntar a la sesión (para ver ambos procesos)
tmux attach-session -t kafka-cluster

```

### Instrucciones de uso

```sh
sudo apt update
sudo apt install tmux -y

# Guarda el script
vim ~/start-kafka.sh

# Hazlo ejecutable
chmod +x ~/start-kafka.sh

./start-kafka.sh

# Detener Kafka
./stop-kafka.sh
```
