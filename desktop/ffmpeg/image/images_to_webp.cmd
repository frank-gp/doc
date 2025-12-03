@echo off
for %%i in (*.jpg *.png) do (
    @REM Con compresion
    ffmpeg -i "%%i" -c:v libwebp "%%~ni.webp"
    @REM ffmpeg -i "%%i" "%%~ni.webp"
    
    @REM sin compresion
    @REM ffmpeg -i "%%i" -c:v libwebp -lossless 1 "%%~ni.webp"
)
