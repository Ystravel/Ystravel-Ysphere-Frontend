import{p as G,m as fe,g as ie,bV as me,z as X,u as oe,c as r,U as Q,H as E,P as we,s as U,I as pe,x as W,o as L,M as Ie,y as re,bW as Te,X as ne,bo as de,Y as _e,bG as Re,Z as Be,t as K,E as De,A as Fe,bX as Me,v as ae,bv as J,aY as Ee,bl as Oe,bm as $e,bY as Ne,_ as Ae,D as ve,bn as He,aA as be,ax as ze,al as Ue,ab as ye,bp as qe,at as Ke,r as We,ad as Xe,aP as Ye,$ as je,br as Ve,bt as Pe,bZ as Ge,b as Ze,bh as Je,d as Qe,e as et,b_ as tt,a as at,f as lt,by as nt,n as it,l as ot,q as ke,b$ as le,K as Z,c0 as xe}from"./index-BvBj222y.js";import{m as ut,u as st,b as rt,V as Se}from"./VList-B8jWfyzv.js";import{V as ct}from"./VCheckboxBtn-DkthkcCZ.js";const dt=G({renderless:Boolean,...fe()},"VVirtualScrollItem"),vt=ie()({name:"VVirtualScrollItem",inheritAttrs:!1,props:dt(),emits:{"update:height":e=>!0},setup(e,v){let{attrs:a,emit:f,slots:l}=v;const{resizeRef:m,contentRect:b}=me(void 0,"border");X(()=>{var u;return(u=b.value)==null?void 0:u.height},u=>{u!=null&&f("update:height",u)}),oe(()=>{var u,i;return e.renderless?r(Q,null,[(u=l.default)==null?void 0:u.call(l,{itemRef:m})]):r("div",E({ref:m,class:["v-virtual-scroll__item",e.class],style:e.style},a),[(i=l.default)==null?void 0:i.call(l)])})}}),ft=-1,mt=1,ce=100,gt=G({itemHeight:{type:[Number,String],default:null},height:[Number,String]},"virtual");function ht(e,v){const a=we(),f=U(0);pe(()=>{f.value=parseFloat(e.itemHeight||0)});const l=U(0),m=U(Math.ceil((parseInt(e.height)||a.height.value)/(f.value||16))||1),b=U(0),u=U(0),i=W(),P=W();let R=0;const{resizeRef:N,contentRect:o}=me();pe(()=>{N.value=i.value});const g=L(()=>{var t;return i.value===document.documentElement?a.height.value:((t=o.value)==null?void 0:t.height)||parseInt(e.height)||0}),k=L(()=>!!(i.value&&P.value&&g.value&&f.value));let C=Array.from({length:v.value.length}),y=Array.from({length:v.value.length});const V=U(0);let w=-1;function H(t){return C[t]||f.value}const B=Te(()=>{const t=performance.now();y[0]=0;const n=v.value.length;for(let p=1;p<=n-1;p++)y[p]=(y[p-1]||0)+H(p-1);V.value=Math.max(V.value,performance.now()-t)},V),D=X(k,t=>{t&&(D(),R=P.value.offsetTop,B.immediate(),z(),~w&&ne(()=>{de&&window.requestAnimationFrame(()=>{te(w),w=-1})}))});Ie(()=>{B.clear()});function Y(t,n){const p=C[t],S=f.value;f.value=S?Math.min(f.value,n):n,(p!==n||S!==f.value)&&(C[t]=n,B())}function I(t){return t=re(t,0,v.value.length-1),y[t]||0}function s(t){return pt(y,t)}let d=0,h=0,x=0;X(g,(t,n)=>{n&&(z(),t<n&&requestAnimationFrame(()=>{h=0,z()}))});function T(){if(!i.value||!P.value)return;const t=i.value.scrollTop,n=performance.now();n-x>500?(h=Math.sign(t-d),R=P.value.offsetTop):h=t-d,d=t,x=n,z()}function M(){!i.value||!P.value||(h=0,x=0,z())}let ee=-1;function z(){cancelAnimationFrame(ee),ee=requestAnimationFrame(ue)}function ue(){if(!i.value||!g.value)return;const t=d-R,n=Math.sign(h),p=Math.max(0,t-ce),S=re(s(p),0,v.value.length),O=t+g.value+ce,c=re(s(O)+1,S+1,v.value.length);if((n!==ft||S<l.value)&&(n!==mt||c>m.value)){const A=I(l.value)-I(S),_=I(c)-I(m.value);Math.max(A,_)>ce?(l.value=S,m.value=c):(S<=0&&(l.value=S),c>=v.value.length&&(m.value=c))}b.value=I(l.value),u.value=I(v.value.length)-I(m.value)}function te(t){const n=I(t);!i.value||t&&!n?w=t:i.value.scrollTop=n}const se=L(()=>v.value.slice(l.value,m.value).map((t,n)=>({raw:t,index:n+l.value})));return X(v,()=>{C=Array.from({length:v.value.length}),y=Array.from({length:v.value.length}),B.immediate(),z()},{deep:!0}),{calculateVisibleItems:z,containerRef:i,markerRef:P,computedItems:se,paddingTop:b,paddingBottom:u,scrollToIndex:te,handleScroll:T,handleScrollend:M,handleItemResize:Y}}function pt(e,v){let a=e.length-1,f=0,l=0,m=null,b=-1;if(e[a]<v)return a;for(;f<=a;)if(l=f+a>>1,m=e[l],m>v)a=l-1;else if(m<v)b=l,f=l+1;else return m===v?l:f;return b}const bt=G({items:{type:Array,default:()=>[]},renderless:Boolean,...gt(),...fe(),..._e()},"VVirtualScroll"),yt=ie()({name:"VVirtualScroll",props:bt(),setup(e,v){let{slots:a}=v;const f=Re("VVirtualScroll"),{dimensionStyles:l}=Be(e),{calculateVisibleItems:m,containerRef:b,markerRef:u,handleScroll:i,handleScrollend:P,handleItemResize:R,scrollToIndex:N,paddingTop:o,paddingBottom:g,computedItems:k}=ht(e,K(e,"items"));return De(()=>e.renderless,()=>{function C(){var w,H;const V=(arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1)?"addEventListener":"removeEventListener";b.value===document.documentElement?(document[V]("scroll",i,{passive:!0}),document[V]("scrollend",P)):((w=b.value)==null||w[V]("scroll",i,{passive:!0}),(H=b.value)==null||H[V]("scrollend",P))}Fe(()=>{b.value=Me(f.vnode.el,!0),C(!0)}),Ie(C)}),oe(()=>{const C=k.value.map(y=>r(vt,{key:y.index,renderless:e.renderless,"onUpdate:height":V=>R(y.index,V)},{default:V=>{var w;return(w=a.default)==null?void 0:w.call(a,{item:y.raw,index:y.index,...V})}}));return e.renderless?r(Q,null,[r("div",{ref:u,class:"v-virtual-scroll__spacer",style:{paddingTop:ae(o.value)}},null),C,r("div",{class:"v-virtual-scroll__spacer",style:{paddingBottom:ae(g.value)}},null)]):r("div",{ref:b,class:["v-virtual-scroll",e.class],onScrollPassive:i,onScrollend:P,style:[l.value,e.style]},[r("div",{ref:u,class:"v-virtual-scroll__container",style:{paddingTop:ae(o.value),paddingBottom:ae(g.value)}},[C])])}),{calculateVisibleItems:m,scrollToIndex:N}}});function Vt(e,v){const a=U(!1);let f;function l(u){cancelAnimationFrame(f),a.value=!0,f=requestAnimationFrame(()=>{f=requestAnimationFrame(()=>{a.value=!1})})}async function m(){await new Promise(u=>requestAnimationFrame(u)),await new Promise(u=>requestAnimationFrame(u)),await new Promise(u=>requestAnimationFrame(u)),await new Promise(u=>{if(a.value){const i=X(a,()=>{i(),u()})}else u()})}async function b(u){var R,N;if(u.key==="Tab"&&((R=v.value)==null||R.focus()),!["PageDown","PageUp","Home","End"].includes(u.key))return;const i=(N=e.value)==null?void 0:N.$el;if(!i)return;(u.key==="Home"||u.key==="End")&&i.scrollTo({top:u.key==="Home"?0:i.scrollHeight,behavior:"smooth"}),await m();const P=i.querySelectorAll(":scope > :not(.v-virtual-scroll__spacer)");if(u.key==="PageDown"||u.key==="Home"){const o=i.getBoundingClientRect().top;for(const g of P)if(g.getBoundingClientRect().top>=o){g.focus();break}}else{const o=i.getBoundingClientRect().bottom;for(const g of[...P].reverse())if(g.getBoundingClientRect().bottom<=o){g.focus();break}}}return{onScrollPassive:l,onKeydown:b}}const Pt=G({chips:Boolean,closableChips:Boolean,closeText:{type:String,default:"$vuetify.close"},openText:{type:String,default:"$vuetify.open"},eager:Boolean,hideNoData:Boolean,hideSelected:Boolean,listProps:{type:Object},menu:Boolean,menuIcon:{type:J,default:"$dropdown"},menuProps:{type:Object},multiple:Boolean,noDataText:{type:String,default:"$vuetify.noDataText"},openOnClear:Boolean,itemColor:String,...ut({itemChildren:!1})},"Select"),kt=G({...Pt(),...Ee(Oe({modelValue:null,role:"combobox"}),["validationValue","dirty","appendInnerIcon"]),...$e({transition:{component:Ne}})},"VSelect"),Lt=ie()({name:"VSelect",props:kt(),emits:{"update:focused":e=>!0,"update:modelValue":e=>!0,"update:menu":e=>!0},setup(e,v){let{slots:a}=v;const{t:f}=Ae(),l=W(),m=W(),b=W(),u=ve(e,"menu"),i=L({get:()=>u.value,set:t=>{var n;u.value&&!t&&((n=m.value)!=null&&n.ΨopenChildren.size)||(u.value=t)}}),{items:P,transformIn:R,transformOut:N}=st(e),o=ve(e,"modelValue",[],t=>R(t===null?[null]:je(t)),t=>{const n=N(t);return e.multiple?n:n[0]??null}),g=L(()=>typeof e.counterValue=="function"?e.counterValue(o.value):typeof e.counterValue=="number"?e.counterValue:o.value.length),k=He(),C=L(()=>o.value.map(t=>t.value)),y=U(!1),V=L(()=>i.value?e.closeText:e.openText);let w="",H;const B=L(()=>e.hideSelected?P.value.filter(t=>!o.value.some(n=>e.valueComparator(n,t))):P.value),D=L(()=>e.hideNoData&&!B.value.length||e.readonly||(k==null?void 0:k.isReadonly.value)),Y=L(()=>{var t;return{...e.menuProps,activatorProps:{...((t=e.menuProps)==null?void 0:t.activatorProps)||{},"aria-haspopup":"listbox"}}}),I=W(),s=Vt(I,l);function d(t){e.openOnClear&&(i.value=!0)}function h(){D.value||(i.value=!i.value)}function x(t){Ve(t)&&T(t)}function T(t){var O,c;if(!t.key||e.readonly||k!=null&&k.isReadonly.value)return;["Enter"," ","ArrowDown","ArrowUp","Home","End"].includes(t.key)&&t.preventDefault(),["Enter","ArrowDown"," "].includes(t.key)&&(i.value=!0),["Escape","Tab"].includes(t.key)&&(i.value=!1),t.key==="Home"?(O=I.value)==null||O.focus("first"):t.key==="End"&&((c=I.value)==null||c.focus("last"));const n=1e3;if(e.multiple||!Ve(t))return;const p=performance.now();p-H>n&&(w=""),w+=t.key.toLowerCase(),H=p;const S=P.value.find(A=>A.title.toLowerCase().startsWith(w));if(S!==void 0){o.value=[S];const A=B.value.indexOf(S);de&&window.requestAnimationFrame(()=>{var _;A>=0&&((_=b.value)==null||_.scrollToIndex(A))})}}function M(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;if(!t.props.disabled)if(e.multiple){const p=o.value.findIndex(O=>e.valueComparator(O.value,t.value)),S=n??!~p;if(~p){const O=S?[...o.value,t]:[...o.value];O.splice(p,1),o.value=O}else S&&(o.value=[...o.value,t])}else{const p=n!==!1;o.value=p?[t]:[],ne(()=>{i.value=!1})}}function ee(t){var n;(n=I.value)!=null&&n.$el.contains(t.relatedTarget)||(i.value=!1)}function z(){var t;e.eager&&((t=b.value)==null||t.calculateVisibleItems())}function ue(){var t;y.value&&((t=l.value)==null||t.focus())}function te(t){y.value=!0}function se(t){if(t==null)o.value=[];else if(Pe(l.value,":autofill")||Pe(l.value,":-webkit-autofill")){const n=P.value.find(p=>p.title===t);n&&M(n)}else l.value&&(l.value.value="")}return X(i,()=>{if(!e.hideSelected&&i.value&&o.value.length){const t=B.value.findIndex(n=>o.value.some(p=>e.valueComparator(p.value,n.value)));de&&window.requestAnimationFrame(()=>{var n;t>=0&&((n=b.value)==null||n.scrollToIndex(t))})}}),X(()=>e.items,(t,n)=>{i.value||y.value&&!n.length&&t.length&&(i.value=!0)}),oe(()=>{const t=!!(e.chips||a.chip),n=!!(!e.hideNoData||B.value.length||a["prepend-item"]||a["append-item"]||a["no-data"]),p=o.value.length>0,S=be.filterProps(e),O=p||!y.value&&e.label&&!e.persistentPlaceholder?void 0:e.placeholder;return r(be,E({ref:l},S,{modelValue:o.value.map(c=>c.props.value).join(", "),"onUpdate:modelValue":se,focused:y.value,"onUpdate:focused":c=>y.value=c,validationValue:o.externalValue,counterValue:g.value,dirty:p,class:["v-select",{"v-select--active-menu":i.value,"v-select--chips":!!e.chips,[`v-select--${e.multiple?"multiple":"single"}`]:!0,"v-select--selected":o.value.length,"v-select--selection-slot":!!a.selection},e.class],style:e.style,inputmode:"none",placeholder:O,"onClick:clear":d,"onMousedown:control":h,onBlur:ee,onKeydown:T,"aria-label":f(V.value),title:f(V.value)}),{...a,default:()=>r(Q,null,[r(ze,E({ref:m,modelValue:i.value,"onUpdate:modelValue":c=>i.value=c,activator:"parent",contentClass:"v-select__content",disabled:D.value,eager:e.eager,maxHeight:310,openOnClick:!1,closeOnContentClick:!1,transition:e.transition,onAfterEnter:z,onAfterLeave:ue},Y.value),{default:()=>[n&&r(rt,E({ref:I,selected:C.value,selectStrategy:e.multiple?"independent":"single-independent",onMousedown:c=>c.preventDefault(),onKeydown:x,onFocusin:te,tabindex:"-1","aria-live":"polite",color:e.itemColor??e.color},s,e.listProps),{default:()=>{var c,A,_;return[(c=a["prepend-item"])==null?void 0:c.call(a),!B.value.length&&!e.hideNoData&&(((A=a["no-data"])==null?void 0:A.call(a))??r(Se,{title:f(e.noDataText)},null)),r(yt,{ref:b,renderless:!0,items:B.value},{default:q=>{var he;let{item:$,index:j,itemRef:F}=q;const ge=E($.props,{ref:F,key:j,onClick:()=>M($,null)});return((he=a.item)==null?void 0:he.call(a,{item:$,index:j,props:ge}))??r(Se,E(ge,{role:"option"}),{prepend:Le=>{let{isSelected:Ce}=Le;return r(Q,null,[e.multiple&&!e.hideSelected?r(ct,{key:$.value,modelValue:Ce,ripple:!1,tabindex:"-1"},null):void 0,$.props.prependAvatar&&r(Ue,{image:$.props.prependAvatar},null),$.props.prependIcon&&r(ye,{icon:$.props.prependIcon},null)])}})}}),(_=a["append-item"])==null?void 0:_.call(a)]}})]}),o.value.map((c,A)=>{function _(F){F.stopPropagation(),F.preventDefault(),M(c,!1)}const q={"onClick:close":_,onKeydown(F){F.key!=="Enter"&&F.key!==" "||(F.preventDefault(),F.stopPropagation(),_(F))},onMousedown(F){F.preventDefault(),F.stopPropagation()},modelValue:!0,"onUpdate:modelValue":void 0},$=t?!!a.chip:!!a.selection,j=$?qe(t?a.chip({item:c,index:A,props:q}):a.selection({item:c,index:A})):void 0;if(!($&&!j))return r("div",{key:c.value,class:"v-select__selection"},[t?a.chip?r(We,{key:"chip-defaults",defaults:{VChip:{closable:e.closableChips,size:"small",text:c.title}}},{default:()=>[j]}):r(Ke,E({key:"chip",closable:e.closableChips,size:"small",text:c.title,disabled:c.props.disabled},q),null):j??r("span",{class:"v-select__selection-text"},[c.title,e.multiple&&A<o.value.length-1&&r("span",{class:"v-select__selection-comma"},[Xe(",")])])])})]),"append-inner":function(){var q;for(var c=arguments.length,A=new Array(c),_=0;_<c;_++)A[_]=arguments[_];return r(Q,null,[(q=a["append-inner"])==null?void 0:q.call(a,...A),e.menuIcon?r(ye,{class:"v-select__menu-icon",icon:e.menuIcon},null):void 0])}})}),Ye({isFocused:y,menu:i,select:M},l)}});function xt(){const e=W([]);Ge(()=>e.value=[]);function v(a,f){e.value[f]=a}return{refs:e,updateRef:v}}const St=G({activeColor:String,start:{type:[Number,String],default:1},modelValue:{type:Number,default:e=>e.start},disabled:Boolean,length:{type:[Number,String],default:1,validator:e=>e%1===0},totalVisible:[Number,String],firstIcon:{type:J,default:"$first"},prevIcon:{type:J,default:"$prev"},nextIcon:{type:J,default:"$next"},lastIcon:{type:J,default:"$last"},ariaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.root"},pageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.page"},currentPageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.currentPage"},firstAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.first"},previousAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.previous"},nextAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.next"},lastAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.last"},ellipsis:{type:String,default:"..."},showFirstLastPage:Boolean,...Ze(),...fe(),...Je(),...Qe(),...et(),...tt(),...at({tag:"nav"}),...lt(),...nt({variant:"text"})},"VPagination"),Ct=ie()({name:"VPagination",props:St(),emits:{"update:modelValue":e=>!0,first:e=>!0,prev:e=>!0,next:e=>!0,last:e=>!0},setup(e,v){let{slots:a,emit:f}=v;const l=ve(e,"modelValue"),{t:m,n:b}=Ae(),{isRtl:u}=it(),{themeClasses:i}=ot(e),{width:P}=we(),R=U(-1);ke(void 0,{scoped:!0});const{resizeRef:N}=me(s=>{if(!s.length)return;const{target:d,contentRect:h}=s[0],x=d.querySelector(".v-pagination__list > *");if(!x)return;const T=h.width,M=x.offsetWidth+parseFloat(getComputedStyle(x).marginRight)*2;R.value=C(T,M)}),o=L(()=>parseInt(e.length,10)),g=L(()=>parseInt(e.start,10)),k=L(()=>e.totalVisible!=null?parseInt(e.totalVisible,10):R.value>=0?R.value:C(P.value,58));function C(s,d){const h=e.showFirstLastPage?5:3;return Math.max(0,Math.floor(+((s-d*h)/d).toFixed(2)))}const y=L(()=>{if(o.value<=0||isNaN(o.value)||o.value>Number.MAX_SAFE_INTEGER)return[];if(k.value<=0)return[];if(k.value===1)return[l.value];if(o.value<=k.value)return le(o.value,g.value);const s=k.value%2===0,d=s?k.value/2:Math.floor(k.value/2),h=s?d:d+1,x=o.value-d;if(h-l.value>=0)return[...le(Math.max(1,k.value-1),g.value),e.ellipsis,o.value];if(l.value-x>=(s?1:0)){const T=k.value-1,M=o.value-T+g.value;return[g.value,e.ellipsis,...le(T,M)]}else{const T=Math.max(1,k.value-3),M=T===1?l.value:l.value-Math.ceil(T/2)+g.value;return[g.value,e.ellipsis,...le(T,M),e.ellipsis,o.value]}});function V(s,d,h){s.preventDefault(),l.value=d,h&&f(h,d)}const{refs:w,updateRef:H}=xt();ke({VPaginationBtn:{color:K(e,"color"),border:K(e,"border"),density:K(e,"density"),size:K(e,"size"),variant:K(e,"variant"),rounded:K(e,"rounded"),elevation:K(e,"elevation")}});const B=L(()=>y.value.map((s,d)=>{const h=x=>H(x,d);if(typeof s=="string")return{isActive:!1,key:`ellipsis-${d}`,page:s,props:{ref:h,ellipsis:!0,icon:!0,disabled:!0}};{const x=s===l.value;return{isActive:x,key:s,page:b(s),props:{ref:h,ellipsis:!1,icon:!0,disabled:!!e.disabled||+e.length<2,color:x?e.activeColor:e.color,"aria-current":x,"aria-label":m(x?e.currentPageAriaLabel:e.pageAriaLabel,s),onClick:T=>V(T,s)}}}})),D=L(()=>{const s=!!e.disabled||l.value<=g.value,d=!!e.disabled||l.value>=g.value+o.value-1;return{first:e.showFirstLastPage?{icon:u.value?e.lastIcon:e.firstIcon,onClick:h=>V(h,g.value,"first"),disabled:s,"aria-label":m(e.firstAriaLabel),"aria-disabled":s}:void 0,prev:{icon:u.value?e.nextIcon:e.prevIcon,onClick:h=>V(h,l.value-1,"prev"),disabled:s,"aria-label":m(e.previousAriaLabel),"aria-disabled":s},next:{icon:u.value?e.prevIcon:e.nextIcon,onClick:h=>V(h,l.value+1,"next"),disabled:d,"aria-label":m(e.nextAriaLabel),"aria-disabled":d},last:e.showFirstLastPage?{icon:u.value?e.firstIcon:e.lastIcon,onClick:h=>V(h,g.value+o.value-1,"last"),disabled:d,"aria-label":m(e.lastAriaLabel),"aria-disabled":d}:void 0}});function Y(){var d;const s=l.value-g.value;(d=w.value[s])==null||d.$el.focus()}function I(s){s.key===xe.left&&!e.disabled&&l.value>+e.start?(l.value=l.value-1,ne(Y)):s.key===xe.right&&!e.disabled&&l.value<g.value+o.value-1&&(l.value=l.value+1,ne(Y))}return oe(()=>r(e.tag,{ref:N,class:["v-pagination",i.value,e.class],style:e.style,role:"navigation","aria-label":m(e.ariaLabel),onKeydown:I,"data-test":"v-pagination-root"},{default:()=>[r("ul",{class:"v-pagination__list"},[e.showFirstLastPage&&r("li",{key:"first",class:"v-pagination__first","data-test":"v-pagination-first"},[a.first?a.first(D.value.first):r(Z,E({_as:"VPaginationBtn"},D.value.first),null)]),r("li",{key:"prev",class:"v-pagination__prev","data-test":"v-pagination-prev"},[a.prev?a.prev(D.value.prev):r(Z,E({_as:"VPaginationBtn"},D.value.prev),null)]),B.value.map((s,d)=>r("li",{key:s.key,class:["v-pagination__item",{"v-pagination__item--is-active":s.isActive}],"data-test":"v-pagination-item"},[a.item?a.item(s):r(Z,E({_as:"VPaginationBtn"},s.props),{default:()=>[s.page]})])),r("li",{key:"next",class:"v-pagination__next","data-test":"v-pagination-next"},[a.next?a.next(D.value.next):r(Z,E({_as:"VPaginationBtn"},D.value.next),null)]),e.showFirstLastPage&&r("li",{key:"last",class:"v-pagination__last","data-test":"v-pagination-last"},[a.last?a.last(D.value.last):r(Z,E({_as:"VPaginationBtn"},D.value.last),null)])])]})),{}}});export{Ct as V,Lt as a,yt as b,Pt as m,Vt as u};
