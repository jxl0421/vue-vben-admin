import{d as e,h as r,o as i,i as o,w as t,j as s,m as a}from"./index.6cf10de3.js";import{A as n}from"./index.995a673b.js";import{u as p}from"./index.9278b4e8.js";import m from"./Drawer1.fd40d655.js";import d from"./Drawer2.a42fbf8b.js";import f from"./Drawer3.8b46732a.js";import j from"./Drawer4.3a66f5a1.js";import l from"./Drawer5.b91ae2e1.js";import{_ as c}from"./index.f4b4d933.js";import"./vendor.3b1829c7.js";import"./index.fee0d968.js";import"./index.7f70dfbd.js";import"./index.de38b9ef.js";import"./domUtils.a05fef99.js";import"./_stringToArray.f18cff21.js";import"./RightOutlined.7e972f0b.js";/* empty css              */import"./useTimeout.0ebe11aa.js";import"./useScrollTo.d2340d63.js";import"./animation.76ef2551.js";import"./ArrowLeftOutlined.6bace270.js";import"./useAttrs.095b2c8e.js";import"./isEqual.b94b8d79.js";import"./index.05452a45.js";import"./index.dd535865.js";import"./index.4028ada7.js";import"./responsiveObserve.c545f1cc.js";import"./findIndex.8cda17e4.js";import"./get.2ff9f629.js";import"./_baseProperty.74f89655.js";import"./toInteger.d71d002f.js";import"./index.fea0867a.js";import"./index.80187f01.js";import"./SearchOutlined.4bbe31f8.js";import"./EyeOutlined.586c3500.js";import"./index.a11a5924.js";import"./CheckOutlined.043f2430.js";import"./DownOutlined.07599049.js";import"./index.7d400cac.js";import"./colors.4e45e03a.js";import"./index.1e19659a.js";import"./UpOutlined.74e210f0.js";import"./index.9fcdec8a.js";import"./RedoOutlined.d8e3d4c6.js";import"./index.16d57d04.js";import"./EllipsisOutlined.2c5f8025.js";import"./types.fb3d6a87.js";import"./Tree.40f1bcaf.js";import"./util.00dc4c3f.js";import"./uuid.d710d91a.js";import"./index.b218b89f.js";import"./DeleteOutlined.44f98072.js";import"./index.7d872a53.js";import"./useWindowSizeFn.c49b1c44.js";import"./FullscreenOutlined.f8628908.js";import"./index.2fe313f9.js";import"./index.d64015e1.js";import"./index.083f1805.js";import"./LeftOutlined.7ae18e20.js";import"./download.3b26ae66.js";import"./useForm.ae18592a.js";import"./index.4e278996.js";import"./index.3e25c6d3.js";import"./usePageContext.8bbc80e1.js";import"./transButton.fa57d467.js";var u=e({components:{Alert:n,PageWrapper:c,Drawer1:m,Drawer2:d,Drawer3:f,Drawer4:j,Drawer5:l},setup(){const[e,{openDrawer:r,setDrawerProps:i}]=p(),[o,{openDrawer:t}]=p(),[s,{openDrawer:a}]=p(),[n,{openDrawer:m}]=p(),[d,{openDrawer:f}]=p();return{register1:e,openDrawer1:r,register2:o,openDrawer2:t,register3:s,openDrawer3:a,register4:n,register5:d,openDrawer5:f,send:function(){m(!0,{data:"content",info:"Info"})},openDrawerLoading:function(){r(),i({loading:!0}),setTimeout((()=>{i({loading:!1})}),2e3)}}}});const w=a(" 打开Drawer "),D=a(" 打开Drawer "),g=a(" 打开Drawer "),b=a(" 打开Drawer并传递数据 "),x=a(" 打开详情Drawer ");u.render=function(e,a,n,p,m,d){const f=r("Alert"),j=r("a-button"),l=r("Drawer1"),c=r("Drawer2"),u=r("Drawer3"),y=r("Drawer4"),O=r("Drawer5"),R=r("PageWrapper");return i(),o(R,{title:"抽屉组件使用示例"},{default:t((()=>[s(f,{message:"使用 useDrawer 进行抽屉操作","show-icon":""}),s(j,{type:"primary",class:"my-4",onClick:e.openDrawerLoading},{default:t((()=>[w])),_:1},8,["onClick"]),s(f,{message:"内外同时控制显示隐藏","show-icon":""}),s(j,{type:"primary",class:"my-4",onClick:a[1]||(a[1]=r=>e.openDrawer2(!0))},{default:t((()=>[D])),_:1}),s(f,{message:"自适应高度/显示footer","show-icon":""}),s(j,{type:"primary",class:"my-4",onClick:a[2]||(a[2]=r=>e.openDrawer3(!0))},{default:t((()=>[g])),_:1}),s(f,{message:"内外数据交互,外部通过 transferModalData 发送，内部通过 receiveDrawerDataRef 接收。该数据具有响应式","show-icon":""}),s(j,{type:"primary",class:"my-4",onClick:e.send},{default:t((()=>[b])),_:1},8,["onClick"]),s(f,{message:"详情页模式","show-icon":""}),s(j,{type:"primary",class:"my-4",onClick:a[3]||(a[3]=r=>e.openDrawer5(!0))},{default:t((()=>[x])),_:1}),s(l,{onRegister:e.register1},null,8,["onRegister"]),s(c,{onRegister:e.register2},null,8,["onRegister"]),s(u,{onRegister:e.register3},null,8,["onRegister"]),s(y,{onRegister:e.register4},null,8,["onRegister"]),s(O,{onRegister:e.register5},null,8,["onRegister"])])),_:1})};export default u;
