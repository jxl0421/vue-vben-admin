import{M as e}from"./index.8a474d7e.js";import{_ as t}from"./index.f4b4d933.js";import{d as n,r as o,e as r,h as a,o as i,i as s,w as d,j as m,m as l}from"./index.6cf10de3.js";import"./index.4e278996.js";import"./index.16d57d04.js";import"./RightOutlined.7e972f0b.js";import"./EllipsisOutlined.2c5f8025.js";import"./types.fb3d6a87.js";import"./isEqual.b94b8d79.js";import"./toInteger.d71d002f.js";import"./DownOutlined.07599049.js";/* empty css              */import"./index.3e25c6d3.js";import"./usePageContext.8bbc80e1.js";import"./transButton.fa57d467.js";import"./ArrowLeftOutlined.6bace270.js";import"./vendor.3b1829c7.js";var p=n({components:{MarkDown:e,PageWrapper:t},setup(){const e=o(null),t=o("\n# title\n\n# content\n");return{value:t,toggleTheme:function(){const t=r(e);if(!t)return;t.getVditor().setTheme("dark")},markDownRef:e,handleChange:function(e){t.value=e}}}});const u=l(" 黑暗主题 ");p.render=function(e,t,n,o,r,l){const p=a("a-button"),f=a("MarkDown"),c=a("PageWrapper");return i(),s(c,{title:"MarkDown组件示例"},{default:d((()=>[m(p,{onClick:e.toggleTheme,class:"mb-2",type:"primary"},{default:d((()=>[u])),_:1},8,["onClick"]),m(f,{value:e.value,onChange:e.handleChange,ref:"markDownRef"},null,8,["value","onChange"])])),_:1})};export default p;
