import{a0 as V,x as B,z as C,a6 as S,a7 as x,a8 as t,c as a,ai as p,ak as y,ad as l,an as o,am as z,aC as D,aa as T,K as r,aD as k}from"./index-BvBj222y.js";const v={__name:"ConfirmDeleteDialog",props:{title:{type:String,default:"確認刪除"},message:{type:String,default:"你確定要刪除這個項目嗎？此操作無法恢復。"},modelValue:Boolean,confirmButtonColor:{type:String,default:"red-lighten-1"},cancelButtonColor:{type:String,default:"grey-darken-1"},confirmButtonText:{type:String,default:"確認"},cancelButtonText:{type:String,default:"取消"},cancelButtonSize:{type:String,default:"small"},confirmButtonSize:{type:String,default:"small"}},emits:["update:modelValue","confirm"],setup(e,{emit:d}){const c=e,n=d,i=B(c.modelValue);C(()=>c.modelValue,s=>{i.value=s});const m=()=>{n("update:modelValue",!1)},f=()=>{n("confirm"),n("update:modelValue",!1)};return(s,u)=>(S(),x(k,{modelValue:i.value,"onUpdate:modelValue":u[0]||(u[0]=g=>i.value=g),"max-width":"360",persistent:""},{default:t(()=>[a(p,{class:"rounded-lg"},{default:t(()=>[a(y,{class:"font-weight-bold mt-4 ms-2"},{default:t(()=>[l(o(e.title),1)]),_:1}),a(z,{class:"ms-1"},{default:t(()=>[l(o(e.message),1)]),_:1}),a(D,{class:"me-4 mb-2"},{default:t(()=>[a(T),a(r,{size:e.cancelButtonSize,color:e.cancelButtonColor,variant:"outlined",onClick:m},{default:t(()=>[l(o(e.cancelButtonText),1)]),_:1},8,["size","color"]),a(r,{size:e.confirmButtonSize,color:e.confirmButtonColor,variant:"outlined",onClick:f},{default:t(()=>[l(o(e.confirmButtonText),1)]),_:1},8,["size","color"])]),_:1})]),_:1})]),_:1},8,["modelValue"]))}},w=V(v,[["__scopeId","data-v-30ac7ae8"]]);export{w as C};
