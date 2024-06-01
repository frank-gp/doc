@echo off
Title %~nx0

set /p audioOutput=Export audio output name: 
echo.

@REM ========== script... ==========

del audioList.txt
for %%i in (*.mp3) do echo file '%%i' >> audioList.txt
ffmpeg -f concat -safe 0 -i audioList.txt -c copy %audioOutput%.mp3

echo finish %audioOutput%.mp3 converter
TIMEOUT -T 33

del audioList.txt

@REM ========== script. ==========

echo.
echo.
echo %~nx0
echo.
echo.
pause
