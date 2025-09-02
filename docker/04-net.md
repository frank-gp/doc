## 🌐 Gestión de Redes

### Comandos de Red

```bash
# List available networks
docker network ls

# Create custom network
docker network create fgp_network
docker network create my_net

# Remove network
docker network rm my_net

# Inspect network
docker network inspect fgp_network

# Connect existing container to network
docker network connect my_net <container_name>

# Disconnect container from network
docker network disconnect my_net <container_name>
```

### Ejemplo de Aplicación Multi-Container

```bash
# 1. Create network
docker network create my_net

# 2. Create database
docker create -p 27018:27017 --name monguito \
  --network my_net \
  -e MONGO_INITDB_ROOT_USERNAME=nico \
  -e MONGO_INITDB_ROOT_PASSWORD=password \
  mongo

# 3. Create application
docker create -p 3000:3000 --name chanchito \
  --network my_net my_app:1

# 4. Start services
docker start monguito
docker start chanchito
```
