# Para Spring Boot: usar Spring Initializr (opcionalmente desde CLI)

```sh
curl https://start.spring.io/starter.zip \
  -d dependencies=web \
  -d name=helloworld \
  -d packageName=com.frankgp \
  -o helloworld.zip

unzip helloworld.zip
cd helloworld
./mvnw spring-boot:run
```

# Forzar a curl a ignorar el chequeo de certificados (no recomendado para producción)

```sh

curl -k "https://start.spring.io/starter.zip" \
  -d dependencies=web \
  -d name=helloworld \
  -d packageName=com.frankgp \
  -o helloworld.zip

unzip helloworld.zip
cd helloworld
./mvnw spring-boot:run
```

```sh
curl -k https://start.spring.io/starter.zip \
  -d dependencies=web \
  -d name=helloworld \
  -d packageName=com.frankgp.helloworld \
  -d javaVersion=17 \
  -d language=java \
  -d type=maven-project \
  -o helloworld.zip

unzip helloworld.zip
cd helloworld
./mvnw spring-boot:run
```
