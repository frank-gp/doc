# Build Maven

Cambio de versión de SNAPSHOT a versión final en pom.xml

```xml
<!-- SNAPSHOT -->
<version>0.0.1-SNAPSHOT</version>

<!-- Versión final -->
<version>0.0.1</version>
```

```sh

# Compilar el proyecto
./mvnw clean install   # en Linux/Mac
mvnw.cmd clean install # en Windows

# Ejecutar la aplicación
./mvnw spring-boot:run   # en Linux/Mac
mvnw.cmd spring-boot:run # en Windows

# ejecutar el .jar generado en target/ (Maven)
java -jar target/demo-0.0.1-SNAPSHOT.jar         # Maven


# http://localhost:8080/

```
