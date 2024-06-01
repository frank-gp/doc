@echo off
Title %~nx0
set /p video=Import video file: 
set /p videoOutput=Export video output name: 
echo.

@REM ========== script... ==========
ffmpeg -i %video% %videoOutput%.webm
@REM ========== script. ==========

echo.
echo.
echo %~nx0
echo.
echo.
pause
