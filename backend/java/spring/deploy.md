# Deploy

```sh
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

# Extra (opcional): Ejecutar en segundo plano

```sh
nohup java -jar demo-0.0.1-SNAPSHOT.jar > log.txt 2>&1 &

```

# Ver logs en tiempo real (tail -f)

```sh
tail -f log.txt
```
