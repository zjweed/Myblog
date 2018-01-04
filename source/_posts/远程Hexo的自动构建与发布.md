---
title: 远程Hexo的自动构建与发布
date: 2017-12-20 22:58:41
description: 基于Hexo自动构建与发布流程
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
我将hexo步在远程服务器上后，每次修改过主题需要重新构建发布，新增博文后也需要上传到对应的文件目录下才能生效，这对
样每次更新博文都非常痛苦，远没有wordPress 这种动态博客方便。那么能不能把Hexo这一发布的过程自动化呢？当然可以！

 <!-- more -->
<The rest of contents | 余下全文>

# 思路
 其实所谓的自动化就是把人工操作的一步一步交给机器来做嘛
 - 监听git每次提交
 - 当有提交时触发服务器脚本
 - 脚本拉取代码，重新构建发布

# 脚本怎么写

  删除上次构建日志
  拉取代码并保存日志
  构建并保存日志
  ```
  del build.log
  git pull origin master >build.log 2>&1
  hexo g >>build.log 2>&1

  ```
  将以上代码保存在blog目录下并命名为 build.bat

# 新增node Api触发脚本
blog目录下新增 webhook.js 文件并输入一下内容
```
var express =require('express');
var child_process=require('child_process');
var router = express.Router();
router.post("/",function(req,res,next){
     child_process.execFile("build.bat",[],{
       env:{
         PATH:process.env.PATH,
         HOME:process.env.HOME,
       }

       },function(err,stderr,stdout){
         console.log(err,stderr,stdout);
         })
  });


```

blog目录下新增 express.js 文件,并输入一下内容
```
var express =require('express');
var app=express();
var webhook = require("./webhook")
app.get('/',function(req,res){
  res.send("OK");
  })
app.use("/webpack",webhook);
var server=app.listen(9001,function(){
  var host=server.address().address;
  var port = server.address().port;
  console.log("listening at http://%s:%s",host,port);
  });

```

执行
```
node express.js
```
这一步做的是  post请求ip:port/webhook 时，触发脚本，你也可以使用其他语言实现

### github 配置 post通知
git 项目的  settings 里面 找到  webhook  配置刚刚的 ip:port/webhook  地址
