:load

cls

REM asks to load which file

set /p load="Load which file?"

REM if the variable of the name (number 1 file) does not exist we'll conclude that none of the variables exist thus REM error follows

if not exist %load%1.sgf goto error1

if exist %load%1.sgf goto proceed

:error1

color FC

echo something went wrong (file does not exist)

pause

goto start

:proceed

cls

REM loads the variable of the name (in the text file (1)) and puts it in a variable in the current session (namesave)

REM if you noticed the numbers this is again because we saved the file(s) like this 1 = name 2 = age 3 = gender

set /p namesave=<%load%1.sgf

REM does the same but for age

set /p agesave=<%load%2.sgf

REM same for the gender

set /p gendersave=<%load%3.sgf

echo Name: %namesave%

echo Age: %agesave%

echo Gender: %gendersave%

echo.

REM it clarifies which file is loaded

echo file loaded %load%.sgf

pause

goto start

