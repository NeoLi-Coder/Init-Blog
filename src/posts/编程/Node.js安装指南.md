---
title: Node.js安装指南
date: 2023-11-01
update: 2023-11-06
icon: laptop-code
star: true
sticky: 100
category:
  - 前端
tag:
  - node.js
  - nvm
---
![](Node.js%E5%AE%89%E8%A3%85%E6%8C%87%E5%8D%97/image-1.png =400x400)
## node.js安装
  如果只是搭建博客使用，可以只安装node.js，推荐教程：
  [Node.js下载安装及环境配置教程【超详细】_nodejs下载_WHF__的博客-CSDN博客](https://blog.csdn.net/WHF__/article/details/129362462)
<!-- more -->
## nvm安装
  如果是开发使用，比如我需要开发vue，工作使用的nodejs版本是14.16.1，博客搭建使用的是18.18.0，这样就需要管理多版本nodejs，单个安装就不方便，我的方案是使用nvm，可以方便管理多个nodejs版本，推荐安装教程：
  [nvm安装和使用保姆级教程（详细）_nvm 教程-CSDN博客](https://blog.csdn.net/m0_61243965/article/details/129499921)
  
## nvm常用指令
  安装指定版本的Node.js
  ``` shell
  nvm install <version>
  ```
  使用指定版本的Node.js
  ``` shell
  nvm use <version>
  ```
  列出所有已安装的Node.js版本
  ``` shell 
  nvm ls
  ```
  显示当前正在使用的Node.js版本
  ``` shell
  nvm current
  ```
  为指定的版本设置一个别名
  ``` shell
  nvm alias <name> <version>
  ```
  卸载指定版本的Node.js
  ``` shell
  nvm uninstall <version>
  ```
