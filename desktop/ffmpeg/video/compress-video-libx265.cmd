@REM ffmpeg -i input.mp4 -c:v libx265 output-libx265.mp4
@REM pause

@echo off
set /p video=Import video file:

if not exist "%video%" (
    echo The specified file does not exist.
    pause
    exit /b 1
)


ffmpeg -i "%video%" -c:v libx265 output-libx265.mp4

echo Video converted successfully. Output file: %output_file%
