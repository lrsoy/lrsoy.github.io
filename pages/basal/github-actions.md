---
title: 使用github actions 自动化部署
date: 2022-12-04
---

[[toc]]

## 创建Actions - 新建工作流  

1. 进到github 仓库里面，通过仓库的tab页找到Actions选项
![](/public/images/github-actions.png)  

2. 新建一个工作流，在当前的tab页面上左侧，找到**New workflow**，创建一个工作流，正常情况下，如果没有创建过任何工作流的情况下，actions下面是空的  

3. 点击后，里面默认存在了一些已经创建好的工作流，找到需要的点击**configure**，如果使用默认提供的工作流，可以通过**set up a workflow yourself** 创建一个工作流，自己配置工作流中的内容
![](/public/images/github-actions-new-wf.png)

## set up a workflow yourself

```yaml
# This is a basic workflow to help you get started with Actions

name: CI  # 为你的工作流起一个名字

on: # 工作流在什么时候运行 (当代码推送或者拉取) 可进行配置
  push:
    branches: [ "master" ]
  pull_request:
    branches: [ "master" ]

  # Allows you to run this workflow manually from the Actions tab
  workflow_dispatch:


jobs: # 具体执行的任务

  # This workflow contains a single job called "build"
  build:

    runs-on: ubuntu-latest # 操作系统

    # Steps represent a sequence of tasks that will be executed as part of the job
    steps:
      # Checks-out your repository under $GITHUB_WORKSPACE, so your job can access it
      - uses: actions/checkout@v3


```