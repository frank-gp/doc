@echo off

REM Server details
set "username=fgpooswu"
set "server=199.188.200.149"
set "port=21098"
set "destination_folder=/home/fgpooswu"

REM Local folder to copy
set "local_folder=D:\Inbox\w.fgp.one"

REM Clean the destination folder on the server
ssh -p %port% %username%@%server% "rm -r %destination_folder%/*"

REM Copy the local folder to the server
scp -P %port% -r "%local_folder%" %username%@%server%:%destination_folder%

echo Folder copied successfully!

REM Pause the script before exiting
pause
