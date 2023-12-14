@echo off
Title %~nx0


set /p videoOutput=Export video output name: 
echo.

@REM ========== script... ==========

del fileList.txt
for %%i in (*.mp4) do echo file %%i >> fileList.txt
mkdir export
ffmpeg -f concat -safe 0 -i fileList.txt -c copy export/%videoOutput%.mp4

echo finish %videoOutput%.mp4 converter
TIMEOUT -T 33

del fileList.txt

@REM ========== script. ==========

echo.
echo.
echo %~nx0
echo.
echo.
pause
