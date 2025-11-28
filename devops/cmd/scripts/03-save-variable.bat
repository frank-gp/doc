:save

cls

REM here we'll ask questions which will be stored in an external file (the values)

REM we will store 3 values, the name, age and the gender of the user

set /p name="What's your full name?"

cls

set /p age ="How old are you?"

cls

set /p gender="Male or Female?"

cls

REM we will ask the user to save the file as.., this name is needed for loading later

set /p savefile="Save file as?"

goto saveconfirm

:saveconfirm

cls

color F2

REM this exports the name to a file with the same name as the "%savefile%"1.sgf

REM the 1 is because we have 3 values we will store them all in seperate files

REM this is easier to load, the .sgf is just the extension i use (savegamefile)

REM you can use .dll, .txt, etc...

(

echo %name%

)>%savefile%1.sgf

REM exports the age to a file

(

echo %age%

)>%savefile%2.sgf

exports the gender to a file

(

echo %gender%

)>%savefile%3.sgf

echo Successfully saved as %savefile%.sgf

pause

goto start

