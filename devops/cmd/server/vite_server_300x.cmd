@echo off

set PORT=3000

:CHECK_PORT
echo Checking if port %PORT% is available...

>nul 2>nul (
    netstat -an | find ":%PORT%" | find "LISTEN"
)

if %errorlevel% equ 0 (
    echo Port %PORT% is already in use. Trying the next port...
    set /A PORT+=1
    goto CHECK_PORT
)

echo Starting Vite development server on port %PORT%...
npx vite --port %PORT% --host --open --cors
