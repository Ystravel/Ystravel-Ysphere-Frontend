import{_ as rl,Z as dl,P as il,o as Z,x as m,z as ye,A as ml,ar as pl,a2 as K,a3 as n,an as vl,a0 as cl,a1 as P,c as l,ad as Ve,ag as _e,aa as v,b1 as fl,at as Re,a8 as p,K as V,a6 as L,a7 as s,ab as $e,a9 as _,as as c,ah as x,ai as xe,ap as gl,a4 as bl,H as Ie,aq as Me,a5 as he,am as Be}from"./index-BbYFUoo0.js";import{l as yl}from"./lodash-DHyxJ22h.js";import{c as Vl,a as D,d as xl,u as Dl,b as d}from"./index.esm-gxUaXG-T.js";import{C as kl}from"./ConfirmDeleteDialogWithTextField-BIeUYs2e.js";import{V as Cl}from"./VContainer-DU3-tywA.js";import{a as o,V as f}from"./VRow-Drlzrpaq.js";import{V as E,a as Ul}from"./VDataTableServer-ClSdMEXw.js";import{V as wl}from"./VForm-Cm3_fZhT.js";import{V as Q}from"./VDivider-BIE2voOQ.js";import{V as Nl}from"./VTooltip-CLYGQViH.js";import{V as Al}from"./VHover-CTIlevuf.js";import{T as Fe}from"./index-CnAOXFih.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./VList-lcJOjVOD.js";import"./VCheckboxBtn-BgaenO2j.js";const Sl={class:"d-flex flex-column gap-2"},zl={key:0},Pl={key:1},El={key:2},Tl={class:"d-flex align-center overflow-hidden h-25"},_l={class:"card-title ps-4 py-3"},Rl={class:"list-content ps-4 py-3 mb-4"},$l={class:"text-cyan-darken-2 font-weight-bold"},Il={__name:"tempUser",setup(Ml){const{apiAuth:w}=vl(),g=dl(),{smAndUp:De,mdAndUp:R,lgAndUp:X}=il(),S=Z(()=>De.value?"default":"small"),$=m(!1),I=m(null),q=m(!1),Je={class:"header-bg"},Y=[{title:"待面試",value:"待面試"},{title:"待入職",value:"待入職"},{title:"待離職",value:"待離職"},{title:"待留停",value:"待留停"},{title:"待退休",value:"待退休"},{title:"已處理",value:"已處理"},{title:"已取消",value:"已取消"}],Oe=t=>{var e;return((e=Y.find(u=>u.value===t))==null?void 0:e.title)||t},Ze=[{title:"男性",value:"男性"},{title:"女性",value:"女性"}],y=m({open:!1,id:""}),k=m({open:!1,id:"",name:"",loading:!1}),C=m(null),U=m([]),Le=m([]),ee=m([]),qe=Z(()=>[{title:"全部",value:""},...[...ee.value].sort((t,e)=>{const u=t.companyId||"",b=e.companyId||"";return u.localeCompare(b)}).map(t=>({title:t.name,value:t._id}))]),He=Z(()=>[...ee.value].sort((t,e)=>{const u=t.companyId||"",b=e.companyId||"";return u.localeCompare(b)}).map(t=>({title:t.name,value:t._id}))),je=Z(()=>X.value?"1200":R.value?"800":De.value?"600":"100%"),We=Vl({name:D().required("請輸入姓名"),personalEmail:D().nullable().transform(t=>t||null).test("email","請輸入正確的 email 格式",t=>t?/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/.test(t):!0),gender:D().nullable(),cellphone:D().nullable().transform(t=>t||null).test("cellphone","手機號碼格式不正確",t=>t?/^\d{10}$/.test(t):!0),plannedCompany:D().nullable(),plannedDepartment:D().nullable(),plannedJobTitle:D().nullable(),plannedSalary:D().nullable(),effectiveDate:xl().nullable(),status:D().oneOf(["待面試","待入職","待離職","待留停","待退休","待處理","已處理","已取消"]).default("待入職"),IDNumber:D().nullable().transform(t=>t||null).test("IDNumber","身分證號碼格式不正確",t=>t?/^[A-Za-z][12]\d{8}$/.test(t):!0)}),{handleSubmit:Ge,isSubmitting:le,resetForm:ae}=Dl({validationSchema:We,initialValues:{name:"",englishName:null,personalEmail:null,gender:null,cellphone:null,birthDate:null,IDNumber:null,permanentAddress:null,contactAddress:null,plannedCompany:null,plannedDepartment:null,plannedJobTitle:null,plannedSalary:null,plannedExtNumber:null,effectiveDate:null,status:"待入職",seatDescription:null,note:null,emergencyName:null,emergencyCellphone:null,emergencyRelationship:null}}),te=d("name"),ne=d("englishName"),se=d("personalEmail"),M=d("gender"),oe=d("cellphone"),ke=d("birthDate"),ue=d("IDNumber"),H=d("permanentAddress"),re=d("contactAddress"),Ce=d("plannedCompany"),h=d("plannedDepartment"),de=d("plannedJobTitle"),ie=d("plannedSalary"),me=d("plannedExtNumber"),pe=d("effectiveDate"),ve=d("status"),Ue=d("seatDescription"),we=d("note"),Ne=d("emergencyName"),Ae=d("emergencyCellphone"),Se=d("emergencyRelationship"),ce=m(10),j=m([{key:"name",order:"asc"}]),B=m(1),F=m([]),W=m(!0),fe=m(0),ze=m(""),ge=[{title:"姓名",align:"left",sortable:!0,key:"name"},{title:"Email",align:"left",sortable:!0,key:"personalEmail"},{title:"手機",align:"left",sortable:!0,key:"cellphone"},{title:"預計任職公司",align:"left",sortable:!0,key:"plannedCompany.name"},{title:"預計任職部門",align:"left",sortable:!0,key:"plannedDepartment.name"},{title:"預計分機",align:"left",sortable:!0,key:"plannedExtNumber"},{title:"生效日期",align:"left",sortable:!0,key:"effectiveDate"},{title:"狀態",align:"left",sortable:!0,key:"status"},{title:"操作",align:"left",sortable:!1,key:"action"}],r=m({plannedCompany:"",plannedDepartment:"",gender:"",status:"",effectiveDateRange:[]}),J=m(""),Ke=Z(()=>X.value?ge:R.value?ge.filter(t=>t.key!=="cellphone"):ge.filter(t=>!["cellphone","plannedCompany.name","plannedDepartment.name"].includes(t.key))),Qe=async()=>{try{const{data:t}=await w.get("/department/all");Le.value=t.result}catch(t){console.error("加載部門失敗",t),g({text:"加載部門失敗",snackbarProps:{color:"red-lighten-1"}})}},Xe=async()=>{try{const{data:t}=await w.get("/company/all");t.success&&(ee.value=t.result)}catch(t){console.error("載入公司列表失敗:",t),g({text:"載入公司列表失敗",snackbarProps:{color:"red-lighten-1"}})}},T=async(t=!1)=>{t&&(B.value=1),await O()},O=async()=>{var t,e,u,b,N;W.value=!0;try{const a={page:B.value,itemsPerPage:ce.value,sortBy:((t=j.value[0])==null?void 0:t.key)||"createdAt",sortOrder:((e=j.value[0])==null?void 0:e.order)||"desc",quickSearch:J.value||void 0};r.value.plannedCompany&&(a.plannedCompany=r.value.plannedCompany),r.value.plannedDepartment&&(a.plannedDepartment=r.value.plannedDepartment),r.value.gender&&(a.gender=r.value.gender),r.value.status&&(a.status=r.value.status),((u=r.value.effectiveDateRange)==null?void 0:u.length)===2&&(a.startDate=r.value.effectiveDateRange[0],a.endDate=r.value.effectiveDateRange[1]);const{data:i}=await w.get("/tempUser/all",{params:a});i.success&&(F.value=i.result.data,fe.value=i.result.totalItems)}catch(a){console.error("搜尋失敗:",a),g({text:((N=(b=a==null?void 0:a.response)==null?void 0:b.data)==null?void 0:N.message)||"搜尋失敗",snackbarProps:{color:"red-lighten-1"}}),F.value=[],fe.value=0}finally{W.value=!1}},Ye=Ge(async t=>{var e,u,b,N;try{const a=Object.entries(t).reduce((i,[A,z])=>(i[A]=z===""?null:z,i),{});if($.value){const{data:i}=await w.patch(`/tempUser/${y.value.id}`,{...a,plannedCompany:C.value||null,plannedDepartment:h.value.value||null});if(i.success){const A=F.value.findIndex(z=>z._id===y.value.id);A!==-1&&(F.value[A]=i.result),g({text:"臨時員工資料更新成功",snackbarProps:{color:"teal-lighten-1"}})}}else{const{data:i}=await w.post("/tempUser",{...a,plannedCompany:C.value||null,plannedDepartment:h.value.value||null});i.success&&(await T(!0),g({text:"臨時員工資料新增成功",snackbarProps:{color:"teal-lighten-1"}}))}be()}catch(a){if(console.error("提交失敗:",a),((e=a.response)==null?void 0:e.status)===400){let i="資料驗證失敗：";(u=a.response.data)!=null&&u.message&&(i+=a.response.data.message),g({text:i,snackbarProps:{color:"red-lighten-1"}})}else g({text:((N=(b=a==null?void 0:a.response)==null?void 0:b.data)==null?void 0:N.message)||"操作失敗",snackbarProps:{color:"red-lighten-1"}})}}),Pe=async t=>{var e;y.value.open=!0,t?($.value=!0,y.value.id=t._id,t.plannedCompany&&(C.value=t.plannedCompany._id,await G(t.plannedCompany._id)),ae({values:{name:t.name,englishName:t.englishName||"",personalEmail:t.personalEmail,gender:t.gender,cellphone:t.cellphone,birthDate:t.birthDate,IDNumber:t.IDNumber||"",permanentAddress:t.permanentAddress||"",contactAddress:t.contactAddress||"",plannedDepartment:(e=t.plannedDepartment)==null?void 0:e._id,plannedJobTitle:t.plannedJobTitle,plannedSalary:t.plannedSalary,plannedExtNumber:t.plannedExtNumber||"",effectiveDate:t.effectiveDate,status:t.status,seatDescription:t.seatDescription||"",note:t.note||"",emergencyName:t.emergencyName||"",emergencyCellphone:t.emergencyCellphone||"",emergencyRelationship:t.emergencyRelationship||""}}),I.value={...t}):($.value=!1,y.value.id="",C.value=null,I.value=null,U.value=[],ae())},be=()=>{y.value.open=!1,C.value=null,U.value=[],I.value=null,ae()},el=t=>{k.value={open:!0,id:t._id,name:t.name,loading:!1}},Ee=()=>{k.value={open:!1,id:"",name:"",loading:!1}},ll=async()=>{var t,e;k.value.loading=!0;try{const{data:u}=await w.post(`/tempUser/${k.value.id}/convert`);if(u.success)g({text:"成功轉換為正式員工",snackbarProps:{color:"teal-lighten-1"}}),await T(),Ee();else throw new Error(u.message)}catch(u){console.error("轉換失敗:",u),g({text:((e=(t=u==null?void 0:u.response)==null?void 0:t.data)==null?void 0:e.message)||u.message||"轉換失敗",snackbarProps:{color:"red-lighten-1"}})}finally{k.value.loading=!1}},al=async()=>{var t,e;try{await w.delete(`/tempUser/${y.value.id}`),await T(),g({text:"臨時員工資料刪除成功",snackbarProps:{color:"teal-lighten-1"}}),be()}catch(u){console.error("刪除失敗:",u),g({text:((e=(t=u==null?void 0:u.response)==null?void 0:t.data)==null?void 0:e.message)||"刪除失敗",snackbarProps:{color:"red-lighten-1"}})}finally{q.value=!1}},tl=t=>t?new Date(t).toLocaleDateString("zh-TW"):"-",nl=()=>{H.value.value&&(re.value.value=H.value.value)},sl=t=>{B.value=t,T()},ol=()=>{r.value={plannedCompany:"",plannedDepartment:"",gender:"",status:"",effectiveDateRange:[]},J.value="",U.value=[],ze.value="",O()},G=async t=>{try{if(y.value.open?(C.value=t,Ce.value.value=t):r.value={...r.value,plannedCompany:t,plannedDepartment:""},!t){U.value=[];return}const{data:e}=await w.get("/department/all",{params:{companyId:t}});e.success&&(U.value=e.result||[])}catch(e){console.error("載入部門失敗:",e),g({text:"載入部門資料失敗",snackbarProps:{color:"red-lighten-1"}}),U.value=[]}},Te=yl.debounce(()=>{B.value=1,O()},300);return ye(J,()=>{Te()}),ye(()=>r.value.plannedCompany,async t=>{t?await G(t):U.value=[]}),ye(()=>ue.value.value,t=>{if(!t){M.value.value=null;return}if(/^[A-Za-z][12]\d{8}$/.test(t)){const u=t.charAt(1);u==="1"?M.value.value="男性":u==="2"&&(M.value.value="女性")}}),ml(async()=>{await Promise.all([Xe(),Qe()]),await O()}),pl(()=>{Te.cancel()}),(t,e)=>{const u=cl("v-date-input");return P(),K(Cl,{"max-width":"2500"},{default:n(()=>{var b,N;return[l(f,{class:"rounded-xl py-0 mt-2 ma-sm-1 ma-md-6"},{default:n(()=>[l(o,{class:"pa-0 mb-6 mb-sm-0"},{default:n(()=>[l(Ve,{class:"d-flex mx-3 mx-sm-4 px-4 pt-2 pt-sm-5 pb-4 pb-sm-5",elevation:"4",rounded:"xl"},{default:n(()=>[l(_e,{class:"d-flex align-center"},{default:n(()=>[l(f,{class:"h-100"},{default:n(()=>[l(o,{cols:"12",class:"d-flex flex-column justify-center"},{default:n(()=>[l(f,null,{default:n(()=>e[36]||(e[36]=[v("h6",{style:{"font-size":"16px"},class:"ps-3 mb-1"}," 搜尋篩選 ",-1)])),_:1}),l(f,null,{default:n(()=>[l(o,{cols:"12",sm:"6"},{default:n(()=>[l(E,{modelValue:r.value.plannedCompany,"onUpdate:modelValue":[e[0]||(e[0]=a=>r.value.plannedCompany=a),G],items:qe.value,label:"預計任職公司","item-title":"title","item-value":"value",variant:"outlined",density:"compact","hide-details":"",clearable:""},null,8,["modelValue","items"])]),_:1}),l(o,{cols:"12",sm:"6"},{default:n(()=>[l(E,{modelValue:r.value.plannedDepartment,"onUpdate:modelValue":e[1]||(e[1]=a=>r.value.plannedDepartment=a),items:U.value,label:"預計任職部門","item-title":"name","item-value":"_id",variant:"outlined",density:"compact","hide-details":"",clearable:"",disabled:!r.value.plannedCompany},null,8,["modelValue","items","disabled"])]),_:1})]),_:1}),l(f,null,{default:n(()=>[l(o,{cols:"12",sm:"6"},{default:n(()=>[l(E,{modelValue:r.value.status,"onUpdate:modelValue":e[2]||(e[2]=a=>r.value.status=a),items:Y,label:"狀態","item-title":"title","item-value":"value",variant:"outlined",density:"compact","hide-details":"",clearable:""},null,8,["modelValue"])]),_:1}),l(o,{cols:"12",sm:"6"},{default:n(()=>[l(u,{modelValue:r.value.effectiveDateRange,"onUpdate:modelValue":e[3]||(e[3]=a=>r.value.effectiveDateRange=a),label:"生效日期區間",variant:"outlined",density:"compact","hide-details":"",multiple:"range","prepend-icon":"",clearable:"","persistent-placeholder":""},null,8,["modelValue"])]),_:1})]),_:1}),l(f,null,{default:n(()=>[l(o,{cols:"12",class:"py-0"},{default:n(()=>[v("div",Sl,[e[39]||(e[39]=v("label",{class:"text-grey-darken-1 search-label"},"性別",-1)),l(fl,{modelValue:r.value.gender,"onUpdate:modelValue":e[4]||(e[4]=a=>r.value.gender=a),column:"",class:"custom-chip-group"},{default:n(()=>[l(Re,{filter:"",variant:"outlined",color:"blue-grey-darken-2",value:"男性",label:""},{default:n(()=>e[37]||(e[37]=[p(" 男性 ")])),_:1}),l(Re,{filter:"",variant:"outlined",color:"blue-grey-darken-2",value:"女性",label:""},{default:n(()=>e[38]||(e[38]=[p(" 女性 ")])),_:1})]),_:1},8,["modelValue"])])]),_:1})]),_:1}),l(f,null,{default:n(()=>[l(o,{cols:"12",class:"d-flex justify-end gap-2"},{default:n(()=>[l(f,null,{default:n(()=>[l(o,{cols:"3"},{default:n(()=>[l(V,{color:"grey",block:"",onClick:ol},{default:n(()=>[l(L,null,{default:n(()=>e[40]||(e[40]=[p("mdi-refresh")])),_:1})]),_:1})]),_:1}),l(o,null,{default:n(()=>[l(V,{"prepend-icon":"mdi-magnify",color:"cyan-darken-2",loading:W.value,block:"",onClick:O},{default:n(()=>e[41]||(e[41]=[p(" 搜尋 ")])),_:1},8,["loading"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),l(f,{class:"elevation-4 rounded-xl py-4 py-sm-8 px-1 px-sm-10 mt-2 mt-sm-10 mx-0 mx-sm-4 mx-md-10 mb-4 bg-white"},{default:n(()=>[l(o,{cols:"12",class:"ps-3 pb-6"},{default:n(()=>e[42]||(e[42]=[v("h3",null,"臨時員工管理",-1)])),_:1}),l(o,{cols:"12"},{default:n(()=>[l(f,null,{default:n(()=>[l(o,null,{default:n(()=>[l(f,null,{default:n(()=>[l(o,null,{default:n(()=>[l(V,{"prepend-icon":"mdi-account-plus",variant:"outlined",color:"blue-grey-darken-2",onClick:e[5]||(e[5]=a=>Pe(null))},{default:n(()=>e[43]||(e[43]=[p(" 新增臨時員工 ")])),_:1})]),_:1}),l(o,{sm:"4",lg:"3",xl:"2"},{default:n(()=>[l(f,{class:"d-flex align-center"},{default:n(()=>[s(R)?(P(),K(o,{key:0,cols:"2",class:"ps-lg-5"},{default:n(()=>[$e(l(L,{icon:"mdi-information",size:"small",color:"blue-grey-darken-2"},null,512),[[Fe,"可搜尋姓名、Email、手機、預計分機","start"]])]),_:1})):_("",!0),l(o,null,{default:n(()=>[l(c,{modelValue:J.value,"onUpdate:modelValue":e[6]||(e[6]=a=>J.value=a),label:"搜尋","append-inner-icon":"mdi-magnify","base-color":"#666",color:"blue-grey-darken-3",variant:"outlined",density:"compact","hide-details":"",clearable:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),l(o,{cols:"12"},{default:n(()=>[l(Ul,{"items-per-page":ce.value,"onUpdate:itemsPerPage":[e[7]||(e[7]=a=>ce.value=a),e[9]||(e[9]=a=>T(!1))],"sort-by":j.value,"onUpdate:sortBy":[e[8]||(e[8]=a=>j.value=a),e[10]||(e[10]=a=>T(!1))],page:B.value,density:"compact",class:"rounded-ts-lg rounded-te-lg py-3","items-per-page-options":[10,20,50],items:F.value,headers:Ke.value,"header-props":Je,loading:W.value,"items-length":fe.value,search:ze.value,hover:"","onUpdate:page":sl},{item:n(({item:a,index:i})=>{var A,z;return[v("tr",{class:gl({"odd-row":i%2===0,"even-row":i%2!==0})},[v("td",null,x(a.name),1),v("td",null,x(a.personalEmail),1),s(X)?(P(),xe("td",zl,x(a.cellphone),1)):_("",!0),s(R)?(P(),xe("td",Pl,x(((A=a.plannedCompany)==null?void 0:A.name)||""),1)):_("",!0),s(R)?(P(),xe("td",El,x(((z=a.plannedDepartment)==null?void 0:z.name)||""),1)):_("",!0),v("td",null,x(a.plannedExtNumber),1),v("td",null,x(tl(a.effectiveDate)),1),v("td",null,x(Oe(a.status)),1),v("td",Tl,[l(V,{icon:"",color:"light-blue-darken-4",variant:"plain",width:"28",size:S.value,ripple:!1,onClick:ul=>Pe(a)},{default:n(()=>[l(L,null,{default:n(()=>e[44]||(e[44]=[p("mdi-pencil")])),_:1})]),_:2},1032,["size","onClick"]),a.status==="待入職"?$e((P(),K(V,{key:0,icon:"",color:"teal-darken-1",variant:"plain",width:"28",class:"ms-2",size:S.value,ripple:!1,onClick:ul=>el(a)},{default:n(()=>[l(L,null,{default:n(()=>e[45]||(e[45]=[p("mdi-account-convert")])),_:1})]),_:2},1032,["size","onClick"])),[[Fe,"轉為正式員工"]]):_("",!0)])],2)]}),_:1},8,["items-per-page","sort-by","page","items","headers","loading","items-length","search"])]),_:1})]),_:1})]),_:1})]),_:1}),l(Be,{modelValue:y.value.open,"onUpdate:modelValue":e[33]||(e[33]=a=>y.value.open=a),persistent:"",width:je.value},{default:n(()=>[l(wl,{ref:"form",disabled:s(le),onSubmit:bl(s(Ye),["prevent"])},{default:n(()=>[l(Ve,{class:"rounded-lg px-4 py-6"},{default:n(()=>[v("div",_l,x(y.value.id?"編輯臨員資料":"新增臨員資料"),1),l(f,{class:"py-4"},{default:n(()=>[l(o,{cols:"4",md:"5",class:"d-flex align-center ps-6"},{default:n(()=>[l(Q)]),_:1}),l(o,{cols:"4",md:"2",class:"info-title px-0 text-blue-grey-darken-2"},{default:n(()=>e[46]||(e[46]=[p(" 基本資料 ")])),_:1}),l(o,{cols:"4",md:"5",class:"d-flex align-center pe-6"},{default:n(()=>[l(Q)]),_:1})]),_:1}),l(_e,{class:"mt-3 pa-3"},{default:n(()=>[l(f,null,{default:n(()=>[l(o,{cols:"12",sm:"6",md:"4",lg:"3",class:"pb-0"},{default:n(()=>[l(c,{modelValue:s(te).value.value,"onUpdate:modelValue":e[11]||(e[11]=a=>s(te).value.value=a),"error-messages":s(te).errorMessage.value,label:"*姓名",variant:"outlined",density:"compact",clearable:""},null,8,["modelValue","error-messages"])]),_:1}),l(o,{cols:"12",sm:"6",md:"4",lg:"3",class:"pb-0"},{default:n(()=>[l(c,{modelValue:s(ne).value.value,"onUpdate:modelValue":e[12]||(e[12]=a=>s(ne).value.value=a),"error-messages":s(ne).errorMessage.value,label:"英文名",variant:"outlined",density:"compact",clearable:""},null,8,["modelValue","error-messages"])]),_:1}),l(o,{cols:"12",sm:"6",md:"4",lg:"3",class:"pb-0"},{default:n(()=>[l(E,{modelValue:s(M).value.value,"onUpdate:modelValue":e[13]||(e[13]=a=>s(M).value.value=a),items:Ze,label:"性別",variant:"outlined",density:"compact",clearable:""},null,8,["modelValue"])]),_:1}),l(o,{cols:"12",sm:"6",md:"4",lg:"3",class:"pb-0"},{default:n(()=>[l(u,{modelValue:s(ke).value.value,"onUpdate:modelValue":e[14]||(e[14]=a=>s(ke).value.value=a),label:"生日","prepend-icon":"",variant:"outlined",density:"compact",clearable:""},null,8,["modelValue"])]),_:1}),l(o,{cols:"12",sm:"6",md:"4",lg:"3",class:"pb-0"},{default:n(()=>[l(c,{modelValue:s(ue).value.value,"onUpdate:modelValue":e[15]||(e[15]=a=>s(ue).value.value=a),label:"身分證號碼",maxlength:"10",variant:"outlined",density:"compact",clearable:""},null,8,["modelValue"])]),_:1}),l(o,{cols:"12",sm:"6",md:"4",lg:"3",class:"pb-0"},{default:n(()=>[l(c,{modelValue:s(se).value.value,"onUpdate:modelValue":e[16]||(e[16]=a=>s(se).value.value=a),"error-messages":s(se).errorMessage.value,label:"Email",type:"email",variant:"outlined",density:"compact",clearable:""},null,8,["modelValue","error-messages"])]),_:1}),l(o,{cols:"12",sm:"6",md:"4",lg:"3",class:"pb-0"},{default:n(()=>[l(c,{modelValue:s(oe).value.value,"onUpdate:modelValue":e[17]||(e[17]=a=>s(oe).value.value=a),"error-messages":s(oe).errorMessage.value,label:"手機號碼",maxlength:"10",variant:"outlined",density:"compact",clearable:""},null,8,["modelValue","error-messages"])]),_:1}),l(o,{cols:"12",sm:"6",class:"pb-0"},{default:n(()=>[l(c,{modelValue:s(H).value.value,"onUpdate:modelValue":e[18]||(e[18]=a=>s(H).value.value=a),label:"戶籍地址",variant:"outlined",density:"compact",clearable:""},null,8,["modelValue"])]),_:1}),l(o,{cols:"12",sm:"6",class:"pb-0"},{default:n(()=>[l(c,{modelValue:s(re).value.value,"onUpdate:modelValue":e[19]||(e[19]=a=>s(re).value.value=a),label:"聯絡地址",variant:"outlined",density:"compact",clearable:""},{"append-inner":n(()=>[l(Nl,{location:"top","close-delay":"200"},{activator:n(({props:a})=>[l(L,Ie(a,{icon:"mdi-content-copy",onClick:nl}),null,16)]),default:n(()=>[e[47]||(e[47]=p(" 複製戶籍地址 "))]),_:1})]),_:1},8,["modelValue"])]),_:1}),l(o,{cols:"12",sm:"6",md:"4",class:"pb-0"},{default:n(()=>[l(c,{modelValue:s(Ne).value.value,"onUpdate:modelValue":e[20]||(e[20]=a=>s(Ne).value.value=a),label:"緊急聯絡人姓名",variant:"outlined",density:"compact",clearable:""},null,8,["modelValue"])]),_:1}),l(o,{cols:"12",sm:"6",md:"4",class:"pb-0"},{default:n(()=>[l(c,{modelValue:s(Ae).value.value,"onUpdate:modelValue":e[21]||(e[21]=a=>s(Ae).value.value=a),label:"緊急聯絡人電話",variant:"outlined",density:"compact",clearable:""},null,8,["modelValue"])]),_:1}),l(o,{cols:"12",sm:"6",md:"4",class:"pb-0"},{default:n(()=>[l(c,{modelValue:s(Se).value.value,"onUpdate:modelValue":e[22]||(e[22]=a=>s(Se).value.value=a),label:"緊急聯絡人關係",variant:"outlined",density:"compact",clearable:""},null,8,["modelValue"])]),_:1}),l(o,{cols:"12",class:"pa-0"},{default:n(()=>[l(f,{class:"py-4 mb-2"},{default:n(()=>[l(o,{cols:"4",md:"5",class:"d-flex align-center ps-6"},{default:n(()=>[l(Q)]),_:1}),l(o,{cols:"4",md:"2",class:"info-title text-blue-grey-darken-2"},{default:n(()=>e[48]||(e[48]=[p(" 預計任職資訊 ")])),_:1}),l(o,{cols:"4",md:"5",class:"d-flex align-center pe-6"},{default:n(()=>[l(Q)]),_:1})]),_:1})]),_:1}),l(o,{cols:"12",sm:"6",md:"4",lg:"3",class:"pb-0"},{default:n(()=>[l(E,{modelValue:C.value,"onUpdate:modelValue":[e[23]||(e[23]=a=>C.value=a),G],"error-messages":s(Ce).errorMessage.value,items:He.value,label:"預計任職公司","item-title":"title","item-value":"value",variant:"outlined",density:"compact",clearable:""},null,8,["modelValue","error-messages","items"])]),_:1}),l(o,{cols:"12",sm:"6",md:"4",lg:"3",class:"pb-0"},{default:n(()=>[l(E,{modelValue:s(h).value.value,"onUpdate:modelValue":e[24]||(e[24]=a=>s(h).value.value=a),items:U.value,"error-messages":s(h).errorMessage.value,"item-title":"name","item-value":"_id",label:"預計任職部門",variant:"outlined",density:"compact",clearable:"",disabled:!C.value},null,8,["modelValue","items","error-messages","disabled"])]),_:1}),l(o,{cols:"12",sm:"6",md:"4",lg:"3",class:"pb-0"},{default:n(()=>[l(c,{modelValue:s(de).value.value,"onUpdate:modelValue":e[25]||(e[25]=a=>s(de).value.value=a),"error-messages":s(de).errorMessage.value,label:"預計職稱",variant:"outlined",density:"compact",clearable:""},null,8,["modelValue","error-messages"])]),_:1}),l(o,{cols:"12",sm:"6",md:"4",lg:"3",class:"pb-0"},{default:n(()=>[l(c,{modelValue:s(ie).value.value,"onUpdate:modelValue":e[26]||(e[26]=a=>s(ie).value.value=a),"error-messages":s(ie).errorMessage.value,label:"預計薪資",variant:"outlined",density:"compact",clearable:""},null,8,["modelValue","error-messages"])]),_:1}),l(o,{cols:"12",sm:"6",md:"4",lg:"3",class:"pb-0"},{default:n(()=>[l(c,{modelValue:s(me).value.value,"onUpdate:modelValue":e[27]||(e[27]=a=>s(me).value.value=a),"error-messages":s(me).errorMessage.value,label:"預計分機",variant:"outlined",density:"compact",clearable:""},null,8,["modelValue","error-messages"])]),_:1}),l(o,{cols:"12",sm:"6",md:"4",lg:"3",class:"pb-0"},{default:n(()=>[l(u,{modelValue:s(pe).value.value,"onUpdate:modelValue":e[28]||(e[28]=a=>s(pe).value.value=a),"error-messages":s(pe).errorMessage.value,label:"生效日期","prepend-icon":"",variant:"outlined",density:"compact",clearable:""},null,8,["modelValue","error-messages"])]),_:1}),l(o,{cols:"12",sm:"6",md:"4",lg:"3",class:"pb-0"},{default:n(()=>[l(E,{modelValue:s(ve).value.value,"onUpdate:modelValue":e[29]||(e[29]=a=>s(ve).value.value=a),"error-messages":s(ve).errorMessage.value,items:Y,"item-title":"title","item-value":"value",label:"狀態",variant:"outlined",density:"compact",clearable:""},null,8,["modelValue","error-messages"])]),_:1}),l(o,{cols:"12",sm:"6",md:"4",lg:"3",class:"pb-0"},{default:n(()=>[l(c,{modelValue:s(we).value.value,"onUpdate:modelValue":e[30]||(e[30]=a=>s(we).value.value=a),label:"備註",variant:"outlined",density:"compact",clearable:""},null,8,["modelValue"])]),_:1}),l(o,{cols:"12",sm:"6",md:"4",lg:"3",class:"pb-0"},{default:n(()=>[l(c,{modelValue:s(Ue).value.value,"onUpdate:modelValue":e[31]||(e[31]=a=>s(Ue).value.value=a),label:"座位描述",variant:"outlined",density:"compact",clearable:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),l(Me,{class:"px-3 mt-4"},{default:n(()=>[$.value?(P(),K(Al,{key:0},{default:n(({isHovering:a,props:i})=>[l(V,Ie(i,{color:a?"red-lighten-1":"grey",variant:"outlined","prepend-icon":"mdi-delete",size:S.value,onClick:e[32]||(e[32]=A=>q.value=!0)}),{default:n(()=>e[49]||(e[49]=[p(" 永久刪除 ")])),_:2},1040,["color","size"])]),_:1})):_("",!0),l(he),l(V,{color:"red-lighten-1",variant:"outlined",size:S.value,loading:s(le),onClick:be},{default:n(()=>e[50]||(e[50]=[p(" 取消 ")])),_:1},8,["size","loading"]),l(V,{color:"teal-darken-1",variant:"outlined",type:"submit",class:"ms-1",size:S.value,loading:s(le),disabled:$.value&&!t.hasChanges},{default:n(()=>e[51]||(e[51]=[p(" 送出 ")])),_:1},8,["size","loading","disabled"])]),_:1})]),_:1})]),_:1},8,["disabled","onSubmit"])]),_:1},8,["modelValue","width"]),l(kl,{modelValue:q.value,"onUpdate:modelValue":e[34]||(e[34]=a=>q.value=a),title:"確認刪除臨員資料",message:`確定要刪除「<span class='text-pink-lighten-1' style='font-weight: 800;'>${((b=I.value)==null?void 0:b.name)||""}</span>」的資料嗎？此操作無法復原。`,"expected-name":((N=I.value)==null?void 0:N.name)||"","input-label":"姓名",onConfirm:al},null,8,["modelValue","message","expected-name"]),l(Be,{modelValue:k.value.open,"onUpdate:modelValue":e[35]||(e[35]=a=>k.value.open=a),"max-width":"460"},{default:n(()=>[l(Ve,{class:"rounded-lg pa-4"},{default:n(()=>[e[57]||(e[57]=v("div",{class:"card-title pa-4"}," 轉換為正式員工 ",-1)),v("div",Rl,[e[52]||(e[52]=p(" 確定要將「")),v("span",$l,x(k.value.name),1),e[53]||(e[53]=p("」轉換為正式員工嗎？ ")),e[54]||(e[54]=v("div",{class:"mt-2 text-grey"}," 系統將自動產生員工編號、Email 和初始密碼。 ",-1))]),l(Me,{class:"pa-4 pt-0"},{default:n(()=>[l(he),l(V,{color:"grey",variant:"outlined",size:S.value,onClick:Ee},{default:n(()=>e[55]||(e[55]=[p(" 取消 ")])),_:1},8,["size"]),l(V,{color:"teal-darken-1",variant:"outlined",size:S.value,loading:k.value.loading,onClick:ll},{default:n(()=>e[56]||(e[56]=[p(" 確認轉換 ")])),_:1},8,["size","loading"])]),_:1})]),_:1})]),_:1},8,["modelValue"])]}),_:1})}}},Yl=rl(Il,[["__scopeId","data-v-baaf0bb5"]]);export{Yl as default};
