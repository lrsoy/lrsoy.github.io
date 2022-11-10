---
title: "Blog - Lrsoy"
display: ''
# date: 2021-05-19T16:00:00.000+00:00
# subtitle: Demostractions for projects I am working on from Tweets
# description: Demostractions for projects I am working on from Tweets
notes: 
  Basal: 
    - name: 'HTML'
      link: "/html"
      desc: "Html笔记"
      icon: 'i-ri-html5-fill'
    - name: 'CSS'
      link: "/"
      desc: "css笔记"
      icon: 'i-ion-logo-css3'
    - name: 'JavaScript'
      link: "/"
      desc: "javascript笔记"
      icon: 'i-teenyicons-javascript-solid'
    - name: 'TypeScript'
      link: "/"
      desc: "TypeScript笔记"
      icon: 'i-akar-icons-typescript-fill'
  Frame:
    - name: 'Vue2'
      link: '/'
      desc: 'Vue.js 2.x笔记'
      icon: "i-ri-vuejs-fill"
    - name: 'Vue3'
      link: '/'
      desc: 'Vue.js 3.x笔记'
      icon: "i-ri-vuejs-fill"
    - name: 'React'
      link: '/'
      desc: 'React 笔记'
      icon: "i-akar-icons-react-fill"
  Frontend Tooling:
    - name: 'Vite'
      link: '/'
      desc: 'Vite笔记'
      icon: "i-simple-icons-vite"
    - name: 'webpack'
      link: '/'
      desc: 'webpack笔记'
      icon: "i-file-icons-webpack"
    - name: 'rollup'
      link: '/'
      desc: 'rollup笔记'
      icon: "i-simple-icons-rollupdotjs"
  Package Management Tool:
    - name: 'npm'
      link: '/npm'
      desc: 'npm笔记'
      icon: "i-teenyicons-npm-outline"
    - name: 'yarn'
      link: '/'
      desc: 'yarn笔记'
      icon: "i-simple-icons-yarn"
    - name: 'pnpm'
      link: '/'
      desc: 'pnpm笔记'
      icon: "i-file-icons-pnpm"
  Git: 
    - name: 'git'
      link: '/'
      desc: 'git笔记'
      icon: "i-teenyicons-git-solid"
    - name: 'github'
      link: '/'
      desc: 'github笔记'
      icon: "i-bi-github"
    - name: 'github pages'
      link: '/'
      desc: 'github pages 笔记'
      icon: "i-bi-github"
    - name: 'github actions'
      link: '/'
      desc: 'github actions 笔记'
      icon: "i-simple-icons-githubactions"
  Server: 
    - name: 'Node'
      link: '/'
      desc: 'Node 笔记'
      icon: "i-mdi-nodejs"
  Test: 
    - name: 'Vitest'
      link: '/'
      desc: 'Vitest笔记'
      icon: "i-simple-icons-vitest"
  Other: 
    - name: '算法'
      link: '/'
      desc: 'LeetCode 算法'
      icon: "i-simple-icons-leetcode"
---

<SubNav />

<ListNotes :notes="frontmatter.notes"/>