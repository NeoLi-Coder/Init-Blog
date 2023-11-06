#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd src/.vuepress/dist

# 如果是发布到自定义域名
echo 'neocoder.top' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master
# git push -f git@github.com:NeoLi-Coder/NeoLi-Coder.github.io.git main:gh-pages
git push -f git@github.com:NeoLi-Coder/NeoLi-Coder.github.io.git main

# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages
# git push -f git@github.com:NeoLi-Coder/vuepress-hope-blog.git master:gh-pages

cd ..

# 删除生成的dist文件夹
rm -rf dist

cd -

echo 部署完成，按任意键关闭窗口
read -n 