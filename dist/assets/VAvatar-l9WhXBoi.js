import{aa as o,bn as y,bo as V,a6 as m,K as f,a4 as k,a5 as C,as as P,av as S,ax as h,a8 as z,am as x,an as A,ao as b,aB as B,aC as F,aE as I,aF as R,ai as T,b as u,_,aK as D}from"./index-RBUu93si.js";import{V as K}from"./VImg-CymrhgP3.js";function j(a){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"div",e=arguments.length>2?arguments[2]:void 0;return o()({name:e??y(V(a.replace(/__/g,"-"))),props:{tag:{type:String,default:l},...m()},setup(t,r){let{slots:s}=r;return()=>{var n;return f(t.tag,{class:[a,t.class],style:t.style},(n=s.default)==null?void 0:n.call(s))}}})}const E=k({start:Boolean,end:Boolean,icon:C,image:String,text:String,...m(),...P(),...S(),...h(),...z(),...x(),...A({variant:"flat"})},"VAvatar"),q=o()({name:"VAvatar",props:E(),setup(a,l){let{slots:e}=l;const{themeClasses:t}=b(a),{colorClasses:r,colorStyles:s,variantClasses:n}=B(a),{densityClasses:c}=F(a),{roundedClasses:v}=I(a),{sizeClasses:g,sizeStyles:d}=R(a);return T(()=>u(a.tag,{class:["v-avatar",{"v-avatar--start":a.start,"v-avatar--end":a.end},t.value,r.value,c.value,v.value,g.value,n.value,a.class],style:[s.value,d.value,a.style]},{default:()=>{var i;return[a.image?u(K,{key:"image",src:a.image,alt:"",cover:!0},null):a.icon?u(_,{key:"icon",icon:a.icon},null):((i=e.default)==null?void 0:i.call(e))??a.text,D(!1,"v-avatar")]}})),{}}});export{q as V,j as c};