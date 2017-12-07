git fetch --all
git checkout gh-pages
git merge origin/master
yarn build
cd build
mv * ..
cd ..
rm build
git add .
git commit -m "Publish new version"
git push
git checkout master
