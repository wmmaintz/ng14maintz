ECHO OFF
CLS
SET ProjName=ng14maintz
SET ProjDir=%cd%
ECHO Performing a remote commit on project [%ProjName%]
ECHO Using %ProjDir% as the current project directory.
CALL GIT status
ECHO.
PAUSE
CALL git remote origin https://github.com/wmmaintz/%ProjName%.git
ECHO.
ECHO.
ECHO Pushing %ProjName% contents to remote repository.
ECHO.
REM CALL git push origin master
ECHO.
PAUSE
CALL git branch -M main
CALL git push -u origin main
CALL git remote -v show -n %ProjName%
CALL git status
:EXIT_PROG
SET ProjDir=
SET ProjName=