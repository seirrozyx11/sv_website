@echo off
echo ================================
echo  SIKADVOLTZ Website Setup
echo ================================
echo.

echo [1/3] Installing dependencies...
call npm install

if errorlevel 1 (
    echo.
    echo ERROR: Failed to install dependencies
    echo Please check your Node.js installation
    pause
    exit /b 1
)

echo.
echo [2/3] Installation complete!
echo.
echo [3/3] Starting development server...
echo.
echo Your website will open at http://localhost:3000
echo Press Ctrl+C to stop the server
echo.

call npm run dev

pause
