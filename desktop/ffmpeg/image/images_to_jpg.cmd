@echo off
for %%i in (*.png *.webp) do (
    ffmpeg -i "%%i" "%%~ni.jpg"
)
