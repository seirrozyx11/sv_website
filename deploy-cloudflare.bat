@echo off
REM SIKADVOLTZ Website - Cloudflare Pages Deployment Script
REM Run this script to build and deploy to Cloudflare Pages

echo ========================================
echo  SIKADVOLTZ Website - Cloudflare Deploy
echo ========================================
echo.

echo [1/3] Installing dependencies...
call npm install
if errorlevel 1 (
    echo ERROR: npm install failed!
    pause
    exit /b 1
)
echo.

echo [2/3] Building production site...
call npm run build
if errorlevel 1 (
    echo ERROR: Build failed!
    pause
    exit /b 1
)
echo.

echo [3/3] Deploying to Cloudflare Pages...
echo.
echo Make sure you have run "wrangler login" first!
echo.
call wrangler pages deploy dist --project-name=sikadvoltz-website
if errorlevel 1 (
    echo ERROR: Deployment failed!
    echo.
    echo Did you forget to run "wrangler login"?
    pause
    exit /b 1
)

echo.
echo ========================================
echo  Deployment Complete!
echo ========================================
echo.
echo Your site is now live on Cloudflare Pages!
echo.
pause
