---
title: "html - Lrsoy"
display: ''
nav:
  - title: "HTML"
    path: "/html"
  - title: "CSS"
    path: '/css'
  - title: "JavaScript"
    path: /js
  - title: "TypeScript"
    path: 'ts'
---
<SubNav :nav="frontmatter.nav" />

<ListPosts :address="'/basal'" type="html" />