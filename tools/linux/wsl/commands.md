```sh
# Cómo acceder a tu disco D: en WSL
cd /mnt/d
ls

# Busca la IP que aparece en inet (algo tipo 172.x.x.x).
ip addr show eth0


# Problema: sudo pide contraseña
sudo visudo
frank ALL=NOPASSWD: /usr/sbin/service nginx start
sudo /usr/sbin/service nginx start
