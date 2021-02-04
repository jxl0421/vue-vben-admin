import{_ as e}from"./index.05452a45.js";import{a as o}from"./index.7f70dfbd.js";import{d as i,r as n,g as t,h as l,o as s,i as a,w as p,j as r}from"./index.6cf10de3.js";import{_ as d}from"./index.f4b4d933.js";import{o as m}from"./select.3658ef5c.js";import"./index.dd535865.js";import"./index.4028ada7.js";import"./responsiveObserve.c545f1cc.js";import"./vendor.3b1829c7.js";import"./findIndex.8cda17e4.js";import"./isEqual.b94b8d79.js";import"./get.2ff9f629.js";import"./_baseProperty.74f89655.js";import"./toInteger.d71d002f.js";import"./index.fea0867a.js";import"./index.80187f01.js";import"./SearchOutlined.4bbe31f8.js";import"./EyeOutlined.586c3500.js";import"./index.a11a5924.js";import"./CheckOutlined.043f2430.js";import"./DownOutlined.07599049.js";import"./index.7d400cac.js";import"./colors.4e45e03a.js";import"./index.1e19659a.js";import"./UpOutlined.74e210f0.js";import"./index.9fcdec8a.js";import"./RightOutlined.7e972f0b.js";import"./RedoOutlined.d8e3d4c6.js";import"./index.16d57d04.js";import"./EllipsisOutlined.2c5f8025.js";import"./types.fb3d6a87.js";import"./Tree.40f1bcaf.js";import"./util.00dc4c3f.js";import"./useAttrs.095b2c8e.js";/* empty css              */import"./uuid.d710d91a.js";import"./index.b218b89f.js";import"./DeleteOutlined.44f98072.js";import"./index.995a673b.js";import"./index.7d872a53.js";import"./useTimeout.0ebe11aa.js";import"./useWindowSizeFn.c49b1c44.js";import"./FullscreenOutlined.f8628908.js";import"./index.2fe313f9.js";import"./index.d64015e1.js";import"./index.083f1805.js";import"./LeftOutlined.7ae18e20.js";import"./download.3b26ae66.js";import"./domUtils.a05fef99.js";import"./_stringToArray.f18cff21.js";import"./index.de38b9ef.js";import"./useScrollTo.d2340d63.js";import"./animation.76ef2551.js";import"./index.4e278996.js";import"./index.3e25c6d3.js";import"./usePageContext.8bbc80e1.js";import"./transButton.fa57d467.js";import"./ArrowLeftOutlined.6bace270.js";const c=[{field:"field1",component:"Input",label:"字段1",colProps:{span:8},componentProps:({schema:e,formModel:o})=>({placeholder:"自定义placeholder",onChange:e=>{}}),renderComponentContent:()=>({prefix:()=>"pSlot",suffix:()=>"sSlot"})},{field:"field2",component:"Input",label:"带后缀",defaultValue:"111",colProps:{span:8},componentProps:{onChange:e=>{}},suffix:"天"},{field:"field3",component:"DatePicker",label:"字段3",colProps:{span:8}},{field:"field4",component:"Select",label:"字段4",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1",key:"1"},{label:"选项2",value:"2",key:"2"}]}},{field:"field5",component:"CheckboxGroup",label:"字段5",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]}},{field:"field7",component:"RadioGroup",label:"字段7",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]}},{field:"field8",component:"Checkbox",label:"字段8",colProps:{span:8},renderComponentContent:"Check"},{field:"field9",component:"Switch",label:"字段9",colProps:{span:8}},{field:"field10",component:"RadioButtonGroup",label:"字段10",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]}},{field:"field11",component:"Cascader",label:"字段11",colProps:{span:8},componentProps:{options:[{value:"zhejiang",label:"Zhejiang",children:[{value:"hangzhou",label:"Hangzhou",children:[{value:"xihu",label:"West Lake"}]}]},{value:"jiangsu",label:"Jiangsu",children:[{value:"nanjing",label:"Nanjing",children:[{value:"zhonghuamen",label:"Zhong Hua Men"}]}]}]}},{field:"field30",component:"ApiSelect",label:"远程下拉",required:!0,componentProps:{api:m},colProps:{span:8},defaultValue:"0"},{field:"field20",component:"InputNumber",label:"字段20",required:!0,colProps:{span:8}}];var f=i({components:{BasicForm:e,CollapseContainer:o,PageWrapper:d},setup(){const e=n(null),{createMessage:o}=t();return{schemas:c,handleSubmit:e=>{o.success("click search,values:"+JSON.stringify(e))},check:e}}});f.render=function(e,o,i,n,t,d){const m=l("BasicForm"),c=l("CollapseContainer"),f=l("PageWrapper");return s(),a(f,{title:"表单基础示例"},{default:p((()=>[r(c,{title:"基础示例"},{default:p((()=>[r(m,{autoFocusFirstItem:"",labelWidth:100,schemas:e.schemas,actionColOptions:{span:24},onSubmit:e.handleSubmit},null,8,["schemas","onSubmit"])])),_:1})])),_:1})};export default f;
