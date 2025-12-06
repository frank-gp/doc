@echo off

start notepad

set /a count=5

:countdown
cls
echo Countdown: %count%
timeout /t 1 > nul
set /a count-=1
if %count% gtr 0 goto countdown

echo Countdown complete!
