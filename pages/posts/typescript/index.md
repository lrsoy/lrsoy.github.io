---
title: "TypeScript - Lrsoy"
display: ''
nav:
  - title: "HTML"
    path: "/posts/html"
  - title: "CSS"
    path: '/posts/css'
  - title: "JavaScript"
    path: '/posts/javascript'
  - title: "TypeScript"
    path: '/posts/typescript'
---
<SubNav :nav="frontmatter.nav" />

<ListPosts :address="'/posts'" type="typescript" />