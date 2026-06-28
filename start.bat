@echo off
title Finance Risk Dashboard
cd /d "%~dp0"

echo Starting Finance Risk Dashboard...

:: Check node_modules
if not exist "node_modules" (
    echo Installing dependencies...
    set NODE_OPTIONS=--use-system-ca
    npm install
)

:: Kill anything on port 3000
for /f "tokens=5" %%a in ('netstat -aon ^| find ":3000" ^| find "LISTENING" 2^>nul') do (
    taskkill /F /PID %%a >nul 2>&1
)

:: Open browser after 3 second delay
start "" cmd /c "timeout /t 3 /nobreak >nul && start http://localhost:3000"

:: Start dev server
set NODE_OPTIONS=--use-system-ca
echo.
echo Dashboard running at http://localhost:3000
echo Press Ctrl+C to stop.
echo.
npm run dev
