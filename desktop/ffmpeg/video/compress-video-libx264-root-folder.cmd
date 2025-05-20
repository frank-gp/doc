@echo off
setlocal

REM Usa la carpeta actual como entrada y salida
set "input_dir=%cd%"

REM Recorrer todos los archivos .mp4 en la carpeta actual
for %%f in ("%input_dir%\*.mp4") do (
    echo Procesando %%~nxf...
    ffmpeg -i "%%f" -vcodec libx264 -crf 28 -preset slow -acodec aac -b:a 96k "%%~dpnf_compressed.mp4"
)

echo Proceso terminado.
pause
