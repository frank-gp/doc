```sh
etramztr_tutorial_db_name
etramztr_tutorial_db_user
etramztr_tutorial_db_user_password

# Conectar a MariaDB/MySQL usando el túnel local (puerto 5522)
mysql -h 127.0.0.1 -P 5522 -u etramztr_tutorial_db_user -p etramztr_tutorial_db_name

select version();
```

# CPanel: CREAR TÚNEL SSH A LA BASE DE DATOS REMOTA

```sh
# Conexión básica al servidor remoto (sin ejecutar comandos, solo túnel)
# -L [PUERTO_LOCAL]:[HOST_REMOTO]:[PUERTO_REMOTO] (-N Túnel, -L Port forwarding local)
ssh -N -L 5522:127.0.0.1:3306 etramztr@server226.web-hosting.com -p 21098

# Conexión en modo verbose para depuración
# Muestra detalles de la conexión y posibles errores
ssh -v -N -L 5522:127.0.0.1:3306 etramztr@server226.web-hosting.com -p 21098

# Conexión en segundo plano (background)
# -f envía el proceso al background automáticamente
ssh -f -N -L 5522:127.0.0.1:3306 etramztr@server226.web-hosting.com -p 21098
# Alternativa: usar & para enviar a background
ssh -N -L 5522:127.0.0.1:3306 etramztr@server226.web-hosting.com -p 21098 &


# Verificar que el puerto local 5522 está escuchando
netstat -ano | findstr 5522

# Ver qué procesos SSH están corriendo en el sistema
ps -ef | grep ssh

# Detener un proceso SSH por su PID
kill 1980

# Forzar detención de varios procesos SSH
kill -9 1980 2092 2108
kill -9 2278 2394


```

# CPanel DB to AWS EC2

```sh

# ======================================================
# 1️⃣ CREAR SSH KEY EN EL EC2 (NO uses la .pem de AWS)
# ======================================================
# Genera una nueva clave SSH tipo ED25519 para la conexión al servidor Namecheap
ssh-keygen -t ed25519 -f ~/.ssh/namecheap_db -C "ec2-namecheap-db"
# -t ed25519  : tipo de clave segura y moderna
# -f         : archivo donde se guardará la clave privada (~/.ssh/namecheap_db)
# -C         : comentario para identificar la clave

# ======================================================
# 2️⃣ COPIAR LA KEY AL SERVIDOR DE NAMEcheap
# ======================================================
# Esto permite autenticación sin contraseña usando la key recién creada
ssh-copy-id -i ~/.ssh/namecheap_db.pub -p 21098 etramztr@server226.web-hosting.com
# -i         : especifica la clave pública a copiar
# -p         : puerto SSH personalizado (21098)

# ======================================================
# 3️⃣ INSTALAR AUTOSSH (PERMITE RECONEXIÓN AUTOMÁTICA)
# ======================================================
# Autossh reinicia automáticamente el túnel si se cae
sudo apt update
sudo apt install autossh -y

# ======================================================
# 4️⃣ CREAR EL SERVICIO SYSTEMD DEFINITIVO
# ======================================================
# Crea un servicio que levanta el túnel automáticamente al iniciar el EC2
sudo vim /etc/systemd/system/namecheap-db-tunnel.service


```

# namecheap-db-tunnel.service

```sh
[Unit]
Description=SSH Tunnel to Namecheap DB
After=network.target

[Service]
User=ubuntu
# Ajusta la ruta de tu clave privada
ExecStart=/usr/bin/autossh -M 0 -N -L 5522:127.0.0.1:3306 etramztr@server226.web-hosting.com -p 21098 -i /home/ubuntu/.ssh/namecheap_db
Restart=always
RestartSec=10

[Install]
WantedBy=multi-user.target
```

# Comandos finales para activar el servicio

```sh
# Recargar los servicios systemd
sudo systemctl daemon-reload

# Habilitar el túnel al iniciar el servidor
sudo systemctl enable namecheap-db-tunnel

# Iniciar el túnel ahora mismo
sudo systemctl start namecheap-db-tunnel

# Verificar estado
sudo systemctl status namecheap-db-tunnel
```

# Install MySQL

```sh
# MySQL (no es servidor, solo cliente)
sudo apt install mysql-client-core-8.0 -y
# MariaDB (no es servidor, solo cliente)
sudo apt install mariadb-client-core -y
# Conectar a la DB
mysql -h 127.0.0.1 -P 5522 -u etramztr_tutorial_db_user -p etramztr_tutorial_db_name

curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt install -y nodejs
node -v

npm init -y
npm install mysql2
```

# test-connection.js

```js
const mysql = require("mysql2");

// Configuración de conexión (usando el túnel en el puerto local 5522)
const connection = mysql.createConnection({
  host: "127.0.0.1",
  port: 5522,
  user: "etramztr_tutorial_db_user",
  password: "etramztr_tutorial_db_user_password",
  database: "etramztr_tutorial_db_name",
});

// Conectar y probar
connection.connect((err) => {
  if (err) {
    return console.error("Error conectando a la DB:", err.message);
  }
  console.log("Conectado a la base de datos!");

  // Ejecutar una consulta de prueba
  connection.query("SELECT version() AS version", (err, results) => {
    if (err) throw err;
    console.log("Versión del servidor:", results[0].version);

    // Cerrar la conexión
    connection.end();
  });
});
```
