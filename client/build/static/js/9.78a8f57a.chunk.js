(this["webpackJsonpcrwn-clothing"]=this["webpackJsonpcrwn-clothing"]||[]).push([[9],{120:function(n,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),i=t(47),o=t(6),l=t(3),c=t.n(l),u=t(48);var s=t(52);function p(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(n)){var t=[],a=!0,r=!1,i=void 0;try{for(var o,l=n[Symbol.iterator]();!(a=(o=l.next()).done)&&(t.push(o.value),!e||t.length!==e);a=!0);}catch(c){r=!0,i=c}finally{try{a||null==l.return||l.return()}finally{if(r)throw i}}return t}}(n,e)||Object(s.a)(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var m=t(44),d=t(9),f=t(10);function b(){var n=Object(d.a)(["\n  color: ",";\n  font-size: 16px;\n  font-weight: normal;\n  position: absolute;\n  pointer-events: none;\n  left: 5px;\n  top: 10px;\n  transition: 300ms ease all;\n\n  &.shrink {\n    ","\n  }\n"]);return b=function(){return n},n}function v(){var n=Object(d.a)(["\n  background: none;\n  background-color: white;\n  color: ",";\n  font-size: 18px;\n  padding: 10px 10px 10px 5px;\n  display: block;\n  width: 100%;\n  border: none;\n  border-radius: 0;\n  border-bottom: 1px solid ",";\n  margin: 25px 0;\n\n  &:focus {\n    outline: none;\n  }\n\n  &:focus ~ label {\n    ","\n  }\n"]);return v=function(){return n},n}function g(){var n=Object(d.a)(["\n  position: relative;\n  margin: 45px 0;\n\n  input[type='password'] {\n    letter-spacing: 0.3em;\n  }\n"]);return g=function(){return n},n}function h(){var n=Object(d.a)(["\n  top: -14px;\n  font-size: 12px;\n  color: ",";\n"]);return h=function(){return n},n}var w=Object(f.b)(h(),"black"),y=f.c.div(g()),j=f.c.input(v(),"grey","grey",w),x=f.c.label(b(),"grey",w),O=function(n){var e=n.handleChange,t=n.label,a=Object(m.a)(n,["handleChange","label"]);return r.a.createElement(y,null,r.a.createElement(j,Object.assign({onChange:e},a)),t?r.a.createElement(x,{className:a.value.length?"shrink":""},t):null)},E=t(45),S=t(15),k=t(22);function C(){var n=Object(d.a)(["\n  display: flex;\n  justify-content: space-between;\n"]);return C=function(){return n},n}function I(){var n=Object(d.a)(["\n  margin: 10px 0;\n"]);return I=function(){return n},n}function N(){var n=Object(d.a)(["\n  width: 380px;\n  display: flex;\n  flex-direction: column;\n"]);return N=function(){return n},n}var q=f.c.div(N()),P=f.c.h2(I()),z=f.c.div(C()),D=Object(k.b)(null,(function(n){return{googleSignInStart:function(){return n(Object(S.c)())},emailSignInStart:function(e,t){return n(Object(S.b)({email:e,password:t}))}}}))((function(n){var e=n.emailSignInStart,t=n.googleSignInStart,l=p(Object(a.useState)({email:"",password:""}),2),s=l[0],m=l[1],d=s.email,f=s.password,b=function(){var n=Object(u.a)(c.a.mark((function n(t){return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:t.preventDefault(),e(d,f);case 2:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),v=function(n){var e=n.target,t=e.value,a=e.name;m(Object(o.a)(Object(o.a)({},s),{},Object(i.a)({},a,t)))};return r.a.createElement(q,null,r.a.createElement(P,null,"I already have an account"),r.a.createElement("span",null,"Sign in with your email and password"),r.a.createElement("form",{onSubmit:b},r.a.createElement(O,{name:"email",type:"email",handleChange:v,value:d,label:"email",required:!0}),r.a.createElement(O,{name:"password",type:"password",value:f,handleChange:v,label:"password",required:!0}),r.a.createElement(z,null,r.a.createElement(E.a,{type:"submit"}," Sign in "),r.a.createElement(E.a,{type:"button",onClick:t,isGoogleSignIn:!0},"Sign in with Google"))))}));function G(){var n=Object(d.a)(["\n  margin: 10px 0;\n"]);return G=function(){return n},n}function U(){var n=Object(d.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 380px;\n"]);return U=function(){return n},n}var A=f.c.div(U()),J=f.c.h2(G()),T=Object(k.b)(null,(function(n){return{signUpStart:function(e){return n(Object(S.j)(e))}}}))((function(n){var e=n.signUpStart,t=p(Object(a.useState)({displayName:"",email:"",password:"",confirmPassword:""}),2),l=t[0],s=t[1],m=l.displayName,d=l.email,f=l.password,b=l.confirmPassword,v=function(){var n=Object(u.a)(c.a.mark((function n(t){return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t.preventDefault(),f===b){n.next=4;break}return alert("passwords don't match"),n.abrupt("return");case 4:e({displayName:m,email:d,password:f});case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),g=function(n){var e=n.target,t=e.name,a=e.value;s(Object(o.a)(Object(o.a)({},l),{},Object(i.a)({},t,a)))};return r.a.createElement(A,null,r.a.createElement(J,null,"I do not have a account"),r.a.createElement("span",null,"Sign up with your email and password"),r.a.createElement("form",{className:"sign-up-form",onSubmit:v},r.a.createElement(O,{type:"text",name:"displayName",value:m,onChange:g,label:"Display Name",required:!0}),r.a.createElement(O,{type:"email",name:"email",value:d,onChange:g,label:"Email",required:!0}),r.a.createElement(O,{type:"password",name:"password",value:f,onChange:g,label:"Password",required:!0}),r.a.createElement(O,{type:"password",name:"confirmPassword",value:b,onChange:g,label:"Confirm Password",required:!0}),r.a.createElement(E.a,{type:"submit"},"SIGN UP")))}));function B(){var n=Object(d.a)(["\n  width: 850px;\n  display: flex;\n  justify-content: space-between;\n  margin: 30px auto;\n\n  @media screen and (max-width: 800px) {\n    flex-direction: column;\n    width: unset;\n    align-items: center;\n\n    > *:first-child {\n      margin-bottom: 50px;\n    }\n  }\n"]);return B=function(){return n},n}var F=f.c.div(B());e.default=function(){return r.a.createElement(F,null,r.a.createElement(D,null),r.a.createElement(T,null))}}}]);
//# sourceMappingURL=9.78a8f57a.chunk.js.map