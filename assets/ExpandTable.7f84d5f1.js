import{_ as e}from"./index.715a49f0.js";import{getBasicColumns as i}from"./tableData.252346e9.js";import{d as t}from"./table.280ef2be.js";import{d as s,h as o,o as r,i as d,j as p,w as m,l as n}from"./index.6cf10de3.js";import{u as a}from"./useTable.89dba420.js";import"./index.a11a5924.js";import"./SearchOutlined.4bbe31f8.js";import"./CheckOutlined.043f2430.js";import"./DownOutlined.07599049.js";import"./index.05452a45.js";import"./index.dd535865.js";import"./index.4028ada7.js";import"./responsiveObserve.c545f1cc.js";import"./vendor.3b1829c7.js";import"./findIndex.8cda17e4.js";import"./isEqual.b94b8d79.js";import"./get.2ff9f629.js";import"./_baseProperty.74f89655.js";import"./toInteger.d71d002f.js";import"./index.fea0867a.js";import"./index.80187f01.js";import"./EyeOutlined.586c3500.js";import"./index.7d400cac.js";import"./colors.4e45e03a.js";import"./index.1e19659a.js";import"./UpOutlined.74e210f0.js";import"./index.9fcdec8a.js";import"./RightOutlined.7e972f0b.js";import"./RedoOutlined.d8e3d4c6.js";import"./index.16d57d04.js";import"./EllipsisOutlined.2c5f8025.js";import"./types.fb3d6a87.js";import"./Tree.40f1bcaf.js";import"./util.00dc4c3f.js";import"./useAttrs.095b2c8e.js";/* empty css              */import"./uuid.d710d91a.js";import"./index.b218b89f.js";import"./DeleteOutlined.44f98072.js";import"./index.995a673b.js";import"./index.7d872a53.js";import"./useTimeout.0ebe11aa.js";import"./useWindowSizeFn.c49b1c44.js";import"./index.7f70dfbd.js";import"./index.de38b9ef.js";import"./domUtils.a05fef99.js";import"./_stringToArray.f18cff21.js";import"./useScrollTo.d2340d63.js";import"./animation.76ef2551.js";import"./FullscreenOutlined.f8628908.js";import"./index.2fe313f9.js";import"./index.d64015e1.js";import"./index.083f1805.js";import"./LeftOutlined.7ae18e20.js";import"./download.3b26ae66.js";import"./index.310caede.js";import"./DoubleLeftOutlined.1789dc2e.js";import"./DoubleRightOutlined.47d03be8.js";import"./zh_CN.8094f4d6.js";import"./scrollTo.c1e0f75f.js";import"./transButton.fa57d467.js";import"./CaretDownFilled.26b04028.js";import"./clickOutside.f5711e02.js";import"./useSortable.606fed89.js";import"./SettingOutlined.00848dc2.js";import"./useExpose.7c36cfd5.js";import"./useForm.ae18592a.js";var j=s({components:{BasicTable:e},setup(){const[e]=a({title:"可展开表格",api:t,titleHelpMessage:"不能与scroll共用",columns:i(),rowKey:"id",canResize:!1});return{registerTable:e}}});const f={class:"p-4"};j.render=function(e,i,t,s,a,j){const l=o("BasicTable");return r(),d("div",f,[p(l,{onRegister:e.registerTable},{expandedRowRender:m((({record:e})=>[p("span",null,"No: "+n(e.no),1)])),_:1},8,["onRegister"])])};export default j;
