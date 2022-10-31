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
CALL git push origin master
CALL git remote -v show -n %ProjName%
CALL git status
ECHO.
PAUSE
:EXIT_PROG
SET ProjDir=
SET ProjName=