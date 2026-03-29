#!/bin/bash
# Installation and Setup Script for Portfolio Website

echo "🚀 Portfolio Website Setup Script"
echo "=================================="

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 16+ from https://nodejs.org"
    exit 1
fi

echo "✅ Node.js version: $(node --version)"
echo "✅ npm version: $(npm --version)"

# Install dependencies
echo ""
echo "📦 Installing dependencies..."
npm install --legacy-peer-deps

if [ $? -eq 0 ]; then
    echo "✅ Dependencies installed successfully!"
else
    echo "❌ Failed to install dependencies"
    exit 1
fi

# Ask user if they want to start dev server
echo ""
echo "🎉 Setup complete!"
echo ""
echo "Next steps:"
echo "1. Edit src/data/portfolio.ts with your information"
echo "2. Add your projects and update links"
echo "3. Add your resume to public/resume.pdf"
echo "4. Run: npm run dev"
echo ""
read -p "Start development server now? (y/n) " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
    npm run dev
fi
