import{e as k,f as x,g as y,r as v,o as a,h as o,F as p,i as w,a as n,t as r,j as d,d as B,w as D,b,k as C,l as N}from"./app.f5b5750f.js";const V={key:0,class:"h-20 relative","pointer-events-none":""},F={"text-8em":"",op10:"",absolute:"","left--3rem":"","top--2rem":"","font-bold":""},Y={class:"no-underline"},L={class:"title text-lg leading-1.2em"},R={"align-middle":""},S={class:"time opacity-50 text-sm"},W={key:0,op80:""},j={key:1,op80:""},T=k({__name:"ListPosts",props:{address:{},type:{},posts:{}},setup(_){const m=_,u=x().getRoutes().filter(t=>t.path.startsWith(m.address)&&t.meta.frontmatter.date).sort((t,s)=>+new Date(s.meta.frontmatter.date)-+new Date(t.meta.frontmatter.date)).filter(t=>!t.path.endsWith(".html")&&t.meta.frontmatter.type===m.type).map(t=>({path:t.path,title:t.meta.frontmatter.title,date:t.meta.frontmatter.date,lang:t.meta.frontmatter.lang,duration:t.meta.frontmatter.duration,recording:t.meta.frontmatter.recording,upcoming:t.meta.frontmatter.upcoming})),i=y(()=>m.posts||u),l=t=>new Date(t).getFullYear(),f=(t,s)=>t&&s&&l(t)===l(s);return(t,s)=>{const h=v("router-link");return a(),o("ul",null,[(a(!0),o(p,null,w(i.value,(e,g)=>{var c;return a(),o(p,{key:e.path},[f(e.date,(c=i.value[g-1])==null?void 0:c.date)?d("",!0):(a(),o("div",V,[n("span",F,r(l(e.date)),1)])),B(h,{class:"item block font-normal mb-6 mt-2 no-underline",to:e.path},{default:D(()=>[n("li",Y,[n("div",L,[n("span",R,r(e.title),1)]),n("div",S,[b(r(C(N)(e.date))+" ",1),e.duration?(a(),o("span",W,"\xB7 "+r(e.duration),1)):d("",!0),e.platform?(a(),o("span",j,"\xB7 "+r(e.platform),1)):d("",!0)])])]),_:2},1032,["to"])],64)}),128))])}}});export{T as _};
