git checkout -b temp-heroku-master
rm .gitignore
echo /javascript > .gitignore
echo /ignore >> .gitignore
mv nodejs-server/* ./
cp ignore/credentials.js ./
git add .
git commit -m 'Heroku nodejs-server'
git push -f heroku temp-heroku-master:master
git checkout master
git branch -D temp-heroku-master
