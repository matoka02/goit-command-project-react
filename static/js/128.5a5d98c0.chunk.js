"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[128],{6128:function(n,e,t){t.r(e),t.d(e,{default:function(){return _}});var r,i,o,a,s,l,d,u,h,c=t(6864),m=t(9434),p=t(7689),x=t(1272),f=t(2598),g=t(168),b=t(1087),w=t(6444),Z=w.ZP.div(r||(r=(0,g.Z)(["\n  padding: 40px 20px 0 20px;\n  @media screen and (min-width: 768px) {\n    padding: 160px 0 0 32px;\n  }\n  @media screen and (min-width: 1280px) {\n    padding-left: 16px;\n  }\n"]))),j=w.ZP.h2(i||(i=(0,g.Z)(["\n  font-family: ",";\n  font-weight: ",";\n  font-size: ",";\n  line-height: 1.21;\n  text-align: center;\n  letter-spacing: 0.04em;\n  text-transform: uppercase;\n  margin-bottom: 40px;\n  color: ",";\n  @media screen and (min-width: 768px) {\n    text-align: start;\n  }\n"])),(function(n){return n.theme.fonts.main}),(function(n){return n.theme.fontWeights.bold}),(function(n){return n.theme.fontSizes.xs}),(function(n){return n.theme.colors.orange})),v=w.ZP.form(o||(o=(0,g.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n"]))),y=w.ZP.label(a||(a=(0,g.Z)(["\n  position: relative;\n"]))),z=w.ZP.input(s||(s=(0,g.Z)(["\n  width: 100%;\n  border: none;\n  border-bottom: 1px solid #e0e0e0;\n  font-family: ",";\n  font-weight: ",";\n  font-size: ",";\n  line-height: 1.21;\n  letter-spacing: 0.04em;\n  color: ",";\n  text-align: unset;\n  padding: 20px 0 20px 0;\n  &::placeholder {\n    font-family: ",";\n    font-weight: ",";\n    font-size: ",";\n    line-height: 1.21;\n    letter-spacing: 0.04em;\n    margin-bottom: 20px;\n    color: ",";\n  }\n  &:focus {\n    outline: none;\n  }\n  @media screen and (min-width: 768px) {\n    width: 240px;\n  }\n"])),(function(n){return n.theme.fonts.main}),(function(n){return n.theme.fontWeights.bold}),(function(n){return n.theme.fontSizes.xs}),(function(n){return n.theme.colors.black}),(function(n){return n.theme.fonts.main}),(function(n){return n.theme.fontWeights.bold}),(function(n){return n.theme.fontSizes.xs}),(function(n){return n.theme.colors.grey})),k=w.ZP.div(l||(l=(0,g.Z)(["\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  gap: 20px;\n  margin-top: 40px;\n  @media screen and (min-width: 768px) {\n    flex-direction: row;\n    gap: 32px;\n  }\n"]))),P=w.ZP.button(d||(d=(0,g.Z)(["\n  width: 182px;\n  background: ",";\n  box-shadow: 0px 4px 10px rgba(252, 132, 45, 0.5);\n  border-radius: 30px;\n  border: none;\n  font-family: ",";\n  font-weight: ",";\n  font-size: ",";\n  line-height: 1.21;\n  text-align: center;\n  letter-spacing: 0.04em;\n  padding: 13px 0 13px 0;\n  color: ",";\n  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;\n  &:hover {\n    transform: translate(-1%, -1%);\n    box-shadow: rgba(0, 0, 0, 0.25) 4px 4px 6px,\n      rgba(255, 255, 255, 0.3) -4px -4px 6px;\n  }\n"])),(function(n){return n.theme.colors.orange}),(function(n){return n.theme.fonts.main}),(function(n){return n.theme.fontWeights.bold}),(function(n){return n.theme.fontSizes.xs}),(function(n){return n.theme.colors.white})),C=(0,w.ZP)(b.OL)(u||(u=(0,g.Z)(["\n  width: 182px;\n  background: ",";\n  outline: 2px solid ",";\n  border-radius: 30px;\n  font-family: ",";\n  font-weight: ",";\n  font-size: ",";\n  line-height: 1.21;\n  text-align: center;\n  letter-spacing: 0.04em;\n  padding: 11px 0 11px 0;\n  color: #fc842d;\n  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;\n  &:hover {\n    transform: translate(-1%, -1%);\n    box-shadow: rgba(0, 0, 0, 0.25) 4px 4px 6px,\n      rgba(255, 255, 255, 0.3) -4px -4px 6px;\n  }\n"])),(function(n){return n.theme.colors.white}),(function(n){return n.theme.colors.orange}),(function(n){return n.theme.fonts.main}),(function(n){return n.theme.fontWeights.bold}),(function(n){return n.theme.fontSizes.xs})),S=w.ZP.div(h||(h=(0,g.Z)(["\n  color: red;\n  position: absolute;\n  animation: placeHolderVisible 1200ms;\n  @keyframes placeHolderVisible {\n    0% {\n      left: -100px;\n    }\n    100% {\n      left: 0;\n    }\n  }\n"]))),B=t(184),W=function(){var n=(0,m.I0)(),e=(0,p.s0)(),t=(0,c.TA)({initialValues:{username:"",email:"",password:""},validate:x.to,onSubmit:function(t){var r={username:t.username,email:t.email,password:t.password};n((0,f.me)(r)),e("/login")}});return(0,B.jsxs)(Z,{children:[(0,B.jsx)(j,{children:"Register"}),(0,B.jsxs)(v,{onSubmit:t.handleSubmit,children:[(0,B.jsxs)(y,{children:[(0,B.jsx)(z,{id:"username",type:"text",placeholder:"Name",onChange:t.handleChange,onBlur:t.handleBlur,value:t.values.username}),t.errors.username&&t.touched.email?(0,B.jsx)(S,{children:t.errors.username}):null]}),(0,B.jsxs)(y,{children:[(0,B.jsx)(z,{id:"email",type:"email",placeholder:"Email",onChange:t.handleChange,onBlur:t.handleBlur,value:t.values.email}),t.errors.email&&t.touched.email?(0,B.jsx)(S,{children:t.errors.email}):null]}),(0,B.jsxs)(y,{children:[(0,B.jsx)(z,{id:"password",type:"password",placeholder:"Password",onChange:t.handleChange,onBlur:t.handleBlur,value:t.values.password}),t.errors.password&&t.touched.email?(0,B.jsx)(S,{children:t.errors.password}):null]}),(0,B.jsxs)(k,{children:[(0,B.jsx)(P,{type:"submit",children:"Register"}),(0,B.jsx)(C,{to:"/login",children:"Login"})]})]})]})},_=function(){return(0,B.jsx)(W,{})}}}]);
//# sourceMappingURL=128.5a5d98c0.chunk.js.map