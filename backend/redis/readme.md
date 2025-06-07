```sh
wsl --install
wsl --version
wsl
wsl --install Ubuntu
wsl --unregister Ubuntu
# Obtener la IP de WSL2 desde PowerShell
wsl hostname -I


sudo apt update
sudo apt install redis
redis-server --version
sudo service redis-server status
sudo service redis-server start

# Testear Redis ping pong
redis-cli ping

# Iniciar Redis
redis-server

# Conexión a Redis
redis-cli

# Obtener la IP de WSL2 en Linux
ip addr | grep inet
# segundo plano
redis-server --daemonize yes

exit
```

# Comandos básicos para navegar en Redis

| Acción                  | Comando Redis CLI          |
| ----------------------- | -------------------------- |
| Listar todas las claves | `KEYS *`                   |
| Establecer valor        | SET clave valor            |
| Obtener valor           | GET clave                  |
| Eliminar clave          | DEL clave                  |
| Ver tipo de dato        | TYPE clave                 |
| Incrementar valor num.  | INCR contador              |
| Guardar JSON (texto)    | SET user '{"name":"Juan"}' |
| Borrar DB               | FLUSHDB                    |

```sh
# Ejemplo
SET nombre "Frank"
GET nombre
KEYS *
```

```sh
sudo vim  /etc/redis/redis.conf

# Busca y cambia:
# bind 127.0.0.1 ::1
bind 0.0.0.0
# protected-mode yes
protected-mode no

sudo service redis-server restart

# Confirma que Redis está escuchando en todas las interfaces
netstat -tulpn | grep 6379

# PowerShell
Test-NetConnection -ComputerName 172.28.178.219 -Port 6379

ping 172.28.178.219

#Git Bash
curl 172.28.178.219:6379

```
