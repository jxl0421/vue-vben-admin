import{cT as e,d as t,a4 as s,aJ as i,a0 as o,g as a,cp as r,cq as d,h as n,o as m,i as p,bw as c,j as f,m as l}from"./index.6cf10de3.js";import{U as j}from"./uuid.d710d91a.js";import"./index.b218b89f.js";/* empty css              */import"./index.4028ada7.js";import{R as u,C as b}from"./index.fea0867a.js";import{_ as x}from"./index.05452a45.js";import{a as h}from"./index.7f70dfbd.js";import{h as g}from"./header.d801b988.js";import{b as O}from"./data.a32591d5.js";import{u as _}from"./useForm.ae18592a.js";import"./vendor.3b1829c7.js";import"./findIndex.8cda17e4.js";import"./isEqual.b94b8d79.js";import"./get.2ff9f629.js";import"./_baseProperty.74f89655.js";import"./toInteger.d71d002f.js";import"./util.00dc4c3f.js";import"./DeleteOutlined.44f98072.js";import"./EyeOutlined.586c3500.js";import"./types.fb3d6a87.js";import"./CheckOutlined.043f2430.js";import"./responsiveObserve.c545f1cc.js";import"./index.dd535865.js";import"./index.80187f01.js";import"./SearchOutlined.4bbe31f8.js";import"./index.a11a5924.js";import"./DownOutlined.07599049.js";import"./index.7d400cac.js";import"./colors.4e45e03a.js";import"./index.1e19659a.js";import"./UpOutlined.74e210f0.js";import"./index.9fcdec8a.js";import"./RightOutlined.7e972f0b.js";import"./RedoOutlined.d8e3d4c6.js";import"./index.16d57d04.js";import"./EllipsisOutlined.2c5f8025.js";import"./Tree.40f1bcaf.js";import"./useAttrs.095b2c8e.js";import"./index.995a673b.js";import"./index.7d872a53.js";import"./useTimeout.0ebe11aa.js";import"./useWindowSizeFn.c49b1c44.js";import"./FullscreenOutlined.f8628908.js";import"./index.2fe313f9.js";import"./index.d64015e1.js";import"./index.083f1805.js";import"./LeftOutlined.7ae18e20.js";import"./download.3b26ae66.js";import"./domUtils.a05fef99.js";import"./_stringToArray.f18cff21.js";import"./index.de38b9ef.js";import"./useScrollTo.d2340d63.js";import"./animation.76ef2551.js";var C;(C||(C={})).ACCOUNT_INFO="/account/getAccountInfo";var v=t({components:{BasicForm:x,CollapseContainer:h,Button:s,Upload:j,Icon:i,[u.name]:u,[b.name]:b},setup(){const{createMessage:t}=a(),[s,{setFieldsValue:i}]=_({labelWidth:120,schemas:O,showActionButtonGroup:!1});return o((async()=>{const t=await e.request({url:C.ACCOUNT_INFO,method:"GET"});i(t)})),{headerImg:g,register:s,handleSubmit:()=>{t.success("更新成功！")}}}});const I=c("data-v-dad0b9f0");r("data-v-dad0b9f0");const w={class:"change-avatar"},y=f("div",{class:"mb-2"}," 头像 ",-1),F=l("更换头像 "),T=l(" 更新基本信息 ");d();const U=I(((e,t,s,i,o,a)=>{const r=n("BasicForm"),d=n("a-col"),c=n("Icon"),l=n("Button"),j=n("Upload"),u=n("a-row"),b=n("CollapseContainer");return m(),p(b,{title:"基本设置",canExpan:!1},{default:I((()=>[f(u,{gutter:24},{default:I((()=>[f(d,{span:14},{default:I((()=>[f(r,{onRegister:e.register},null,8,["onRegister"])])),_:1}),f(d,{span:10},{default:I((()=>[f("div",w,[y,f("img",{width:"140",src:e.headerImg},null,8,["src"]),f(j,{showUploadList:!1},{default:I((()=>[f(l,{type:"ghost",class:"ml-5"},{default:I((()=>[f(c,{icon:"feather:upload"}),F])),_:1})])),_:1})])])),_:1})])),_:1}),f(l,{type:"primary",onClick:e.handleSubmit},{default:I((()=>[T])),_:1},8,["onClick"])])),_:1})}));v.render=U,v.__scopeId="data-v-dad0b9f0";export default v;
