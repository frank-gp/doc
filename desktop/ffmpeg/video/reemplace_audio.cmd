@echo off
Title %~nx0
set /p video=Import video file: 
set /p audio=Import audio file: 
echo.

@REM ========== script... ==========
ffmpeg -i %video% -i %audio% -map 0:v:0 -map 1:a:0 -c:v copy output-reemplace.mp4

@REM ========== script. ==========

echo.
echo.
echo %~nx0
echo.
echo.
pause


