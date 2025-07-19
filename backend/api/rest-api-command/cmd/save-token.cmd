@echo off
SETLOCAL ENABLEDELAYEDEXPANSION

:: Hacer login y capturar la respuesta en un archivo temporal
curl -s -X POST http://localhost:3000/api/auth/signin ^
  -H "Content-Type: application/json" ^
  -d "{ \"email\": \"demo@example.com\", \"password\": \"Demo@P45ssW0rd123\" }" > response.json

:: Extraer el token usando PowerShell para evitar errores de formato
FOR /F "delims=" %%A IN ('powershell -Command "$r=Get-Content response.json | ConvertFrom-Json; echo $r.token"') DO SET TOKEN=%%A

:: Verificar si se obtuvo un token válido
IF "%TOKEN%"=="" (
    echo ERROR: No se pudo obtener el token.
    DEL response.json
    EXIT /B 1
)

:: Guardar el token en variables de entorno del sistema (requiere Admin)
powershell -Command "Start-Process cmd -ArgumentList '/c setx TOKEN \"%TOKEN%\" /M' -Verb RunAs"

echo TOKEN guardado correctamente: 
echo.
echo %TOKEN%
echo.
echo.
echo Cierra y abre la terminal para que los cambios surtan efecto.

:: Borrar archivo temporal
DEL response.json

pause
