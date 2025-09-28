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

./mvnw --version

# Usar Maven Wrapper
./mvnw spring-boot:run
./mvnw clean install

# en Windows
mvnw.cmd spring-boot:run
mvnw.cmd clean install

# alias
vim ~/.bashrc
code ~/.bashrc
alias sb='./mvnw spring-boot:run'

```

# logging

```sh
code ./src/main/resources/application.properties
logging.level.org.springframework.web=DEBUG

# Opcionalmente, si también quieres ver más detalle de los controladores:
logging.level.org.springframework.web.servlet=DEBUG

```
