@echo off
Title %~nx0

@REM ========== variable ==========
set /p varible=Enter text: 
echo %varible% 
:: brake line 
echo. 
echo %varible%
@REM for %%i in (*.*) do echo %%i

@REM ========== The name of this file ==========
echo The name of this file is: %~n0%~x0
echo The name of this file is: %~nx0



@REM ========== comment ==========
Rem this is a comment 1
echo Hello world & :: coment 2
:: coment 3


pause
