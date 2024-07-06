@echo off
set /p video=Import video file:

if not exist "%video%" (
    echo The specified file does not exist.
    pause
    exit /b 1
)

set output_file=output_15fps.mp4

ffmpeg -i "%video%" -r 15 "%output_file%"

echo Video converted successfully. Output file: %output_file%
