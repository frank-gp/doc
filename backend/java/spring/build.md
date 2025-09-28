# Build Maven

```xml
<!-- pom.xml -->

<!-- Versión SNAPSHOT -->
<version>0.0.1-SNAPSHOT</version>

<!-- Versión final -->
<version>0.0.1</version>
```

# Compilar el proyecto

```sh

# Limpia builds anteriores, ejecuta pruebas y empaqueta
./mvnw clean verify package

# ver el archivo .jar generado
target\todolist-0.0.1.jar

# ejecutar el .jar generado en target/ (Maven)
java -jar target/todolist-0.0.1.jar         # Maven


# http://localhost:8080/

```
