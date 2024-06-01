# read -p "Press 2 [Enter] key to add amend no-edit..."
# read -p "Press 1 [Enter] key to add amend no-edit..."

echo ""
echo "==================="
echo "git add . && git commit --amend --no-edit && git push --force"
echo "==================="
git add . && git commit --amend --no-edit && git push --force

echo ""
echo "==================="
echo "git status..."
echo "==================="
git status

echo ""
echo "==================="
echo "git log --oneline..."
echo "==================="
git log --oneline

echo ""
# gbrowsevar=$(git config --get remote.origin.url)
# printf "${gbrowsevar}"
# start $gbrowsevar
echo ""

echo ""
git config --get remote.origin.url
echo ""
echo ""


read -t 5 -p "Press [Enter] key to exit..."