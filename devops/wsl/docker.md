```sh
docker run -it -p 8000:8000 ubuntu:22.04 bash
# Luego puedes instalar Python y Gunicorn

# listar los contenedores
docker ps

# Y los que están detenidos con:
docker ps -a

# iniciar 
docker start <container_id_o_nombre>

# acceder a la consola
docker exec -it <container_id_o_nombre> bash


# Instalar Docker en Amazon Linux
docker run -it --name amazonlinux-2023 amazonlinux:2023 bash
docker run -it --name amazonlinux-2023 amazonlinux:latest bash
