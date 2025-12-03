@echo off
set input_dir=input
set output_dir=compress-out

rem Crear carpeta de salida si no existe
if not exist "%output_dir%" (
    mkdir "%output_dir%"
)

rem Recorrer todos los archivos .mp4 en la carpeta de entrada
for %%f in ("%input_dir%\*.mp4") do (
    echo Procesando %%~nxf...
    ffmpeg -i "%%f" -c:v libx264 -crf 23 "%output_dir%\%%~nf_compressed.mp4"
)

pause
