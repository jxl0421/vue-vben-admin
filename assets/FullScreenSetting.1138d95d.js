import{d as e,b1 as i,u as t,h as s,o as r,i as o,w as n,j as d,l}from"./index.6cf10de3.js";/* empty css              */import{u as p}from"./index.05452a45.js";import{u as m}from"./useFullScreen.d0ee87d4.js";import{F as a,a as j}from"./FullscreenOutlined.f8628908.js";import"./vendor.3b1829c7.js";import"./index.dd535865.js";import"./index.4028ada7.js";import"./responsiveObserve.c545f1cc.js";import"./findIndex.8cda17e4.js";import"./isEqual.b94b8d79.js";import"./get.2ff9f629.js";import"./_baseProperty.74f89655.js";import"./toInteger.d71d002f.js";import"./index.fea0867a.js";import"./index.80187f01.js";import"./SearchOutlined.4bbe31f8.js";import"./EyeOutlined.586c3500.js";import"./index.a11a5924.js";import"./CheckOutlined.043f2430.js";import"./DownOutlined.07599049.js";import"./index.7d400cac.js";import"./colors.4e45e03a.js";import"./index.1e19659a.js";import"./UpOutlined.74e210f0.js";import"./index.9fcdec8a.js";import"./RightOutlined.7e972f0b.js";import"./RedoOutlined.d8e3d4c6.js";import"./index.16d57d04.js";import"./EllipsisOutlined.2c5f8025.js";import"./types.fb3d6a87.js";import"./Tree.40f1bcaf.js";import"./util.00dc4c3f.js";import"./useAttrs.095b2c8e.js";import"./uuid.d710d91a.js";import"./index.b218b89f.js";import"./DeleteOutlined.44f98072.js";import"./index.995a673b.js";import"./index.7d872a53.js";import"./useTimeout.0ebe11aa.js";import"./useWindowSizeFn.c49b1c44.js";import"./index.7f70dfbd.js";import"./index.de38b9ef.js";import"./domUtils.a05fef99.js";import"./_stringToArray.f18cff21.js";import"./useScrollTo.d2340d63.js";import"./animation.76ef2551.js";import"./index.2fe313f9.js";import"./index.d64015e1.js";import"./index.083f1805.js";import"./LeftOutlined.7ae18e20.js";import"./download.3b26ae66.js";var u=e({name:"FullScreenSetting",components:{FullscreenExitOutlined:a,FullscreenOutlined:j,Tooltip:i},setup(){const e=p(),{t:i}=t(),{toggleFullscreen:s,isFullscreenRef:r}=m(e.wrapRef);return{handleFullScreen:function(){s()},isFullscreenRef:r,t:i}}});u.render=function(e,i,t,p,m,a){const j=s("FullscreenOutlined"),u=s("FullscreenExitOutlined"),c=s("Tooltip");return r(),o(c,{placement:"top"},{title:n((()=>[d("span",null,l(e.t("component.table.settingFullScreen")),1)])),default:n((()=>[e.isFullscreenRef?(r(),o(u,{key:1,onClick:e.handleFullScreen},null,8,["onClick"])):(r(),o(j,{key:0,onClick:e.handleFullScreen},null,8,["onClick"]))])),_:1})};export default u;
