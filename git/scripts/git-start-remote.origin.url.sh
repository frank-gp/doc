
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
echo ""
echo ""
read -t 10 -p "Press [Enter] key to exit..."
