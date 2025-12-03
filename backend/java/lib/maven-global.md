# Apache Maven (modo global)

- https://maven.apache.org/download.cgi
- [apache-maven-3.9.10-bin.zip](https://dlcdn.apache.org/maven/maven-3/3.9.10/binaries/apache-maven-3.9.10-bin.zip)

```sh
mvn --version

# src/main/java/com/frankgp/hello/HelloController.java
# pom.xml

# Agregar Maven Wrapper manualmente
mvn -N io.takari:maven:wrapper

# Usa la versión global de Maven instalada en tu sistema.
mvn spring-boot:run

# Si quieres usar otra versión de Maven
# Abre el archivo:
code .mvn/wrapper/maven-wrapper.properties

# Y cambia la línea
distributionUrl=https://repo.maven.apache.org/maven2/org/apache/maven/apache-maven/3.9.6/apache-maven-3.9.6-bin.zip
```
