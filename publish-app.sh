git fetch --all
yarn build
cd build
mv * ..
cd ..
rm build
git add .
git commit -m "Publish new version"
git push
