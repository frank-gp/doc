## 🏪 Docker Hub

### Comandos Docker Hub

```bash
# Login to Docker Hub
docker login

# Logout from Docker Hub
docker logout

# Tag image for Docker Hub
docker tag <local_image>:<tag> <username>/<repository>:<tag>
docker tag my_app:1 johndoe/my_app:1.0

# Push image to Docker Hub
docker push <username>/<repository>:<tag>
docker push johndoe/my_app:1.0

# Pull specific version from Docker Hub
docker pull <username>/<repository>:<tag>
docker pull johndoe/my_app:1.0
```

### Mejores Prácticas Docker Hub

```bash
# Create multi-tag image
docker tag my_app:1.0 johndoe/my_app:1.0
docker tag my_app:1.0 johndoe/my_app:latest

# Push multiple tags
docker push johndoe/my_app:1.0
docker push johndoe/my_app:latest

# View image information
docker inspect johndoe/my_app:1.0

# Pull and run from Docker Hub
docker run -d -p 8080:80 johndoe/my_app:1.0
```

### Ejemplo Completo Docker Hub

```bash
# 1. Build your application
docker build -t my_web_app .

# 2. Test locally
docker run -d -p 3000:3000 --name test_app my_web_app

# 3. Tag for Docker Hub
docker tag my_web_app:latest username/my_web_app:v1.0
docker tag my_web_app:latest username/my_web_app:latest

# 4. Login to Docker Hub
docker login

# 5. Push to Docker Hub
docker push username/my_web_app:v1.0
docker push username/my_web_app:latest

# 6. Others can now pull and use
docker pull username/my_web_app:v1.0
docker run -d -p 8080:3000 username/my_web_app:v1.0
```
