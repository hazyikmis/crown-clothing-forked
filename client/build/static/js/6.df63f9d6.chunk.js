(this["webpackJsonpcrwn-clothing"]=this["webpackJsonpcrwn-clothing"]||[]).push([[6],{122:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),i=t(22),c=t(14),l=t(99),u=t.n(l),o=t(100),m=t.n(o),d=function(n){var e=n.price,t=100*e;return a.a.createElement(u.a,{label:"Pay Now",name:"CRWN Clothing Ltd.",billingAddress:!0,shippingAddress:!0,image:"https://svgshare.com/i/CUz.svg",description:"Your total is $".concat(e),amount:t,panelLabel:"Pay Now",token:function(n){m()({url:"payment",method:"post",data:{amount:t,token:n}}).then((function(n){alert("Payment Successful!")})).catch((function(n){console.log("Payment error: ",JSON.parse(n)),alert("There was an issue with your payment. Please sure you use the provided credit card!")}))},stripeKey:"pk_test_uJzt1H3XqIgJaN2ZKjGBafOS00zD75K2J1"})},s=t(28),p=t(9),f=t(10);function h(){var n=Object(p.a)(["\n  padding-left: 12px;\n  cursor: pointer;\n"]);return h=function(){return n},n}function g(){var n=Object(p.a)(["\n  display: flex;\n\n  span {\n    margin: 0 10px;\n  }\n\n  div {\n    cursor: pointer;\n  }\n"]);return g=function(){return n},n}function v(){var n=Object(p.a)(["\n  width: 23%;\n\n  @media screen and (max-width: 800px) {\n    width: 22%;\n  }\n"]);return v=function(){return n},n}function b(){var n=Object(p.a)(["\n  width: 23%;\n  padding-right: 15px;\n\n  img {\n    width: 100%;\n    height: 100%;\n  }\n"]);return b=function(){return n},n}function x(){var n=Object(p.a)(["\n  width: 100%;\n  display: flex;\n  min-height: 100px;\n  border-bottom: 1px solid darkgrey;\n  padding: 15px 0;\n  font-size: 20px;\n  align-items: center;\n\n  @media screen and (max-width: 800px) {\n    font-size: 18px;\n  }\n"]);return x=function(){return n},n}var E=f.c.div(x()),w=f.c.div(b()),y=f.c.span(v()),O=Object(f.c)(y)(g()),j=f.c.div(h()),k=Object(i.b)(null,(function(n){return{clearItem:function(e){return n(Object(s.c)(e))},addItem:function(e){return n(Object(s.a)(e))},removeItem:function(e){return n(Object(s.d)(e))}}}))((function(n){var e=n.cartItem,t=n.clearItem,r=n.addItem,i=n.removeItem,c=e.name,l=e.imageUrl,u=e.price,o=e.quantity;return a.a.createElement(E,null,a.a.createElement(w,null,a.a.createElement("img",{src:l,alt:"item"})),a.a.createElement(y,null,c),a.a.createElement(O,null,a.a.createElement("div",{onClick:function(){return i(e)}},"\u276e"),a.a.createElement("span",null,o),a.a.createElement("div",{onClick:function(){return r(e)}},"\u276f")),a.a.createElement(y,null,u),a.a.createElement(j,{onClick:function(){return t(e)}},"\u2715"))})),I=t(30);function z(){var n=Object(p.a)(["\n  text-align: center;\n  margin-top: 40px;\n  font-size: 24px;\n  color: red;\n"]);return z=function(){return n},n}function P(){var n=Object(p.a)(["\n  margin-top: 30px;\n  margin-left: auto;\n  font-size: 36px;\n"]);return P=function(){return n},n}function C(){var n=Object(p.a)(["\n  text-transform: capitalize;\n  width: 23%;\n\n  &:last-child {\n    width: 8%;\n  }\n\n  @media screen and (max-width: 800px) {\n    width: 22%\n\n    &:last-child {\n      width: 12%;\n    }\n  }\n"]);return C=function(){return n},n}function J(){var n=Object(p.a)(["\n  width: 100%;\n  height: 40px;\n  display: flex;\n  justify-content: space-between;\n  border-bottom: 1px solid darkgrey;\n"]);return J=function(){return n},n}function N(){var n=Object(p.a)(["\n  width: 55%;\n  min-height: 90vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: 50px auto 0;\n\n  button {\n    margin-left: auto;\n    margin-top: 50px;\n  }\n\n  @media screen and (max-width: 800px) {\n    width: 90%;\n  }\n"]);return N=function(){return n},n}var A=f.c.div(N()),K=f.c.div(J()),L=f.c.div(C()),S=f.c.div(P()),T=f.c.div(z()),q=Object(c.b)({cartItems:I.b,total:I.d});e.default=Object(i.b)(q)((function(n){var e=n.cartItems,t=n.total;return a.a.createElement(A,null,a.a.createElement(K,null,a.a.createElement(L,null,a.a.createElement("span",null,"Product")),a.a.createElement(L,null,a.a.createElement("span",null,"Description")),a.a.createElement(L,null,a.a.createElement("span",null,"Quantity")),a.a.createElement(L,null,a.a.createElement("span",null,"Price")),a.a.createElement(L,null,a.a.createElement("span",null,"Remove"))),e.map((function(n){return a.a.createElement(k,{key:n.id,cartItem:n})})),a.a.createElement(S,null,"TOTAL: $",t),a.a.createElement(T,null,"*Please use the following test credit card for payments*",a.a.createElement("br",null),"4242 4242 4242 4242 - Exp: 01/20 - CVV: 123"),a.a.createElement(d,{price:t}))}))}}]);
//# sourceMappingURL=6.df63f9d6.chunk.js.map