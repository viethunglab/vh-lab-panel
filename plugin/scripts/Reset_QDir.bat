@echo off
setlocal EnableExtensions DisableDelayedExpansion
title Reset Q-Dir (giu nguyen Tabs va thu muc)
:: ----------------------------------------------------------------------------
:: Dong Q-Dir em (de Q-Dir luu Tab/thu muc dang mo vao Q-Dir.ini) roi mo lai.
:: Ho tro ca ban 32-bit (Q-Dir.exe) va 64-bit (Q-Dir_x64.exe).
:: Duoc goi tu nut "Reset Q-Dir" cua VH Lab Panel.
:: ----------------------------------------------------------------------------

set "QDIR="
set "PF86=%ProgramFiles(x86)%"

:: 1. Ghi nho duong dan Q-Dir dang chay de mo lai dung ban do
for /f "usebackq delims=" %%P in (`powershell -NoProfile -ExecutionPolicy Bypass -Command "$p = Get-Process -Name 'Q-Dir','Q-Dir_x64' -ErrorAction SilentlyContinue | Select-Object -First 1; if ($p) { $p.Path }"`) do set "QDIR=%%P"

:: 2. Gui lenh dong em (khong /F)
echo Dang dong Q-Dir va luu trang thai cac thu muc dang mo...
taskkill /IM Q-Dir.exe >nul 2>&1
taskkill /IM Q-Dir_x64.exe >nul 2>&1

:: 3. Cho Q-Dir tu thoat, toi da 10 giay
set /a WAIT=0
:waitloop
call :isRunning
if "%RUN%"=="0" goto closed
if %WAIT% geq 10 goto force
set /a WAIT+=1
timeout /t 1 /nobreak >nul
goto waitloop

:force
echo Q-Dir khong phan hoi, dang cuong che tat...
taskkill /F /T /IM Q-Dir.exe >nul 2>&1
taskkill /F /T /IM Q-Dir_x64.exe >nul 2>&1
timeout /t 1 /nobreak >nul

:closed
:: 4. Mo lai Q-Dir
if not defined QDIR call :findExe
if not defined QDIR (
    echo Khong tim thay Q-Dir. Hay mo Q-Dir mot lan roi bam Reset lai.
    timeout /t 5 >nul
    exit /b 1
)
echo Dang khoi dong lai Q-Dir...
start "" "%QDIR%"
exit /b 0

:: ---------------------------------------------------------------------------
:isRunning
set "RUN=0"
tasklist /NH /FI "IMAGENAME eq Q-Dir.exe" 2>nul | find /I "Q-Dir.exe" >nul && set "RUN=1"
tasklist /NH /FI "IMAGENAME eq Q-Dir_x64.exe" 2>nul | find /I "Q-Dir_x64.exe" >nul && set "RUN=1"
exit /b 0

:findExe
call :tryDir "%ProgramFiles%\Q-Dir"
call :tryDir "%PF86%\Q-Dir"
call :tryDir "%LOCALAPPDATA%\Q-Dir"
call :tryDir "%APPDATA%\Q-Dir"
exit /b 0

:tryDir
if defined QDIR exit /b 0
if exist "%~1\Q-Dir_x64.exe" set "QDIR=%~1\Q-Dir_x64.exe" & exit /b 0
if exist "%~1\Q-Dir.exe" set "QDIR=%~1\Q-Dir.exe"
exit /b 0
