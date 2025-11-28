```sh
# Cambiar la contraseña del usuario actual si es necesario
passwd

# =========================================
# 🔹 Configuración inicial de SSH en macOS
# =========================================

# 1️⃣ Crear la carpeta .ssh si no existe y aplicar permisos seguros
mkdir -p ~/.ssh
chmod 700 ~/.ssh

# 2️⃣ Editar (o crear) el archivo authorized_keys para agregar claves públicas
vim ~/.ssh/authorized_keys

# 3️⃣ Activar el servicio SSH en macOS
sudo systemsetup -setremotelogin on

# 4️⃣ Generar una nueva clave SSH en el cliente (Windows/macOS)
ssh-keygen -t ed25519 -C "login" -Z aes256-gcm@openssh.com
cat ~/.ssh/id_ed25519.pub

# 5️⃣ Conectarse al Mac mini vía SSH usando usuario y dirección IP
ssh m1@62.210.166.227


# =========================================
# 🔹 Información del sistema (equivalente a phpinfo())
# =========================================

# 1️⃣ Información general del hardware
system_profiler
system_profiler SPHardwareDataType

# 2️⃣ Software Version
sw_vers

# 3️⃣ Detalles de CPU y memoria
sysctl -a | grep machdep.cpu
sysctl hw.memsize

# 4️⃣ Información de discos y espacio disponible
df -h

# 5️⃣ Resumen completo rápido (hardware, software y red)
system_profiler SPHardwareDataType SPSoftwareDataType SPNetworkDataType

# =========================================
# 🔹 Limpiar configuración SSH en Mac mini (para tutorial desde cero)
# =========================================

# 1️⃣ Borrar todas las claves autorizadas (elimina acceso por SSH)
rm -f ~/.ssh/authorized_keys
vim ~/.ssh/authorized_keys

# 2️⃣ Opcional: eliminar completamente la carpeta .ssh (se perderán todas las claves)
rm -rf ~/.ssh
```
