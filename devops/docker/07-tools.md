## 🔧 Comandos Avanzados

### Debugging y Troubleshooting

```bash
# Execute command inside container
docker exec -it <container_name> <command>
docker exec -it postgres psql -U postgres
docker exec -it monguito mongo

# Access container shell
docker exec -it <container_name> /bin/bash
docker exec -it <container_name> /bin/sh  # For Alpine Linux

# View resource statistics
docker stats

# View filesystem changes
docker diff <container_name>

# Copy files between host and container
docker cp archivo.txt <container_name>:/ruta/destino
docker cp <container_name>:/ruta/origen ./archivo.txt
```

### Volúmenes

```bash
# Create volume
docker volume create mi_volumen

# List volumes
docker volume ls

# Use volume in container
docker run -v mi_volumen:/data <image_name>

# Bind mount (map host directory)
docker run -v /ruta/host:/ruta/contenedor <image_name>

# Example with database
docker run --name postgres \
  -v postgres_data:/var/lib/postgresql/data \
  -e POSTGRES_PASSWORD=admin \
  -d postgres
```

## ⚡ Tips y Mejores Prácticas

### Comandos de Limpieza

```bash
# Clean up stopped containers
docker container prune

# Clean up unused images
docker image prune

# Clean up unused volumes
docker volume prune

# Clean up unused networks
docker network prune

# Clean up entire system (Careful!)
docker system prune -a --volumes
```

### Variables de Entorno Comunes

```bash
# PostgreSQL
POSTGRES_PASSWORD=admin
POSTGRES_USER=myuser
POSTGRES_DB=mydatabase

# MongoDB
MONGO_INITDB_ROOT_USERNAME=admin
MONGO_INITDB_ROOT_PASSWORD=password
MONGO_INITDB_DATABASE=mydatabase

# MySQL
MYSQL_ROOT_PASSWORD=admin
MYSQL_DATABASE=mydatabase
MYSQL_USER=myuser
MYSQL_PASSWORD=password
```

### Puertos Comunes

```
PostgreSQL: 5432
MongoDB:    27017
MySQL:      3306
Redis:      6379
Nginx:      80, 443
Node.js:    3000, 8000
```

## 🚀 Flujo de Trabajo Recomendado

1. **Desarrollo Local**

```bash
# Create network
docker network create app_network

# Start database
docker run --name db --network app_network -d postgres

# Develop application with hot reload
docker run --name app -p 3000:3000 -v $(pwd):/app --network app_network my_app:dev
```

2. **Testing**

```bash
docker compose -f docker-compose.test.yml up --abort-on-container-exit
```

3. **Production**

```bash
docker compose -f docker-compose.prod.yml up -d
```

## 📚 Notas Adicionales

- **Always use specific tags** in production (avoid `:latest`)
- **Map different ports** if you have multiple containers of the same service
- **Use custom networks** for better isolation and communication
- **Backup important volumes** regularly
- **Monitor resources** with `docker stats`
- **Use `.dockerignore`** to optimize builds

## 🔗 Conexiones entre Servicios

When containers are on the same network, they can communicate using the **container name** as hostname:

```javascript
// Instead of localhost, use container name
const connectionString = "mongodb://nico:password@monguito:27017/test?authSource=admin";
const dbUrl = "postgresql://postgres:admin@fgp_db_container:5432/postgres_db";
```
