---
title: Hexo博客的搭建
date: 2017-12-13 21:58:41
description: Hexo是一个基于Node.js的快速、简洁且高效的博客框架
cover_picture: https://hexo.io/logo.svg
categories:
- 风

tags:
- Hexo
toc: true 文章目录
author:
comments:
original:
permalink:
---
随着互联网浪潮的翻腾，国内外涌现出越来越多优秀的社交网站让用户分享信息更加便捷。然后，如果你是一个不甘寂寞的程序猿（媛），是否也想要搭建一个属于自己的个人网站，如果你曾经或者现在正有这样的想法，请跟随这篇文章发挥你的Geek精神，让你快速拥有自己的博客网站，写文章记录生活，享受这种从0到1的过程。


<!-- more -->
<The rest of contents | 余下全文>
### 什么是Hexo ?
Hexo是一款基于Node.js的静态博客框架，依赖少易于安装使用，可以方便的生成静态网页托管在GitHub和Heroku上，是搭建博客的首选框架。Hexo同时也是GitHub上的开源项目，参见：[hexojs/hexo](https://github.com/hexojs/hexo) 如果想要更加全面的了解Hexo，可以到其官网 [Hexo](https://hexo.io/zh-cn/index.html) 了解更多的细节，因为Hexo的创建者是台湾人，对中文的支持很友好，可以选择中文进行查看。

### 需要准备的环境
   - git托管仓库
     无论是 国内知名度较高的[gitee](https://gitee.com/)，还是全球最大的gay娱乐基地 [GitHub](https://github.com/)  都可以，本文以 GitHub 为例
   - nodejs 环境
     你需要在本机上安装nodejs运行环境，如果对node不熟悉或者想更全面的了解node，请移步至[node](http://nodejs.cn/)

### 安装Hexo
   Hexo就是我们的个人博客网站的框架.

   使用npm命令安装Hexo，输入：
   ```
   npm install -g hexo-cli

   ```

   这个安装时间较长耐心等待, 也可使用 cnpm或者yarn，安装完成后，初始化我们的博客，输入：

   ```
   hexo init blog
   ```
   为了检测我们的网站雏形，分别按顺序输入以下三条命令：

   ```
   hexo new my_site
   hexo generate
   hexo Server
   ```
   这些命令在后面作介绍，完成后，打开浏览器输入地址：[localhost:4000](https//:localhost:4000)可以看出我们写出第一篇博客

### Hexo 命令

现在来介绍常用的Hexo 命令

```
npm install hexo -g #安装Hexo
npm update hexo -g #升级
hexo init #初始化博客
```

命令简写
```
hexo n "我的博客" == hexo new "我的博客" #新建文章
hexo g == hexo generate #生成
hexo s == hexo server #启动服务预览
hexo d == hexo deploy #部署

hexo server #Hexo会监视文件变动并自动更新，无须重启服务器
hexo server -s #静态模式
hexo server -p 5000 #更改端口
hexo server -i 192.168.1.1 #自定义 IP
hexo clean #清除缓存，若是网页正常情况下可以忽略这条命令
```

刚刚的三个命令依次是新建一篇博客文章、生成网页、在本地预览的操作。

### 博客主题
在设置之前，需要解释一个概念，在blog根目录里的_config.yml文件称为站点配置文件，
进入根目录里的themes文件夹，里面也有个_config.yml文件，这个称为主题配置文件。

[hexo官方网站](https://hexo.io/themes/)为我们提供了180+个个性主题（截至2017年12月）可以根据个人喜好选择一款。
 首先将选择好的主题git clone 到 blog目录的 themes文件夹里（如果不会git命令也可直接解压到此目录）
 修改站点配置文件 的 theme: 你选择的主题名称
 重新生成预览
 ```
 hexo g
 hexo s
 ```

### 发布网站

已上只是在本地生成预览，接下来要做的就是就是推送网站，也就是发布网站，让我们的网站可以被更多的人访问。
发布网站有两种选择，一种是有自己的服务器的，一种是直接借助 github

##### 先说借助github发布
首先将我们的Hexo与GitHub关联起来，打开站点的配置文件_config.yml，翻到最后修改为：
```
deploy:
type: git
repo: 这里填入你之前在GitHub上创建仓库的完整路径，记得加上 .git //如git@github.com:zjweedsMine/Myblog.git
branch: master
```
保存站点配置文件。
其实就是给hexo d 这个命令做相应的配置，让hexo知道你要把blog部署在哪个位置，很显然，我们部署在我们GitHub的仓库里。最后安装Git部署插件，输入命令：
```
npm install hexo-deployer-git --save
```
hexo clean
hexo g
hexo d
这时，我们分别输入三条命令：

```
hexo clean
hexo g
hexo d
```
完成后，打开浏览器，在地址栏输入你的放置个人网站的仓库路径，即 http://xxxx.github.io

这种实际上的操作是将打包发布前的内容存在本机，发布后的内容传到git仓库


##### 再说有服务器的搭建方式
首先 远程服务器需要安装git及node
同样那幢 hexo
然后就非常简单了，将本地blog 目录下的文件推送到代码仓库
远程服务器 git  拉取代码
远程服务器 执行
```
hexo g
```
将生成好的public 目录发布到IIS上即可

这种方式比上一种的优势在于打包前的内容在仓库里，可以随时随地拉取最新的内容更新上传，对于我这种多种设备切换工作的非常有用
