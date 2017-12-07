git fetch --all
git checkout gh-pages
yarn build
cd build
mv * ..
cd ..
git add .
git commit -m "Publish new version"
git publish
git checkout master
