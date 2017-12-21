del build.log
git pull origin master > build.log 2>&1
hexo generate >>build.log 2>&1
hexo g --deploy >>build.log 2>&1