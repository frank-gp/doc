### Gestión de Contenedores

```bash
# Version
docker --version

# View active containers
docker ps

# View all containers (active and inactive)
docker ps -a

# Stop a container
docker stop <container_id_or_name>
docker stop e83584fc1f73

# Start a stopped container
docker start <container_name>
docker start fgp_names1

# Start with interactive mode
docker start -ai fgp_names1

# Restart container
docker restart fgp_names1

# View container logs
docker logs <container_name>
docker logs fgp_names1
docker logs --follow monguito2  # Follow logs in real time

# Remove container (must be stopped)
docker rm <container_name>
docker rm fgp_db_container
```

### Ejecución de Contenedores

```bash
# Run container with name and port mapping
docker run --name <container_name> -p <host_port>:<container_port> -d <image_name>
docker run --name fgp_names1 -p 3001:3000 -d my_image

# Run without name (Docker assigns one automatically)
docker run -p 3001:3000 -d my_image

# Run with specific network
docker run --name my_container2 -p 3001:3000 --network fgp_network my_image2
```

### Inspección de Contenedores

```bash
# Inspect complete container configuration
docker container inspect <container_name>
docker container inspect postgresdb

# Get specific container IP
docker inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' <container_name>

# View processes running in container
docker top <container_name>
```
