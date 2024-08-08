
echo ""
echo ""
echo "======================================"
echo "git config --get remote.origin.url"
echo "======================================"
gbrowsevar=$(git config --get remote.origin.url)
printf "${gbrowsevar}"
start $gbrowsevar

echo ""
echo ""
echo "======================================"
echo "git status..."
echo "======================================"
git status

echo ""
echo ""
echo "======================================"
echo "git log --oneline..."
echo "======================================"
git log --oneline

echo ""
echo ""
echo "======================================"
echo "git config --get remote.origin.url"
echo "======================================"
git config --get remote.origin.url

echo ""
echo ""
echo ""
echo ""
read -t 30 -p "Press [Enter] key to exit..."