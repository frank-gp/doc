```sh
# Ver todas las variables de entorno
set

# Ver el valor de una variable específica
echo %NOMBRE_VARIABLE%
echo %PATH%

# Usar systeminfo para información del sistema (incluye algunas variables)
systeminfo

# Ejecutar CMD como Administrador
# Si agregas /M, modificará la variable de entorno a nivel de sistema
setx PORT "3000" /M
setx PASSWORD /M "Password123"

setx TOKEN /M "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInVzZXJJZCI6MSwiZW1haWwiOiJkZXNhcnJvbGxvdHJhbnNwYXNlcnZpY0BnbWFpbC5jb20iLCJyb2xlcyI6WyJzdXBlcmFkbWluIl0sImlhdCI6MTc0MDEwMzgxNiwiZXhwIjoxNzQyNjk1ODE2fQ.dvXvOE94BT1AcoJgz7AC1rkoHJEyJGF_998h5O7ycgo"

# variable se aplique solo al usuario actual
setx PORT "3000"


# 📌 En PowerShell:
$env:API_URL="https://api.ejemplo.com"
$env:TOKEN="Bearer abc123"

echo $env:API_URL
echo $env:TOKEN
echo $env:TEMP

# 📌 En CMD:
set API_URL=https://api.ejemplo.com
set TOKEN=Bearer abc123

echo %TOKEN%
echo %TEMP%
```
