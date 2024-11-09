```sh
# ========== images ==========

# create image
docker build .
docker build -t nombre_imagen:etiqueta .
docker build -t mi_imagen:v1 .

docker image list
docker image ls

# tag image
docker tag ccbea5a79bd9 nombre_imagen:etiqueta

# delete image
# docker rmi <image_id>
docker rmi a7adff58a609
docker rmi nombre_imagen:etiqueta

# eliminar todas las imágenes
docker rmi -f $(docker images -q)
# forzar eliminar imagen
docker rmi -f <image_id>


# ========== containers ==========

# process status = ps
docker ps
#Lista todos los contenedores, tanto en ejecución como detenidos.
docker ps -a

# -i (Interactivo): Mantiene la entrada estándar (stdin) abierta para que puedas interactuar con el contenedor.
# -t (TTY o Terminal): Asigna una terminal simulada (TTY) al contenedor.

docker run ccbea5a79bd9
docker run -it ccbea5a79bd9
docker run -it mi_imagen:v1
docker run -it mi_imagen:latest
docker run -it --name nombre_contenedor ccbea5a79bd9
docker run -it -p 3000:3000 --name mi_contenedor mi_imagen:v1

# detener un contenedor
docker stop 699bf6750548
docker stop mi_contenedor
# detener todos los contenedores en ejecución
docker stop $(docker ps -q)

# eliminar un contenedor
docker rm 699bf6750548
# eliminar todos los contenedores detenidos
docker rm $(docker ps -a -q)

```
