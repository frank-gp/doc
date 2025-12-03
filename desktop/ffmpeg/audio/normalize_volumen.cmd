@echo off
Title %~nx0
set /p audio=Import audio file: 
@REM set /p audioOutput=Export audio output name: 
echo.

@REM ========== script... ==========
ffmpeg -i %audio% -af "volume=3dB" output-%audio%.mp3

@REM ========== script. ==========

echo.
echo.
echo %~nx0
echo.
echo.
pause


