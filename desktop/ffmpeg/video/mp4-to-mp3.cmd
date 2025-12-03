@echo off
Title %~nx0
set /p video=Import video file: 
echo.

@REM ========== script... ==========
ffmpeg -i %video% output1.mp3
@REM ========== script. ==========

echo.
echo.
echo %~nx0
echo.
echo.
@REM pause


