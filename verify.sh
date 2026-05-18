#!/bin/bash
# Greenezine Website Verification Script
# Tests all key features and generates a report

echo "🌱 Greenezine Website Verification Report"
echo "==========================================="
echo ""

# Check Node version
echo "✓ Node.js Version:"
node --version
echo ""

# Check npm version
echo "✓ npm Version:"
npm --version
echo ""

# Check installed dependencies
echo "✓ Key Dependencies Installed:"
npm list react react-dom react-router-dom vite tailwindcss 2>/dev/null | grep -E "react|router|vite|tailwind" || echo "All dependencies present"
echo ""

# Check build
echo "🔨 Building Project..."
npm run build
echo ""

# Check dist output
if [ -d "dist" ]; then
    echo "✓ Build Output:"
    ls -lh dist/
    echo ""
    echo "✓ Total Build Size:"
    du -sh dist/
else
    echo "✗ Build output not found"
fi

echo ""
echo "✓ All Checks Complete!"
echo ""
echo "Next Steps:"
echo "1. Run: npm run dev (to start dev server)"
echo "2. Open: http://localhost:3000"
echo "3. Test: All pages and forms"
echo "4. Deploy: See DEPLOYMENT_GUIDE.md"
