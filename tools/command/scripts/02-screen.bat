@REM https://www.instructables.com/Saving-Loading-Variables-in-Batch-external-Files/

@echo off

cls

:start

REM this will 'cd' change directory to current path + 'Variables'

REM you can use any map name but make sure you change it here too then...

cd Variables

cls

color F0

echo a - save

echo z - load

echo e - delete

echo.

set /p choice=""

if %choice%==a goto save

if %choice%==A goto save

if %choice%==z goto load

if %choice%==Z goto load

if %choice%==e goto delete

if %choice%==E goto delete

goto start

