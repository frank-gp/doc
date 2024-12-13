@echo off
Title %~nx0

:: Solicitar el nombre del archivo de salida
set /p videoOutput=Export video output name: 
echo.

:: Eliminar lista de archivos anterior si existe
if exist fileList.txt del fileList.txt

:: Buscar todos los archivos .mp4 en el directorio y subdirectorios
for /r %%i in (*.mp4) do (
    echo file '%%i' >> fileList.txt
)

:: Crear carpeta "export" si no existe
if not exist export mkdir export

:: Usar ffmpeg para unir los videos listados en fileList.txt
ffmpeg -f concat -safe 0 -i fileList.txt -c copy export\%videoOutput%.mp4

:: Avisar al usuario que el proceso ha finalizado
echo Finished creating %videoOutput%.mp4
timeout /t 33

:: Eliminar lista de archivos generada
del fileList.txt

echo.
pause
