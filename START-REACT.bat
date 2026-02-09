@echo off
echo ========================================
echo    ARCADIUM REACT APP - QUICK START
echo ========================================
echo.

REM Check if node_modules exists
if not exist "node_modules\" (
    echo Installing dependencies...
    echo This may take a few minutes...
    echo.
    call npm install
    echo.
    echo ========================================
    echo Dependencies installed successfully!
    echo ========================================
    echo.
)

echo Starting React development server...
echo.
echo The app will open at http://localhost:3000
echo Press Ctrl+C to stop the server
echo.
echo ========================================

call npm start

