```sh
# 🆔 Verifica tu versión de Amazon Linux
cat /etc/os-release

# Monitorear en tiempo real  RAM y CPU
free -m

# Para recuperar la clave publica desde la clave privada
ssh-keygen -y -f fgpone_key_pair.pem

```

### usuario de Amazon Linux

```sh
whoami
# ec2-user

# Cambiar el usuario
sudo usermod -l user555 user555
sudo passwd user555
```

# liberar memoria

```sh
sudo sh -c 'sync; echo 3 > /proc/sys/vm/drop_caches'
```

# Instalar Git en Amazon Linux

```sh
sudo yum install git -y
git --version
```
