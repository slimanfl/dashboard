import{a4 as se,a5 as D,a6 as ne,a7 as Re,a8 as ie,a9 as Ce,aa as oe,ab as Te,ac as Ee,ad as Ae,ae as E,af as b,ag as me,ah as Be,w as Me,ai as xe,b as t,_ as A,aj as Fe,ak as Ne,al as Oe,am as Ve,an as _e,ao as ze,ap as Le,Z as q,p as ce,aq as pe,ar as Ue,as as De,at as Ge,au as Ke,av as Je,aw as je,ax as qe,ay as Ye,az as He,aA as We,aB as Xe,aC as Qe,aD as Ze,aE as $e,aF as ea,aG as aa,aH as ta,aI as la,H as O,aJ as sa,aK as na,aL as Y,I as U,F as H,a as ia,o as F,f as te,e as h,s as L,t as B,m as N,c as ee,h as oa,x as he,d as M,v as ca,aM as ra,aN as ua,r as da}from"./index-RBUu93si.js";import{P as va}from"./vue3-perfect-scrollbar.esm-BlmolHIr.js";import{V as fa}from"./VBadge-CAjux6QJ.js";import{V as ma}from"./VMenu-Dtw8bp9Q.js";import{V as pa,a as ha,b as ga}from"./VCard-C6bORH3x.js";import{V as ge,a as ya}from"./index-BRQMnYfv.js";import{V as le}from"./VAvatar-l9WhXBoi.js";import{V as ka}from"./VTooltip-BLJL4ttX.js";import{V as ae}from"./VDivider-pj1VJZty.js";import{V as ba,a as ye,b as Sa}from"./VList-Bni-muBM.js";import{V as Ca}from"./VSpacer-DK0kFLDr.js";import{V as Aa}from"./VCardText-V2G3jsbi.js";import"./VImg-CymrhgP3.js";import"./VOverlay-CXf42A2u.js";import"./forwardRefs-DWGaNmQL.js";/* empty css              */const xa=e=>e?e.split(" ").map(s=>s.charAt(0).toUpperCase()).join(""):"";function ke(e){const s=Math.abs(e);return Math.sign(e)*(s/((1/.501-2)*(1-s)+1))}function be(e){let{selectedElement:f,containerSize:s,contentSize:c,isRtl:r,currentScrollOffset:m,isHorizontal:i}=e;const o=i?f.clientWidth:f.clientHeight,a=i?f.offsetLeft:f.offsetTop,v=r&&i?c-a-o:a,p=s+m,l=o+v,C=o*.4;return v<=m?m=Math.max(v-C,0):p<=l&&(m=Math.min(m-(p-l-C),c-s)),m}function Va(e){let{selectedElement:f,containerSize:s,contentSize:c,isRtl:r,isHorizontal:m}=e;const i=m?f.clientWidth:f.clientHeight,o=m?f.offsetLeft:f.offsetTop,a=r&&m?c-o-i/2-s/2:o+i/2-s/2;return Math.min(c-s,Math.max(0,a))}const _a=Symbol.for("vuetify:v-slide-group"),Pe=se({centerActive:Boolean,direction:{type:String,default:"horizontal"},symbol:{type:null,default:_a},nextIcon:{type:D,default:"$next"},prevIcon:{type:D,default:"$prev"},showArrows:{type:[Boolean,String],validator:e=>typeof e=="boolean"||["always","desktop","mobile"].includes(e)},...ne(),...Re(),...ie(),...Ce({selectedClass:"v-slide-group-item--active"})},"VSlideGroup"),Se=oe()({name:"VSlideGroup",props:Pe(),emits:{"update:modelValue":e=>!0},setup(e,f){let{slots:s}=f;const{isRtl:c}=Te(),{displayClasses:r,mobile:m}=Ee(e),i=Ae(e,e.symbol),o=E(!1),a=E(0),v=E(0),p=E(0),l=b(()=>e.direction==="horizontal"),{resizeRef:C,contentRect:_}=me(),{resizeRef:g,contentRect:P}=me(),u=b(()=>i.selected.value.length?i.items.value.findIndex(n=>n.id===i.selected.value[0]):-1),x=b(()=>i.selected.value.length?i.items.value.findIndex(n=>n.id===i.selected.value[i.selected.value.length-1]):-1);if(Be){let n=-1;Me(()=>[i.selected.value,_.value,P.value,l.value],()=>{cancelAnimationFrame(n),n=requestAnimationFrame(()=>{if(_.value&&P.value){const d=l.value?"width":"height";v.value=_.value[d],p.value=P.value[d],o.value=v.value+1<p.value}if(u.value>=0&&g.value){const d=g.value.children[x.value];u.value===0||!o.value?a.value=0:e.centerActive?a.value=Va({selectedElement:d,containerSize:v.value,contentSize:p.value,isRtl:c.value,isHorizontal:l.value}):o.value&&(a.value=be({selectedElement:d,containerSize:v.value,contentSize:p.value,isRtl:c.value,currentScrollOffset:a.value,isHorizontal:l.value}))}})})}const w=E(!1);let V=0,G=0;function K(n){const d=l.value?"clientX":"clientY";G=(c.value&&l.value?-1:1)*a.value,V=n.touches[0][d],w.value=!0}function W(n){if(!o.value)return;const d=l.value?"clientX":"clientY",S=c.value&&l.value?-1:1;a.value=S*(G+V-n.touches[0][d])}function y(n){const d=p.value-v.value;a.value<0||!o.value?a.value=0:a.value>=d&&(a.value=d),w.value=!1}function z(){C.value&&(C.value[l.value?"scrollLeft":"scrollTop"]=0)}const I=E(!1);function X(n){if(I.value=!0,!(!o.value||!g.value)){for(const d of n.composedPath())for(const S of g.value.children)if(S===d){a.value=be({selectedElement:S,containerSize:v.value,contentSize:p.value,isRtl:c.value,currentScrollOffset:a.value,isHorizontal:l.value});return}}}function J(n){I.value=!1}function j(n){var d;!I.value&&!(n.relatedTarget&&((d=g.value)!=null&&d.contains(n.relatedTarget)))&&k()}function Q(n){g.value&&(l.value?n.key==="ArrowRight"?k(c.value?"prev":"next"):n.key==="ArrowLeft"&&k(c.value?"next":"prev"):n.key==="ArrowDown"?k("next"):n.key==="ArrowUp"&&k("prev"),n.key==="Home"?k("first"):n.key==="End"&&k("last"))}function k(n){var d,S,de,ve,fe;if(g.value)if(!n)(d=Fe(g.value)[0])==null||d.focus();else if(n==="next"){const T=(S=g.value.querySelector(":focus"))==null?void 0:S.nextElementSibling;T?T.focus():k("first")}else if(n==="prev"){const T=(de=g.value.querySelector(":focus"))==null?void 0:de.previousElementSibling;T?T.focus():k("last")}else n==="first"?(ve=g.value.firstElementChild)==null||ve.focus():n==="last"&&((fe=g.value.lastElementChild)==null||fe.focus())}function R(n){const d=a.value+(n==="prev"?-1:1)*v.value;a.value=Ne(d,0,p.value-v.value)}const Ie=b(()=>{let n=a.value>p.value-v.value?-(p.value-v.value)+ke(p.value-v.value-a.value):-a.value;a.value<=0&&(n=ke(-a.value));const d=c.value&&l.value?-1:1;return{transform:`translate${l.value?"X":"Y"}(${d*n}px)`,transition:w.value?"none":"",willChange:w.value?"transform":""}}),Z=b(()=>({next:i.next,prev:i.prev,select:i.select,isSelected:i.isSelected})),$=b(()=>{switch(e.showArrows){case"always":return!0;case"desktop":return!m.value;case!0:return o.value||Math.abs(a.value)>0;case"mobile":return m.value||o.value||Math.abs(a.value)>0;default:return!m.value&&(o.value||Math.abs(a.value)>0)}}),re=b(()=>Math.abs(a.value)>0),ue=b(()=>p.value>Math.abs(a.value)+v.value);return xe(()=>t(e.tag,{class:["v-slide-group",{"v-slide-group--vertical":!l.value,"v-slide-group--has-affixes":$.value,"v-slide-group--is-overflowing":o.value},r.value,e.class],style:e.style,tabindex:I.value||i.selected.value.length?-1:0,onFocus:j},{default:()=>{var n,d,S;return[$.value&&t("div",{key:"prev",class:["v-slide-group__prev",{"v-slide-group__prev--disabled":!re.value}],onClick:()=>re.value&&R("prev")},[((n=s.prev)==null?void 0:n.call(s,Z.value))??t(ge,null,{default:()=>[t(A,{icon:c.value?e.nextIcon:e.prevIcon},null)]})]),t("div",{key:"container",ref:C,class:"v-slide-group__container",onScroll:z},[t("div",{ref:g,class:"v-slide-group__content",style:Ie.value,onTouchstartPassive:K,onTouchmovePassive:W,onTouchendPassive:y,onFocusin:X,onFocusout:J,onKeydown:Q},[(d=s.default)==null?void 0:d.call(s,Z.value)])]),$.value&&t("div",{key:"next",class:["v-slide-group__next",{"v-slide-group__next--disabled":!ue.value}],onClick:()=>ue.value&&R("next")},[((S=s.next)==null?void 0:S.call(s,Z.value))??t(ge,null,{default:()=>[t(A,{icon:c.value?e.prevIcon:e.nextIcon},null)]})])]}})),{selected:i.selected,scrollTo:R,scrollOffset:a,focus:k}}}),we=Symbol.for("vuetify:v-chip-group"),za=se({column:Boolean,filter:Boolean,valueComparator:{type:Function,default:Oe},...Pe(),...ne(),...Ce({selectedClass:"v-chip--selected"}),...ie(),...Ve(),..._e({variant:"tonal"})},"VChipGroup");oe()({name:"VChipGroup",props:za(),emits:{"update:modelValue":e=>!0},setup(e,f){let{slots:s}=f;const{themeClasses:c}=ze(e),{isSelected:r,select:m,next:i,prev:o,selected:a}=Ae(e,we);return Le({VChip:{color:q(e,"color"),disabled:q(e,"disabled"),filter:q(e,"filter"),variant:q(e,"variant")}}),xe(()=>{const v=Se.filterProps(e);return t(Se,ce(v,{class:["v-chip-group",{"v-chip-group--column":e.column},c.value,e.class],style:e.style}),{default:()=>{var p;return[(p=s.default)==null?void 0:p.call(s,{isSelected:r,select:m,next:i,prev:o,selected:a.value})]}})}),{}}});const Pa=se({activeClass:String,appendAvatar:String,appendIcon:D,closable:Boolean,closeIcon:{type:D,default:"$delete"},closeLabel:{type:String,default:"$vuetify.close"},draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:{type:Boolean,default:void 0},pill:Boolean,prependAvatar:String,prependIcon:D,ripple:{type:[Boolean,Object],default:!0},text:String,modelValue:{type:Boolean,default:!0},onClick:pe(),onClickOnce:pe(),...Ue(),...ne(),...De(),...Ge(),...Ke(),...Je(),...je(),...qe(),...ie({tag:"span"}),...Ve(),..._e({variant:"tonal"})},"VChip"),wa=oe()({name:"VChip",directives:{Ripple:Ye},props:Pa(),emits:{"click:close":e=>!0,"update:modelValue":e=>!0,"group:selected":e=>!0,click:e=>!0},setup(e,f){let{attrs:s,emit:c,slots:r}=f;const{t:m}=He(),{borderClasses:i}=We(e),{colorClasses:o,colorStyles:a,variantClasses:v}=Xe(e),{densityClasses:p}=Qe(e),{elevationClasses:l}=Ze(e),{roundedClasses:C}=$e(e),{sizeClasses:_}=ea(e),{themeClasses:g}=ze(e),P=aa(e,"modelValue"),u=ta(e,we,!1),x=la(e,s),w=b(()=>e.link!==!1&&x.isLink.value),V=b(()=>!e.disabled&&e.link!==!1&&(!!u||e.link||x.isClickable.value)),G=b(()=>({"aria-label":m(e.closeLabel),onClick(y){y.stopPropagation(),P.value=!1,c("click:close",y)}}));function K(y){var z;c("click",y),V.value&&((z=x.navigate)==null||z.call(x,y),u==null||u.toggle())}function W(y){(y.key==="Enter"||y.key===" ")&&(y.preventDefault(),K(y))}return()=>{const y=x.isLink.value?"a":e.tag,z=!!(e.appendIcon||e.appendAvatar),I=!!(z||r.append),X=!!(r.close||e.closable),J=!!(r.filter||e.filter)&&u,j=!!(e.prependIcon||e.prependAvatar),Q=!!(j||r.prepend),k=!u||u.isSelected.value;return P.value&&O(t(y,{class:["v-chip",{"v-chip--disabled":e.disabled,"v-chip--label":e.label,"v-chip--link":V.value,"v-chip--filter":J,"v-chip--pill":e.pill},g.value,i.value,k?o.value:void 0,p.value,l.value,C.value,_.value,v.value,u==null?void 0:u.selectedClass.value,e.class],style:[k?a.value:void 0,e.style],disabled:e.disabled||void 0,draggable:e.draggable,href:x.href.value,tabindex:V.value?0:void 0,onClick:K,onKeydown:V.value&&!w.value&&W},{default:()=>{var R;return[na(V.value,"v-chip"),J&&t(ya,{key:"filter"},{default:()=>[O(t("div",{class:"v-chip__filter"},[r.filter?t(Y,{key:"filter-defaults",disabled:!e.filterIcon,defaults:{VIcon:{icon:e.filterIcon}}},r.filter):t(A,{key:"filter-icon",icon:e.filterIcon},null)]),[[U,u.isSelected.value]])]}),Q&&t("div",{key:"prepend",class:"v-chip__prepend"},[r.prepend?t(Y,{key:"prepend-defaults",disabled:!j,defaults:{VAvatar:{image:e.prependAvatar,start:!0},VIcon:{icon:e.prependIcon,start:!0}}},r.prepend):t(H,null,[e.prependIcon&&t(A,{key:"prepend-icon",icon:e.prependIcon,start:!0},null),e.prependAvatar&&t(le,{key:"prepend-avatar",image:e.prependAvatar,start:!0},null)])]),t("div",{class:"v-chip__content"},[((R=r.default)==null?void 0:R.call(r,{isSelected:u==null?void 0:u.isSelected.value,selectedClass:u==null?void 0:u.selectedClass.value,select:u==null?void 0:u.select,toggle:u==null?void 0:u.toggle,value:u==null?void 0:u.value.value,disabled:e.disabled}))??e.text]),I&&t("div",{key:"append",class:"v-chip__append"},[r.append?t(Y,{key:"append-defaults",disabled:!z,defaults:{VAvatar:{end:!0,image:e.appendAvatar},VIcon:{end:!0,icon:e.appendIcon}}},r.append):t(H,null,[e.appendIcon&&t(A,{key:"append-icon",end:!0,icon:e.appendIcon},null),e.appendAvatar&&t(le,{key:"append-avatar",end:!0,image:e.appendAvatar},null)])]),X&&t("button",ce({key:"close",class:"v-chip__close",type:"button"},G.value),[r.close?t(Y,{key:"close-defaults",defaults:{VIcon:{icon:e.closeIcon,size:"x-small"}}},r.close):t(A,{key:"close-icon",icon:e.closeIcon,size:"x-small"},null)])]}}),[[sa("ripple"),V.value&&e.ripple,null]])}}}),Ia={class:"d-flex align-start gap-3"},Ra={key:0},Ta={class:"text-sm font-weight-medium mb-1"},Ea={class:"text-body-2 mb-2",style:{"letter-spacing":"0.4px !important","line-height":"18px"}},Ba={class:"text-sm text-disabled mb-0",style:{"letter-spacing":"0.4px !important","line-height":"18px"}},Ma={class:"d-flex flex-column align-end"},Fa={__name:"Notifications",props:{notifications:{type:Array,required:!0},badgeProps:{type:Object,required:!1,default:void 0},location:{type:null,required:!1,default:"bottom end"}},emits:["read","unread","remove","click:notification"],setup(e,{emit:f}){const s=e,c=f,r=b(()=>s.notifications.some(a=>a.isSeen===!1)),m=()=>{const a=s.notifications.map(v=>v.id);r.value?c("read",a):c("unread",a)},i=b(()=>s.notifications.filter(a=>a.isSeen===!1).length),o=(a,v)=>{a?c("unread",[v]):c("read",[v])};return(a,v)=>{const p=ia("IconBtn");return F(),te(p,{id:"notification-btn"},{default:h(()=>[t(fa,ce(s.badgeProps,{"model-value":s.notifications.some(l=>!l.isSeen),color:"error",dot:"","offset-x":"2","offset-y":"3"}),{default:h(()=>[t(A,{size:"24",icon:"tabler-bell"})]),_:1},16,["model-value"]),t(ma,{activator:"parent",width:"380px",location:s.location,offset:"12px","close-on-content-click":!1},{default:h(()=>[t(pa,{class:"d-flex flex-column"},{default:h(()=>[t(ha,{class:"notification-section"},{append:h(()=>[O(t(wa,{size:"small",color:"primary",class:"me-2"},{default:h(()=>[L(B(N(i))+" New ",1)]),_:1},512),[[U,s.notifications.some(l=>!l.isSeen)]]),O(t(p,{size:"34",onClick:m},{default:h(()=>[t(A,{size:"20",color:"high-emphasis",icon:N(r)?"tabler-mail-opened":"tabler-mail"},null,8,["icon"]),t(ka,{activator:"parent",location:"start"},{default:h(()=>[L(B(N(r)?"Mark all as read":"Mark all as unread"),1)]),_:1})]),_:1},512),[[U,s.notifications.length]])]),default:h(()=>[t(ga,{class:"text-h6"},{default:h(()=>[L(" Notifications ")]),_:1})]),_:1}),t(ae),t(N(va),{options:{wheelPropagation:!1},style:{"max-block-size":"23.75rem"}},{default:h(()=>[t(ba,{class:"notification-list rounded-0 py-0"},{default:h(()=>[(F(!0),ee(H,null,oa(s.notifications,(l,C)=>(F(),ee(H,{key:l.title},[C>0?(F(),te(ae,{key:0})):he("",!0),t(ye,{link:"",lines:"one","min-height":"66px",class:"list-item-hover-class",onClick:_=>a.$emit("click:notification",l)},{default:h(()=>[M("div",Ia,[t(le,{size:"40",color:l.color&&l.icon?l.color:void 0,image:l.img||void 0,icon:l.icon||void 0,variant:l.img?void 0:"tonal"},{default:h(()=>[l.text?(F(),ee("span",Ra,B(("avatarText"in a?a.avatarText:N(xa))(l.text)),1)):he("",!0)]),_:2},1032,["color","image","icon","variant"]),M("div",null,[M("p",Ta,B(l.title),1),M("p",Ea,B(l.subtitle),1),M("p",Ba,B(l.time),1)]),t(Ca),M("div",Ma,[t(A,{size:"10",icon:"tabler-circle-filled",color:l.isSeen?"#a8aaae":"primary",class:ca([`${l.isSeen?"visible-in-hover":""}`,"mb-2"]),onClick:ra(_=>o(l.isSeen,l.id),["stop"])},null,8,["color","class","onClick"]),t(A,{size:"20",icon:"tabler-x",class:"visible-in-hover",onClick:_=>a.$emit("remove",l.id)},null,8,["onClick"])])])]),_:2},1032,["onClick"])],64))),128)),O(t(ye,{class:"text-center text-medium-emphasis",style:{"block-size":"56px"}},{default:h(()=>[t(Sa,null,{default:h(()=>[L("No Notification Found!")]),_:1})]),_:1},512),[[U,!s.notifications.length]])]),_:1})]),_:1}),t(ae),O(t(Aa,{class:"pa-4"},{default:h(()=>[t(ua,{block:"",size:"small"},{default:h(()=>[L(" View All Notifications ")]),_:1})]),_:1},512),[[U,s.notifications.length]])]),_:1})]),_:1},8,["location"])]),_:1})}}},Na="/assets/avatar-3-BxDW4ia1.png",Oa="/assets/avatar-4-CtU30128.png",La="/assets/avatar-5-CmycerLe.png",Ua="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAYAAACoPemuAAAAAXNSR0IArs4c6QAAA1ZJREFUWEfNmM1PE0EYxp/pbrcUsLUqARMSjUf/Ak+Gg4kBY0jQTfDGiTN/CmdOHgmLB0wUYzx4gj35ceHgVwwpUVCElo/a7W7HzLTbbpfuzttWSPe6M+/89nnf95nZYejw4QDDxFwK+kkKaT0Jp5xEAhoYNBmKw0MVHoxUBSW3AneojLdPy0y86eBh1LF8fj6JbweDMJAGvBR1Xm2cVoaDEm7lTtnSUoUyVwnGTVPDAYYxqA3BdZKUoJFjdKOCU+8EORwzy/LiYsWCcdNMo+Begs7SPQGFJ7u8hKx+xCyrFBU3Eoyb5jBKyKLq6f8Vyg+W0FykUWCWddwuflswPjmZgWdkoWuJc4Hyg7peFZpTYOvrxfA6Z8CkUgUnd+5QQbiscRBWrgVM1lQJV84tfVHy19L6J1hzDTDZfQX3qrLQJ+7ewUhuAZp+JzLNnmvDcW35fu3FIqkcag2x73drE+yemYXhXVYGmX6wgPTAgnJccEDp7yIJ0NEO2RurIKZKMGmeP4sjJJ+affS9Iyh/8PKzm8p5wufGMr+ECdfAqGqJNI6NLCsXaDegQ9WY3PumzFHSNtNNGn1IUXfW2qz6o7QyXlq7jE/MDWCwOKqeAOBCwACcZnYZOY2CvBew/M4WNu3X8KDuUtEE/OGTa/DKQyTFzOnlWJuIC7L+Ko+j43FUmboJtNQJ4/dnrkODQQLrtiNF8JXV2hKMLSpV8+AwPjkz3jjkqei6BdvYtJHfqRsym0UVNfONejg8xqdmbqh45PturULU1sbm7eYaBDAhLBmsm8J/9z6PL1/HWz6cUmMSjJpKKphQaG8vg9/7Ng4PH4eyYaPK1F4mU0kt/qiOPJOquMKgpRGy+Kl2EVX4nz6v4sPHsDJn6Sjd6M+SdkHdJ6PAfH+KEkoAcdjKTgzOlwZL2ZLiOnLt+RbKTqDrYIMxu2OYIJjckiibeFzhr6wKT2oeGjtJWVuV65u4eKdMZ5xivqM3FiEWeFTq64dF+kFRqGYEjtM/djPY3i42Hd1fqQew8EGRpFrwCxMidbz9gZFooG0FCx+tJRj1Z8SPmJBgrT8kvdRX1M9IHa7/ft98Ifryh7cB149XBC3K9dulSgCu/66hAnD9d3EX9Jq+u+oMG+FFXQ7/A7YTzYZ/kuhAAAAAAElFTkSuQmCC",lt={__name:"NavBarNotifications",setup(e){const f=da([{id:1,img:Oa,title:"Congratulation Flora! 🎉",subtitle:"Won the monthly best seller badge",time:"Today",isSeen:!0},{id:2,text:"Tom Holland",title:"New user registered.",subtitle:"5 hours ago",time:"Yesterday",isSeen:!1},{id:3,img:La,title:"New message received 👋🏻",subtitle:"You have 10 unread messages",time:"11 Aug",isSeen:!0},{id:4,img:Ua,title:"PayPal",subtitle:"Received Payment",time:"25 May",isSeen:!1,color:"error"},{id:5,img:Na,title:"Received Order 📦",subtitle:"New order received from john",time:"19 Mar",isSeen:!0}]),s=i=>{f.value.forEach((o,a)=>{i===o.id&&f.value.splice(a,1)})},c=i=>{f.value.forEach(o=>{i.forEach(a=>{a===o.id&&(o.isSeen=!0)})})},r=i=>{f.value.forEach(o=>{i.forEach(a=>{a===o.id&&(o.isSeen=!1)})})},m=i=>{i.isSeen||c([i.id])};return(i,o)=>{const a=Fa;return F(),te(a,{notifications:N(f),onRemove:s,onRead:c,onUnread:r,"onClick:notification":m},null,8,["notifications"])}}};export{lt as default};
