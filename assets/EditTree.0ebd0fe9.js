import{B as t,t as e}from"./data.3dcbc115.js";import{a as i}from"./index.7f70dfbd.js";import{_ as r}from"./index.f4b4d933.js";import{d as s,bP as a,h as o,o as n,i as d,w as l,j as m}from"./index.6cf10de3.js";import{P as p}from"./PlusOutlined.78650164.js";import{D as f}from"./DeleteOutlined.44f98072.js";import"./index.de38b9ef.js";import"./domUtils.a05fef99.js";import"./_stringToArray.f18cff21.js";import"./RightOutlined.7e972f0b.js";/* empty css              */import"./useTimeout.0ebe11aa.js";import"./useScrollTo.d2340d63.js";import"./animation.76ef2551.js";import"./index.4e278996.js";import"./index.16d57d04.js";import"./EllipsisOutlined.2c5f8025.js";import"./types.fb3d6a87.js";import"./isEqual.b94b8d79.js";import"./toInteger.d71d002f.js";import"./DownOutlined.07599049.js";import"./index.3e25c6d3.js";import"./usePageContext.8bbc80e1.js";import"./transButton.fa57d467.js";import"./ArrowLeftOutlined.6bace270.js";import"./vendor.3b1829c7.js";var c=s({components:{BasicTree:t,CollapseContainer:i,PageWrapper:r},setup:()=>({treeData:e,actionList:[{render:t=>a(p,{class:"ml-2",onClick:()=>{}})},{render:()=>a(f)}],getRightMenuList:function(t){return[{label:"新增",handler:()=>{},icon:"bi:plus"},{label:"删除",handler:()=>{},icon:"bx:bxs-folder-open"}]}})});const j={class:"flex"};c.render=function(t,e,i,r,s,a){const p=o("BasicTree"),f=o("CollapseContainer"),c=o("PageWrapper");return n(),d(c,{title:"Tree函数操作示例"},{default:l((()=>[m("div",j,[m(f,{title:"右侧操作按钮",class:"mr-4",style:{width:"33%"}},{default:l((()=>[m(p,{treeData:t.treeData,actionList:t.actionList},null,8,["treeData","actionList"])])),_:1}),m(f,{title:"右键菜单",class:"mr-4",style:{width:"33%"}},{default:l((()=>[m(p,{treeData:t.treeData,beforeRightClick:t.getRightMenuList},null,8,["treeData","beforeRightClick"])])),_:1})])])),_:1})};export default c;
