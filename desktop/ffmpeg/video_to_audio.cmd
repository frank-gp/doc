@echo off
Title %~nx0
set /p video=Enter video file:
@REM for %%i in (*.*) do echo %%i

ffmpeg -i %video% %video%.mp3
echo Convert video %video% to audio %video%.mp3

pause