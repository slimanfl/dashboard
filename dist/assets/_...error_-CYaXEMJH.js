import{_ as u}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{o as t,c as s,t as o,x as a,b as r,e as l,s as p,a6 as h,d as n,m as d}from"./index-ByUayJop.js";import{u as f,a as g,b as x}from"./misc-mask-light-D0O3zoyU.js";import{V as k}from"./VImg-B_XcUgJz.js";const y={class:"text-center"},b={key:0,class:"header-title font-weight-medium mb-2"},V={key:1,class:"text-h4 font-weight-medium mb-2"},v={key:2,class:"text-body-1 mb-6"},w={__name:"ErrorHeader",props:{statusCode:{type:[String,Number],required:!1},title:{type:String,required:!1},description:{type:String,required:!1}},setup(c){const e=c;return(i,m)=>(t(),s("div",y,[e.statusCode?(t(),s("h1",b,o(e.statusCode),1)):a("",!0),e.title?(t(),s("h4",V,o(e.title),1)):a("",!0),e.description?(t(),s("p",v,o(e.description),1)):a("",!0)]))}},C=u(w,[["__scopeId","data-v-67b803b6"]]),N="/assets/404-CMId8yPf.png",B={class:"misc-wrapper"},$={class:"misc-avatar w-100 text-center"},I=["src"],E={__name:"[...error]",setup(c){const e=f(x,g);return(i,m)=>{const _=C;return t(),s("div",B,[r(_,{"status-code":"404",title:"Page Not Found ⚠️",description:"We couldn't find the page you are looking for."}),r(h,{to:"/",class:"mb-11"},{default:l(()=>[p(" Back to Home ")]),_:1}),n("div",$,[r(k,{src:d(N),alt:"error 404","max-height":i.$vuetify.display.smAndDown?350:500,class:"mx-auto"},null,8,["src","max-height"])]),n("img",{class:"misc-footer-img d-none d-md-block",src:d(e),alt:"misc-footer-img",height:"320"},null,8,I)])}}};export{E as default};