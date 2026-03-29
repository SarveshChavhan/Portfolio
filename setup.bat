@echo off
echo.
echo 🚀 Portfolio Website Setup Script
echo ==================================
echo.

REM Check if Node.js is installed
node --version >nul 2>&1
if errorlevel 1 (
    echo ❌ Node.js is not installed. Please install Node.js 16+ from https://nodejs.org
    exit /b 1
)

echo ✅ Node.js version:
node --version
echo ✅ npm version:
npm --version
echo.

REM Install dependencies
echo 📦 Installing dependencies...
npm install --legacy-peer-deps

if errorlevel 1 (
    echo ❌ Failed to install dependencies
    exit /b 1
)

echo ✅ Dependencies installed successfully!
echo.
echo 🎉 Setup complete!
echo.
echo Next steps:
echo 1. Edit src/data/portfolio.ts with your information
echo 2. Add your projects and update links
echo 3. Add your resume to public/resume.pdf
echo 4. Run: npm run dev
echo.
set /p startdev="Start development server now? (y/n): "
if /i "%startdev%"=="y" (
    npm run dev
)
