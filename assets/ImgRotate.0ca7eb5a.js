var e=Object.assign;import{u as t}from"./useTimeout.0ebe11aa.js";import{r as s,B as i}from"./DragVerify.ec551c03.js";import{h as r}from"./domUtils.a05fef99.js";import{d as a,r as o,a as n,u as m,aT as d,K as g,j as c,e as p,m as u,a7 as l,a$ as f}from"./index.6cf10de3.js";import"./useExpose.7c36cfd5.js";import"./CheckOutlined.043f2430.js";import"./DoubleRightOutlined.47d03be8.js";import"./_stringToArray.f18cff21.js";import"./vendor.3b1829c7.js";var h=a({name:"ImgRotateDargVerify",inheritAttrs:!1,props:s,emits:["success","change","update:value"],setup(s,{emit:a,attrs:h}){const T=o(null),v=n({showTip:!1,isPassing:!1,imgStyle:{},randomRotate:0,currentRotate:0,toOrigin:!1,startTime:0,endTime:0,draged:!1}),{t:y}=m();d((()=>v.isPassing),(e=>{if(e){const{startTime:t,endTime:s}=v;a("success",{isPassing:e,time:((s-t)/1e3).toFixed(1)}),a("change",e),a("update:value",e)}}));const w=g((()=>{const{imgWrapStyle:t,imgWidth:i}=s;return e({width:`${i}px`,height:`${i}px`},t)})),j=g((()=>{const{minDegree:e,maxDegree:t}=s;return e===t?Math.floor(1+1*Math.random())/10+1:1}));function D(){v.startTime=(new Date).getTime()}function x(e){v.draged=!0;const{imgWidth:t,height:i,maxDegree:a}=s,{moveX:o}=e,n=Math.ceil(o/(t-parseInt(i))*a*p(j));v.currentRotate=n,v.imgStyle=r("transform",`rotateZ(${v.randomRotate-n}deg)`)}function R(){const{minDegree:e,maxDegree:t}=s,i=Math.floor(e+Math.random()*(t-e));v.randomRotate=i,v.imgStyle=r("transform",`rotateZ(${i}deg)`)}function _(){const{randomRotate:e,currentRotate:i}=v,{diffDegree:a}=s;Math.abs(e-i)>=(a||20)?(v.imgStyle=r("transform",`rotateZ(${e}deg)`),v.toOrigin=!0,t((()=>{v.toOrigin=!1,v.showTip=!0}),300)):(v.isPassing=!0,v.endTime=(new Date).getTime()),v.showTip=!0}function P(){v.showTip=!1;const e=p(T);e&&(v.isPassing=!1,e.resume(),R())}const S=f();return S&&(S.resume=P),()=>{const{src:t}=s,{toOrigin:r,isPassing:a,startTime:o,endTime:n}=v,m=[];r&&m.push("to-origin");const d=(n-o)/1e3;return c("div",{class:"ir-dv"},[c("div",{class:"ir-dv-img__wrap",style:p(w)},[c("img",{src:t,onLoad:R,width:parseInt(s.width),class:m,style:v.imgStyle,onClick:()=>{P()}},null),v.showTip&&c("span",{class:["ir-dv-img__tip",v.isPassing?"success":"error"]},[v.isPassing?y("component.verify.time",{time:d.toFixed(1)}):y("component.verify.error")]),!v.showTip&&!v.draged&&c("span",{class:["ir-dv-img__tip","normal"]},[u("t('redoTip')")])]),c(i,l({class:"ir-dv-drag__bar",onMove:x,onEnd:_,onStart:D,ref:T},e(e({},h),s),{value:a,isSlot:!0}),null)])}}});export default h;
