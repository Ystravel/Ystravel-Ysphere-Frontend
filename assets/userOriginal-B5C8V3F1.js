import{a0 as Gl,a1 as Jl,a2 as Xl,P as Yl,o as R,x as d,b2 as ol,z as Q,A as nl,as as ea,ao as W,c as a,a8 as s,aD as dl,ac as u,U as la,aE as aa,a5 as ta,a6 as v,a7 as k,ae as c,ai as Ze,am as Ge,af as D,b3 as il,at as qe,ad as y,K as T,ab as Ce,ag as ml,aA as g,an as P,aj as sa,aC as vl,aa as pl,a9 as ua,ay as ra,H as cl}from"./index-BvBj222y.js";import{l as gl}from"./lodash-BYTxXjAY.js";import{c as oa,a as m,d as Je,h as na,f as da,u as ia,b as i}from"./index.esm--0H7IyJ8.js";import{u as Xe,_ as ma,E as va,a as pa}from"./useROCDate-gmB1oPEj.js";import{C as ca}from"./ConfirmDeleteDialogWithTextField-CC8SVyqn.js";import{B as ga}from"./BirthdayReminder-Dy0-gjKl.js";import{V as fa}from"./VContainer-BQNdZDgp.js";import{V,a as r}from"./VRow-CVsE6tiO.js";import{a as h}from"./VPagination-vQevYjkx.js";import{V as ya}from"./VDataTableServer-B450nDfu.js";import{V as ba}from"./VForm-DYTXlbM1.js";import{V as Oe}from"./VDivider-B_QzS3m9.js";import{V as Va}from"./VTooltip-VYDVbHPc.js";import{V as xa}from"./VHover-Ds36CbPG.js";import{T as fl}from"./index-Bh7ZH78X.js";import"./_commonjsHelpers-BosuxZz1.js";import"./VList-B8jWfyzv.js";import"./VCheckboxBtn-DkthkcCZ.js";import"./VTable-CbbsjiNr.js";const ka={class:"d-flex flex-column gap-2"},Da={class:"d-flex flex-column gap-2"},wa={key:0},Ia={key:1},Ca={key:2},Sa={key:3},Ua={key:4},Na={key:5},Pa={class:"d-flex align-center overflow-hidden h-25"},ha={class:"list-content ps-4 py-3 mb-4"},Aa={style:{"font-weight":"800"},class:"text-cyan-darken-2"},Ra={class:"card-title ps-4 py-3"},Ta={__name:"userOriginal",setup(Ma){const{apiAuth:M}=aa(),O=Jl(),w=Xl(),{smAndUp:Se,mdAndUp:Z,lgAndUp:Ue,xlAndUp:$e,name:Ne,width:yl}=Yl(),bl=R(()=>yl.value>=1520),$=R(()=>Se.value?"default":"small"),Vl=R(()=>Se.value?"64":"default"),C=d(!1),S=d(null),xl=d(1),Pe=d(!1),kl={class:"header-bg"},Dl=d([{title:"入職日期",value:"hireDate"},{title:"離職日期",value:"resignationDate"}]),he=d(!1),Ae=d(!1),Re=d(!1),_e=d(null),Te=d(""),Le=d(!1),_=d(!1),N=d({open:!1,id:""}),je=d(null),Be=d(null),A=d({open:!1,userId:"",userName:"",loading:!1}),U=d(null),b=d([]),wl=d([]),Ye=d(Object.entries(ol).map(([e,l])=>({value:Number(e),title:l}))),Il=R(()=>[...Me.value].sort((e,l)=>{const o=e.companyId||"",p=l.companyId||"";return o.localeCompare(p)}).map(e=>({title:`${e.name}`,value:e._id}))),Me=d([]),Cl=R(()=>[{title:"全部",value:""},...[...Me.value].sort((e,l)=>{const o=e.companyId||"",p=l.companyId||"";return o.localeCompare(p)}).map(e=>({title:e.name,value:e._id}))]),el=d([{title:"在職",value:"在職"},{title:"離職",value:"離職"},{title:"退休",value:"退休"},{title:"留職停薪",value:"留職停薪"}]),Fe=d([{title:"男性",value:"男性"},{title:"女性",value:"女性"}]),Sl=d([{title:"有",value:!0},{title:"無",value:!1}]),Ul=R(()=>$e.value?"1200":Ue.value?"900":Z.value?"800":Se.value?"600":"100%"),Nl=oa({email:m().required("請輸入email").email("請輸入正確的 email 格式"),personalEmail:m().email("請輸入正確的 email 格式"),name:m().required("請輸入姓名"),englishName:m().required("請輸入英文名"),gender:m().required("請選擇姓別"),IDNumber:m().matches(/^[A-Za-z][12]\d{8}$/,"身分證號碼格式錯誤").required("請輸入身分證號碼"),permanentAddress:m().required("請輸入戶籍地址"),contactAddress:m().required("請輸入聯絡地址"),birthDate:Je().nullable().required("請選擇生日"),company:m().nullable().required("請選擇公司"),department:m().required("請選擇部門"),cellphone:m().min(10,"手機號碼需為10位數字").max(10,"手機號碼勿超過10位數字").required("請輸入手機號碼"),salary:m().required("請輸入基本薪資"),extNumber:m().required("請輸入分機號碼"),printNumber:m().required("請輸入列印編號"),guideLicense:na(),jobTitle:m().required("請輸入職稱"),role:da().required("請選擇使用者身分別"),employmentStatus:m().required("請選擇任職狀態"),hireDate:Je().nullable().required("請選擇入職日期"),resignationDate:Je().nullable(),emergencyName:m().required("請輸入緊急聯絡人姓名"),emergencyCellphone:m().required("請輸入緊急聯絡人連絡電話"),emergencyRelationship:m(),note:m(),userId:m(),cowellAccount:m().required("請輸入Cowell帳號"),cowellPassword:m().required("請輸入Cowell密碼")}),{handleSubmit:Pl,isSubmitting:He,resetForm:ll}=ia({validationSchema:Nl,initialValues:{email:"",personalEmail:"",name:"",englishName:"",gender:"",IDNumber:"",permanentAddress:"",contactAddress:"",birthDate:null,company:1,department:"",cellphone:"",salary:"",extNumber:"",printNumber:"",guideLicense:!1,jobTitle:"",role:0,employmentStatus:"在職",hireDate:new Date,resignationDate:null,emergencyName:"",emergencyCellphone:"",emergencyRelationship:"",note:"",userId:"",cowellAccount:"",cowellPassword:""},validateOnMount:!1,validateOnChange:!0,validateOnBlur:!0,validateOnInput:!1,context:R(()=>({isEditing:C.value}))}),ae=i("email"),te=i("personalEmail"),se=i("name"),ue=i("englishName"),E=i("gender"),G=i("IDNumber"),L=i("permanentAddress"),J=i("contactAddress"),X=i("birthDate"),re=i("company"),j=i("department",void 0,{validateOnValueUpdate:!1}),oe=i("cellphone"),ne=i("salary"),de=i("extNumber"),ie=i("printNumber"),me=i("guideLicense"),ve=i("jobTitle"),pe=i("role"),B=i("employmentStatus"),F=i("hireDate"),q=i("resignationDate"),ce=i("emergencyName"),ge=i("emergencyCellphone"),fe=i("emergencyRelationship",void 0,{validateOnValueUpdate:!1,transform:e=>e??""}),ye=i("note",void 0,{validateOnValueUpdate:!1,transform:e=>e??""}),be=i("userId",void 0,{validateOnValueUpdate:!1,transform:e=>e??""}),Ve=i("cowellAccount"),xe=i("cowellPassword"),{rocDate:hl}=Xe(F),{rocDate:Al}=Xe(q),{rocDate:Rl}=Xe(X),ze=d(10),Ee=d([{key:"userId",order:"asc"}]),I=d(1),Y=d([]),Ke=d(0),ke=[{title:"員編",align:"left",sortable:!0,key:"userId"},{title:"姓名",align:"left",sortable:!0,key:"name"},{title:"公司Email",align:"left",sortable:!0,key:"email"},{title:"手機",align:"left",sortable:!0,key:"cellphone"},{title:"所屬公司",align:"left",sortable:!0,key:"company.name"},{title:"部門",align:"left",sortable:!0,key:"department.name"},{title:"分機",align:"left",sortable:!0,key:"extNumber"},{title:"身分別",align:"left",sortable:!0,key:"role"},{title:"狀態",align:"left",sortable:!0,key:"employmentStatus"},{title:"操作",align:"left",sortable:!1,key:"action"}],ee=d(!0),Qe=d(0),al=d(""),n=d({role:"",companyId:"",department:"",gender:"",guideLicense:"",employmentStatus:"",dateType:"",dateRange:[]}),De=d(""),Tl=e=>ol[e]||"未知",le=e=>e?new Date(e):null,Ml=R(()=>O.isSuperAdmin||O.isHR||O.isAdmin),zl=R(()=>["xl","xxl"].includes(Ne.value)?ke:["lg"].includes(Ne.value)?ke.filter(e=>e.key!=="employmentStatus"):["md"].includes(Ne.value)?ke.filter(e=>e.key!=="cellphone"&&e.key!=="email"&&e.key!=="employmentStatus"):["sm"].includes(Ne.value)?ke.filter(e=>e.key!=="company.name"&&e.key!=="department.name"&&e.key!=="cellphone"&&e.key!=="email"&&e.key!=="employmentStatus"):ke.filter(e=>e.key!=="company.name"&&e.key!=="department.name"&&e.key!=="cellphone"&&e.key!=="email"&&e.key!=="role"&&e.key!=="employmentStatus")),El=async()=>{try{const{data:e}=await M.get("/department/all");wl.value=e.result}catch(e){console.error("加載部門失敗",e),w({text:"加載部門失敗",snackbarProps:{color:"red-lighten-1"}})}},ql=async()=>{try{const{data:e}=await M.get("/company/all");e.success&&(Me.value=e.result)}catch(e){console.error("載入公司列表失敗:",e),w({text:"載入公司列表失敗",snackbarProps:{color:"red-lighten-1"}})}},Ol=async()=>{if(!n.value.companyId){b.value=[];return}try{const{data:e}=await M.get("/department/all",{params:{companyId:n.value.companyId}});e.success?b.value=e.result||[]:(console.warn("找不到該公司的部門"),b.value=[])}catch(e){console.error("載入部門失敗:",e),w({text:"載入部門失敗",snackbarProps:{color:"red-lighten-1"}}),b.value=[]}},H=async(e,l)=>{e?I.value=1:l&&(I.value=l),await we()},we=async()=>{var e,l,o,p;ee.value=!0,console.log("Selected date range:",n.value.dateRange);try{const f={page:I.value,itemsPerPage:ze.value,sortBy:((e=Ee.value[0])==null?void 0:e.key)||"userId",sortOrder:((l=Ee.value[0])==null?void 0:l.order)||"asc",quickSearch:De.value,...n.value,department:n.value.department};n.value.dateType&&n.value.dateRange&&n.value.dateRange.length>0&&(f.dateType=n.value.dateType,f.startDate=n.value.dateRange[0].toISOString(),f.endDate=n.value.dateRange[n.value.dateRange.length-1].toISOString()),console.log("Query params:",f);const{data:x}=await M.get("/user/search",{params:f});x.success&&(Y.value=x.result.data,Qe.value=x.result.totalItems)}catch(f){console.error("搜索失败:",f),w({text:((p=(o=f==null?void 0:f.response)==null?void 0:o.data)==null?void 0:p.message)||"搜索失败",snackbarProps:{color:"error"}})}finally{ee.value=!1}},$l=async()=>{var e,l;try{A.value.loading=!0,await M.post(`/user/${A.value.userId}/send-initial-password`);const o=Y.value.findIndex(p=>p._id===A.value.userId);o!==-1&&(Y.value[o].isFirstLogin=!1),w({text:"初始密碼已發送成功",snackbarProps:{color:"teal-lighten-1"}}),sl()}catch(o){console.error("發送初始密碼失敗:",o),w({text:((l=(e=o==null?void 0:o.response)==null?void 0:e.data)==null?void 0:l.message)||"發送初始密碼失敗",snackbarProps:{color:"red-lighten-1"}})}finally{A.value.loading=!1}},_l=Pl(async e=>{var l,o,p,f;try{if(C.value){const x=I.value,{data:t}=await M.patch(`/user/${N.value.id}`,{...e,company:U.value}),K=Y.value.findIndex(z=>z._id===N.value.id);K!==-1&&(Y.value[K]={...t.result,company:Me.value.find(z=>z._id===U.value),department:{_id:e.department,name:((l=b.value.find(z=>z._id===e.department))==null?void 0:l.name)||""}}),await H(!1,x)}else await M.post("/user",{...e,company:U.value}),await H(!0);await Promise.all([(o=_e.value)==null?void 0:o.refreshChart(),(p=je.value)==null?void 0:p.refreshChart(),(f=Be.value)==null?void 0:f.refreshData()]),w({text:C.value?"員工資料更新成功":"員工新增成功",snackbarProps:{color:"teal-lighten-1"}}),We()}catch(x){const t=Ll(x);w({text:t,snackbarProps:{color:"red-lighten-1"}})}}),Ll=e=>e.response?{Email已註冊:"Email已經被註冊,請使用其他Email",身分證號碼已註冊:"身分證號碼已經被使用,請確認是否輸入正確",手機號碼已註冊:"手機號碼已經被使用,請確認是否輸入正確",分機號碼已註冊:"分機號碼已經被使用,請使用其他號碼",列印編號已註冊:"列印編號已經存在,請使用其他編號",員工編號已註冊:"員工編號已經被使用,請重新輸入",科威帳號已註冊:"科威帳號已經被使用,請使用其他帳號",科威密碼已註冊:"科威密碼已經被使用,請使用其他密碼"}[e.response.data.message]||e.response.data.message:"發生錯誤",tl=async e=>{if(_.value=!0,!Ml.value){w({text:"權限不足",snackbarProps:{color:"red-lighten-1"}});return}_.value=!0,Le.value=!0,xl.value=I.value,N.value.open=!0,e?(C.value=!0,N.value.id=e._id,e.company&&(U.value=e.company._id,re.value.value=e.company._id,await Ie(e.company._id),e.department&&e.department._id&&(j.value.value=e.department._id)),ae.value.value=e.email,te.value.value=e.personalEmail,se.value.value=e.name,ue.value.value=e.englishName,E.value.value=e.gender,G.value.value=e.IDNumber,L.value.value=e.permanentAddress,J.value.value=e.contactAddress,X.value.value=le(e.birthDate),oe.value.value=e.cellphone,ne.value.value=e.salary,de.value.value=e.extNumber,ie.value.value=e.printNumber,me.value.value=e.guideLicense,ve.value.value=e.jobTitle,pe.value.value=e.role,B.value.value=e.employmentStatus,F.value.value=le(e.hireDate),q.value.value=le(e.resignationDate),ce.value.value=e.emergencyName,ge.value.value=e.emergencyCellphone,fe.value.value=e.emergencyRelationship??"",ye.value.value=e.note??"",be.value.value=e.userId??"",Ve.value.value=e.cowellAccount,xe.value.value=e.cowellPassword,S.value={email:e.email,personalEmail:e.personalEmail,name:e.name,englishName:e.englishName,gender:e.gender,IDNumber:e.IDNumber,permanentAddress:e.permanentAddress,contactAddress:e.contactAddress,birthDate:le(e.birthDate),cellphone:e.cellphone,salary:e.salary,extNumber:e.extNumber,printNumber:e.printNumber,guideLicense:e.guideLicense,jobTitle:e.jobTitle,role:e.role,employmentStatus:e.employmentStatus,hireDate:le(e.hireDate),resignationDate:le(e.resignationDate),emergencyName:e.emergencyName,emergencyCellphone:e.emergencyCellphone,emergencyRelationship:e.emergencyRelationship??"",note:e.note??"",userId:e.userId??"",cowellAccount:e.cowellAccount,cowellPassword:e.cowellPassword},localStorage.setItem("userTablePage",I.value.toString())):(C.value=!1,N.value.id="",S.value=null,U.value=null,b.value=[],ll(),F.value.value=new Date),setTimeout(()=>{_.value=!1,Le.value=!1},300)},We=()=>{N.value.open=!1,U.value=null,b.value=[],S.value=null,ll()},jl=e=>{A.value={open:!0,userId:e._id,userName:e.name,loading:!1}},sl=()=>{A.value={open:!1,userId:"",userName:"",loading:!1}},Bl=async()=>{var e,l,o,p,f;try{ee.value=!0,await M.delete(`/user/${N.value.id}`),We(),await H(!0),await((e=_e.value)==null?void 0:e.refreshChart()),await((l=je.value)==null?void 0:l.refreshChart()),await((o=Be.value)==null?void 0:o.refreshData()),w({text:"員工刪除成功",snackbarProps:{color:"teal-lighten-1"}})}catch(x){console.error("Delete user error:",x),w({text:((f=(p=x==null?void 0:x.response)==null?void 0:p.data)==null?void 0:f.message)||"刪除失敗",snackbarProps:{color:"red-lighten-1"}})}finally{ee.value=!1,Pe.value=!1}},Fl=()=>{L.value.value&&(J.value.value=L.value.value)},Hl=e=>{e<1&&(e=1);const l=Math.ceil(Qe.value/ze.value);e>l&&(e=l),I.value!==e&&(I.value=e,localStorage.removeItem("userTablePage"),H(!1))},Kl=()=>{n.value={role:"",companyId:"",department:"",gender:"",guideLicense:"",employmentStatus:"",dateType:"",startDate:null,endDate:null},b.value=[],al.value="",De.value="",we()},Ql=R(()=>{if(!C.value)return!0;if(!S.value)return!1;const e={email:ae.value.value,personalEmail:te.value.value,name:se.value.value,englishName:ue.value.value,gender:E.value.value,IDNumber:G.value.value,permanentAddress:L.value.value,contactAddress:J.value.value,birthDate:X.value.value,company:U.value,department:j.value.value,cellphone:oe.value.value,salary:ne.value.value,extNumber:de.value.value,printNumber:ie.value.value,guideLicense:me.value.value,jobTitle:ve.value.value,role:pe.value.value,employmentStatus:B.value.value,hireDate:F.value.value,resignationDate:q.value.value,emergencyName:ce.value.value,emergencyCellphone:ge.value.value,emergencyRelationship:fe.value.value??"",note:ye.value.value??"",userId:be.value.value??"",cowellAccount:Ve.value,cowellPassword:xe.value};return Object.keys(S.value).some(l=>{if(["note","emergencyRelationship"].includes(l)){const o=S.value[l]??"",p=e[l]??"";return o!==p}if(l==="birthDate"||l==="hireDate"||l==="resignationDate"){const o=S.value[l]?new Date(S.value[l]).toISOString():null,p=e[l]?new Date(e[l]).toISOString():null;return o!==p}return S.value[l]!==e[l]})}),Ie=async e=>{var l;try{if(N.value.open?U.value=e:n.value={...n.value,companyId:e,department:""},!e){b.value=[];return}console.log("正在載入公司ID的部門:",e);const{data:o}=await M.get("/department/all",{params:{companyId:e,itemsPerPage:100}});console.log("API 返回的部門數據:",o),o.success?(b.value=((l=o.result)==null?void 0:l.data)||[],console.log("設置過濾後的部門列表:",b.value)):(console.warn("找不到該公司的部門"),b.value=[])}catch(o){console.error("載入部門失敗:",o),w({text:"載入部門資料失敗",snackbarProps:{color:"red-lighten-1"}}),b.value=[]}},Wl=gl.debounce(e=>{H(!0)},300),ul=gl.debounce(e=>{I.value=1,we()},300);return Q(De,e=>{ul(e)}),Q(U,async e=>{e!=null?(re.value.value=e,j.value.value="",await Ie(e)):(re.value.value=null,j.value.value="",b.value=[])}),Q(()=>n.value.companyId,async e=>{e?await Ie(e):b.value=[]}),Q(()=>n.value.dateRange,e=>{console.log("選擇的日期區間:",e)}),Q(re.value,e=>{e&&e.value!==null&&e.value!==void 0&&(U.value=e.value)}),Q(B.value,e=>{_.value||(e==="離職"?Re.value=!0:(Re.value=!1,q.value.value=null))}),Q(()=>G.value.value,e=>{if(!e){E.value.value=null,Te.value="";return}if(e.length===10&&e!==Te.value&&!Le.value&&/^[A-Za-z][12]\d{8}$/.test(e)){const o=e.charAt(1);o==="1"?(E.value.value="男性",Te.value=e,w({text:"已自動設定性別為男性",snackbarProps:{color:"teal-lighten-1",timeout:1e3}})):o==="2"&&(E.value.value="女性",Te.value=e,w({text:"已自動設定性別為女性",snackbarProps:{color:"teal-lighten-1",timeout:1e3}}))}}),nl(async()=>{const e=localStorage.getItem("userTablePage");e&&(I.value=parseInt(e),Ke.value++),await ql(),await El(),await Ol(),await we()}),nl(()=>{const e=localStorage.getItem("userTablePage");e&&parseInt(e)>0?(I.value=parseInt(e),Ke.value++,localStorage.removeItem("userTablePage")):I.value=1}),ea(()=>{Wl.cancel(),ul.cancel()}),(e,l)=>{var p,f,x;const o=ta("v-date-input");return v(),W(la,null,[a(fa,{"max-width":"2500"},{default:s(()=>[a(V,{class:"rounded-lg py-0 mt-2 ma-sm-1 ma-md-6"},{default:s(()=>[u($e)?(v(),k(r,{key:0,class:"ps-4 py-0"},{default:s(()=>[a(va,{ref_key:"chartRef",ref:_e},null,512)]),_:1})):c("",!0),u(Z)?(v(),k(r,{key:1,class:"ps-4 py-0"},{default:s(()=>[a(pa,{ref_key:"turnoverChartRef",ref:je},null,512)]),_:1})):c("",!0),bl.value?(v(),k(r,{key:2,class:"ps-4 py-0"},{default:s(()=>[a(ga,{ref_key:"birthdayReminderRef",ref:Be},null,512)]),_:1})):c("",!0),a(r,{class:"pa-0 mb-6 mb-sm-0"},{default:s(()=>[a(Ze,{class:"d-flex mx-3 mx-sm-4 px-4 pt-2 pt-sm-5 pb-4 pb-sm-5",elevation:"4",rounded:"xl",height:"100%"},{default:s(()=>[a(Ge,{class:"d-flex align-center"},{default:s(()=>[a(V,{class:"h-100"},{default:s(()=>[a(r,{cols:"12",class:"d-flex flex-column justify-center"},{default:s(()=>[a(V,null,{default:s(()=>l[52]||(l[52]=[D("h6",{style:{"font-size":"16px"},class:"ps-3 mb-1"}," 搜尋篩選 ",-1)])),_:1}),a(V,null,{default:s(()=>[a(r,{cols:"12",sm:"6"},{default:s(()=>[a(h,{modelValue:n.value.companyId,"onUpdate:modelValue":[l[0]||(l[0]=t=>n.value.companyId=t),Ie],items:Cl.value,label:"公司","item-title":"title","item-value":"value",variant:"outlined",density:"compact","hide-details":"",clearable:""},null,8,["modelValue","items"])]),_:1}),a(r,{cols:"12",sm:"6"},{default:s(()=>[a(h,{modelValue:n.value.department,"onUpdate:modelValue":l[1]||(l[1]=t=>n.value.department=t),items:b.value,label:"部門","item-title":"name","item-value":"_id",variant:"outlined",density:"compact","hide-details":"",clearable:"",disabled:!n.value.companyId},null,8,["modelValue","items","disabled"])]),_:1})]),_:1}),a(V,null,{default:s(()=>[a(r,{cols:"12",sm:"6"},{default:s(()=>[a(h,{modelValue:n.value.role,"onUpdate:modelValue":l[2]||(l[2]=t=>n.value.role=t),items:Ye.value,label:"身分別","item-title":"title","item-value":"value",variant:"outlined",density:"compact","hide-details":"",clearable:""},null,8,["modelValue","items"])]),_:1}),a(r,{cols:"12",sm:"6"},{default:s(()=>[a(h,{modelValue:n.value.employmentStatus,"onUpdate:modelValue":l[3]||(l[3]=t=>n.value.employmentStatus=t),items:el.value,label:"任職狀態","item-title":"title","item-value":"value",variant:"outlined",density:"compact","hide-details":"",clearable:""},null,8,["modelValue","items"])]),_:1})]),_:1}),a(V,null,{default:s(()=>[a(r,{cols:"12",sm:"6"},{default:s(()=>[a(h,{modelValue:n.value.dateType,"onUpdate:modelValue":l[4]||(l[4]=t=>n.value.dateType=t),items:Dl.value,label:"日期類型",variant:"outlined",density:"compact","hide-details":"",clearable:""},null,8,["modelValue","items"])]),_:1}),a(r,{cols:"12",sm:"6"},{default:s(()=>[a(o,{modelValue:n.value.dateRange,"onUpdate:modelValue":l[5]||(l[5]=t=>n.value.dateRange=t),label:"日期區間",variant:"outlined",density:"compact","hide-details":"",multiple:"range","prepend-icon":"",clearable:"","persistent-placeholder":""},null,8,["modelValue"])]),_:1})]),_:1}),a(V,null,{default:s(()=>[a(r,{cols:"6",class:"pe-0 py-0"},{default:s(()=>[D("div",ka,[l[55]||(l[55]=D("label",{class:"text-grey-darken-1 search-label"},"性別",-1)),a(il,{modelValue:n.value.gender,"onUpdate:modelValue":l[6]||(l[6]=t=>n.value.gender=t),column:"",class:"custom-chip-group"},{default:s(()=>[a(qe,{filter:"",variant:"outlined",color:"blue-grey-darken-2",value:"男性",label:""},{default:s(()=>l[53]||(l[53]=[y(" 男性 ")])),_:1}),a(qe,{filter:"",variant:"outlined",color:"blue-grey-darken-2",value:"女性",label:""},{default:s(()=>l[54]||(l[54]=[y(" 女性 ")])),_:1})]),_:1},8,["modelValue"])])]),_:1}),a(r,{cols:"6",class:"py-0"},{default:s(()=>[D("div",Da,[l[58]||(l[58]=D("label",{class:"text-grey-darken-1 search-label"},"領隊證",-1)),a(il,{modelValue:n.value.guideLicense,"onUpdate:modelValue":l[7]||(l[7]=t=>n.value.guideLicense=t),column:"",class:"custom-chip-group"},{default:s(()=>[a(qe,{filter:"",variant:"outlined",value:!0,color:"blue-grey-darken-2",label:""},{default:s(()=>l[56]||(l[56]=[y(" 有 ")])),_:1}),a(qe,{filter:"",variant:"outlined",value:!1,color:"blue-grey-darken-2",label:""},{default:s(()=>l[57]||(l[57]=[y(" 無 ")])),_:1})]),_:1},8,["modelValue"])])]),_:1})]),_:1}),a(V,null,{default:s(()=>[a(r,{cols:"12",class:"d-flex justify-end gap-2"},{default:s(()=>[a(V,null,{default:s(()=>[a(r,{cols:"3"},{default:s(()=>[a(T,{color:"grey",block:"",onClick:Kl},{default:s(()=>[a(Ce,null,{default:s(()=>l[59]||(l[59]=[y("mdi-refresh")])),_:1})]),_:1})]),_:1}),a(r,null,{default:s(()=>[a(T,{"prepend-icon":"mdi-magnify",color:"cyan-darken-2",loading:ee.value,block:"",onClick:l[8]||(l[8]=()=>{console.log("Current search criteria:",n.value.value),we()})},{default:s(()=>l[60]||(l[60]=[y(" 搜尋 ")])),_:1},8,["loading"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),a(V,{class:"elevation-4 rounded-lg py-4 py-sm-8 px-1 px-sm-10 mt-2 mt-sm-10 mx-0 mx-sm-4 mx-md-10 mb-4 bg-white"},{default:s(()=>[a(r,{cols:"12",class:"ps-3 pb-6"},{default:s(()=>l[61]||(l[61]=[D("h3",null," 員工管理 ",-1)])),_:1}),a(r,{cols:"12"},{default:s(()=>[a(V,null,{default:s(()=>[a(r,null,{default:s(()=>[a(V,null,{default:s(()=>[a(r,null,{default:s(()=>[a(T,{"prepend-icon":"mdi-account-plus",variant:"outlined",color:"blue-grey-darken-2",onClick:l[9]||(l[9]=t=>tl(null))},{default:s(()=>l[62]||(l[62]=[y(" 新增使用者 ")])),_:1})]),_:1}),a(r,{sm:"4",lg:"3",xl:"2"},{default:s(()=>[a(V,{class:"d-flex align-center"},{default:s(()=>[u(Z)?(v(),k(r,{key:0,cols:"2",class:"ps-lg-5"},{default:s(()=>[ml(a(Ce,{icon:"mdi-information",size:"small",color:"blue-grey-darken-2"},null,512),[[fl,"可搜尋員編、姓名、公司Email、手機、分機、職稱、備註","start"]])]),_:1})):c("",!0),a(r,null,{default:s(()=>[a(g,{modelValue:De.value,"onUpdate:modelValue":l[10]||(l[10]=t=>De.value=t),label:"搜尋","append-inner-icon":"mdi-magnify","base-color":"#666",color:"blue-grey-darken-3",variant:"outlined",density:"compact","hide-details":"",clearable:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),a(r,{cols:"12"},{default:s(()=>[(v(),k(ya,{key:Ke.value,"items-per-page":ze.value,"onUpdate:itemsPerPage":[l[11]||(l[11]=t=>ze.value=t),l[13]||(l[13]=t=>H(!1))],"sort-by":Ee.value,"onUpdate:sortBy":[l[12]||(l[12]=t=>Ee.value=t),l[14]||(l[14]=t=>H(!1))],page:I.value,density:"compact",class:"rounded-ts-lg rounded-te-lg py-3","items-per-page-options":[10,20,50],items:Y.value,headers:zl.value,"header-props":kl,loading:ee.value,"items-length":Qe.value,search:al.value,hover:"","onUpdate:page":Hl},{item:s(({item:t,index:K})=>{var z,rl;return[D("tr",{class:sa({"odd-row":K%2===0,"even-row":K%2!==0})},[D("td",null,P(t.userId),1),D("td",null,P(t.name),1),u(Ue)?(v(),W("td",wa,P(t.email),1)):c("",!0),u(Ue)?(v(),W("td",Ia,P(t.cellphone),1)):c("",!0),u(Z)?(v(),W("td",Ca,P(((z=t.company)==null?void 0:z.name)||""),1)):c("",!0),u(Z)?(v(),W("td",Sa,P(((rl=t.department)==null?void 0:rl.name)||""),1)):c("",!0),D("td",null,P(t.extNumber),1),u(Se)?(v(),W("td",Ua,P(Tl(t.role)),1)):c("",!0),u($e)?(v(),W("td",Na,P(t.employmentStatus),1)):c("",!0),D("td",Pa,[a(T,{icon:"",color:"light-blue-darken-4",variant:"plain",width:"28",size:$.value,ripple:!1,onClick:Zl=>tl(t)},{default:s(()=>[a(Ce,null,{default:s(()=>l[63]||(l[63]=[y("mdi-pencil")])),_:1})]),_:2},1032,["size","onClick"]),t.isFirstLogin?ml((v(),k(T,{key:0,icon:"",color:"teal-darken-1",variant:"plain",width:"28",class:"ms-2",size:$.value,ripple:!1,onClick:Zl=>jl(t)},{default:s(()=>[a(Ce,null,{default:s(()=>l[64]||(l[64]=[y("mdi-key-variant")])),_:1})]),_:2},1032,["size","onClick"])),[[fl,"發送初始密碼"]]):c("",!0)])],2)]}),_:1},8,["items-per-page","sort-by","page","items","headers","loading","items-length","search"]))]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),a(dl,{modelValue:A.value.open,"onUpdate:modelValue":l[15]||(l[15]=t=>A.value.open=t),persistent:"","max-width":"360"},{default:s(()=>[a(Ze,{class:"rounded-lg pa-4"},{default:s(()=>[l[69]||(l[69]=D("div",{class:"card-title pa-4"}," 發送初始密碼 ",-1)),D("div",ha,[l[65]||(l[65]=y(" 確定要發送系統生成的初始密碼給 ")),D("span",Aa,P(A.value.userName),1),l[66]||(l[66]=y(" 嗎？ "))]),a(vl,{class:"pa-4 pt-0"},{default:s(()=>[a(pl),a(T,{color:"grey",variant:"outlined",size:$.value,onClick:sl},{default:s(()=>l[67]||(l[67]=[y(" 取消 ")])),_:1},8,["size"]),a(T,{color:"teal-darken-1",variant:"outlined",size:$.value,loading:A.value.loading,onClick:$l},{default:s(()=>l[68]||(l[68]=[y(" 確認發送 ")])),_:1},8,["size","loading"])]),_:1})]),_:1})]),_:1},8,["modelValue"]),a(dl,{modelValue:N.value.open,"onUpdate:modelValue":l[47]||(l[47]=t=>N.value.open=t),persistent:"",width:Ul.value},{default:s(()=>[a(ba,{disabled:u(He),onSubmit:ua(u(_l),["prevent"])},{default:s(()=>[a(Ze,{class:"rounded-lg px-4 py-6"},{default:s(()=>[D("div",Ra,P(N.value.id?"員工資料編輯":"新增員工"),1),a(V,{class:"py-4"},{default:s(()=>[a(r,{cols:"4",md:"5",class:"d-flex align-center ps-6"},{default:s(()=>[a(Oe)]),_:1}),!_.value||!C.value?(v(),k(r,{key:0,cols:"4",md:"2",class:"info-title px-0 text-blue-grey-darken-2"},{default:s(()=>l[70]||(l[70]=[y(" 基本資料 ")])),_:1})):c("",!0),a(r,{cols:"4",md:"5",class:"d-flex align-center pe-6"},{default:s(()=>[a(Oe)]),_:1})]),_:1}),_.value&&C.value?(v(),k(Ge,{key:0,class:"d-flex justify-center align-center",style:{height:"600px"}},{default:s(()=>[a(ra,{indeterminate:"",color:"blue-grey-darken-2",size:Vl.value},null,8,["size"])]),_:1})):c("",!0),!_.value||!C.value?(v(),k(Ge,{key:1,class:"mt-3 pa-3"},{default:s(()=>[a(V,null,{default:s(()=>[a(r,{cols:"12",sm:"6",md:"4",lg:"3",class:"pb-0"},{default:s(()=>[a(g,{modelValue:u(se).value.value,"onUpdate:modelValue":l[16]||(l[16]=t=>u(se).value.value=t),"error-messages":u(se).errorMessage.value,label:"*姓名",type:"text",variant:"outlined",density:"compact",clearable:""},null,8,["modelValue","error-messages"])]),_:1}),a(r,{cols:"12",sm:"6",md:"4",lg:"3",class:"pb-0"},{default:s(()=>[a(g,{modelValue:u(ue).value.value,"onUpdate:modelValue":l[17]||(l[17]=t=>u(ue).value.value=t),"error-messages":u(ue).errorMessage.value,label:"*英文名",type:"text",variant:"outlined",density:"compact",clearable:""},null,8,["modelValue","error-messages"])]),_:1}),a(r,{cols:"12",sm:"6",md:"4",lg:"3",class:"pb-0"},{default:s(()=>[a(g,{modelValue:u(G).value.value,"onUpdate:modelValue":l[18]||(l[18]=t=>u(G).value.value=t),"error-messages":u(G).errorMessage.value,label:"*身分證號碼",maxlength:"10",type:"text",variant:"outlined",density:"compact",clearable:""},null,8,["modelValue","error-messages"])]),_:1}),a(r,{cols:"12",sm:"6",md:"4",lg:"3",class:"pb-0"},{default:s(()=>[a(o,{modelValue:u(X).value.value,"onUpdate:modelValue":l[19]||(l[19]=t=>u(X).value.value=t),"error-messages":u(X).errorMessage.value,label:"*生日","prepend-icon":"",variant:"outlined",density:"compact",hint:u(Rl),"persistent-hint":"",clearable:"","cancel-text":"取消","ok-text":"確認"},null,8,["modelValue","error-messages","hint"])]),_:1}),a(r,{cols:"12",sm:"6",md:"4",lg:"3",class:"pb-0"},{default:s(()=>[a(h,{modelValue:u(E).value.value,"onUpdate:modelValue":l[20]||(l[20]=t=>u(E).value.value=t),items:Fe.value,"error-messages":u(E).errorMessage.value,"item-title":Fe.value.title,"item-value":Fe.value.value,label:"*性別",variant:"outlined",density:"compact"},null,8,["modelValue","items","error-messages","item-title","item-value"])]),_:1}),a(r,{cols:"12",sm:"6",md:"4",lg:"3",class:"pb-0"},{default:s(()=>[a(g,{modelValue:u(oe).value.value,"onUpdate:modelValue":l[21]||(l[21]=t=>u(oe).value.value=t),"error-messages":u(oe).errorMessage.value,label:"*手機號碼",maxlength:"10",type:"text",variant:"outlined",density:"compact",clearable:""},null,8,["modelValue","error-messages"])]),_:1}),a(r,{cols:"12",sm:"6",class:"pb-0"},{default:s(()=>[a(g,{modelValue:u(te).value.value,"onUpdate:modelValue":l[22]||(l[22]=t=>u(te).value.value=t),"error-messages":u(te).errorMessage.value,label:"個人Email",type:"email",variant:"outlined",density:"compact",clearable:"",autocomplete:"username"},null,8,["modelValue","error-messages"])]),_:1}),a(r,{cols:"12",sm:"6",class:"pb-0"},{default:s(()=>[a(g,{modelValue:u(L).value.value,"onUpdate:modelValue":l[23]||(l[23]=t=>u(L).value.value=t),"error-messages":u(L).errorMessage.value,label:"*戶籍地址",type:"text",variant:"outlined",density:"compact",clearable:""},null,8,["modelValue","error-messages"])]),_:1}),a(r,{cols:"12",sm:"6",class:"pb-0"},{default:s(()=>[a(g,{modelValue:u(J).value.value,"onUpdate:modelValue":l[24]||(l[24]=t=>u(J).value.value=t),"error-messages":u(J).errorMessage.value,label:"*聯絡地址",type:"text",variant:"outlined",density:"compact",clearable:""},{"append-inner":s(()=>[a(Va,{location:"top","close-delay":"200"},{activator:s(({props:t})=>[a(Ce,cl(t,{icon:"mdi-content-copy",onClick:Fl}),null,16)]),default:s(()=>[l[71]||(l[71]=y(" 複製戶籍地址 "))]),_:1})]),_:1},8,["modelValue","error-messages"])]),_:1}),u(Z)&&!u(Ue)?(v(),k(r,{key:0,cols:"6"})):c("",!0),a(r,{cols:"12",sm:"6",md:"4",class:"pb-0"},{default:s(()=>[a(g,{modelValue:u(ce).value.value,"onUpdate:modelValue":l[25]||(l[25]=t=>u(ce).value.value=t),"error-messages":u(ce).errorMessage.value,label:"*緊急聯絡人姓名",type:"text",variant:"outlined",density:"compact",clearable:""},null,8,["modelValue","error-messages"])]),_:1}),a(r,{cols:"12",sm:"6",md:"4",class:"pb-0"},{default:s(()=>[a(g,{modelValue:u(ge).value.value,"onUpdate:modelValue":l[26]||(l[26]=t=>u(ge).value.value=t),"error-messages":u(ge).errorMessage.value,label:"*緊急聯絡人電話",type:"text",variant:"outlined",density:"compact",clearable:""},null,8,["modelValue","error-messages"])]),_:1}),a(r,{cols:"12",sm:"6",md:"4",class:"pb-0"},{default:s(()=>[a(g,{modelValue:u(fe).value.value,"onUpdate:modelValue":l[27]||(l[27]=t=>u(fe).value.value=t),"error-messages":u(fe).errorMessage.value,label:"緊急聯絡人關係",type:"text",variant:"outlined",density:"compact",clearable:""},null,8,["modelValue","error-messages"])]),_:1}),a(r,{cols:"12",class:"pa-0"},{default:s(()=>[a(V,{class:"py-4 mb-2"},{default:s(()=>[a(r,{cols:"4",md:"5",class:"d-flex align-center ps-6"},{default:s(()=>[a(Oe)]),_:1}),a(r,{cols:"4",md:"2",class:"info-title text-blue-grey-darken-2"},{default:s(()=>l[72]||(l[72]=[y(" 任職資訊 ")])),_:1}),a(r,{cols:"4",md:"5",class:"d-flex align-center pe-6"},{default:s(()=>[a(Oe)]),_:1})]),_:1})]),_:1}),C.value?(v(),k(r,{key:1,cols:"12",sm:"6",md:"4",lg:"3",class:"pb-0"},{default:s(()=>[a(g,{modelValue:u(be).value.value,"onUpdate:modelValue":l[28]||(l[28]=t=>u(be).value.value=t),"error-messages":u(be).errorMessage.value,label:"*員工編號",type:"text",variant:"outlined",density:"compact",maxlength:"4",clearable:""},null,8,["modelValue","error-messages"])]),_:1})):c("",!0),a(r,{cols:"12",sm:"6",md:"4",lg:"3",class:"pb-0"},{default:s(()=>[a(h,{modelValue:U.value,"onUpdate:modelValue":[l[29]||(l[29]=t=>U.value=t),Ie],"error-messages":u(re).errorMessage.value,items:Il.value,label:"*所屬公司","item-title":"title","item-value":"value",variant:"outlined",density:"compact",clearable:""},null,8,["modelValue","error-messages","items"])]),_:1}),a(r,{cols:"12",sm:"6",md:"4",lg:"3",class:"pb-0"},{default:s(()=>[a(h,{modelValue:u(j).value.value,"onUpdate:modelValue":l[30]||(l[30]=t=>u(j).value.value=t),items:b.value,"error-messages":u(j).errorMessage.value,"item-title":"name","item-value":"_id",label:"*選擇部門",variant:"outlined",density:"compact",clearable:""},null,8,["modelValue","items","error-messages"])]),_:1}),a(r,{cols:"12",sm:"6",md:"4",lg:"3",class:"pb-0"},{default:s(()=>[a(g,{modelValue:u(ve).value.value,"onUpdate:modelValue":l[31]||(l[31]=t=>u(ve).value.value=t),"error-messages":u(ve).errorMessage.value,label:"*職稱",type:"text",variant:"outlined",density:"compact",clearable:""},null,8,["modelValue","error-messages"])]),_:1}),u(O).isHR||u(O).isSuperAdmin?(v(),k(r,{key:2,cols:"12",sm:"6",md:"4",lg:"3",class:"pb-0"},{default:s(()=>[a(g,{modelValue:u(ne).value.value,"onUpdate:modelValue":l[32]||(l[32]=t=>u(ne).value.value=t),"error-messages":u(ne).errorMessage.value,label:"*基本薪資",type:"text",variant:"outlined",density:"compact",clearable:""},null,8,["modelValue","error-messages"])]),_:1})):c("",!0),u(O).isHR||u(O).isSuperAdmin?(v(),k(r,{key:3,cols:"12",sm:"6",md:"4",lg:"3",class:"pb-0"},{default:s(()=>[a(h,{modelValue:u(pe).value.value,"onUpdate:modelValue":l[33]||(l[33]=t=>u(pe).value.value=t),"error-messages":u(pe).errorMessage.value,items:Ye.value,"item-title":"title","item-value":"value",label:"*權限",variant:"outlined",density:"compact",clearable:""},null,8,["modelValue","error-messages","items"])]),_:1})):c("",!0),a(r,{cols:"12",sm:"6",md:"4",lg:"3",class:"pb-0"},{default:s(()=>[a(o,{modelValue:u(F).value.value,"onUpdate:modelValue":l[34]||(l[34]=t=>u(F).value.value=t),"error-messages":u(F).errorMessage.value,label:"*入職日期","prepend-icon":"",variant:"outlined",density:"compact",hint:u(hl),"persistent-hint":"",clearable:"","cancel-text":"取消","ok-text":"確認"},null,8,["modelValue","error-messages","hint"])]),_:1}),a(r,{cols:"12",sm:"6",md:"4",lg:"3",class:"pb-0"},{default:s(()=>[a(g,{modelValue:u(de).value.value,"onUpdate:modelValue":l[35]||(l[35]=t=>u(de).value.value=t),"error-messages":u(de).errorMessage.value,label:"*分機號碼",type:"text",variant:"outlined",density:"compact",clearable:""},null,8,["modelValue","error-messages"])]),_:1}),a(r,{cols:"12",sm:"6",md:"4",lg:"3",class:"pb-0"},{default:s(()=>[a(g,{modelValue:u(ie).value.value,"onUpdate:modelValue":l[36]||(l[36]=t=>u(ie).value.value=t),"error-messages":u(ie).errorMessage.value,label:"*列印編號",type:"text",variant:"outlined",density:"compact",clearable:""},null,8,["modelValue","error-messages"])]),_:1}),a(r,{cols:"12",sm:"6",md:"4",lg:"3",class:"pb-0"},{default:s(()=>[a(g,{modelValue:u(Ve).value.value,"onUpdate:modelValue":l[37]||(l[37]=t=>u(Ve).value.value=t),"error-messages":u(Ve).errorMessage.value,label:"*科威帳號",type:he.value?"text":"password","append-inner-icon":he.value?"mdi-eye-off":"mdi-eye",variant:"outlined",density:"compact",clearable:"",autocomplete:"new-password","onClick:appendInner":l[38]||(l[38]=t=>he.value=!he.value)},null,8,["modelValue","error-messages","type","append-inner-icon"])]),_:1}),a(r,{cols:"12",sm:"6",md:"4",lg:"3",class:"pb-0"},{default:s(()=>[a(g,{modelValue:u(xe).value.value,"onUpdate:modelValue":l[39]||(l[39]=t=>u(xe).value.value=t),"error-messages":u(xe).errorMessage.value,label:"*科威密碼",type:Ae.value?"text":"password","append-inner-icon":Ae.value?"mdi-eye-off":"mdi-eye",variant:"outlined",density:"compact",clearable:"",autocomplete:"new-password","onClick:appendInner":l[40]||(l[40]=t=>Ae.value=!Ae.value)},null,8,["modelValue","error-messages","type","append-inner-icon"])]),_:1}),a(r,{cols:"12",sm:"6",md:"4",lg:"3",class:"pb-0"},{default:s(()=>[a(h,{modelValue:u(me).value.value,"onUpdate:modelValue":l[41]||(l[41]=t=>u(me).value.value=t),items:Sl.value,"error-messages":u(me).errorMessage.value,label:"領隊證",variant:"outlined",density:"compact"},null,8,["modelValue","items","error-messages"])]),_:1}),a(r,{cols:"12",sm:"6",md:"4",lg:"3",class:"pb-0"},{default:s(()=>[a(h,{modelValue:u(B).value.value,"onUpdate:modelValue":l[42]||(l[42]=t=>u(B).value.value=t),"error-messages":u(B).errorMessage.value,items:el.value,"item-title":"title","item-value":"value",label:"*任職狀態",variant:"outlined",density:"compact",clearable:""},null,8,["modelValue","error-messages","items"])]),_:1}),u(q).value.value?(v(),k(r,{key:4,cols:"12",sm:"6",md:"4",lg:"3",class:"pb-0"},{default:s(()=>[a(o,{modelValue:u(q).value.value,"onUpdate:modelValue":l[43]||(l[43]=t=>u(q).value.value=t),label:"離職日期","prepend-icon":"",variant:"outlined",density:"compact","persistent-hint":"",clearable:"",hint:u(Al),"cancel-text":"取消","ok-text":"確認"},null,8,["modelValue","hint"])]),_:1})):c("",!0),a(r,{cols:"12"},{default:s(()=>[a(V,null,{default:s(()=>[a(r,{cols:"12",sm:"6",class:"pb-0"},{default:s(()=>[a(g,{modelValue:u(ae).value.value,"onUpdate:modelValue":l[44]||(l[44]=t=>u(ae).value.value=t),"error-messages":u(ae).errorMessage.value,label:"*公司Email",type:"email",variant:"outlined",density:"compact",clearable:"",autocomplete:"username"},null,8,["modelValue","error-messages"])]),_:1}),a(r,{cols:"12",sm:"6",class:"pb-0"},{default:s(()=>[a(g,{modelValue:u(ye).value.value,"onUpdate:modelValue":l[45]||(l[45]=t=>u(ye).value.value=t),"error-messages":u(ye).errorMessage.value,label:"備註",type:"text",variant:"outlined",density:"compact",clearable:""},null,8,["modelValue","error-messages"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})):c("",!0),a(vl,{class:"px-3 mt-4"},{default:s(()=>[a(xa,null,{default:s(({isHovering:t,props:K})=>[C.value?(v(),k(T,cl({key:0},K,{color:t?"red-lighten-1":"grey",variant:"outlined","prepend-icon":"mdi-delete",size:$.value,onClick:l[46]||(l[46]=z=>Pe.value=!0)}),{default:s(()=>l[73]||(l[73]=[y(" 永久刪除 ")])),_:2},1040,["color","size"])):c("",!0)]),_:1}),a(pl),a(T,{color:"red-lighten-1",variant:"outlined",size:$.value,loading:u(He),onClick:We},{default:s(()=>l[74]||(l[74]=[y(" 取消 ")])),_:1},8,["size","loading"]),a(T,{color:"teal-darken-1",variant:"outlined",type:"submit",class:"ms-1",size:$.value,loading:u(He),disabled:C.value&&!Ql.value},{default:s(()=>l[75]||(l[75]=[y(" 送出 ")])),_:1},8,["size","loading","disabled"])]),_:1})]),_:1})]),_:1},8,["disabled","onSubmit"])]),_:1},8,["modelValue","width"]),a(ma,{modelValue:Re.value,"onUpdate:modelValue":l[48]||(l[48]=t=>Re.value=t),onConfirm:l[49]||(l[49]=t=>{u(q).value.value=t}),onCancel:l[50]||(l[50]=t=>u(B).value.value="在職")},null,8,["modelValue"]),a(ca,{modelValue:Pe.value,"onUpdate:modelValue":l[51]||(l[51]=t=>Pe.value=t),title:"確認刪除員工",message:`確定要刪除員工「<span class='text-pink-lighten-1' style='font-weight: 800;'>${((p=S.value)==null?void 0:p.name)||""}</span>」(<span class='text-pink-lighten-1' style='font-weight: 800;'> ${((f=S.value)==null?void 0:f.userId)||""} </span>)嗎？ 此操作無法復原。`,"expected-name":((x=S.value)==null?void 0:x.name)||"","input-label":"員工姓名",onConfirm:Bl},null,8,["modelValue","message","expected-name"])],64)}}},et=Gl(Ta,[["__scopeId","data-v-c8d18232"]]);export{et as default};
