import{_ as D,Z as B,x as _,z,A as I,a2 as n,ak as c,c as r,a4 as s,ad as A,ab as o,ai as C,az as L,U as h,al as $,a3 as m,ag as F,V as M,a7 as v,aj as d,ap as N,a9 as p,aA as T}from"./index-BcKy3KB6.js";import{a as U,V as Y}from"./VRow-few9vpG-.js";import{V as j,a as R,b as S}from"./VList-CunOxmZC.js";import{V as P}from"./VAlert-BIAiUMQX.js";const E={key:0,class:"loading-overlay d-flex justify-center align-center"},H={key:0,class:"birthday-list"},W={class:"font-weight-medium",style:{"font-size":"14px"}},Z={class:"text-caption text-grey-darken-1"},q={class:"text-center mt-4 text-grey-darken-1",style:{"font-size":"14px"}},G={class:"text-pink-lighten-1 font-weight-bold"},J={__name:"BirthdayReminder",setup(K,{expose:x}){const{apiAuth:k}=T(),V=B(),u=_([]),g=_(!1),l=a=>{const e=new Date;e.setHours(0,0,0,0);const t=new Date(a),i=e.getFullYear();t.setFullYear(i),t<e&&t.setFullYear(i+1);const f=t-e;return Math.ceil(f/(1e3*60*60*24))},b=a=>{const e=new Date(a),t=l(a);return t===0?`${e.getMonth()+1}/${e.getDate()} (今天)`:`${e.getMonth()+1}/${e.getDate()} (${t}天後)`},w=a=>{const e=l(a);return e>=0&&e<=13},y=async()=>{g.value=!0;try{const{data:a}=await k.get("/user/basic-info");a.success&&(u.value=a.result.data.filter(e=>e.employmentStatus==="在職"&&e.birthDate&&w(e.birthDate)).sort((e,t)=>l(e.birthDate)-l(t.birthDate)))}catch(a){console.error("載入壽星資料失敗:",a),V({text:"載入壽星資料失敗",snackbarProps:{color:"error"}})}finally{g.value=!1}};return x({refreshData:y}),z(()=>window.location.href,()=>{y()}),I(()=>{y()}),(a,e)=>(n(),c("div",null,[r(Y,null,{default:s(()=>[r(U,{cols:"12"},{default:s(()=>[r(A,{class:"mx-auto px-8 py-6",elevation:"4",rounded:"lg"},{default:s(()=>[e[3]||(e[3]=o("h6",{class:"ps-1 mb-5 d-flex align-center"}," 近期壽星 ",-1)),r(C,{class:"pt-0 px-1 birthday-container"},{default:s(()=>[g.value?(n(),c("div",E,[r(L,{indeterminate:"",color:"blue-grey-darken-1"})])):(n(),c(h,{key:1},[u.value.length>0?(n(),c("div",H,[r(j,null,{default:s(()=>[(n(!0),c(h,null,$(u.value,t=>(n(),m(R,{key:t._id,class:"mb-2 rounded-lg",variant:"outlined"},{prepend:s(()=>[r(F,{size:"36",color:"blue-grey-darken-1"},{default:s(()=>[t.avatar?(n(),m(M,{key:0,src:t.avatar,cover:""},null,8,["src"])):(n(),m(v,{key:1,icon:"mdi-account",color:"blue-grey-darken-1",size:"20"}))]),_:2},1024)]),default:s(()=>[r(S,{class:"d-flex justify-space-between align-center"},{default:s(()=>{var i,f;return[o("div",null,[o("span",W,d(t.name),1),o("div",Z,d(((i=t.department)==null?void 0:i.name)||"未分配部門")+"("+d((f=t.department)==null?void 0:f.departmentId)+") ",1)]),r(N,{size:"small",color:l(t.birthDate)===0?"pink-lighten-1":"teal-lighten-2",variant:"flat",class:"ms-2 font-weight-medium"},{default:s(()=>[p(d(b(t.birthDate)),1)]),_:2},1032,["color"])]}),_:2},1024)]),_:2},1024))),128))]),_:1}),o("div",q,[e[0]||(e[0]=p(" 未來兩週共 ")),o("span",G,d(u.value.length),1),e[1]||(e[1]=p(" 位壽星 "))])])):(n(),m(P,{key:1,color:"blue-grey-darken-1",variant:"tonal",class:"mb-0 mt-4"},{prepend:s(()=>[r(v,{icon:"mdi-information",size:"18",color:"blue-grey-lighten-1"})]),default:s(()=>[e[2]||(e[2]=p(" 未來兩週內無壽星 "))]),_:1}))],64))]),_:1})]),_:1})]),_:1})]),_:1})]))}},te=D(J,[["__scopeId","data-v-bb053d09"]]);export{te as B};
