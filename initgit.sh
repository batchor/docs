rm -rf .git
git init
git add ./
git commit -m 'init'
git remote add origin git@github.com:batchor/docs
git push origin main -f
