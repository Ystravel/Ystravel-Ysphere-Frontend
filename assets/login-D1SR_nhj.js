import{p as z,au as D,aM as N,g as T,D as Z,ay as H,aZ as K,o as X,u as Y,aA as J,aB as S,c as a,H as B,_ as O,Y as Q,Z as W,x as C,A as ee,X as ae,ai as se,a3 as s,a2 as oe,a9 as F,$ as te,a0 as le,a1 as M,a7 as i,a4 as re,V as ne,as as U,a8 as k,K as j,a_ as ie,a6 as ce,a$ as ue}from"./index-DM_g1lqN.js";import{_ as de}from"./logo_horizontal-BK2T4LU0.js";import{c as me,a as E,u as pe,b as $}from"./index.esm-Cft39HzR.js";import{V as fe}from"./VContainer-D_k5L0zM.js";import{V as ge}from"./VForm-DYahoI18.js";import{V as A,a as t}from"./VRow-BMdiV-pl.js";import{m as ve,V as R}from"./VCheckboxBtn-FhQZWY81.js";import{V as q}from"./VDivider-DhDJINfn.js";import"./_commonjsHelpers-Cpj98o6Y.js";const be=z({...D(),...N(ve(),["inline"])},"VCheckbox"),ke=T()({name:"VCheckbox",inheritAttrs:!1,props:be(),emits:{"update:modelValue":l=>!0,"update:focused":l=>!0},setup(l,u){let{attrs:g,slots:r}=u;const c=Z(l,"modelValue"),{isFocused:d,focus:m,blur:V}=H(l),x=K(),b=X(()=>l.id||`checkbox-${x}`);return Y(()=>{const[p,v]=J(g),y=S.filterProps(l),h=R.filterProps(l);return a(S,B({class:["v-checkbox",l.class]},p,y,{modelValue:c.value,"onUpdate:modelValue":o=>c.value=o,id:b.value,focused:d.value,style:l.style}),{...r,default:o=>{let{id:e,messagesId:f,isDisabled:n,isReadonly:w,isValid:_}=o;return a(R,B(h,{id:e.value,"aria-describedby":f.value,disabled:n.value,readonly:w.value},v,{error:_.value===!1,modelValue:c.value,"onUpdate:modelValue":P=>c.value=P,onFocus:m,onBlur:V}),r)}})}),{}}}),G={},Ve={key:0,id:"background",class:"d-flex justify-center align-center"},xe="890205288379-2bm447qt1rj7jkooc7luqej83if9inp4.apps.googleusercontent.com",L={__name:"login",setup(l){const u=te(),g=Q(),r=W(),c=C(!0),d=C(!1),m=C(!1),V=me({email:E().required("請輸入email").email("請輸入正確email格式"),password:E().required("請輸入密碼")}),{handleSubmit:x,isSubmitting:b}=pe({validationSchema:V}),p=$("email"),v=$("password"),y=async o=>{try{if(!o.code)throw new Error("未收到 Google 授權碼");const e=await g.googleLogin(o.code);e==="登入成功"?(r({text:"登入成功",snackbarProps:{color:"teal-lighten-1"}}),u.push("/profile")):r({text:e,snackbarProps:{color:"red-lighten-1"}})}catch(e){console.error("Google 登入錯誤:",e),r({text:"Google 登入失敗,請稍後再試",snackbarProps:{color:"red-lighten-1"}})}},h=x(async o=>{m.value?localStorage.setItem("savedEmail",o.email):localStorage.removeItem("savedEmail");const e=await g.login(o);e==="登入成功"?(r({text:e,snackbarProps:{color:"teal-lighten-1"}}),u.push("/profile")):e==="首次登入,請修改密碼"?u.push("/first-time-login"):r({text:e,snackbarProps:{color:"red-lighten-1"}})});return ee(async()=>{const o=localStorage.getItem("savedEmail");o&&(p.value.value=o,m.value=!0);const e=new URLSearchParams(window.location.search),f=e.get("token"),n=e.get("email"),w=e.get("avatar"),_=e.get("name"),P=parseInt(e.get("role"),10),I=e.get("message");if(I){r({text:I,snackbarProps:{color:"red-lighten-1"}}),c.value=!1;return}f&&(g.$patch({token:f,email:n,avatar:w,name:_,role:P}),await ae(),r({text:"登入成功",snackbarProps:{color:"teal-lighten-1"}}),u.push("/")),c.value=!1}),(o,e)=>{const f=le("router-link");return c.value?F("",!0):(M(),se("div",Ve,[a(fe,{width:"380",height:"510",class:"login-wrapper mx-2 mx-sm-0"},{default:s(()=>[a(ge,{disabled:i(b),onSubmit:re(i(h),["prevent"])},{default:s(()=>[a(A,{class:"px-4"},{default:s(()=>[a(t,{cols:"12",class:"pt-9 pb-6 pe-8 d-flex justify-center"},{default:s(()=>[a(ne,{src:de,"max-width":"200"})]),_:1}),a(t,{cols:"12"},{default:s(()=>[a(U,{modelValue:i(p).value.value,"onUpdate:modelValue":e[0]||(e[0]=n=>i(p).value.value=n),"error-messages":i(p).errorMessage.value,label:"email",density:"compact",variant:"underlined",clearable:""},null,8,["modelValue","error-messages"])]),_:1}),a(t,{cols:"12",class:"pb-1"},{default:s(()=>[a(U,{modelValue:i(v).value.value,"onUpdate:modelValue":e[1]||(e[1]=n=>i(v).value.value=n),"error-messages":i(v).errorMessage.value,type:d.value?"text":"password","append-inner-icon":d.value?"mdi-eye-off":"mdi-eye",label:"password",density:"compact",variant:"underlined","onClick:appendInner":e[2]||(e[2]=n=>d.value=!d.value)},null,8,["modelValue","error-messages","type","append-inner-icon"])]),_:1}),a(t,{cols:"12",class:"ps-2 pe-4 py-0 d-flex justify-space-between align-center"},{default:s(()=>[a(ke,{modelValue:m.value,"onUpdate:modelValue":e[3]||(e[3]=n=>m.value=n),label:"記住我","hide-details":"",density:"compact",color:"grey-darken-2",class:"text-caption"},null,8,["modelValue"]),a(f,{class:"text-caption text-blue-grey-darken-2",to:"./forgotPassword"},{default:s(()=>e[4]||(e[4]=[k(" 忘記密碼？ ")])),_:1})]),_:1}),a(t,{cols:"12",class:"text-center"},{default:s(()=>[a(j,{block:"",elevation:"2",color:"blue-grey-darken-2",type:"submit",loading:i(b)},{default:s(()=>e[5]||(e[5]=[k(" Login ")])),_:1},8,["loading"])]),_:1}),a(t,{cols:"12",class:"py-0 ps-2"}),a(t,null,{default:s(()=>[a(A,null,{default:s(()=>[a(t,{cols:"5"},{default:s(()=>[a(q,{class:"my-4"})]),_:1}),a(t,{cols:"2",class:"d-flex align-center justify-center pa-0",style:{"letter-spacing":"2px","font-size":"15px",opacity:"60%"}},{default:s(()=>e[6]||(e[6]=[k(" 或使用 ")])),_:1}),a(t,{cols:"5"},{default:s(()=>[a(q,{class:"my-4"})]),_:1})]),_:1})]),_:1}),a(t,{cols:"12",class:"text-center"},{default:s(()=>[a(i(ie),{callback:y,"client-id":xe,prompt:"",class:"w-100"},{default:s(()=>[a(j,{block:"",elevation:"2",color:"cyan-darken-3"},{default:s(()=>[a(ce,{icon:"mdi-google-plus",size:"24",class:"me-2"}),e[7]||(e[7]=k("Google 登入 "))]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["disabled","onSubmit"])]),_:1}),c.value?(M(),oe(ue,{key:0,indeterminate:"",size:"64",color:"primary",class:"center-screen"})):F("",!0)]))}}};typeof G=="function"&&G(L);const Fe=O(L,[["__scopeId","data-v-66a0c5d7"]]);export{Fe as default};