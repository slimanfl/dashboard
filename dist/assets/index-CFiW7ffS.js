import{bz as A,aC as g,aB as C}from"./index-5J0VCKHI.js";const x=A({baseUrl:"/api",fetchOptions:{headers:{Accept:"application/json"}},options:{refetch:!0,async beforeFetch({options:e}){const t=g("accessToken").value;return t&&(e.headers={...e.headers,Authorization:`Bearer ${t}`}),{options:e}},afterFetch(e){const{data:t,response:r}=e;let c=null;try{c=C(t)}catch(o){console.error(o)}return{data:c,response:r}}}}),L=/#/g,P=/&/g,O=/\//g,Q=/=/g,i=/\+/g,T=/%5e/gi,b=/%60/gi,w=/%7c/gi,S=/%20/gi;function U(e){return encodeURI(""+e).replace(w,"|")}function a(e){return U(typeof e=="string"?e:JSON.stringify(e)).replace(i,"%2B").replace(S,"+").replace(L,"%23").replace(P,"%26").replace(b,"`").replace(T,"^").replace(O,"%2F")}function s(e){return a(e).replace(Q,"%3D")}function p(e=""){try{return decodeURIComponent(""+e)}catch{return""+e}}function I(e){return p(e.replace(i," "))}function N(e){return p(e.replace(i," "))}function j(e=""){const t={};e[0]==="?"&&(e=e.slice(1));for(const r of e.split("&")){const c=r.match(/([^=]+)=?(.*)/)||[];if(c.length<2)continue;const o=I(c[1]);if(o==="__proto__"||o==="constructor")continue;const n=N(c[2]||"");t[o]===void 0?t[o]=n:Array.isArray(t[o])?t[o].push(n):t[o]=[t[o],n]}return t}function F(e,t){return(typeof t=="number"||typeof t=="boolean")&&(t=String(t)),t?Array.isArray(t)?t.map(r=>`${s(e)}=${a(r)}`).join("&"):`${s(e)}=${a(t)}`:s(e)}function B(e){return Object.keys(e).filter(t=>e[t]!==void 0).map(t=>F(t,e[t])).filter(Boolean).join("&")}const $=/^[\s\w\0+.-]{2,}:([/\\]{1,2})/,v=/^[\s\w\0+.-]{2,}:([/\\]{2})?/,D=/^([/\\]\s*){2,}[^/\\]/,G=/^\.?\//;function R(e,t={}){return typeof t=="boolean"&&(t={acceptRelative:t}),t.strict?$.test(e):v.test(e)||(t.acceptRelative?D.test(e):!1)}function H(e="",t){return e.endsWith("/")}function K(e="",t){return(H(e)?e.slice(0,-1):e)||"/"}function W(e="",t){return e.endsWith("/")?e:e+"/"}function Z(e,t){if(z(t)||R(e))return e;const r=K(t);return e.startsWith(r)?e:V(r,e)}function Y(e,t){const r=X(e),c={...j(r.search),...t};return r.search=B(c),k(r)}function z(e){return!e||e==="/"}function M(e){return e&&e!=="/"}function V(e,...t){let r=e||"";for(const c of t.filter(o=>M(o)))if(r){const o=c.replace(G,"");r=W(r)+o}else r=c;return r}const E=Symbol.for("ufo:protocolRelative");function X(e="",t){const r=e.match(/^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/i);if(r){const[,u,f=""]=r;return{protocol:u.toLowerCase(),pathname:f,href:u+f,auth:"",host:"",search:"",hash:""}}if(!R(e,{acceptRelative:!0}))return l(e);const[,c="",o,n=""]=e.replace(/\\/g,"/").match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/)||[],[,h="",_=""]=n.match(/([^#/?]*)(.*)?/)||[],{pathname:y,search:m,hash:d}=l(_.replace(/\/(?=[A-Za-z]:)/,""));return{protocol:c.toLowerCase(),auth:o?o.slice(0,Math.max(0,o.length-1)):"",host:h,pathname:y,search:m,hash:d,[E]:!c}}function l(e=""){const[t="",r="",c=""]=(e.match(/([^#?]*)(\?[^#]*)?(#.*)?/)||[]).splice(1);return{pathname:t,search:r,hash:c}}function k(e){const t=e.pathname||"",r=e.search?(e.search.startsWith("?")?"":"?")+e.search:"",c=e.hash||"",o=e.auth?e.auth+"@":"",n=e.host||"";return(e.protocol||e[E]?(e.protocol||"")+"//":"")+o+n+t+r+c}export{Z as a,B as s,x as u,Y as w};
