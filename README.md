## 咸鱼呀-知识库
> 知识库地址：[note.xianyuya.ltd](http://note.xianyuya.ltd/)
> 
> 博客地址：[blog.xianyuya.ltd](http://blog.xianyuya.ltd/)
----
本项目基于 [vuepress1.9.7](https://vuepress.vuejs.org/) 搭建

----

项目下载和安装
----

1.项目拉取
```bash
    git clone https://gitee.com/s-xianyu/vuepress-blog.git
    cd vuepress-blog
```
2.安装依赖
```bash
    yarn install
```
3.本地项目启动
```bash
    npm run dev
```
----
## 关于发布
项目使用[Travis CI ](https://travis-ci.com/) 持续集成发布，代码使用git提交到仓库后自动更新发布

Travis 脚本
```bash
language: node_js
node_js:
  - lts/*
install:
  - yarn install # npm ci
script:
  - yarn docs:build # npm run docs:build
deploy:
  provider: pages
  skip_cleanup: true
  local_dir: docs/.vuepress/dist
  github_token: $VUEPRESS_TOKEN # 在 GitHub 中生成，用于允许 Travis 向你的仓库推送代码。在 Travis 的项目设置页面进行配置，设置为 secure variable
  keep_history: true
  on:
    branch: master

```

