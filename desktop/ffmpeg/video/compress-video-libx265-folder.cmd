@echo off
:: Directorios de entrada y salida
set "input_dir=.\input"
set "output_dir=.\output"

:: Verifica si las carpetas existen
if not exist "%input_dir%" (
    echo La carpeta de entrada "%input_dir%" no existe.
    pause
    exit /b 1
)

if not exist "%output_dir%" (
    echo La carpeta de salida "%output_dir%" no existe. Creando...
    mkdir "%output_dir%"
)

:: Recorre todos los archivos MP4 en la carpeta de entrada
for %%f in ("%input_dir%\*.mp4") do (
    echo Procesando: "%%~f"
    
    :: Llama a un subproceso para manejar variables en el bucle
    call :convert "%%~f" "%output_dir%\%%~nf-converted.mp4"
)

echo Todos los videos han sido procesados.
pause
exit /b

:convert
:: Subproceso para manejar la conversión con espacios en las rutas
ffmpeg -i %1 -c:v libx265 -c:a copy %2
if %errorlevel% neq 0 (
    echo Error al convertir: %1
) else (
    echo Archivo convertido: %2
)
exit /b
