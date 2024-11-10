```sh
docker run -d --name kafdrop -p 9000:9000 \
  -e KAFKA_BROKERCONNECT=<BROKER_URL> \
  obsidiandynamics/kafdrop


# ==========  ==========

```ps1
docker run -d --name kafdrop -p 9000:9000 `
  --env KAFKA_BROKERCONNECT=localhost:9092 `
  obsidiandynamics/kafdrop


```sh

docker stop kafdrop
docker rm kafdrop



# ==========  ==========
docker stop kafdrop
docker rm kafdrop
docker run -d --name kafdrop -p 9000:9000 --env KAFKA_BROKERCONNECT=172.18.0.3172.19.0.2:9092 obsidiandynamics/kafdrop
docker run -d --name kafdrop -p 9000:9000 --env KAFKA_BROKERCONNECT=172.18.0.3:9092 obsidiandynamics/kafdrop


