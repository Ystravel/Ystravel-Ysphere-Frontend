import{_ as Te,P as $e,Z as Be,o as j,x as i,z as H,A as Ee,ar as Ne,a2 as b,a3 as t,a1 as f,c as l,aa as c,a7 as $,ab as me,a6 as w,a9 as P,K as m,a8 as d,as as B,ah as I,ai as pe,ap as Fe,ad as J,ag as Q,aj as Ae,U as qe,a4 as X,aq as Y,a5 as ee,am as ae,ae as Le,an as Me,at as We,au as je,H as He}from"./index-BbYFUoo0.js";import{l as Ke}from"./lodash-DHyxJ22h.js";import{C as ce}from"./ConfirmDeleteDialogWithTextField-BIeUYs2e.js";import{V as Oe}from"./VContainer-DU3-tywA.js";import{a as k,V as le}from"./VRow-Drlzrpaq.js";import{V as ve,a as Re}from"./VDataTableServer-ClSdMEXw.js";import{V as te}from"./VForm-Cm3_fZhT.js";import{T as fe}from"./index-CnAOXFih.js";import{b as Ze,V as ge}from"./VList-lcJOjVOD.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./VCheckboxBtn-BgaenO2j.js";import"./VDivider-BIE2voOQ.js";import"./VTooltip-CLYGQViH.js";const Ge={key:0},Je={class:"d-flex justify-center h-25"},Qe={class:"mb-8"},Xe={class:"text-pink-lighten-2"},Ye={class:"card-title ps-6 py-3"},ea={__name:"department",setup(aa){const{smAndUp:E,mdAndUp:K}=$e(),{apiAuth:V}=Me(),p=Be(),h=j(()=>E.value?"default":"small"),ne=i(0),O=i(!1),z=i(10),U=i([{key:"departmentId",order:"asc"}]),u=i(1),S=i(0),A=i(""),N=i(""),ye={class:"header-bg"},se=[{title:"部編",key:"departmentId",align:"start",minWidth:"68px",sortable:!0},{title:"公司",key:"c_id.name",align:"start",minWidth:"68px",sortable:!0},{title:"部門",key:"name",align:"start",minWidth:"68px",sortable:!0},{title:"人數",key:"memberCount",align:"start",sortable:!0},{title:"操作",key:"actions",align:"center",sortable:!1}],be=j(()=>E.value?se:se.filter(n=>["departmentId","name","memberCount","actions"].includes(n.key))),D=i([]),q=i({open:!1}),r=i({open:!1,_id:"",companyId:"",name:""}),x=i({open:!1,_id:"",name:""}),T=i({name:""}),F=i([]),L=i([]),R=i([]),v=i({open:!1,id:null}),C=i({open:!1,id:"",name:"",companyName:""}),o=i({c_id:"",name:"",departmentId:"",hasChanges:!0}),M=i([]),W=i([]),y=i(!1),oe=async()=>{try{const{data:n}=await V.get("/company/all");n.success&&(D.value=n.result)}catch{p({text:"載入公司列表失敗",snackbarProps:{color:"red-lighten-1"}})}},Z=j(()=>[...D.value].sort((n,e)=>{const a=n.companyId||"",s=e.companyId||"";return a.localeCompare(s)})),g=async(n=!1)=>{var e,a;n&&(u.value=1),O.value=!0;try{const s={page:u.value,itemsPerPage:z.value,sortBy:((e=U.value[0])==null?void 0:e.key)||"departmentId",sortOrder:((a=U.value[0])==null?void 0:a.order)||"asc",companyId:N.value||null,search:A.value||null},{data:_}=await V.get("/department/all",{params:s});_.success&&(R.value=_.result.data,S.value=_.result.pagination.totalItems,console.log("Total items:",S.value))}catch{p({text:"載入部門列表失敗",snackbarProps:{color:"red-lighten-1"}}),R.value=[],S.value=0}finally{O.value=!1}},ie=async()=>{q.value.open=!0,await oe()},ke=()=>{q.value.open=!1,T.value={name:""},F.value=[]},Ve=n=>{r.value={open:!0,_id:n._id,companyId:n.companyId,name:n.name}},de=()=>{r.value={open:!1,id:"",companyId:"",name:""},L.value=[]},xe=async()=>{var n,e;if(!T.value.name){F.value=["請輸入公司名稱"];return}y.value=!0;try{const{data:a}=await V.post("/company",{name:T.value.name});a.success&&(D.value.push(a.result),T.value={name:""},F.value=[],p({text:"新增公司成功",snackbarProps:{color:"teal-lighten-1"}}))}catch(a){F.value=[((e=(n=a==null?void 0:a.response)==null?void 0:n.data)==null?void 0:e.message)||"新增失敗"]}finally{y.value=!1}},Ce=async()=>{var n,e;if(!r.value.name){L.value=["請輸入公司名稱"];return}y.value=!0;try{const{data:a}=await V.patch(`/company/${r.value._id}`,{name:r.value.name,companyId:r.value.companyId});if(a.success){const s=D.value.findIndex(_=>_._id===r.value._id);s!==-1&&(D.value[s]=a.result),r.value={open:!0,_id:"",companyId:"",name:""},L.value=[],de(),p({text:"修改公司成功",snackbarProps:{color:"teal-lighten-1"}})}}catch(a){p({text:((e=(n=a==null?void 0:a.response)==null?void 0:n.data)==null?void 0:e.message)||"修改失敗",snackbarProps:{color:"red-lighten-1"}})}finally{y.value=!1}},_e=n=>{x.value={open:!0,_id:n._id,name:n.name}},Ie=async()=>{var n,e;try{await V.delete(`/company/${x.value._id}`),D.value=D.value.filter(a=>a._id!==x.value._id),x.value.open=!1,p({text:"刪除公司成功",snackbarProps:{color:"teal-lighten-1"}})}catch(a){p({text:((e=(n=a==null?void 0:a.response)==null?void 0:n.data)==null?void 0:e.message)||"刪除失敗",snackbarProps:{color:"red-lighten-1"}})}},re=()=>{v.value.open=!0,o.value={c_id:"",name:"",departmentId:"",hasChanges:!0}},G=()=>{v.value={open:!1,id:null},o.value={c_id:"",name:"",departmentId:"",originalData:null,hasChanges:!1},M.value=[],W.value=[]},De=n=>{var a;console.log("編輯部門資料:",n),v.value={open:!0,id:n._id};const e=((a=n.c_id)==null?void 0:a._id)||n.c_id;o.value={c_id:e,name:n.name,departmentId:n.departmentId,originalData:{c_id:e,name:n.name,departmentId:n.departmentId},hasChanges:!1},console.log("設置後的表單值:",o.value)},we=async()=>{var e,a;if(M.value=[],W.value=[],!o.value.c_id){W.value=["請選擇公司"];return}if(!o.value.name){M.value=["請輸入部門名稱"];return}y.value=!0;const n=u.value;try{if(v.value.id){const{data:s}=await V.patch(`/department/${v.value.id}`,{c_id:o.value.c_id,name:o.value.name,departmentId:o.value.departmentId});s.success&&(G(),p({text:"修改部門成功",snackbarProps:{color:"teal-lighten-1"}}),u.value=n,await g(!1))}else{const{data:s}=await V.post("/department",{c_id:o.value.c_id,name:o.value.name});s.success&&(await g(!0),G(),p({text:"新增部門成功",snackbarProps:{color:"teal-lighten-1"}}))}}catch(s){p({text:((a=(e=s==null?void 0:s.response)==null?void 0:e.data)==null?void 0:a.message)||"操作失敗",snackbarProps:{color:"red-lighten-1"}})}finally{y.value=!1}},Pe=n=>{var e;C.value={open:!0,id:n._id,name:n.name,companyName:((e=n.c_id)==null?void 0:e.name)||"未知公司"}},he=async()=>{var n,e;try{const a=u.value;await V.delete(`/department/${C.value.id}`),C.value.open=!1,S.value--;const s=Math.ceil(S.value/z.value);a>s?u.value=Math.max(1,s):u.value=a,await g(!1),p({text:"刪除部門成功",snackbarProps:{color:"teal-lighten-1"}})}catch(a){p({text:((e=(n=a==null?void 0:a.response)==null?void 0:n.data)==null?void 0:e.message)||"刪除失敗",snackbarProps:{color:"red-lighten-1"}})}},ze=j(()=>o.value.originalData?o.value.c_id!==o.value.originalData.c_id||o.value.name!==o.value.originalData.name||o.value.departmentId!==o.value.originalData.departmentId:!0),Ue=async n=>{const{page:e,itemsPerPage:a,sortBy:s}=n;u.value=e,z.value=a,U.value=s,await g(!1),localStorage.setItem("departmentTablePage",e.toString())},ue=Ke.debounce(()=>{g(!0)},300);return H(N,()=>{g(!0)}),H(A,()=>{u.value=1,ue()}),H([z,U],()=>{g(!0)}),H(N,()=>{u.value=1,g(!0)}),Ee(async()=>{const n=localStorage.getItem("departmentTablePage");n&&parseInt(n)>0&&(u.value=parseInt(n),ne.value++),await oe(),await g(!1)}),Ne(()=>{localStorage.setItem("departmentTablePage",u.value.toString()),ue.cancel()}),(n,e)=>(f(),b(Oe,{"max-width":"1400"},{default:t(()=>[l(le,{class:"elevation-4 rounded-xl py-4 py-sm-8 px-1 px-sm-10 mt-2 mt-sm-6 mx-0 mx-sm-4 mx-md-10 mb-4 bg-white"},{default:t(()=>[l(k,{cols:"12",class:"ps-3 pb-6 d-flex align-center"},{default:t(()=>[e[16]||(e[16]=c("h3",null,"公司部門管理",-1)),$(E)?me((f(),b(w,{key:0,icon:"mdi-information",size:"small",color:"blue-grey-darken-2",class:"ms-4"},null,512)),[[fe,"人數為「在職」人數"]]):P("",!0)]),_:1}),l(k,{cols:"12"},{default:t(()=>[l(le,null,{default:t(()=>[l(k,null,{default:t(()=>[l(le,null,{default:t(()=>[$(K)?P("",!0):(f(),b(k,{key:0,cols:"6"},{default:t(()=>[l(m,{"prepend-icon":"mdi-domain",variant:"outlined",color:"blue-grey-darken-2",class:"me-2",block:"",onClick:ie},{default:t(()=>e[17]||(e[17]=[d(" 公司管理 ")])),_:1})]),_:1})),$(K)?P("",!0):(f(),b(k,{key:1,cols:"6"},{default:t(()=>[l(m,{"prepend-icon":"mdi-account-multiple-plus",variant:"outlined",color:"blue-grey-darken-2",block:"",onClick:re},{default:t(()=>e[18]||(e[18]=[d(" 新增部門 ")])),_:1})]),_:1})),$(K)?(f(),b(k,{key:2},{default:t(()=>[l(m,{"prepend-icon":"mdi-domain",variant:"outlined",color:"blue-grey-darken-2",class:"me-2",onClick:ie},{default:t(()=>e[19]||(e[19]=[d(" 公司管理 ")])),_:1}),l(m,{"prepend-icon":"mdi-account-multiple-plus",variant:"outlined",color:"blue-grey-darken-2",class:"ms-3",onClick:re},{default:t(()=>e[20]||(e[20]=[d(" 新增部門 ")])),_:1})]),_:1})):P("",!0),l(k,{cols:"6",md:"3",lg:"2"},{default:t(()=>[l(ve,{modelValue:N.value,"onUpdate:modelValue":[e[0]||(e[0]=a=>N.value=a),e[1]||(e[1]=a=>g(!0))],items:[{name:"全部",_id:""},...Z.value],label:"選擇公司","item-title":"name","item-value":"_id",variant:"outlined",density:"compact","hide-details":"",clearable:""},null,8,["modelValue","items"])]),_:1}),l(k,{cols:"6",md:"3",lg:"2",class:"d-flex justify-end align-center"},{default:t(()=>[$(E)?me((f(),b(w,{key:0,icon:"mdi-information",size:"small",color:"blue-grey-darken-2",class:"me-4"},null,512)),[[fe,"可搜尋部門編號、部門名稱","top"]]):P("",!0),l(B,{modelValue:A.value,"onUpdate:modelValue":e[2]||(e[2]=a=>A.value=a),label:"搜尋","append-inner-icon":"mdi-magnify",variant:"outlined",density:"compact","hide-details":"",clearable:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),l(k,{cols:"12"},{default:t(()=>[(f(),b(Re,{key:ne.value,"items-per-page":z.value,"onUpdate:itemsPerPage":e[3]||(e[3]=a=>z.value=a),"sort-by":U.value,"onUpdate:sortBy":e[4]||(e[4]=a=>U.value=a),items:R.value,"items-length":S.value,loading:O.value,page:u.value,headers:be.value,"header-props":ye,density:"compact","items-per-page-options":[10,20,50],hover:"","onUpdate:options":Ue},{item:t(({item:a,index:s})=>{var _;return[c("tr",{class:Fe({"odd-row":s%2===0,"even-row":s%2!==0})},[c("td",null,I(a.departmentId||"尚未設定"),1),$(E)?(f(),pe("td",Ge,I(((_=a.c_id)==null?void 0:_.name)||"未設定"),1)):P("",!0),c("td",null,I(a.name),1),c("td",null,I(a.employeeCount)+" 人",1),c("td",Je,[l(m,{icon:"",color:"light-blue-darken-4",variant:"plain",size:h.value,ripple:!1,onClick:Se=>De(a)},{default:t(()=>[l(w,null,{default:t(()=>e[21]||(e[21]=[d("mdi-pencil")])),_:1})]),_:2},1032,["size","onClick"]),l(m,{icon:"",color:"red-lighten-1",variant:"plain",size:h.value,ripple:!1,onClick:Se=>Pe(a)},{default:t(()=>[l(w,null,{default:t(()=>e[22]||(e[22]=[d("mdi-delete")])),_:1})]),_:2},1032,["size","onClick"])])],2)]}),_:1},8,["items-per-page","sort-by","items","items-length","loading","page","headers"]))]),_:1})]),_:1})]),_:1})]),_:1}),l(ae,{modelValue:q.value.open,"onUpdate:modelValue":e[6]||(e[6]=a=>q.value.open=a),persistent:"",width:"395"},{default:t(()=>[l(J,{class:"rounded-lg pa-4"},{default:t(()=>[e[28]||(e[28]=c("div",{class:"card-title ps-6 py-3"}," 公司管理 ",-1)),l(Q,{class:"px-4 pb-2"},{default:t(()=>[c("div",Qe,[(f(!0),pe(qe,null,Ae(Z.value,a=>(f(),b(We,{key:a._id,class:"ms-2 me-4 mb-2 pa-4 pe-1",color:"blue-grey-darken-2",label:""},{default:t(()=>[c("span",Xe,I(a.companyId)+" ",1),d(" "+I(a.name)+" ",1),l(je,null,{activator:t(({props:s})=>[l(m,He({icon:"",size:"x-small",variant:"text",class:"ms-2",ripple:!1,color:"white",ref_for:!0},s),{default:t(()=>[l(w,{color:"cyan-darken-3"},{default:t(()=>e[23]||(e[23]=[d(" mdi-dots-vertical ")])),_:1})]),_:2},1040)]),default:t(()=>[l(Ze,{density:"compact"},{default:t(()=>[l(ge,{density:"compact",class:"ps-2 pe-3 py-0",onClick:s=>Ve(a)},{default:t(()=>[l(w,{icon:"mdi-pencil",size:"16",color:"light-blue-darken-4"}),e[24]||(e[24]=c("span",{style:{"font-size":"14px"},class:"ps-2 text-blue-grey-darken-2"},"編輯",-1))]),_:2},1032,["onClick"]),l(ge,{density:"compact",class:"ps-2 pe-3 py-0",color:"red-lighten-1",onClick:s=>_e(a)},{default:t(()=>[l(w,{icon:"mdi-delete",size:"16",color:"red-lighten-1"}),e[25]||(e[25]=c("span",{style:{"font-size":"14px"},class:"ps-2 text-blue-grey-darken-2"},"刪除",-1))]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),l(te,{onSubmit:X(xe,["prevent"])},{default:t(()=>[l(B,{modelValue:T.value.name,"onUpdate:modelValue":e[5]||(e[5]=a=>T.value.name=a),"error-messages":F.value,label:"新增公司",required:"",variant:"outlined",density:"compact",class:"px-2"},null,8,["modelValue","error-messages"]),l(Y,{class:"pa-0 mt-2"},{default:t(()=>[l(ee),l(m,{color:"red-lighten-1",variant:"outlined",size:h.value,onClick:ke},{default:t(()=>e[26]||(e[26]=[d(" 取消 ")])),_:1},8,["size"]),l(m,{color:"teal-darken-1",variant:"outlined",type:"submit",size:h.value,loading:y.value,class:"ms-2"},{default:t(()=>e[27]||(e[27]=[d(" 新增 ")])),_:1},8,["size","loading"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]),l(ae,{modelValue:r.value.open,"onUpdate:modelValue":e[9]||(e[9]=a=>r.value.open=a),persistent:"",width:"400"},{default:t(()=>[l(J,{class:"rounded-lg pa-4"},{default:t(()=>[l(Le,{class:"text-h6 ps-4 py-3"},{default:t(()=>e[29]||(e[29]=[d(" 編輯公司 ")])),_:1}),l(Q,null,{default:t(()=>[l(te,{onSubmit:X(Ce,["prevent"])},{default:t(()=>[l(B,{modelValue:r.value.companyId,"onUpdate:modelValue":e[7]||(e[7]=a=>r.value.companyId=a),label:"公司編號",variant:"outlined",density:"compact",class:"mb-4"},null,8,["modelValue"]),l(B,{modelValue:r.value.name,"onUpdate:modelValue":e[8]||(e[8]=a=>r.value.name=a),"error-messages":L.value,label:"公司名稱",required:"",variant:"outlined",density:"compact"},null,8,["modelValue","error-messages"]),l(Y,{class:"pa-0 mt-4"},{default:t(()=>[l(ee),l(m,{color:"red-lighten-1",variant:"outlined",onClick:de},{default:t(()=>e[30]||(e[30]=[d(" 取消 ")])),_:1}),l(m,{color:"teal-darken-1",variant:"outlined",type:"submit",loading:y.value,class:"ms-2"},{default:t(()=>e[31]||(e[31]=[d(" 修改 ")])),_:1},8,["loading"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]),l(ae,{modelValue:v.value.open,"onUpdate:modelValue":e[13]||(e[13]=a=>v.value.open=a),persistent:"",width:"360"},{default:t(()=>[l(J,{class:"rounded-lg px-4 pt-4 pb-1"},{default:t(()=>[c("div",Ye,I(v.value.id?"編輯部門":"新增部門"),1),l(Q,null,{default:t(()=>[l(te,{onSubmit:X(we,["prevent"])},{default:t(()=>[v.value.id?(f(),b(B,{key:0,modelValue:o.value.departmentId,"onUpdate:modelValue":e[10]||(e[10]=a=>o.value.departmentId=a),label:"部門編號",variant:"outlined",density:"compact",class:"mb-4"},null,8,["modelValue"])):P("",!0),l(ve,{modelValue:o.value.c_id,"onUpdate:modelValue":e[11]||(e[11]=a=>o.value.c_id=a),items:Z.value,label:"選擇公司","item-title":"name","item-value":"_id",required:"",variant:"outlined",density:"compact",class:"mb-4","error-messages":W.value},null,8,["modelValue","items","error-messages"]),l(B,{modelValue:o.value.name,"onUpdate:modelValue":e[12]||(e[12]=a=>o.value.name=a),label:"部門名稱",required:"",variant:"outlined",density:"compact","error-messages":M.value},null,8,["modelValue","error-messages"]),l(Y,{class:"pa-0 mt-4"},{default:t(()=>[l(ee),l(m,{color:"red-lighten-1",variant:"outlined",size:h.value,onClick:G},{default:t(()=>e[32]||(e[32]=[d(" 取消 ")])),_:1},8,["size"]),l(m,{color:"teal-darken-1",variant:"outlined",size:h.value,type:"submit",loading:y.value,disabled:v.value.id?!ze.value:!1,class:"ms-2"},{default:t(()=>[d(I(v.value.id?"修改":"新增"),1)]),_:1},8,["size","loading","disabled"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]),l(ce,{modelValue:x.value.open,"onUpdate:modelValue":e[14]||(e[14]=a=>x.value.open=a),title:"確認刪除公司",message:`確定要刪除公司「<span class='text-pink-lighten-1' style='font-weight: 800;'>${x.value.name}</span>」嗎？此操作無法復原。`,"expected-name":x.value.name,"input-label":"公司名稱",onConfirm:Ie},null,8,["modelValue","message","expected-name"]),l(ce,{modelValue:C.value.open,"onUpdate:modelValue":e[15]||(e[15]=a=>C.value.open=a),title:"確認刪除部門",message:`確定要刪除「<span class='text-teal-darken-2' style='font-weight: 800;'>${C.value.companyName}</span>」的「<span class='text-pink-lighten-1' style='font-weight: 800;'>${C.value.name}</span>」嗎？此操作無法復原。`,"expected-name":C.value.name,"input-label":"部門名稱",onConfirm:he},null,8,["modelValue","message","expected-name"])]),_:1}))}},fa=Te(ea,[["__scopeId","data-v-60ded06f"]]);export{fa as default};