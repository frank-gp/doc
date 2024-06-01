@REM https://youtu.be/rbl9dL3LpEQ?list=PLhTE7-JU1rhYK8uqs7YJwr22U9vJ5MyZV

@echo off
Title To loop through files
set /p folder_path=Enter the folder path:
cd %folder_path%
for %%i in (*.*) do echo %%i
pause