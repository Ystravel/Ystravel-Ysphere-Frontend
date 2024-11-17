import{_ as B,x as m,o as S,z as C,a1 as b,a2 as y,a3 as l,c as t,ae as T,a8 as s,ah as i,ag as z,as as N,aq as D,a5 as h,K as g,ad as k,am as w}from"./index-DfKqpnEi.js";const F={__name:"ConfirmDeleteDialogWithTextField",props:{title:{type:String,default:"確認刪除"},message:{type:String,default:"你確定要刪除這個項目嗎？此操作無法恢復。"},modelValue:Boolean,expectedName:{type:String,default:""},confirmButtonColor:{type:String,default:"red-lighten-1"},cancelButtonColor:{type:String,default:"grey-darken-1"},confirmButtonText:{type:String,default:"確認"},cancelButtonText:{type:String,default:"取消"},cancelButtonSize:{type:String,default:"small"},confirmButtonSize:{type:String,default:"small"},inputLabel:{type:String,default:"名稱"}},emits:["update:modelValue","confirm"],setup(e,{emit:p}){const a=e,n=p,d=m(a.modelValue),o=m(""),r=m(""),V=S(()=>`欲刪除${a.inputLabel}`);C(()=>a.modelValue,f=>{d.value=f,o.value="",r.value=""});const x=()=>{n("update:modelValue",!1)},v=()=>{if(!a.expectedName){n("confirm"),n("update:modelValue",!1);return}o.value===a.expectedName?(n("confirm"),n("update:modelValue",!1)):r.value="輸入的名稱不正確"};return(f,u)=>(b(),y(w,{modelValue:d.value,"onUpdate:modelValue":u[1]||(u[1]=c=>d.value=c),"max-width":"360",persistent:""},{default:l(()=>[t(k,{class:"rounded-lg"},{default:l(()=>[t(T,{class:"font-weight-bold mt-4 ms-2"},{default:l(()=>[s(i(e.title),1)]),_:1}),t(z,{class:"ms-1 pb-0"},{default:l(()=>[s(i(e.message)+" ",1),t(N,{modelValue:o.value,"onUpdate:modelValue":u[0]||(u[0]=c=>o.value=c),"error-messages":r.value,class:"mt-8",label:`請輸入${V.value}`,variant:"outlined",dense:"",clearable:""},null,8,["modelValue","error-messages","label"])]),_:1}),t(D,{class:"me-4 mb-2"},{default:l(()=>[t(h),t(g,{size:e.cancelButtonSize,color:e.cancelButtonColor,variant:"outlined",onClick:x},{default:l(()=>[s(i(e.cancelButtonText),1)]),_:1},8,["size","color"]),t(g,{size:e.confirmButtonSize,color:e.confirmButtonColor,variant:"outlined",disabled:!a.expectedName||o.value!==a.expectedName||o.value==="",onClick:v},{default:l(()=>[s(i(e.confirmButtonText),1)]),_:1},8,["size","color","disabled"])]),_:1})]),_:1})]),_:1},8,["modelValue"]))}},U=B(F,[["__scopeId","data-v-073b4290"]]);export{U as C};