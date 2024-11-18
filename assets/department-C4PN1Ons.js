import{_ as Je,P as Ke,Z as Re,o as X,x as r,z as Y,A as We,ar as Ze,a2 as F,a3 as n,an as Ge,a1 as S,c as a,aa as k,a8 as i,a7 as s,ab as be,a6 as M,a9 as _,K as g,as as O,ah as N,ai as Ve,ap as Qe,a4 as L,ad as ee,ag as ae,aj as Xe,U as Ye,aq as le,a5 as te,am as ne,at as ea}from"./index-KpcRHP95.js";import{l as aa}from"./lodash-DHyxJ22h.js";import{c as ke,a as se,b as la,u as Ce,d as R}from"./vee-validate-a7jexSC_.js";import{C as xe}from"./ConfirmDeleteDialogWithTextField-BW_efJhR.js";import{V as ta}from"./VContainer-FPo5tfJf.js";import{a as f,V as W}from"./VRow-CynKIbuk.js";import{V as Ie,a as na}from"./VDataTableServer-241FbY1x.js";import{V as oe}from"./VForm-BOycJZ2W.js";import{T as we}from"./index-BnxNDfRO.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./VList-CuPXRiud.js";import"./VDivider-DKkOhbWa.js";import"./VCheckboxBtn-B49bgf5M.js";import"./VTooltip-DTSQSSKO.js";const sa={key:0},oa={class:"text-center"},ua={class:"ps-4 py-3 card-title"},ra={__name:"department",setup(da){const{smAndUp:B}=Ke(),{apiAuth:C}=Ge(),p=Re(),x=X(()=>B.value?"default":"small"),T=r(null),H=r({open:!1}),I=r({open:!1,id:null,name:""}),w=r([]),ue=r(!1),J=r({open:!1}),re=[{id:1,name:"永信台北"},{id:2,name:"永信桃園"},{id:3,name:"永信台中"},{id:4,name:"永信高雄"},{id:5,name:"好漾台北"},{id:6,name:"好漾台中"},{id:7,name:"銳皇國際"},{id:8,name:"集睿創映"}],q=r(""),E=r(null),Pe={class:"header-bg"},U=r(!1),P=r(10),y=r([{key:"departmentId",order:"asc"}]),v=r(1),Z=r(0),z=r(""),de=[{title:"編號",key:"departmentId",align:"start",width:"15%",sortable:!0},{title:"公司",key:"companyId",align:"start",width:"25%",sortable:!0},{title:"部門",key:"name",align:"start",width:"30%",sortable:!0},{title:"人數",key:"memberCount",align:"start",sortable:!0},{title:"操作",key:"actions",align:"center",sortable:!1}],De=X(()=>B.value?de:de.filter(l=>["departmentId","name","memberCount","actions"].includes(l.key))),Se=l=>{console.log("表格更新選項:",l),(l.page!==v.value||l.itemsPerPage!==P.value||JSON.stringify(l.sortBy)!==JSON.stringify(y.value))&&(v.value=l.page,P.value=l.itemsPerPage,y.value=l.sortBy,V(!1))},G=r([]),m=r({open:!1,id:null}),K=r(!1),D=r(null),Ue=ke({name:se().required("請輸入部門名稱"),companyId:la().required("請選擇所屬公司"),departmentId:se().nullable()}),ze=ke({companyName:se().required("請輸入公司名稱")}),{handleSubmit:he,isSubmitting:ie,resetForm:$e}=Ce({validationSchema:ze}),{handleSubmit:Ne,isSubmitting:me,resetForm:pe}=Ce({validationSchema:Ue}),b=R("companyName"),j=R("name"),A=R("companyId"),h=R("departmentId",void 0,{validateOnValueUpdate:!1}),ve=Object.fromEntries(re.map(l=>[l.id,l.name])),V=async(l=!1)=>{var e,o,u,c,t,$;l&&(v.value=1),U.value=!0;try{console.log("載入部門列表，參數:",{page:v.value,itemsPerPage:P.value,sortBy:((e=y.value[0])==null?void 0:e.key)||"companyId",sortOrder:((o=y.value[0])==null?void 0:o.order)||"asc",search:z.value,companyId:q.value});const{data:d}=await C.get("/department/all",{params:{page:v.value,itemsPerPage:P.value,sortBy:((u=y.value[0])==null?void 0:u.key)||"companyId",sortOrder:((c=y.value[0])==null?void 0:c.order)||"asc",search:z.value,companyId:q.value}});if(d.success&&d.result){G.value=d.result.data,Z.value=d.result.totalItems;const Q=Math.ceil(d.result.totalItems/P.value);v.value>Q&&Q>0&&(v.value=Q,l||await V(!1))}else throw new Error(d.message||"載入失敗")}catch(d){console.error("載入部門列表錯誤:",d),p({text:(($=(t=d==null?void 0:d.response)==null?void 0:t.data)==null?void 0:$.message)||"載入部門列表失敗",snackbarProps:{color:"red-lighten-1"}}),G.value=[],Z.value=0}finally{U.value=!1}},Be=async()=>{try{const{data:l}=await C.get("/company/all");w.value=l.result}catch{p({text:"載入公司失敗",snackbarProps:{color:"red-lighten-1"}})}},Fe=()=>{H.value.open=!0,Be()},ce=()=>{H.value.open=!1,b.value.value="",$e(),T.value=null},Me=l=>{T.value=l,J.value.open=!0,b.value.value=l.name},Oe=l=>{Me(l)},Te=()=>{m.value={open:!0,id:null},pe()},qe=l=>{m.value={open:!0,id:l._id},E.value={name:l.name,companyId:l.companyId,departmentId:l.departmentId},j.value.value=l.name,A.value.value=l.companyId,h.value.value=l.departmentId,D.value=l},ge=()=>{m.value.open=!1,pe(),D.value=null,E.value=null},Ee=l=>{D.value=l,K.value=!0},je=X(()=>{if(!m.value.id)return!0;if(!E.value)return!1;const l={name:j.value.value,companyId:A.value.value,departmentId:h.value.value||""};return Object.keys(E.value).some(e=>{const o=E.value[e]??"",u=l[e]??"";return o!==u})}),fe=he(async l=>{var e,o;ue.value=!0;try{if(T.value){const{data:u}=await C.patch(`/company/${T.value._id}`,{name:b.value.value}),c=w.value.findIndex(t=>t._id===T.value._id);c!==-1&&(w.value[c].name=u.result.name),p({text:"公司名稱更新成功",snackbarProps:{color:"teal-lighten-1"}})}else{const{data:u}=await C.post("/company",{name:l.companyName});w.value.push(u.result),p({text:"新增公司成功",snackbarProps:{color:"teal-lighten-1"}})}ce()}catch(u){p({text:((o=(e=u==null?void 0:u.response)==null?void 0:e.data)==null?void 0:o.message)||"操作失敗",snackbarProps:{color:"red-lighten-1"}})}finally{ue.value=!1}}),Ae=Ne(async l=>{var e,o;U.value=!0;try{m.value.id?await C.patch(`/department/${m.value.id}`,{name:l.name,companyId:l.companyId,departmentId:l.departmentId}):await C.post("/department",{name:l.name,companyId:l.companyId}),await V(),ge(),p({text:`部門${m.value.id?"修改":"新增"}成功`,snackbarProps:{color:"teal-lighten-1"}})}catch(u){const c=((o=(e=u==null?void 0:u.response)==null?void 0:e.data)==null?void 0:o.message)||"操作失敗";p({text:c,snackbarProps:{color:"red-lighten-1"}})}U.value=!1}),_e=l=>{I.value={open:!0,id:l._id,name:l.name}},Le=async()=>{var l,e;try{await C.delete(`/company/${I.value.id}`),w.value=w.value.filter(o=>o._id!==I.value.id),p({text:"刪除公司成功",snackbarProps:{color:"teal-lighten-1"}}),I.value.open=!1}catch(o){p({text:((e=(l=o==null?void 0:o.response)==null?void 0:l.data)==null?void 0:e.message)||"刪除失敗",snackbarProps:{color:"red-lighten-1"}})}},He=async()=>{var l,e;U.value=!0;try{await C.delete(`/department/${D.value._id}`),await V(),p({text:"部門刪除成功",snackbarProps:{color:"teal-lighten-1"}})}catch(o){p({text:((e=(l=o==null?void 0:o.response)==null?void 0:l.data)==null?void 0:e.message)||"刪除失敗",snackbarProps:{color:"red-lighten-1"}})}K.value=!1,D.value=null,U.value=!1},ye=aa.debounce(()=>{V(!0)},300);return Y(z,()=>{v.value=1,ye()}),Y([P,y],()=>{V(!0)}),Y([z,q],()=>{v.value=1,V(!0)}),We(()=>{V()}),Ze(()=>{ye.cancel()}),(l,e)=>(S(),F(ta,{"max-width":"1400"},{default:n(()=>{var o,u,c;return[a(W,{class:"elevation-4 rounded-xl py-4 py-sm-8 px-1 px-sm-10 mt-2 mt-sm-6 mx-0 mx-sm-4 mx-md-10 mb-4 bg-white"},{default:n(()=>[a(f,{cols:"12",class:"ps-3 pb-6 d-flex align-center"},{default:n(()=>[e[17]||(e[17]=k("h3",null," 公司部門管理 ",-1)),e[18]||(e[18]=i()),s(B)?be((S(),F(M,{key:0,icon:"mdi-information",size:"small",color:"blue-grey-darken-2",class:"ms-4"},null,512)),[[we,"人數為「在職」人數"]]):_("",!0)]),_:1}),a(f,{cols:"12"},{default:n(()=>[a(W,null,{default:n(()=>[a(f,null,{default:n(()=>[a(W,null,{default:n(()=>[a(f,null,{default:n(()=>[a(g,{"prepend-icon":"mdi-account-multiple-plus",variant:"outlined",color:"blue-grey-darken-2",onClick:Te},{default:n(()=>e[19]||(e[19]=[i(" 新增部門 ")])),_:1}),a(g,{"prepend-icon":"mdi-domain",variant:"outlined",color:"blue-grey-darken-2",onClick:Fe},{default:n(()=>e[20]||(e[20]=[i(" 公司管理 ")])),_:1})]),_:1}),s(B)?_("",!0):(S(),F(f,{key:0,cols:"6"})),a(f,{cols:"6",sm:"4",md:"3",lg:"2"},{default:n(()=>[a(Ie,{modelValue:q.value,"onUpdate:modelValue":[e[0]||(e[0]=t=>q.value=t),e[1]||(e[1]=t=>V(!0))],items:[{name:"全部",id:""},...re],label:"選擇公司","item-title":"name","item-value":"id",variant:"outlined",density:"compact","hide-details":"",clearable:""},null,8,["modelValue","items"])]),_:1}),a(f,{cols:"6",sm:"4",md:"3",class:"d-flex justify-end align-center ps-0"},{default:n(()=>[s(B)?be((S(),F(M,{key:0,icon:"mdi-information",size:"small",color:"blue-grey-darken-2",class:"me-4 ps-2"},null,512)),[[we,"可搜尋部門名稱或編號","top"]]):_("",!0),a(O,{modelValue:z.value,"onUpdate:modelValue":e[2]||(e[2]=t=>z.value=t),label:"搜尋","append-inner-icon":"mdi-magnify","base-color":"#666",color:"blue-grey-darken-3",variant:"outlined",density:"compact","hide-details":"",clearable:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),a(f,{cols:"12"},{default:n(()=>[a(na,{"items-per-page":P.value,"onUpdate:itemsPerPage":e[3]||(e[3]=t=>P.value=t),"sort-by":y.value,"onUpdate:sortBy":e[4]||(e[4]=t=>y.value=t),page:v.value,headers:De.value,items:G.value,"header-props":Pe,"items-length":Z.value,"items-per-page-options":[10,20,50],loading:U.value,search:z.value,class:"rounded-ts-lg rounded-te-lg py-3",hover:"",density:"compact","onUpdate:options":Se},{item:n(({item:t,index:$})=>[k("tr",{class:Qe({"odd-row":$%2===0,"even-row":$%2!==0})},[k("td",null,N(t.departmentId||"尚未設定"),1),s(B)?(S(),Ve("td",sa,N(s(ve)[t.companyId]||"未知公司"),1)):_("",!0),k("td",null,N(t.name),1),k("td",null,N(t.memberCount||0)+" 人",1),k("td",oa,[a(W,{class:"d-flex justify-center my-1"},{default:n(()=>[a(f,{cols:"6",sm:"4",md:"3",lg:"2",class:"pa-0 mx-1"},{default:n(()=>[a(g,{icon:"",color:"light-blue-darken-4",variant:"plain",width:"28",height:"32",size:x.value,ripple:!1,onClick:d=>qe(t)},{default:n(()=>[a(M,null,{default:n(()=>e[21]||(e[21]=[i("mdi-pencil")])),_:1})]),_:2},1032,["size","onClick"])]),_:2},1024),a(f,{cols:"6",sm:"4",md:"3",lg:"2",class:"pa-0 mx-1"},{default:n(()=>[a(g,{icon:"",color:"red-lighten-1",variant:"plain",width:"28",height:"32",size:x.value,ripple:!1,onClick:d=>Ee(t)},{default:n(()=>[a(M,null,{default:n(()=>e[22]||(e[22]=[i("mdi-delete")])),_:1})]),_:2},1032,["size","onClick"])]),_:2},1024)]),_:2},1024)])],2)]),_:1},8,["items-per-page","sort-by","page","headers","items","items-length","loading","search"])]),_:1})]),_:1})]),_:1})]),_:1}),a(ne,{modelValue:H.value.open,"onUpdate:modelValue":e[6]||(e[6]=t=>H.value.open=t),persistent:"",width:"360"},{default:n(()=>[a(oe,{onSubmit:L(s(fe),["prevent"])},{default:n(()=>[a(ee,{class:"rounded-lg pa-4 pt-6"},{default:n(()=>[e[27]||(e[27]=k("div",{class:"ps-4 py-3 card-title"}," 公司管理 ",-1)),a(ae,{class:"px-3"},{default:n(()=>[(S(!0),Ve(Ye,null,Xe(w.value,(t,$)=>(S(),F(ea,{key:$,class:"me-2 my-1",color:"blue-grey-lighten-4"},{default:n(()=>[i(N(t.companyId)+" "+N(t.name)+" ",1),a(M,{small:"",class:"ms-2",onClick:L(d=>Oe(t),["stop"])},{default:n(()=>e[23]||(e[23]=[i(" mdi-pencil ")])),_:2},1032,["onClick"]),a(M,{small:"",class:"ms-2",onClick:L(d=>_e(t),["stop"])},{default:n(()=>e[24]||(e[24]=[i(" mdi-delete ")])),_:2},1032,["onClick"])]),_:2},1024))),128)),a(O,{modelValue:s(b).value.value,"onUpdate:modelValue":e[5]||(e[5]=t=>s(b).value.value=t),"error-messages":s(b).errorMessage.value,label:"公司名稱",required:"",variant:"outlined",density:"compact",class:"mb-4"},null,8,["modelValue","error-messages"])]),_:1}),a(le,null,{default:n(()=>[a(te),a(g,{color:"red-lighten-1",variant:"outlined",size:x.value,loading:s(ie),onClick:ce},{default:n(()=>e[25]||(e[25]=[i(" 取消 ")])),_:1},8,["size","loading"]),a(g,{color:"teal-darken-1",variant:"outlined",type:"submit",size:x.value,loading:s(ie)},{default:n(()=>e[26]||(e[26]=[i(" 新增 ")])),_:1},8,["size","loading"])]),_:1})]),_:1})]),_:1},8,["onSubmit"])]),_:1},8,["modelValue"]),a(ne,{modelValue:m.value.open,"onUpdate:modelValue":e[10]||(e[10]=t=>m.value.open=t),persistent:"",width:"360"},{default:n(()=>[a(oe,{onSubmit:L(s(Ae),["prevent"])},{default:n(()=>[a(ee,{class:"rounded-lg pa-4 pt-6"},{default:n(()=>[k("div",ua,N(m.value.id?"編輯部門":"新增部門"),1),a(ae,{class:"px-3"},{default:n(()=>[m.value.id?(S(),F(O,{key:0,modelValue:s(h).value.value,"onUpdate:modelValue":e[7]||(e[7]=t=>s(h).value.value=t),"error-messages":s(h).errorMessage.value,label:"部門編號",variant:"outlined",density:"compact",class:"mb-4"},null,8,["modelValue","error-messages"])):_("",!0),a(Ie,{modelValue:s(A).value.value,"onUpdate:modelValue":e[8]||(e[8]=t=>s(A).value.value=t),"error-messages":s(A).errorMessage.value,items:w.value,label:"選擇公司","item-title":"name","item-value":"companyId",variant:"outlined",density:"compact",class:"mb-4"},null,8,["modelValue","error-messages","items"]),a(O,{modelValue:s(j).value.value,"onUpdate:modelValue":e[9]||(e[9]=t=>s(j).value.value=t),"error-messages":s(j).errorMessage.value,label:"部門名稱",required:"",variant:"outlined",density:"compact"},null,8,["modelValue","error-messages"])]),_:1}),a(le,null,{default:n(()=>[a(te),a(g,{color:"red-lighten-1",variant:"outlined",size:x.value,loading:s(me),onClick:ge},{default:n(()=>e[28]||(e[28]=[i(" 取消 ")])),_:1},8,["size","loading"]),a(g,{color:"teal-darken-1",variant:"outlined",type:"submit",size:x.value,class:"ms-1",loading:s(me),disabled:m.value.id&&!je.value},{default:n(()=>e[29]||(e[29]=[i(" 送出 ")])),_:1},8,["size","loading","disabled"])]),_:1})]),_:1})]),_:1},8,["onSubmit"])]),_:1},8,["modelValue"]),a(ne,{modelValue:J.value.open,"onUpdate:modelValue":e[14]||(e[14]=t=>J.value.open=t),persistent:"",width:"360"},{default:n(()=>[a(oe,{onSubmit:L(s(fe),["prevent"])},{default:n(()=>[a(ee,{class:"rounded-lg pa-4 pt-6"},{default:n(()=>[e[32]||(e[32]=k("div",{class:"ps-4 py-3 card-title"}," 編輯公司 ",-1)),a(ae,{class:"px-3"},{default:n(()=>[a(O,{modelValue:s(h).value.value,"onUpdate:modelValue":e[11]||(e[11]=t=>s(h).value.value=t),label:"公司編號",variant:"outlined",density:"compact",class:"mb-4"},null,8,["modelValue"]),a(O,{modelValue:s(b).value.value,"onUpdate:modelValue":e[12]||(e[12]=t=>s(b).value.value=t),"error-messages":s(b).errorMessage.value,label:"公司名稱",required:"",variant:"outlined",density:"compact"},null,8,["modelValue","error-messages"])]),_:1}),a(le,null,{default:n(()=>[a(te),a(g,{color:"red-lighten-1",variant:"outlined",size:x.value,onClick:e[13]||(e[13]=t=>J.value.open=!1)},{default:n(()=>e[30]||(e[30]=[i(" 取消 ")])),_:1},8,["size"]),a(g,{color:"teal-darken-1",variant:"outlined",type:"submit",size:x.value},{default:n(()=>e[31]||(e[31]=[i(" 修改 ")])),_:1},8,["size"])]),_:1})]),_:1})]),_:1},8,["onSubmit"])]),_:1},8,["modelValue"]),a(xe,{modelValue:I.value.open,"onUpdate:modelValue":e[15]||(e[15]=t=>I.value.open=t),title:"確認刪除公司",message:`確定要刪除公司「${I.value.name}」嗎？此操作無法復原。`,"expected-name":I.value.name||"","input-label":"公司名稱",onConfirm:Le},null,8,["modelValue","message","expected-name"]),a(xe,{modelValue:K.value,"onUpdate:modelValue":e[16]||(e[16]=t=>K.value=t),title:"確認刪除部門",message:`確定要刪除「${s(ve)[(o=D.value)==null?void 0:o.companyId]}」的「${(u=D.value)==null?void 0:u.name}」嗎？此操作無法復原。`,"expected-name":((c=D.value)==null?void 0:c.name)||"","input-label":"部門名稱",onConfirm:He},null,8,["modelValue","message","expected-name"])]}),_:1}))}},wa=Je(ra,[["__scopeId","data-v-03be1878"]]);export{wa as default};
