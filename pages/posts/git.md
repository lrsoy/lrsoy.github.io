---
title: Git 版本控制的使用
date: 2023-05-03
---

[[toc]] 

 ## 登录账号

登录账号

```js
git config --global user.email "lying_jk_bp@163.com" // 邮箱
git config --global user.name "lrsoy" // 用户名
```

查看用户信息

```js
git config --list // 查看全部配置信息
git config user.name // 查看用户名
git config user.email // 查看用户邮箱
```



## Git常用指令

*  初始化仓库`git init` 

* 将当前修改过或者是新增文件添加到本地暂存区`git add `

  * 扩展指令

  ```js
  1. git add a.md // 添加指定文件
  2. git add -A // 添加所有文件
  3. git add . // 添加所有文件
  ```

* 将文件提交到本地版本库中`git commit - m "提交信息"`

  * 扩展指令

  ```js
  1. git commit -a -m '提交信息' 
  // 意思是已经提交到仓库里面文件现在被更改了，不需要重新add 通过这个指令直接提交
  ```

* 查看文件提交状态`git status`

* 删除版本库中的文件

```js
1. git rm a.php // 删除版本库中的文件并且删除本地文件夹内的文件
2. git rm --cached a.php // 只删除版本库中的文件，不删除本地文件
```

* 操作日志

```js
1. git log // 查看日志
2. git log -p -1 // 查看1几次提交日志并且
3. git log --name-only // 查看已修改的文件
4. git log --name-status // 显示新增、修改、删除的文件清单
5. git log --oneline // 精简的信息，比如提交信息等。
```



## 配置Git快捷指令

* 在用户目录下面创建`.bashrc` 文件，此文件作用(针对`git bash`) ，每次访问git bash都会先读取里面的内容，因此可将运行的代码放在里面

* 配置`alias`设置快捷方式

  例如：`alias la="ls -a"`，可以替代`ls -a`指令

