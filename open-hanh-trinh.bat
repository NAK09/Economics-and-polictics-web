@echo off
setlocal
cd /d "%~dp0"

if not exist "%~dp0serve-hanh-trinh.py" (
  echo Cannot find serve-hanh-trinh.py beside this launcher.
  pause
  exit /b 1
)
where python >nul 2>nul
if errorlevel 1 (
  echo Python was not found. Install Python 3 and select "Add Python to PATH".
  pause
  exit /b 1
)

python "%~dp0serve-hanh-trinh.py"
if errorlevel 1 (
  echo The local map server stopped with an error.
  pause
)
endlocal
