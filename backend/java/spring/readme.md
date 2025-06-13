# 🆚 Maven ≈ npm (Node.js)

Su objetivo principal es gestionar el ciclo de vida de construcción de un proyecto.

| Característica       | **Maven** (Java)    | **npm** (Node.js / JavaScript)  |
| -------------------- | ------------------- | ------------------------------- |
| Lenguaje principal   | Java                | JavaScript / TypeScript         |
| Archivo de config.   | `pom.xml`           | `package.json`                  |
| Maneja dependencias  | Sí                  | Sí                              |
| Scripts de ejecución | A través de plugins | Directamente en `scripts`       |
| Repositorio central  | Maven Central       | npm Registry                    |
| Compilación          | Sí (`mvn compile`)  | No aplica (JS no se compila)    |
| Empaquetado          | `.jar` / `.war`     | `.js`, `.ts`, o bundle (`.zip`) |
| archivos generados   | target/             | dist/                           |

# Spring Initializr

https://start.spring.io/

```sh
# Project: Maven
# Language: Java
# Spring Boot: 3.x (última estable)
# Dependencies:
# Spring Web

# Usar Maven Wrapper
./mvnw clean install
./mvnw spring-boot:run

# en Windows
mvnw.cmd clean install
mvnw.cmd spring-boot:run

# alias
vim ~/.bashrc
code ~/.bashrc
alias sb='./mvnw spring-boot:run'

```

# Deploy

```sh
# Build: ./target/hello-0.0.1-SNAPSHOT.jar
./mvnw clean package

sudo apt update
sudo apt install openjdk-17-jdk -y
java -version

java -jar hello-0.0.1-SNAPSHOT.jar

# puerto personalizado
java -jar hello.jar --server.port=80

# Mantenerlo siempre corriendo
nohup java -jar hello.jar > log.txt 2>&1 &

```

# logging

```sh
code ./src/main/resources/application.properties
logging.level.org.springframework.web=DEBUG

# Opcionalmente, si también quieres ver más detalle de los controladores:
logging.level.org.springframework.web.servlet=DEBUG

```

# Usar Nginx como proxy

```nginx
server {
    listen 80;
    server_name midominio.com;

    location / {
        proxy_pass http://localhost:8080;
    }
}
```
