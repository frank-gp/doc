## 🏗️ Construcción y Ejecución de Aplicaciones

### Construcción de Imágenes

```bash
# Build image from Dockerfile in current directory
docker build . -t <image_name>:<tag>
docker build . -t my_image
docker build . -t my_image2
docker build . -t my_app:1

# Build with specific name and context
docker build -f Dockerfile.prod -t mi_app:prod .
```

## 🛠️ Gestión de Imágenes

### Comandos de Imágenes

```bash
# List local images
docker images

# Pull image from registry
docker pull <image_name>:<tag>
docker pull node
docker pull node:18
docker pull mongo

# Remove image
docker rmi <image_name>:<tag>
docker image rm node:18

# Search images on Docker Hub
docker search <image_name>

# View image layer history
docker history <image_name>

# Clean up unused images
docker image prune
```
