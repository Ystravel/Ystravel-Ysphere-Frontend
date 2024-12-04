import{_ as F,Y as G,Z as L,x as k,A as N,X as R,a2 as y,ak as T,c as a,a4 as s,a8 as o,a5 as Z,V as A,at as V,a9 as f,K as w,a7 as D,a3 as K,aa as _,$ as X,a1 as Y,aZ as H,az as J}from"./index-BcKy3KB6.js";import{_ as O}from"./logo_horizontal-BK2T4LU0.js";import{c as Q,a as h,u as W,b as C}from"./index.esm-C92W-jU0.js";import{V as ee}from"./VForm-BRYvB0yt.js";import{V as P,a as t}from"./VRow-few9vpG-.js";import{V as ae}from"./VCheckbox-DKfY1lBf.js";import{V as S}from"./VDivider-DlUm95VZ.js";import{V as se}from"./VContainer-Bf5MqMb4.js";import"./_commonjsHelpers-BosuxZz1.js";import"./VCheckboxBtn-DHSFu8vd.js";const I={},oe={key:0,id:"background",class:"d-flex justify-center align-center"},te="890205288379-2bm447qt1rj7jkooc7luqej83if9inp4.apps.googleusercontent.com",j={__name:"login",setup(le){const c=X(),v=G(),r=L(),d=k(!0),u=k(!1),m=k(!1),E=Q({email:h().required("請輸入email").email("請輸入正確email格式"),password:h().required("請輸入密碼")}),{handleSubmit:M,isSubmitting:i}=W({validationSchema:E}),p=C("email"),b=C("password"),U=async l=>{try{if(i.value=!0,!l.code)throw new Error("未收到 Google 授權碼");const e=await v.googleLogin(l.code);e==="登入成功"?(r({text:"登入成功",snackbarProps:{color:"teal-lighten-1"}}),c.push("/")):r({text:e,snackbarProps:{color:"red-lighten-1"}})}catch(e){console.error("Google 登入錯誤:",e),e.response&&e.response.data&&e.response.data.message==="您是初次登入，請使用初始密碼登入"?r({text:"您是初次登入，請使用初始密碼登入",snackbarProps:{color:"red-lighten-1"}}):r({text:"Google 登入失敗，請稍後再試",snackbarProps:{color:"red-lighten-1"}})}finally{i.value=!1}},$=M(async l=>{m.value?localStorage.setItem("savedEmail",l.email):localStorage.removeItem("savedEmail");const e=await v.login(l);e==="登入成功"?(r({text:e,snackbarProps:{color:"teal-lighten-1"}}),c.push("/")):e==="首次登入,請修改密碼"?c.push("/first-time-login"):r({text:e,snackbarProps:{color:"red-lighten-1"}})});return N(async()=>{const l=localStorage.getItem("savedEmail");l&&(p.value.value=l,m.value=!0);const e=new URLSearchParams(window.location.search),g=e.get("token"),n=e.get("email"),q=e.get("avatar"),z=e.get("name"),B=parseInt(e.get("role"),10),x=e.get("message");if(x){r({text:x,snackbarProps:{color:"red-lighten-1"}}),d.value=!1;return}g&&(v.$patch({token:g,email:n,avatar:q,name:z,role:B}),await R(),r({text:"登入成功",snackbarProps:{color:"teal-lighten-1"}}),c.push("/")),d.value=!1}),(l,e)=>{const g=Y("router-link");return d.value?_("",!0):(y(),T("div",oe,[a(se,{width:"380",height:"510",class:"login-wrapper mx-2 mx-sm-0"},{default:s(()=>[a(ee,{disabled:o(i),onSubmit:Z(o($),["prevent"])},{default:s(()=>[a(P,{class:"px-4"},{default:s(()=>[a(t,{cols:"12",class:"pt-9 pb-6 pe-8 d-flex justify-center"},{default:s(()=>[a(A,{src:O,"max-width":"200"})]),_:1}),a(t,{cols:"12"},{default:s(()=>[a(V,{modelValue:o(p).value.value,"onUpdate:modelValue":e[0]||(e[0]=n=>o(p).value.value=n),"error-messages":o(p).errorMessage.value,label:"email",density:"compact",variant:"underlined",clearable:""},null,8,["modelValue","error-messages"])]),_:1}),a(t,{cols:"12",class:"pb-1"},{default:s(()=>[a(V,{modelValue:o(b).value.value,"onUpdate:modelValue":e[1]||(e[1]=n=>o(b).value.value=n),"error-messages":o(b).errorMessage.value,type:u.value?"text":"password","append-inner-icon":u.value?"mdi-eye-off":"mdi-eye",label:"password",density:"compact",variant:"underlined","onClick:appendInner":e[2]||(e[2]=n=>u.value=!u.value)},null,8,["modelValue","error-messages","type","append-inner-icon"])]),_:1}),a(t,{cols:"12",class:"ps-2 pe-4 py-0 d-flex justify-space-between align-center"},{default:s(()=>[a(ae,{modelValue:m.value,"onUpdate:modelValue":e[3]||(e[3]=n=>m.value=n),label:"記住我","hide-details":"",density:"compact",color:"grey-darken-2",class:"text-caption"},null,8,["modelValue"]),a(g,{class:"text-caption text-blue-grey-darken-2",to:"./forgotPassword"},{default:s(()=>e[4]||(e[4]=[f(" 忘記密碼？ ")])),_:1})]),_:1}),a(t,{cols:"12",class:"text-center"},{default:s(()=>[a(w,{block:"",elevation:"2",color:"blue-grey-darken-2",type:"submit",loading:o(i),disabled:o(i)},{default:s(()=>e[5]||(e[5]=[f(" Login ")])),_:1},8,["loading","disabled"])]),_:1}),a(t,{cols:"12",class:"py-0 ps-2"}),a(t,null,{default:s(()=>[a(P,null,{default:s(()=>[a(t,{cols:"5"},{default:s(()=>[a(S,{class:"my-4"})]),_:1}),a(t,{cols:"2",class:"d-flex align-center justify-center pa-0",style:{"letter-spacing":"2px","font-size":"15px",opacity:"60%"}},{default:s(()=>e[6]||(e[6]=[f(" 或使用 ")])),_:1}),a(t,{cols:"5"},{default:s(()=>[a(S,{class:"my-4"})]),_:1})]),_:1})]),_:1}),a(t,{cols:"12",class:"text-center"},{default:s(()=>[a(o(H),{callback:U,"client-id":te,prompt:"",class:"w-100"},{default:s(()=>[a(w,{block:"",elevation:"2",color:"cyan-darken-3",loading:o(i),disabled:o(i)},{default:s(()=>[a(D,{icon:"mdi-google-plus",size:"24",class:"me-2"}),e[7]||(e[7]=f("Google 登入 "))]),_:1},8,["loading","disabled"])]),_:1})]),_:1})]),_:1})]),_:1},8,["disabled","onSubmit"])]),_:1}),d.value?(y(),K(J,{key:0,indeterminate:"",size:"64",color:"primary",class:"center-screen"})):_("",!0)]))}}};typeof I=="function"&&I(j);const ve=F(j,[["__scopeId","data-v-9dc917c4"]]);export{ve as default};
