@echo off
Title %~nx0
set /p video=Import video file (with full path, e.g., "D:\path\filename.mp4"): 

if not exist %video% (
    echo The specified video file does not exist.
    pause
    exit /b 1
)

echo.

@REM ========== Extracting filename of video ==========
for %%i in (%video%) do set "filename=%%~ni"

@REM ========== Input start and end times ==========
set /p start_time=Enter start time (format: hh:mm:ss): 
set /p end_time=Enter end time (format: hh:mm:ss): 

@REM ========== Check if the times are provided ==========
if "%start_time%"=="" (
    echo No start time was provided.
    pause
    exit /b 1
)

if "%end_time%"=="" (
    echo No end time was provided.
    pause
    exit /b 1
)

@REM ========== Cutting the video ==========
ffmpeg -i %video% -ss %start_time% -to %end_time% -c copy "%filename%_cut.mp4"

@REM ========== Check for errors ==========
if %errorlevel% neq 0 (
    echo An error occurred during the cutting process.
    pause
    exit /b 1
)

@REM ========== Success message ==========
echo.
echo Video cut successfully. Output file: %filename%_cut.mp4
pause
