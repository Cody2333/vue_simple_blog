# vue-static-blog

> simple blog built with vue2.0

## Introduction

## Features
- 用leancloud存文件，并且使用leancloud的rest api 做文件的读写
- 用github 提供的解析markdown to html 的api 解析
- .md文件额外头部：

```
// xx.md
//头部用yaml语法解析一些信息
---
title: my first post
date: 2016-07-02 22:08:32
tags:
---
...
```

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```
