import{p as b,aS as h,c4 as x,g as O,D as T,R as p,aT as R,o as e,x as k,H as u,u as w,c5 as d,c as A,aJ as C}from"./index-BBF-TbVr.js";const H=b({id:String,text:String,...h(x({closeOnBack:!1,location:"end",locationStrategy:"connected",eager:!0,minWidth:0,offset:10,openOnClick:!1,openOnHover:!0,origin:"auto",scrim:!1,scrollStrategy:"reposition",transition:!1}),["absolute","persistent"])},"VTooltip"),U=O()({name:"VTooltip",props:H(),emits:{"update:modelValue":t=>!0},setup(t,v){let{slots:a}=v;const n=T(t,"modelValue"),{scopeId:g}=p(),f=R(),r=e(()=>t.id||`v-tooltip-${f}`),l=k(),m=e(()=>t.location.split(" ").length>1?t.location:t.location+" center"),V=e(()=>t.origin==="auto"||t.origin==="overlap"||t.origin.split(" ").length>1||t.location.split(" ").length>1?t.origin:t.origin+" center"),P=e(()=>t.transition?t.transition:n.value?"scale-transition":"fade-transition"),y=e(()=>u({"aria-describedby":r.value},t.activatorProps));return w(()=>{const S=d.filterProps(t);return A(d,u({ref:l,class:["v-tooltip",t.class],style:t.style,id:r.value},S,{modelValue:n.value,"onUpdate:modelValue":o=>n.value=o,transition:P.value,absolute:!0,location:m.value,origin:V.value,persistent:!0,role:"tooltip",activatorProps:y.value,_disableGlobalStack:!0},g),{activator:a.activator,default:function(){var c;for(var o=arguments.length,s=new Array(o),i=0;i<o;i++)s[i]=arguments[i];return((c=a.default)==null?void 0:c.call(a,...s))??t.text}})}),C({},l)}});export{U as V};