import{d as x,e as y,f as v,r as w,o as a,g as o,F as _,h as B,i as d,a as n,t as r,j as i,b as D,w as b,k as C,l as N}from"./app.2cc5dbc1.js";const V={key:0,class:"h-20 relative"},F={"text-8em":"",op10:"",absolute:"","left--3rem":"","top--2rem":"","font-bold":""},Y={class:"no-underline"},L={class:"title text-lg leading-1.2em"},R={"align-middle":""},S={class:"time opacity-50 text-sm"},W={key:0,op80:""},j={key:1,op80:""},T=x({__name:"ListPosts",props:{address:null,type:null,posts:null},setup(u){const l=u,f=y().getRoutes().filter(t=>t.path.startsWith(l.address)&&t.meta.frontmatter.date).sort((t,s)=>+new Date(s.meta.frontmatter.date)-+new Date(t.meta.frontmatter.date)).filter(t=>!t.path.endsWith(".html")&&t.meta.frontmatter.type===l.type).map(t=>({path:t.path,title:t.meta.frontmatter.title,date:t.meta.frontmatter.date,lang:t.meta.frontmatter.lang,duration:t.meta.frontmatter.duration,recording:t.meta.frontmatter.recording,upcoming:t.meta.frontmatter.upcoming})),c=v(()=>l.posts||f),m=t=>new Date(t).getFullYear(),h=(t,s)=>t&&s&&m(t)===m(s);return(t,s)=>{const g=w("router-link");return a(),o("ul",null,[(a(!0),o(_,null,B(d(c),(e,k)=>{var p;return a(),o(_,{key:e.path},[h(e.date,(p=d(c)[k-1])==null?void 0:p.date)?i("",!0):(a(),o("div",V,[n("span",F,r(m(e.date)),1)])),D(g,{class:"item block font-normal mb-6 mt-2 no-underline",to:e.path},{default:b(()=>[n("li",Y,[n("div",L,[n("span",R,r(e.title),1)]),n("div",S,[C(r(d(N)(e.date))+" ",1),e.duration?(a(),o("span",W,"\xB7 "+r(e.duration),1)):i("",!0),e.platform?(a(),o("span",j,"\xB7 "+r(e.platform),1)):i("",!0)])])]),_:2},1032,["to"])],64)}),128))])}}});export{T as _};
