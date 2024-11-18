import{bv as ee,a4 as D,ab as te,ag as se,ac as oe,bj as ae,aP as re,a$ as ne,ah as ie,bw as le,ai as ce,ad as ue,aj as de,bh as pe,ae as me,aA as fe,a5 as B,b2 as he,bo as ye,bp as be,aR as ge,b4 as ve,ap as we,bx as Ve,al as ke,an as _e,Z as Te,am as Se,b as a,bt as Ce,_ as Y,aW as M,a7 as Z,p as qe,r as V,i as Pe,j as Ee,a0 as Re,o as P,c as O,d as v,m as i,f as j,e as c,s as T,t as _,x as N,E as x,F as z,h as $e,a6 as Le,a1 as Ae,a as Ie,ar as Be}from"./index-Bl39KaJY.js";import{a as je,b as De,_ as Fe}from"./VForm-DXI7AOnh.js";import{_ as Ue}from"./ThemeSwitcher-cseD_kYJ.js";import{u as H,a as Me,b as Oe}from"./misc-mask-light-IoNgg0Uk.js";import{a as Ne,w as xe}from"./index-B3bPRkoL.js";import{c as ze}from"./VAvatar-BmL7VrqC.js";import{V as He}from"./VMenu-Bkd-BkYz.js";import{V as Je,a as Ge,b as We}from"./VList-CttHFKmN.js";import{a as L,V as J}from"./VRow-DyeTRJBP.js";import{V as Ke}from"./VImg-BSkQo23z.js";import{V as Qe}from"./VCard-D-OnHNzL.js";import{V as G}from"./VCardText-qfqDA9bi.js";import"./VTextField-yH0IBZ_B.js";import"./VOverlay-B5GyYh6t.js";import"./VTooltip-D4AVQ9Z2.js";import"./VDivider-BNpVOQPa.js";/* empty css              */const Ye=e=>e==null,Ze=e=>Array.isArray(e)&&e.length===0,W=e=>Ye(e)||Ze(e)||e===!1?"This field is required":!!String(e).trim().length||"This field is required",Xe="/assets/auth-v2-login-illustration-bordered-dark-cDkPk8mY.png",et="/assets/auth-v2-login-illustration-bordered-light-CIHqcIVA.png",tt="/assets/auth-v2-login-illustration-dark-ClExSVqL.png",st="/assets/auth-v2-login-illustration-light-C4sKfRS1.png";class ot extends Error{constructor(s,u){super(s,u),this.name="FetchError",u!=null&&u.cause&&!this.cause&&(this.cause=u.cause)}}function at(e){var f,h,t,g,d;const s=((f=e.error)==null?void 0:f.message)||((h=e.error)==null?void 0:h.toString())||"",u=((t=e.request)==null?void 0:t.method)||((g=e.options)==null?void 0:g.method)||"GET",o=((d=e.request)==null?void 0:d.url)||String(e.request)||"/",m=`[${u}] ${JSON.stringify(o)}`,p=e.response?`${e.response.status} ${e.response.statusText}`:"<no response>",w=`${m}: ${p}${s?` ${s}`:""}`,r=new ot(w,e.error?{cause:e.error}:void 0);for(const l of["request","options","response"])Object.defineProperty(r,l,{get(){return e[l]}});for(const[l,k]of[["data","_data"],["status","status"],["statusCode","status"],["statusText","statusText"],["statusMessage","statusText"]])Object.defineProperty(r,l,{get(){return e.response&&e.response[k]}});return r}const rt=new Set(Object.freeze(["PATCH","POST","PUT","DELETE"]));function K(e="GET"){return rt.has(e.toUpperCase())}function nt(e){if(e===void 0)return!1;const s=typeof e;return s==="string"||s==="number"||s==="boolean"||s===null?!0:s!=="object"?!1:Array.isArray(e)?!0:e.buffer?!1:e.constructor&&e.constructor.name==="Object"||typeof e.toJSON=="function"}const it=new Set(["image/svg","application/xml","application/xhtml","application/html"]),lt=/^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;function ct(e=""){if(!e)return"json";const s=e.split(";").shift()||"";return lt.test(s)?"json":it.has(s)||s.startsWith("text/")?"text":"blob"}function ut(e,s,u=globalThis.Headers){const o={...s,...e};if(s!=null&&s.params&&(e!=null&&e.params)&&(o.params={...s==null?void 0:s.params,...e==null?void 0:e.params}),s!=null&&s.query&&(e!=null&&e.query)&&(o.query={...s==null?void 0:s.query,...e==null?void 0:e.query}),s!=null&&s.headers&&(e!=null&&e.headers)){o.headers=new u((s==null?void 0:s.headers)||{});for(const[m,p]of new u((e==null?void 0:e.headers)||{}))o.headers.set(m,p)}return o}const dt=new Set([408,409,425,429,500,502,503,504]),pt=new Set([101,204,205,304]);function X(e={}){const{fetch:s=globalThis.fetch,Headers:u=globalThis.Headers,AbortController:o=globalThis.AbortController}=e;async function m(r){const f=r.error&&r.error.name==="AbortError"&&!r.options.timeout||!1;if(r.options.retry!==!1&&!f){let t;typeof r.options.retry=="number"?t=r.options.retry:t=K(r.options.method)?0:1;const g=r.response&&r.response.status||500;if(t>0&&(Array.isArray(r.options.retryStatusCodes)?r.options.retryStatusCodes.includes(g):dt.has(g))){const d=r.options.retryDelay||0;return d>0&&await new Promise(l=>setTimeout(l,d)),p(r.request,{...r.options,retry:t-1,timeout:r.options.timeout})}}const h=at(r);throw Error.captureStackTrace&&Error.captureStackTrace(h,p),h}const p=async function(f,h={}){var d;const t={request:f,options:ut(h,e.defaults,u),response:void 0,error:void 0};if(t.options.method=(d=t.options.method)==null?void 0:d.toUpperCase(),t.options.onRequest&&await t.options.onRequest(t),typeof t.request=="string"&&(t.options.baseURL&&(t.request=Ne(t.request,t.options.baseURL)),(t.options.query||t.options.params)&&(t.request=xe(t.request,{...t.options.params,...t.options.query}))),t.options.body&&K(t.options.method)&&(nt(t.options.body)?(t.options.body=typeof t.options.body=="string"?t.options.body:JSON.stringify(t.options.body),t.options.headers=new u(t.options.headers||{}),t.options.headers.has("content-type")||t.options.headers.set("content-type","application/json"),t.options.headers.has("accept")||t.options.headers.set("accept","application/json")):("pipeTo"in t.options.body&&typeof t.options.body.pipeTo=="function"||typeof t.options.body.pipe=="function")&&("duplex"in t.options||(t.options.duplex="half"))),!t.options.signal&&t.options.timeout){const l=new o;setTimeout(()=>l.abort(),t.options.timeout),t.options.signal=l.signal}try{t.response=await s(t.request,t.options)}catch(l){return t.error=l,t.options.onRequestError&&await t.options.onRequestError(t),await m(t)}if(t.response.body&&!pt.has(t.response.status)&&t.options.method!=="HEAD"){const l=(t.options.parseResponse?"json":t.options.responseType)||ct(t.response.headers.get("content-type")||"");switch(l){case"json":{const k=await t.response.text(),S=t.options.parseResponse||ee;t.response._data=S(k);break}case"stream":{t.response._data=t.response.body;break}default:t.response._data=await t.response[l]()}}return t.options.onResponse&&await t.options.onResponse(t),!t.options.ignoreResponseError&&t.response.status>=400&&t.response.status<600?(t.options.onResponseError&&await t.options.onResponseError(t),await m(t)):t.response},w=async function(f,h){return(await p(f,h))._data};return w.raw=p,w.native=(...r)=>s(...r),w.create=(r={})=>X({...e,defaults:{...e.defaults,...r}}),w}const F=function(){if(typeof globalThis<"u")return globalThis;if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("unable to locate global object")}(),mt=F.fetch||(()=>Promise.reject(new Error("[ofetch] global.fetch is not supported!"))),ft=F.Headers,ht=F.AbortController,yt=X({fetch:mt,Headers:ft,AbortController:ht});var bt={BASE_URL:"/",DEV:!1,MODE:"production",PROD:!0,SSR:!1};const gt=yt.create({baseURL:bt.VITE_API_BASE_URL||"/api",async onRequest({options:e}){const s=D("accessToken").value;s&&(e.headers={...e.headers,Authorization:`Bearer ${s}`})}}),vt=ze("v-alert-title"),wt=["success","info","warning","error"],Vt=te({border:{type:[Boolean,String],validator:e=>typeof e=="boolean"||["top","end","bottom","start"].includes(e)},borderColor:String,closable:Boolean,closeIcon:{type:se,default:"$close"},closeLabel:{type:String,default:"$vuetify.close"},icon:{type:[Boolean,String,Function,Object],default:null},modelValue:{type:Boolean,default:!0},prominent:Boolean,title:String,text:String,type:{type:String,validator:e=>wt.includes(e)},...oe(),...ae(),...re(),...ne(),...ie(),...le(),...ce(),...ue(),...de(),...pe({variant:"flat"})},"VAlert"),Q=me()({name:"VAlert",props:Vt(),emits:{"click:close":e=>!0,"update:modelValue":e=>!0},setup(e,s){let{emit:u,slots:o}=s;const m=fe(e,"modelValue"),p=B(()=>{if(e.icon!==!1)return e.type?e.icon??`$${e.type}`:e.icon}),w=B(()=>({color:e.color??e.type,variant:e.variant})),{themeClasses:r}=he(e),{colorClasses:f,colorStyles:h,variantClasses:t}=ye(w),{densityClasses:g}=be(e),{dimensionStyles:d}=ge(e),{elevationClasses:l}=ve(e),{locationStyles:k}=we(e),{positionClasses:S}=Ve(e),{roundedClasses:E}=ke(e),{textColorClasses:A,textColorStyles:n}=_e(Te(e,"borderColor")),{t:b}=Se(),R=B(()=>({"aria-label":b(e.closeLabel),onClick(C){m.value=!1,u("click:close",C)}}));return()=>{const C=!!(o.prepend||p.value),$=!!(o.title||e.title),y=!!(o.close||e.closable);return m.value&&a(e.tag,{class:["v-alert",e.border&&{"v-alert--border":!!e.border,[`v-alert--border-${e.border===!0?"start":e.border}`]:!0},{"v-alert--prominent":e.prominent},r.value,f.value,g.value,l.value,S.value,E.value,t.value,e.class],style:[h.value,d.value,k.value,e.style],role:"alert"},{default:()=>{var I,U;return[Ce(!1,"v-alert"),e.border&&a("div",{key:"border",class:["v-alert__border",A.value],style:n.value},null),C&&a("div",{key:"prepend",class:"v-alert__prepend"},[o.prepend?a(M,{key:"prepend-defaults",disabled:!p.value,defaults:{VIcon:{density:e.density,icon:p.value,size:e.prominent?44:28}}},o.prepend):a(Y,{key:"prepend-icon",density:e.density,icon:p.value,size:e.prominent?44:28},null)]),a("div",{class:"v-alert__content"},[$&&a(vt,{key:"title"},{default:()=>{var q;return[((q=o.title)==null?void 0:q.call(o))??e.title]}}),((I=o.text)==null?void 0:I.call(o))??e.text,(U=o.default)==null?void 0:U.call(o)]),o.append&&a("div",{key:"append",class:"v-alert__append"},[o.append()]),y&&a("div",{key:"close",class:"v-alert__close"},[o.close?a(M,{key:"close-defaults",defaults:{VBtn:{icon:e.closeIcon,size:"x-small",variant:"text"}}},{default:()=>{var q;return[(q=o.close)==null?void 0:q.call(o,{props:R.value})]}}):a(Z,qe({key:"close-btn",icon:e.closeIcon,size:"x-small",variant:"text"},R.value),null)])]}})}}}),kt={class:"error-login"},_t={class:"auth-logo d-flex align-center gap-x-3"},Tt={class:"auth-title"},St={class:"login-header"},Ct={class:"position-relative bg-background w-100 me-0"},qt={class:"d-flex align-center justify-center w-100 h-100",style:{"padding-inline":"6.25rem"}},Pt=["src"],Et={class:"text-h4 mb-1"},Rt=v("span",{class:"text-capitalize"},"Heros Station",-1),$t={class:"mb-0"},Lt={class:"d-flex align-center flex-wrap justify-space-between my-6"},Qt={__name:"login",setup(e){const s=[{name:"light",icon:"tabler-sun-high"},{name:"dark",icon:"tabler-moon-stars"},{name:"system",icon:"tabler-device-desktop-analytics"}],u=H(st,tt,et,Xe,!0),o=H(Oe,Me),m=V(!1),p=Pe(),w=Ee(),r=V({username:void 0,password:void 0}),f=V(""),h=V(!1),t=V(!1),g=V(),d=V({username:"",password:""}),l=V(!1),k=async()=>{const n=await gt("https://booking-back-sand.vercel.app/auth/login",{method:"post",body:{username:d.value.username,password:d.value.password}});console.log(n),f.value="login successfully",h.value=!0,D("userData").value=n.data.user,D("accessToken").value=n.data.token,Be(()=>{w.replace(p.query.to?String(p.query.to):"/calender")})},S=()=>{var n;(n=g.value)==null||n.validate().then(({valid:b})=>{b&&k()})},{locale:E}=Re({useScope:"global"}),A=n=>{window.location.reload(),E.value=n.i18nLang};return(n,b)=>{const R=Ue,C=Ie("IconBtn"),$=Fe;return P(),O(z,null,[v("div",kt,[i(h)?(P(),j(Q,{key:0,density:"default",color:"success",variant:"tonal"},{default:c(()=>[T(_(i(f)),1)]),_:1})):N("",!0),i(t)?(P(),j(Q,{key:1,density:"default",color:"error",variant:"tonal"},{default:c(()=>[T(_(i(f)),1)]),_:1})):N("",!0)]),v("div",_t,[v("h1",Tt,_(i(x).app.title),1)]),v("div",St,[a(R,{themes:s}),a(C,null,{default:c(()=>[a(Y,{size:"24",icon:"tabler-language"}),a(He,{activator:"parent",offset:"12px"},{default:c(()=>[a(Je,{selected:[i(E)],color:"primary","min-width":"175px"},{default:c(()=>[(P(!0),O(z,null,$e(i(x).app.i18n.langConfig,y=>(P(),j(Ge,{key:y.i18nLang,value:y.i18nLang,onClick:I=>A(y)},{default:c(()=>[a(We,null,{default:c(()=>[T(_(y.label),1)]),_:2},1024)]),_:2},1032,["value","onClick"]))),128))]),_:1},8,["selected"])]),_:1})]),_:1})]),a(J,{"no-gutters":"",class:"auth-wrapper bg-surface"},{default:c(()=>[a(L,{md:"8",class:"d-none d-md-flex"},{default:c(()=>[v("div",Ct,[v("div",qt,[a(Ke,{"max-width":"613",src:i(u),class:"auth-illustration mt-16 mb-2"},null,8,["src"])]),v("img",{class:"auth-footer-mask",src:i(o),alt:"auth-footer-mask",height:"280",width:"100"},null,8,Pt)])]),_:1}),a(L,{cols:"12",md:"4",class:"auth-card-v2 d-flex align-center justify-center"},{default:c(()=>[a(Qe,{flat:"","max-width":500,class:"mt-12 mt-sm-0 pa-4"},{default:c(()=>[a(G,null,{default:c(()=>[v("h4",Et,[T(_(n.$t("Welcome to"))+" ",1),Rt,T("! 👋🏻 ")]),v("p",$t,_(n.$t("Please sign-in to your account")),1)]),_:1}),a(G,null,{default:c(()=>[a(i(je),{ref_key:"refVForm",ref:g,onSubmit:Le(S,["prevent"])},{default:c(()=>[a(J,null,{default:c(()=>[a(L,{cols:"12"},{default:c(()=>[a($,{modelValue:i(d).username,"onUpdate:modelValue":b[0]||(b[0]=y=>i(d).username=y),label:n.$t("UserName"),placeholder:n.$t("UserName"),type:"username",autofocus:"",rules:["requiredValidator"in n?n.requiredValidator:i(W)],"error-messages":i(r).username},null,8,["modelValue","label","placeholder","rules","error-messages"])]),_:1}),a(L,{cols:"12"},{default:c(()=>[a($,{modelValue:i(d).password,"onUpdate:modelValue":b[1]||(b[1]=y=>i(d).password=y),label:n.$t("Password"),placeholder:n.$t("Password"),rules:["requiredValidator"in n?n.requiredValidator:i(W),n.minLengthValidator],type:i(m)?"text":"password","append-inner-icon":i(m)?"tabler-eye-off":"tabler-eye","onClick:appendInner":b[2]||(b[2]=y=>m.value=!i(m))},null,8,["modelValue","label","placeholder","rules","type","append-inner-icon"]),v("div",Lt,[a(De,{modelValue:i(l),"onUpdate:modelValue":b[3]||(b[3]=y=>Ae(l)?l.value=y:null),label:n.$t("Remember me")},null,8,["modelValue","label"])]),a(Z,{block:"",type:"submit"},{default:c(()=>[T(_(n.$t("Login")),1)]),_:1})]),_:1})]),_:1})]),_:1},512)]),_:1})]),_:1})]),_:1})]),_:1})],64)}}};export{Qt as default};