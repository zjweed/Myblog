---
title: ElementUI 入坑
date: 2017-12-15 21:08:41
description: Element UI 是一套采用 Vue 2.0 作为基础框架实现的组件库.它面向企业级的后台应用，能够帮助你快速地搭建网站，极大地减少研发的人力与时间成本.简单易读的文档，配合常用实例，快速上手
cover_picture: http://element-cn.eleme.io/static/web.61b1f33.png

categories:
- 雅

tags:
- ElementUI

toc: true 文章目录
author:
comments:
original:
permalink:
---
Element UI 是一套采用 Vue 2.0 作为基础框架实现的组件库.它面向企业级的后台应用，能够帮助你快速地搭建网站，极大地减少研发的人力与时间成本.简单易读的文档，配合常用实例，快速上手
 <!-- more -->
<The rest of contents | 余下全文>

### Element UI 是什么

- Element UI 是一套采用 Vue 2.0 作为基础框架实现的组件库
- 它面向企业级的后台应用，能够帮助你快速地搭建网站，极大地减少研发的人力与时间成本
- 仓库地址： https://github.com/ElemeFE/element
- 文档地址： http://element.eleme.io/#/
- 社区im：https://gitter.im/ElemeFE/element
---
### Element UI 优势

- 简单易读的文档，配合常用实例，快速上手
- 活跃的社区，依靠社区有强大的技术支持，不怕没有帮手，就怕你不会提问
- 提供Axure Components，让产品经理的设计稿和开发的页面保持一致
---

###  Element UI 安装

>这么厉害怎么引入使用呢？

CDN 引入
```
<!-- 引入样式 -->
<link rel="stylesheet" href="https://unpkg.com/element-ui/lib/theme-default/index.css">
<!-- 引入组件库 -->
<script src="https://unpkg.com/element-ui/lib/index.js"></script>
```
unpkg 的cdn 极不稳定！！！！！！
建议使用（目前鸟巢的使用方案）
```
<script src="https://cdn.bootcss.com/element-ui/1.4.6/index.js"></script>
<link href="https://cdn.bootcss.com/element-ui/2.0.0-alpha.1/theme-chalk/index.css" rel="stylesheet">
```
---
  *当然 最稳妥的是自己打包*
- 去[github](https://github.com/ElemeFE/element) clone 代码
- npm install / yarn
  - [如何安装 npm](http://www.runoob.com/nodejs/nodejs-install-setup.html)
  -  [yarn 是什么](https://yarnpkg.com/zh-Hans/)（普及下前段知识）
- npm run build
- npm run dist
- 项目根目录下生成的lib文件夹

---

### Element UI 组件说明

看文档
*文档太长不想看？划重点！！！*

#### 重点组件
- [form 表单](http://element.eleme.io/#/zh-CN/component/form)
- [table](http://element.eleme.io/#/zh-CN/component/table)
- [pagination](http://element.eleme.io/#/zh-CN/component/pagination)
- [upload](http://element.eleme.io/#/zh-CN/component/upload)
- [dialog](http://element.eleme.io/#/zh-CN/component/dialog)

---

### Element UI  那些坑

#### No.1 消失的穿梭框
- 不乖的组件[transfer](http://element.eleme.io/#/zh-CN/component/transfer)
- 不废话，看例子
- 淘气的表现： 左栏选项重新加载后，右栏已选中的项全部消失
- 淘气的原因：DataSource 变更导致组件重绘
- 解决方案
*自己重写组件*
---
#### No.2 神秘的数据类型
- 不乖的组件[time-picker](http://element.eleme.io/#/zh-CN/component/time-picker)
- 淘气的表现
  - el-time-select 中 绑定的mode是字符串型
  - el-time-picker 中 绑定的mode是日期型
- 解决方案
  - 瞪大眼睛看文档
---
#### No.3 厚此薄彼的文件列表
- 不乖的组件[upload](http://element.eleme.io/#/zh-CN/component/upload)
- 淘气的表现
  - 绑定的数据列表和外显的文件列表不一致
- 淘气的原因：不知道
- 解决方案
  - 每次上传完成自己做同步
---
#### No.4 乐此不疲的分页
- 不乖的组件[pagination](http://element.eleme.io/#/zh-CN/component/pagination)
- 淘气的表现
  - 每次点击第二页后会发两个异步，一个第二页的，一个第一页的，即每次第二页刷新后重回第一页
- 解决方案：
  - 调异步前不要重置 总数量
  - ajax 改为同步
---
#### No.5 被遗忘的单向数据流
- 以下一段话来自官方文档
在一些情况下，我们可能会需要对一个 prop 进行“双向绑定”...这很方便，但也会导致问...当光看子组件的代码时，你完全不知道它何时悄悄地改变了父组件的状态...从 2.3.0 起 .sync 修饰符，只是作为一个编译时的语法糖存在。它会被扩展为一个自动更新父组件属性的 v-on 监听器。
---

### Element UI的扩展

####  插件
Element UI 已经帮我们完成了一些基础组件，但是结合业务场景，一些我们使用的到的组件仍然没有实现，需要我们自己扩展
- [可拖动的列表](https://github.com/SortableJS/Vue.Draggable)
- [表格和分页组合](https://github.com/njleonzhang/vue-data-tables)
- [Table的行列合并](https://github.com/scq000/vue-element-enhanced-table)
- 资源自动填充组件
- Table 内联编辑
.......
---

#### 扩展阅读

[与iview 的对比](https://zhuanlan.zhihu.com/p/27479767)
[Element UI源码阅读](http://www.jianshu.com/c/c71f9c127c71)

#### 题外话 怎么和vue-cli 结合使用
 安装 vue-cli
```
$ npm install -g vue-cli
```
创建项目
```
$ vue-cli init webpack myDemo
```
 *记得取消ESLint*
进入项目文件夹
```
  $ cd mydemo
```
安装node,Element UI  
```
  $ npm install
  $ npm i element-ui -S
```
更改配置文件：根目录 package.json的  dependencies 增加版本
  ```
   "dependencies": {
    "element-ui": "^1.4.7",
    "vue": "^2.1.6"
  },
  ```
src目录的 main.js 引入
  ```
  import ElementUI from 'element-ui'
  import 'element-ui/lib/theme-default/index.css'
  Vue.use(ElementUI)
  ```
 运行
```
$npm run dev
```
---

### 安利一波的其他组件

- [mintui](http://mint-ui.github.io/docs/#/zh-cn2)
- [vue-amap](https://elemefe.github.io/vue-amap/)
- [v-charts](https://elemefe.github.io/v-charts/#/)
---
