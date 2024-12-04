import{p as W,aG as Y,aH as N,aI as Z,g as ee,aJ as le,D as te,aK as ne,o as s,aL as B,x as h,z as ae,u as ue,aM as ie,aN as M,aO as oe,c as u,aP as se,H as g,U as C,ap as re,aQ as ce,aR as de,X as fe,aS as ve}from"./index-BcKy3KB6.js";const me=W({chips:Boolean,counter:Boolean,counterSizeString:{type:String,default:"$vuetify.fileInput.counterSize"},counterString:{type:String,default:"$vuetify.fileInput.counter"},hideInput:Boolean,multiple:Boolean,showSize:{type:[Boolean,Number,String],default:!1,validator:e=>typeof e=="boolean"||[1e3,1024].includes(Number(e))},...Y({prependIcon:"$file"}),modelValue:{type:[Array,Object],default:e=>e.multiple?[]:null,validator:e=>N(e).every(f=>f!=null&&typeof f=="object")},...Z({clearable:!0})},"VFileInput"),he=ee()({name:"VFileInput",inheritAttrs:!1,props:me(),emits:{"click:control":e=>!0,"mousedown:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,f){let{attrs:x,emit:I,slots:n}=f;const{t:k}=le(),a=te(e,"modelValue",e.modelValue,l=>N(l),l=>!e.multiple&&Array.isArray(l)?l[0]:l),{isFocused:v,focus:D,blur:$}=ne(e),V=s(()=>typeof e.showSize!="boolean"?e.showSize:void 0),b=s(()=>(a.value??[]).reduce((l,t)=>{let{size:r=0}=t;return l+r},0)),S=s(()=>B(b.value,V.value)),p=s(()=>(a.value??[]).map(l=>{const{name:t="",size:r=0}=l;return e.showSize?`${t} (${B(r,V.value)})`:t})),j=s(()=>{var t;const l=((t=a.value)==null?void 0:t.length)??0;return e.showSize?k(e.counterSizeString,l,S.value):k(e.counterString,l)}),F=h(),P=h(),i=h(),O=s(()=>v.value||e.active),z=s(()=>["plain","underlined"].includes(e.variant));function y(){var l;i.value!==document.activeElement&&((l=i.value)==null||l.focus()),v.value||D()}function U(l){var t;(t=i.value)==null||t.click()}function E(l){I("mousedown:control",l)}function H(l){var t;(t=i.value)==null||t.click(),I("click:control",l)}function L(l){l.stopPropagation(),y(),fe(()=>{a.value=[],ve(e["onClick:clear"],l)})}return ae(a,l=>{(!Array.isArray(l)||!l.length)&&i.value&&(i.value.value="")}),ue(()=>{const l=!!(n.counter||e.counter),t=!!(l||n.details),[r,G]=ie(x),{modelValue:pe,...J}=M.filterProps(e),K=oe(e);return u(M,g({ref:F,modelValue:a.value,"onUpdate:modelValue":c=>a.value=c,class:["v-file-input",{"v-file-input--chips":!!e.chips,"v-file-input--hide":e.hideInput,"v-input--plain-underlined":z.value},e.class],style:e.style,"onClick:prepend":U},r,J,{centerAffix:!z.value,focused:v.value}),{...n,default:c=>{let{id:m,isDisabled:d,isDirty:A,isReadonly:R,isValid:Q}=c;return u(se,g({ref:P,"prepend-icon":e.prependIcon,onMousedown:E,onClick:H,"onClick:clear":L,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"]},K,{id:m.value,active:O.value||A.value,dirty:A.value||e.dirty,disabled:d.value,focused:v.value,error:Q.value===!1}),{...n,default:T=>{var w;let{props:{class:X,..._}}=T;return u(C,null,[u("input",g({ref:i,type:"file",readonly:R.value,disabled:d.value,multiple:e.multiple,name:e.name,onClick:o=>{o.stopPropagation(),R.value&&o.preventDefault(),y()},onChange:o=>{if(!o.target)return;const q=o.target;a.value=[...q.files??[]]},onFocus:y,onBlur:$},_,G),null),u("div",{class:X},[!!((w=a.value)!=null&&w.length)&&!e.hideInput&&(n.selection?n.selection({fileNames:p.value,totalBytes:b.value,totalBytesReadable:S.value}):e.chips?p.value.map(o=>u(re,{key:o,size:"small",text:o},null)):p.value.join(", "))])])}})},details:t?c=>{var m,d;return u(C,null,[(m=n.details)==null?void 0:m.call(n,c),l&&u(C,null,[u("span",null,null),u(ce,{active:!!((d=a.value)!=null&&d.length),value:j.value,disabled:e.disabled},n.counter)])])}:void 0})}),de({},F,P,i)}});export{he as V};