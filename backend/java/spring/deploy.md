# ⚠️ ¿Qué es un .SNAPSHOT realmente?

Un SNAPSHOT en Maven es una versión en desarrollo que puede cambiar en cualquier momento, aunque mantenga el mismo nombre.

| Característica        | `1.0.0-SNAPSHOT` (desarrollo) | `1.0.0` (versión final) |
| --------------------- | ----------------------------- | ----------------------- |
| Cambia con frecuencia | Sí                            | No                      |
| Estabilidad           | Baja                          | Alta                    |
| Cache en Maven        | No (descarga cada vez)        | Sí                      |
| Uso en producción     | **No recomendado**            | **Sí**                  |
| Firma o checksum      | Rara vez                      | Casi siempre            |

❌ Problemas de usar SNAPSHOT en producción

- Actualizaciones inesperadas: si usas dependencias SNAPSHOT, Maven puede traerte una versión nueva sin que te des cuenta.
- Difícil de depurar: no sabrás exactamente qué código está en producción.
- No es reproducible: otro desarrollador podría construir el mismo .jar con código diferente.
- Puede contener código no probado o inestable.

# Deploy

```xml
<version>0.0.1</version> <!-- versión final -->
```

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
