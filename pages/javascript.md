---
title: "JavaScript - Lrsoy"
display: ''
nav:
  - title: "HTML"
    path: "/html"
  - title: "CSS"
    path: '/css'
  - title: "JavaScript"
    path: /javascript
  - title: "TypeScript"
    path: '/typescript'
---
<SubNav :nav="frontmatter.nav" />

<ListPosts :address="'/basal'" type="javascript" />