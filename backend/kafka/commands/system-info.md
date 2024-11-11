```sh
# Muestra información del sistema operativo.
cat /etc/os-release

# Muestra la información del kernel y del sistema.
uname -a

# Muestra todas las variables de entorno.
printenv

# Muestra las direcciones IP asignadas.
ip addr
# Muestra las rutas de red.
ip route

# Para contenedores Debian o Ubuntu
dpkg -l

# Para contenedores basados en Alpine
apk info -vv | less


# Muestra el uso de CPU y memoria en tiempo real.
top       
# Muestra el uso de memoria.
free -m   

# Versión de Java, si está instalado.
java -version
# Versión de Node.js.
node -v
# Versión de Python.
python --version

# lista de las versiones de las APIs compatibles en el broker Kafka
/usr/bin/kafka-broker-api-versions --bootstrap-server localhost:9092

find / -name "*kafka*"
