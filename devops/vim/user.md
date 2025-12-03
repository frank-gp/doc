```sh
# Verificar el propietario del directorio nodejs
whoami 

# Cambiar el propietario del directorio nodejs
sudo su - ec2-user

# Primero verifica permisos y dueño del directorio nodejs:
ls -ld /home/ec2-user/nodejs

# Cambiar el propietario del directorio nodejs 
sudo chown -R ec2-user:ec2-user /home/ec2-user/nodejs
