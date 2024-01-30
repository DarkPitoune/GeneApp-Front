if [ -f "pocketbase" ]; then
  ./pocketbase
  # Replace this line with the command you want to execute if the file exists
else
  echo "Install pocketbase first: https://pocketbase.io"
  # Replace this line with the command you want to execute if the file does not exist
fi