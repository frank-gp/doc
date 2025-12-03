@echo off
setlocal enabledelayedexpansion

if not exist output mkdir output

for %%i in (*.mp4) do (
    echo Processing: %%i
    ffmpeg -i "%%i" -af loudnorm "output\%%~ni.mp4"
)

echo All videos processed.
echo The Command Prompt will close in 5 seconds.
timeout /nobreak /t 15 >nul
