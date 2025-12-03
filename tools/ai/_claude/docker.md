# Documentación Docker - Guía Completa

## ¿Qué es Docker?

Docker es una plataforma de contenedorización que permite empaquetar aplicaciones junto con todas sus dependencias en contenedores ligeros y portables. Los contenedores pueden ejecutarse de manera consistente en cualquier entorno que tenga Docker instalado.

## Conceptos Básicos

### Imagen (Image)
Una plantilla de solo lectura que contiene todo lo necesario para ejecutar una aplicación: código, runtime, bibliotecas, variables de entorno y archivos de configuración.

### Contenedor (Container)
Una instancia ejecutable de una imagen. Es el entorno aislado donde se ejecuta la aplicación.

### Dockerfile
Un archivo de texto que contiene instrucciones para construir una imagen Docker paso a paso.

### Docker Hub
Registro público en la nube donde se almacenan y comparten imágenes Docker.

## Instalación

### En Ubuntu/Debian:
```bash
# Actualizar paquetes
sudo apt update

# Instalar dependencias
sudo apt install apt-transport-https ca-certificates curl software-properties-common

# Agregar clave GPG oficial de Docker
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -

# Agregar repositorio Docker
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"

# Instalar Docker
sudo apt update
sudo apt install docker-ce

# Agregar usuario al grupo docker (opcional)
sudo usermod -aG docker $USER
```

### En CentOS/RHEL:
```bash
# Instalar yum-utils
sudo yum install -y yum-utils

# Agregar repositorio Docker
sudo yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo

# Instalar Docker
sudo yum install docker-ce docker-ce-cli containerd.io

# Iniciar Docker
sudo systemctl start docker
sudo systemctl enable docker
```

## Comandos Básicos

### Gestión de Imágenes

```bash
# Descargar una imagen
docker pull nombre_imagen:tag

# Listar imágenes locales
docker images

# Eliminar una imagen
docker rmi imagen_id

# Construir imagen desde Dockerfile
docker build -t nombre_imagen:tag .

# Buscar imágenes en Docker Hub
docker search nombre_imagen
```

### Gestión de Contenedores

```bash
# Ejecutar un contenedor
docker run [opciones] imagen comando

# Ejecutar en segundo plano
docker run -d nginx

# Ejecutar con puerto mapeado
docker run -p 8080:80 nginx

# Ejecutar con volumen montado
docker run -v /ruta/host:/ruta/contenedor imagen

# Listar contenedores activos
docker ps

# Listar todos los contenedores
docker ps -a

# Parar un contenedor
docker stop contenedor_id

# Iniciar un contenedor parado
docker start contenedor_id

# Reiniciar un contenedor
docker restart contenedor_id

# Eliminar un contenedor
docker rm contenedor_id

# Ejecutar comando en contenedor activo
docker exec -it contenedor_id /bin/bash

# Ver logs de un contenedor
docker logs contenedor_id
```

### Comandos de Sistema

```bash
# Información del sistema Docker
docker info

# Versión de Docker
docker version

# Limpiar recursos no utilizados
docker system prune

# Ver uso de espacio
docker system df
```

## Dockerfile - Sintaxis y Mejores Prácticas

### Ejemplo básico de Dockerfile:

```dockerfile
# Imagen base
FROM node:18-alpine

# Información del maintainer
LABEL maintainer="tu-email@ejemplo.com"

# Directorio de trabajo
WORKDIR /app

# Copiar archivos de dependencias
COPY package*.json ./

# Instalar dependencias
RUN npm ci --only=production

# Copiar código fuente
COPY . .

# Exponer puerto
EXPOSE 3000

# Usuario no root (seguridad)
USER node

# Comando por defecto
CMD ["npm", "start"]
```

### Instrucciones principales:

- **FROM**: Especifica la imagen base
- **LABEL**: Añade metadatos a la imagen
- **WORKDIR**: Establece el directorio de trabajo
- **COPY**: Copia archivos del host al contenedor
- **ADD**: Similar a COPY pero con funcionalidades adicionales
- **RUN**: Ejecuta comandos durante la construcción
- **CMD**: Comando por defecto al iniciar el contenedor
- **ENTRYPOINT**: Punto de entrada principal
- **EXPOSE**: Documenta puertos que usa la aplicación
- **ENV**: Establece variables de entorno
- **VOLUME**: Declara puntos de montaje

### Mejores prácticas:

1. **Usar imágenes base oficiales y específicas**
2. **Minimizar el número de capas**
3. **Instalar solo lo necesario**
4. **Usar .dockerignore para excluir archivos**
5. **No ejecutar como root**
6. **Usar multi-stage builds para optimizar tamaño**

## Docker Compose

Docker Compose permite definir y ejecutar aplicaciones multi-contenedor usando un archivo YAML.

### Ejemplo docker-compose.yml:

```yaml
version: '3.8'

services:
  web:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
    depends_on:
      - db
    volumes:
      - .:/app
      - /app/node_modules

  db:
    image: postgres:13
    environment:
      POSTGRES_DB: myapp
      POSTGRES_USER: user
      POSTGRES_PASSWORD: password
    volumes:
      - postgres_data:/var/lib/postgresql/data
    ports:
      - "5432:5432"

  redis:
    image: redis:alpine
    ports:
      - "6379:6379"

volumes:
  postgres_data:
```

### Comandos Docker Compose:

```bash
# Iniciar servicios
docker-compose up

# Iniciar en segundo plano
docker-compose up -d

# Parar servicios
docker-compose down

# Ver logs
docker-compose logs

# Escalar servicios
docker-compose up --scale web=3

# Reconstruir imágenes
docker-compose build
```

## Gestión de Volúmenes

### Tipos de almacenamiento:

1. **Volumes**: Gestionados por Docker
2. **Bind mounts**: Mapean directorios del host
3. **tmpfs mounts**: En memoria (Linux)

```bash
# Crear volumen
docker volume create mi_volumen

# Listar volúmenes
docker volume ls

# Inspeccionar volumen
docker volume inspect mi_volumen

# Usar volumen en contenedor
docker run -v mi_volumen:/data nginx

# Bind mount
docker run -v /ruta/host:/ruta/contenedor nginx

# Eliminar volumen
docker volume rm mi_volumen
```

## Redes en Docker

```bash
# Listar redes
docker network ls

# Crear red personalizada
docker network create mi_red

# Conectar contenedor a red
docker network connect mi_red contenedor_id

# Desconectar de red
docker network disconnect mi_red contenedor_id

# Inspeccionar red
docker network inspect mi_red

# Eliminar red
docker network rm mi_red
```

## Seguridad

### Buenas prácticas de seguridad:

1. **Usar imágenes oficiales y actualizadas**
2. **Escanear vulnerabilidades regularmente**
3. **No ejecutar como root**
4. **Usar secretos para información sensible**
5. **Limitar recursos del contenedor**
6. **Configurar políticas de red**

```bash
# Ejecutar con usuario específico
docker run -u 1001:1001 imagen

# Limitar memoria y CPU
docker run --memory="256m" --cpus="1.5" imagen

# Solo lectura en filesystem
docker run --read-only imagen
```

## Monitoreo y Troubleshooting

```bash
# Estadísticas de contenedores
docker stats

# Inspeccionar contenedor
docker inspect contenedor_id

# Procesos en contenedor
docker top contenedor_id

# Cambios en filesystem
docker diff contenedor_id

# Eventos de Docker
docker events

# Ver uso de recursos
docker system df -v
```

## Comandos Útiles Adicionales

```bash
# Copiar archivos entre host y contenedor
docker cp archivo.txt contenedor_id:/ruta/destino
docker cp contenedor_id:/ruta/origen ./archivo.txt

# Crear imagen desde contenedor
docker commit contenedor_id nueva_imagen:tag

# Exportar/importar contenedores
docker export contenedor_id > backup.tar
docker import backup.tar nueva_imagen:tag

# Guardar/cargar imágenes
docker save -o imagen.tar imagen:tag
docker load -i imagen.tar

# Limpiar todo (¡Cuidado!)
docker system prune -a --volumes
```

## Ejemplos Prácticos

### Aplicación Web Simple:

```dockerfile
FROM nginx:alpine
COPY ./html /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

### Aplicación Node.js:

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production && npm cache clean --force
COPY . .
EXPOSE 3000
USER node
CMD ["node", "server.js"]
```

### Multi-stage build:

```dockerfile
# Stage 1: Build
FROM node:18 AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Stage 2: Production
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

## Recursos Adicionales

- **Documentación oficial**: https://docs.docker.com/
- **Docker Hub**: https://hub.docker.com/
- **Docker Playground**: https://labs.play-with-docker.com/
- **Awesome Docker**: https://github.com/veggiemonk/awesome-docker

## Notas Importantes

- Siempre usar tags específicos en producción (evitar `:latest`)
- Mantener imágenes actualizadas por seguridad
- Monitorear el uso de recursos regularmente
- Hacer backup de volúmenes importantes
- Documentar la arquitectura de contenedores

Esta documentación cubre los aspectos fundamentales de Docker. Para casos de uso específicos o problemas avanzados, consulta la documentación oficial o recursos especializados.