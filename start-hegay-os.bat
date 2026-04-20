@echo off
echo ============================================
echo   HEGAY AI STUDIO — ONE CLICK START
echo ============================================

echo Starting PostgreSQL service...
net start PostgreSQL16 >nul 2>&1

echo Launching Next.js development server...
cd "C:\Users\HEGAY COMMUNICATIONS\hegay-ai-studio"
start cmd /k "npm run dev"

echo Opening browser...
start http://localhost:3000

echo ============================================
echo   SYSTEM ONLINE — CREATIVE OS IS LIVE
echo ============================================
