@echo off
echo ==========================================
echo   ARCADIUM - Starting Development Server
echo ==========================================
echo.
echo Opening Arcadium landing page...
echo Server will start on http://localhost:3000
echo.
echo Press Ctrl+C to stop the server
echo.
echo ==========================================
echo.

npx serve -s . -l 3000

pause


