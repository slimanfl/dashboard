import{$ as f,a0 as d,a as m,o as c,f as l,e as n,b as s,_,m as V,c as b,F as g,h as y,s as x,t as v}from"./index-RBUu93si.js";import{V as C}from"./VMenu-Dtw8bp9Q.js";import{V as I,a as h,b as L}from"./VList-Bni-muBM.js";const u=(a,t)=>{var r;const e=f();return e?e.proxy&&"$can"in e.proxy?(r=e.proxy)==null?void 0:r.$can(a,t):!0:!1},w=a=>{const t=a.children.some(e=>u(e.action,e.subject));return a.action&&a.subject?u(a.action,a.subject)&&t:t},N={__name:"I18n",props:{languages:{type:Array,required:!0},location:{type:null,required:!1,default:"bottom end"}},setup(a){const t=a,{locale:e}=d({useScope:"global"});return(i,r)=>{const p=m("IconBtn");return c(),l(p,null,{default:n(()=>[s(_,{size:"24",icon:"tabler-language"}),s(C,{activator:"parent",location:t.location,offset:"12px"},{default:n(()=>[s(I,{selected:[V(e)],color:"primary","min-width":"175px"},{default:n(()=>[(c(!0),b(g,null,y(t.languages,o=>(c(),l(h,{key:o.i18nLang,value:o.i18nLang,onClick:k=>e.value=o.i18nLang},{default:n(()=>[s(L,null,{default:n(()=>[x(v(o.label),1)]),_:2},1024)]),_:2},1032,["value","onClick"]))),128))]),_:1},8,["selected"])]),_:1},8,["location"])]),_:1})}}};export{N as _,u as a,w as c};
