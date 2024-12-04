import{Z as I,x,A as z,a3 as c,a4 as a,a2 as d,c as n,K as F,a8 as S,a9 as u,ad as g,ab as r,ap as $,aj as i,a7 as m,ak as v,aa as V,al as N,U as R,az as U,a0 as E,$ as P,aA as j}from"./index-BcKy3KB6.js";import{V as H}from"./VContainer-Bf5MqMb4.js";import{a as K,V as G}from"./VRow-few9vpG-.js";import{V as O,a as W,b as Z,d as q}from"./VList-CunOxmZC.js";import{V as J}from"./VAlert-BIAiUMQX.js";import"./VDivider-DlUm95VZ.js";var Q={};const X={class:"d-flex align-center mb-6"},Y={class:"text-h4 font-weight-bold"},ee={class:"d-flex flex-wrap gap-4"},te={class:"d-flex align-center"},ae={class:"d-flex align-center"},se={class:"d-flex align-center"},le={key:0,class:"d-flex align-center"},ne=["innerHTML"],oe={key:1,class:"d-flex justify-center py-12"},pe={__name:"[id]",setup(re){const k=E(),b=P(),{apiAuth:h}=j(),w=I(),s=x(null),f=x(!0),C={置頂:"red",重要:"orange",活動:"green",系統:"blue",一般:"grey"},B=t=>C[t]||"grey",L=t=>t==="一般"?"black":"white",p=t=>new Date(t).toLocaleString("zh-TW",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"}),A=t=>{if(t===0)return"0 Bytes";const e=1024,l=["Bytes","KB","MB","GB"],o=Math.floor(Math.log(t)/Math.log(e));return parseFloat((t/Math.pow(e,o)).toFixed(2))+" "+l[o]},T=t=>({image:"mdi-file-image",application:"mdi-file-document",text:"mdi-file-document-outline",video:"mdi-file-video",audio:"mdi-file-music"})[t]||"mdi-file",M=t=>`${Q.UPLOAD_URL}/${t}`,D=async()=>{var t,e;f.value=!0;try{const{data:l}=await h.get(`/announcement/${k.params.id}`);if(l.success)s.value=l.result;else throw new Error(l.message||"無法載入公告內容")}catch(l){console.error("Error fetching announcement:",l),w({text:((e=(t=l==null?void 0:l.response)==null?void 0:t.data)==null?void 0:e.message)||l.message||"無法載入公告內容",snackbarProps:{color:"error"}})}finally{f.value=!1}};return z(()=>{D()}),(t,e)=>(d(),c(H,null,{default:a(()=>[n(G,null,{default:a(()=>[n(K,{cols:"12"},{default:a(()=>[n(F,{color:"grey",variant:"text","prepend-icon":"mdi-arrow-left",class:"mb-4",onClick:e[0]||(e[0]=l=>S(b).back())},{default:a(()=>e[1]||(e[1]=[u(" 返回列表 ")])),_:1}),s.value?(d(),c(g,{key:0,class:"pa-6"},{default:a(()=>{var l;return[r("div",X,[n($,{color:B(s.value.type),"text-color":L(s.value.type),class:"me-4"},{default:a(()=>[u(i(s.value.type),1)]),_:1},8,["color","text-color"]),r("h2",Y,i(s.value.title),1)]),n(g,{class:"mb-6 pa-4 bg-grey-lighten-4",flat:""},{default:a(()=>{var o,_,y;return[r("div",ee,[r("div",te,[n(m,{class:"me-2"},{default:a(()=>e[2]||(e[2]=[u(" mdi-account ")])),_:1}),r("span",null,i((o=s.value.author)==null?void 0:o.name),1)]),r("div",ae,[n(m,{class:"me-2"},{default:a(()=>e[3]||(e[3]=[u(" mdi-office-building ")])),_:1}),r("span",null,i((_=s.value.department)==null?void 0:_.name)+" ("+i((y=s.value.department)==null?void 0:y.departmentId)+")",1)]),r("div",se,[n(m,{class:"me-2"},{default:a(()=>e[4]||(e[4]=[u(" mdi-clock-outline ")])),_:1}),r("span",null,i(p(s.value.createdAt)),1)]),s.value.expiryDate?(d(),v("div",le,[n(m,{class:"me-2"},{default:a(()=>e[5]||(e[5]=[u(" mdi-calendar-clock ")])),_:1}),r("span",null,"自動下架時間："+i(p(s.value.expiryDate)),1)])):V("",!0)])]}),_:1}),r("div",{class:"announcement-content mb-6",innerHTML:s.value.content},null,8,ne),(l=s.value.attachments)!=null&&l.length?(d(),c(g,{key:0,class:"pa-4 bg-grey-lighten-4",flat:""},{default:a(()=>[e[6]||(e[6]=r("div",{class:"text-subtitle-1 font-weight-bold mb-3"}," 附件列表 ",-1)),n(O,null,{default:a(()=>[(d(!0),v(R,null,N(s.value.attachments,o=>(d(),c(W,{key:o._id,href:M(o.path),target:"_blank","prepend-icon":T(o.fileType)},{default:a(()=>[n(Z,null,{default:a(()=>[u(i(o.filename),1)]),_:2},1024),n(q,null,{default:a(()=>[u(i(A(o.size))+" - "+i(p(o.uploadDate)),1)]),_:2},1024)]),_:2},1032,["href","prepend-icon"]))),128))]),_:1})]),_:1})):V("",!0)]}),_:1})):f.value?(d(),v("div",oe,[n(U,{indeterminate:"",color:"primary"})])):(d(),c(J,{key:2,type:"error",class:"mt-4"},{default:a(()=>e[7]||(e[7]=[u(" 無法載入公告內容 ")])),_:1}))]),_:1})]),_:1})]),_:1}))}};export{pe as default};