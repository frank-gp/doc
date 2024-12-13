@echo off
Title %~nx0

:: Obtener el nombre de la carpeta padre (directorio actual)
for %%i in ("%cd%") do set parentFolderName=%%~nxi

:: Generar automáticamente el nombre del archivo de salida basado en la carpeta
set videoOutput=%parentFolderName%.mp4
echo El archivo de salida será: %videoOutput%
echo.

:: Eliminar lista de archivos anterior si existe
if exist fileList.txt del fileList.txt

:: Borrar todo el contenido de la carpeta "export" si existe
if exist export (
    echo Borrando todo el contenido de la carpeta export...
    rd /s /q export
)

:: Crear la carpeta "export" nuevamente
mkdir export

:: Buscar y ordenar los archivos MP4 en orden descendente
(for /f "delims=" %%i in ('dir /s /b /o-n *.mp4') do echo file '%%i') >> fileList.txt

:: Usar FFmpeg para unir los videos listados en fileList.txt
ffmpeg -f concat -safe 0 -i fileList.txt -c copy export/%videoOutput%

:: Avisar al usuario que el proceso ha finalizado
echo Finished creating %videoOutput%
timeout /t 33

:: Eliminar lista de archivos generada
del fileList.txt

echo.
pause
