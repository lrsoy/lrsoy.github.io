---
title: 发布npm包的过程
date: 2022-11-10
type: npm
---

[[toc]]

## :sparkles: 关于

## :broom: 初始化
初始化一个最基本的项目，选用经常使用的工具即可，**yarn**，**pnpm**，**npm**等等
```js
npm init -y || yarn init // 直接完成，跳过配置
```

开发目录结构(工具类)  
[.gitignore自定义生成什么样的忽略文件](https://www.toptal.com/developers/gitignore)
```lua  
hello-npm
|-- dist/（ 存放打包后的文件,无需设置，通过打包生成 ）
|-- src/（ 源码 ）
|-- test/ ( 测试文件 )
|-- package.json
|-- build.config.ts ( unbuild打包配置文件 )
|-- .npmrc ( 配置npm源 )
|-- .gitignore ( 忽略文件配置 )
|-- README.md
|-- tsconfig.json (如果可以，推荐使用ts进行包的开发，如不需要ts则无需此配置文件)
```

## :open_file_folder: 配置文件
* 基本配置文件结构 **package.json**
* [package.json](http://nodejs.cn/learn/the-package-json-guide) 其他选项

```json
{
  "name": "npm-cs",  // 包的名称
  "version": "1.0.0",  // 包的版本
  "description": "",  // 报的描述
  "main": "index.js",  // 设置了应用程序的入口点
  "author": "lrsoy <邮箱>", // 包的作者
  "license": "ISC",  // 认证
  /* 关于 github 仓库 */
  "homepage": "",  // 软件包主页
  "repository": {  // 此属性指定了此程序包仓库所在的位置
    "type": "git", 
    "url": "git+https://github.com/lrsoy/parse-markdown-file.git"  
  },
  "bugs": "issues",  // 软件包的问题链接地址
  /* 关于包的入口文件 */
  "main": "./dist/index.mjs",  // 设置软件包的入口点
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
}

```

* 项目依赖
```json
{
  "devDependencies": { // 表示开发环境下的依赖管理，--save-dev 简写 -D
  },
  "dependencies": { // 表示生产环境下的依赖管理，--save 简写 -S
  }
}
```
* **files** 字段，开发完成的包，不希望将源码都一并提交到**npm** 上，可以在files字段里面设置，哪一些文件可以被发布到npm上，也可以通过配置 **.npmignore** 文件配置什么文件可以被上传，如果同时设置，**files**字段会优先于配置文件。
```json
{  
  "files": [
    "dist"
  ]
}
```
## :package: 打包
开发完成的工具包，需要进行打包，选择打包工具，rollup与webpack，使用[rollup](https://rollupjs.org/guide/en/)打包，如果足够熟悉rollup打包，可以通过自定义配置进行打包，不想配置特别多的打包配置，可以选择使用**unbuild** 打包。  
* [unbuild](https://github.com/unjs/unbuild)介绍
* 关于[typesVersions](https://www.typescriptlang.org/docs/handbook/declaration-files/publishing.html) 
* 安装
```
pnpm add unbuild -D
```
* 配置**unbuild**
```ts
// create src/index.ts
export const log = (...args) => { console.log(...args) }
```
```json
// package.json  unbuild在packages中的配置
{
  "type": "module",
  "exports": {
    ".": {
      "types": "./dist/index.d.ts",
      "require": "./dist/index.cjs",
      "import": "./dist/index.mjs"
    }
  },
  "main": "./dist/index.mjs",
  "module": "./dist/index.mjs",
  "types": "./dist/index.d.ts",
  "files": [
    "dist"
  ],
  "typesVersions": {
    "*": {
      "*": [
        "./dist/*",
        "./dist/index.d.ts"
      ]
    }
  }
}
```

* **unbuild** 的配置文件`build.config.ts`
```ts
import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries: [
    'src/index', // 打包入口文件
  ],
  declaration: true, // 生成 .d.ts 声明文件
  clean: true,
  rollup: {
    emitCJS: true,
  },
})

```

* 运行脚本的配置**scripts**  

```json
{
  "scripts": {
    "build": "unbuild", // 打包
    "dev": "unbuild --stub", // 暂时不解，正在寻找答案
    "lint": "eslint .",
    // prepublishOnly 如果不执行build 
    // 直接使用npm publish 该字段命令会优先与npm publish执行
    "prepublishOnly": "nr build",
    "release": "bumpp && npm publish",
    "start": "esno src/index.ts",
    "test": "vitest",
    "typecheck": "tsc --noEmit"
  },
}
```

## :safety_pin: 版本号

## :hammer_and_wrench: Degit工具 


## :writing_hand: 账号登录 

要想发布自己开发好的包，最重要的就是需要注册一个npm的账号。  
[npm](https://www.npmjs.com/signup)。  
[npm 指令](https://docs.npmjs.com/cli/v8/commands)

![vscode](https://img.shields.io/badge/vscode-v1.56.2-blue)  
![nodejs](https://img.shields.io/badge/nodejs-v16.17.0-blue)  
![npm](https://img.shields.io/badge/npm-v8.15.0-blue)  

1. 指定服务器
```js
npm adduser
```
2. 登录，输入指令 **npm login** 后提示一下信息，根据以下选项进行填写。
```js
// 使用的是你的 npm 的用户名
Username: 用户名 

 // 使用的是你的 npm 登录秘密
Password: 密码

// 填写邮箱信息，填写后 npm 会向你发送邮件，复制邮件的验证码，填到下面选项里
Email: (this IS public): 邮箱 

// 填写邮箱中接收到的 8位验证码 例如：60175662
Enter one-time password: 验证码
```
3. 退出当前登录账号
```js
npm logout
```
4. 查看当前登录者
```js
npm who am i
```
5. 将开发完成的包推送到npm服务器上
```js
npm publish
```
6. 模拟打包，生成本地的包，可以查看包里面的内容，完成后，本地会出现tgz的压缩包，就是要上传到npm上的内容
```js
npm pack
```
