@echo off
set /p video=Import video file (please include quotes if the path contains spaces):

if not exist %video% (
    echo The specified file does not exist.
    pause
    exit /b 1
)

set /p gif_output=Enter the name for the output GIF file (without extension):

ffmpeg -i %video% -vf "fps=10" -loop 0 "%gif_output%.gif"

if %errorlevel% neq 0 (
    echo An error occurred during the conversion.
    pause
    exit /b 1
)

echo Video converted successfully to GIF. Output file: %gif_output%.gif
pause
