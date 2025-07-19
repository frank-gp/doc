@echo off
SETLOCAL ENABLEDELAYEDEXPANSION

:: Solicitar email y password al usuario
set /p EMAIL=Ingrese su email: 
set /p PASSWORD=Ingrese su password: 

:: Hacer login y capturar la respuesta en un archivo temporal
curl -s -X POST http://localhost:3000/api/auth/signin ^
  -H "Content-Type: application/json" ^
  -d "{ \"email\": \"!EMAIL!\", \"password\": \"!PASSWORD!\" }" > response.json

:: Extraer el token usando PowerShell
FOR /F "delims=" %%A IN ('powershell -Command "$r=Get-Content response.json | ConvertFrom-Json; if ($r.PSObject.Properties.Name -contains 'token') { echo $r.token }"') DO SET TOKEN=%%A

:: Verificar si se obtuvo un token válido
IF "%TOKEN%"=="" (
    echo ERROR: No se pudo obtener el token.
    DEL response.json
    EXIT /B 1
)

:: Guardar el token como variable de entorno (requiere permisos de administrador)
powershell -Command "Start-Process cmd -ArgumentList '/c setx TOKEN \"%TOKEN%\" /M' -Verb RunAs"

echo TOKEN guardado correctamente: 
echo %TOKEN%
echo.
echo Cierra y abre la terminal para que los cambios surtan efecto.

:: Borrar archivo temporal
DEL response.json

pause
