@echo off

REM Server details
set "username=fgpooswu"
set "server=199.188.200.149"
set "port=21098"
set "destination_folder=/home/fgpooswu/w.fgp.one"

REM Local folder to copy (current folder)
set "local_folder=%~dp0"

REM Clean the destination folder on the server
ssh -p %port% %username%@%server% "rm -r %destination_folder%/*"

REM Copy all files except .cmd files from the local folder to the server
for %%I in ("%local_folder%\*") do (
    if "%%~xI" neq ".cmd" (
        scp -P %port% "%%I" %username%@%server%:%destination_folder%
    )
)

echo All files (except .cmd files) copied successfully!

REM Pause the script before exiting
pause


