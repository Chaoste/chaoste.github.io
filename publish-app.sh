# Make sure to be up to date
git fetch --all

# Remove old build folders
rm -rf icons static build

yarn build

# Move build files to main directory
cd build
mv ./static ../static
mv ./icons ../icons
mv * ..
cd ..
rm -r build

# Create and push new commit
git add .
git commit -m "Publish new version"
git push
