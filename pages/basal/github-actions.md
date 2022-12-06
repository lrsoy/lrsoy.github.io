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
      - uses: actions/checkout@v3 # 获取当前项目的源码
      - name: install node # 当前任务的名称
        # 使用某一个actions 可通过侧边 Marketplace 进行搜索，找到适合的 (node为演示)
        uses: actions/setup-node@v3.5.1 
        with: # 具体的命令( 安装这个actions时候需要的一些参数 )
          node-version: 16.x # 指定（node）版本
      - name: install deps
        run: npm install # 需要执行的指令
      - name: build
        run: npm run build
      
      # 直接部署到github pages操作
      - name: deploy
        uses: JamesIves/github-pages-deploy-action@v4.4.1 # 构建和部署 需要使用的actions
        with: 
          branch: gh-pages # 希望部署到哪一个分支上。默认gh-pages 可选
          folder: # 文件打包后的路径地址
          # 生成秘钥 需要使用 ${{  }} 进行包裹，可选默认使用的是 ${{ github.token }}
          token: ${{ secrets.ACCESS_TOKEN }} 

      # 部署到服务器的具体指令
      - name: copy dist file with scp
        uses: appleboy/scp-action@v0.0.1
        with: # 因为项目开源，需要通过变量的方式，引入你需要的
          host: ${{  }} # 服务器的ip
          username: ${{  }} # 用户名
          password: ${{  }} # 密码
          port: 22 # 端口
          source: ${{  }}# 要拷贝的目录(本地)
          target: ${{  }} # 目标目录


```

1. 设置github actions 中需要使用的变量，当前项目的**settings**选项
![](/public/images/github-actions-actions-env.png)

2. 如何创建个人访问令牌，因为在部署到github pages上的时候，需要使用GitHub 密钥（方式一）
    1. 设置找到个人设置
    2. 进入设置，找到侧边栏最底部，点击 **<>Developer settings**选项
    3. 进入后找到 **Personal access tokens** => **Fine-grained tokens**.
    ![](/public/images/github-actions-new-token.png)
    4. 点击 **Generate new token**
    ![](/public/images/github-actions-new-token-info.png)
3. [方式二](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token#creating-a-personal-access-token-classic)


