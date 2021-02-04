import{d as e,aV as o,aW as s,aF as r,aK as t,u as a,K as n,f as i,bf as d,h as l,o as p,i as c,w as m,j as f,k as u,l as g}from"./index.6cf10de3.js";import{D as h,M as x}from"./index.16d57d04.js";/* empty css              */import"./index.d64015e1.js";import{D as j}from"./siteSetting.c485f07c.js";import{d as C}from"./useHeaderSetting.707af898.js";import{h as D}from"./header.d801b988.js";import"./vendor.3b1829c7.js";import"./RightOutlined.7e972f0b.js";import"./EllipsisOutlined.2c5f8025.js";import"./types.fb3d6a87.js";import"./isEqual.b94b8d79.js";import"./toInteger.d71d002f.js";var w=e({name:"UserDropdown",components:{Dropdown:h,Menu:x,MenuItem:o((()=>s((()=>import("./DropMenuItem.8901b80d.js")),["/assets/DropMenuItem.8901b80d.js","/assets/index.20066e29.css","/assets/index.6cf10de3.js","/assets/index.e5c5d570.css","/assets/vendor.3b1829c7.js","/assets/vendor.4a5fa02d.css","/assets/index.16d57d04.js","/assets/index.271c2814.css","/assets/RightOutlined.7e972f0b.js","/assets/EllipsisOutlined.2c5f8025.js","/assets/types.fb3d6a87.js","/assets/isEqual.b94b8d79.js","/assets/toInteger.d71d002f.js"]))),MenuDivider:x.Divider},props:{theme:r.oneOf(["dark","light"])},setup(){const{prefixCls:e}=t("header-user-dropdown"),{t:o}=a(),{getShowDoc:s}=C();return{prefixCls:e,t:o,getUserInfo:n((()=>{const{realName:e="",desc:o}=i.getUserInfoState||{};return{realName:e,desc:o}})),handleMenuClick:function(e){switch(e.key){case"loginOut":i.confirmLoginOut();break;case"doc":d(j)}},getShowDoc:s,headerImg:D}}});w.render=function(e,o,s,r,t,a){const n=l("MenuItem"),i=l("MenuDivider"),d=l("Menu"),h=l("Dropdown");return p(),c(h,{placement:"bottomLeft",overlayClassName:`${e.prefixCls}-dropdown-overlay`},{overlay:m((()=>[f(d,{onClick:e.handleMenuClick},{default:m((()=>[e.getShowDoc?(p(),c(n,{key:"doc",text:e.t("layout.header.dropdownItemDoc"),icon:"gg:loadbar-doc"},null,8,["text"])):u("",!0),f(i),f(n,{key:"loginOut",text:e.t("layout.header.dropdownItemLoginOut"),icon:"carbon:power"},null,8,["text"])])),_:1},8,["onClick"])])),default:m((()=>[f("span",{class:[e.prefixCls,`${e.prefixCls}--${e.theme}`]},[f("img",{class:`${e.prefixCls}__header`,src:e.headerImg},null,10,["src"]),f("span",{class:`${e.prefixCls}__info`},[f("span",{class:`${e.prefixCls}__name anticon`},g(e.getUserInfo.realName),3)],2)],2)])),_:1},8,["overlayClassName"])};export default w;
