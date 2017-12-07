git fetch --all
rm -rf icons static

yarn build
cd build
mv ./static ../static
mv ./icons ../icons
mv -r * ..
cd ..
rm build
git add .
git commit -m "Publish new version"
git push
