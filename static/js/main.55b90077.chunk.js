(this.webpackJsonpsaper=this.webpackJsonpsaper||[]).push([[0],{49:function(n,e,t){"use strict";(function(n){t.d(e,"a",(function(){return i}));var i=function(e,t,i){var a=[];n.width=e,n.height=t;for(var o=0;o<t;o++){a[o]=[];for(var s=0;s<e;s++){a[o][s]={value:0,isOpen:!1,isFlag:!1,isQuestionMark:!1}}}for(var u=0;u<i;u++){var l=r(a);a[l.x][l.y].value=-1}for(var d=0;d<t;d++)for(var h=0;h<e;h++)if(0===a[d][h].value){var b=0;c(a,d-1,h-1)&&b++,c(a,d-1,h)&&b++,c(a,d-1,h+1)&&b++,c(a,d,h-1)&&b++,c(a,d,h+1)&&b++,c(a,d+1,h-1)&&b++,c(a,d+1,h)&&b++,c(a,d+1,h+1)&&b++,a[d][h].value=b}return a},r=function(e){for(var t={x:-1,y:-1},i=0;i<5;i++)if(-1!==e[(t=a()).x][t.y].value)return{x:t.x,y:t.y};for(var r=t.y;r<n.width;r++)if(-1!==e[t.x][r].value)return{x:t.x,y:r};for(var c=t.x+1;c<n.height;c++)for(var o=0;o<n.width;o++)if(-1!==e[c][o].value)return{x:c,y:o};for(var s=t.y;s<=0;s--)if(-1!==e[t.x][s].value)return{x:t.x,y:s};for(var u=t.x+1;u<=0;u--)for(var l=t.y;l<=0;l--)if(-1!==e[u][l].value)return{x:u,y:l};return t},a=function(){return{x:Math.floor(Math.random()*n.height),y:Math.floor(Math.random()*n.width)}},c=function(e,t,i){return-1!==t&&t!==n.height&&-1!==i&&i!==n.width&&-1===e[t][i].value}}).call(this,t(25))},57:function(n,e,t){},65:function(n,e,t){"use strict";t.r(e);var i,r=t(4),a=t(3),c=t.n(a),o=t(33),s=t.n(o),u=(t(57),t(34)),l=t(13),d=t(8),h=t(20),b=t(6),p=t(7),f=t(19),x=t(30),j=t(35);!function(n){n[n.blue=0]="blue",n[n.green=1]="green",n[n.pink=2]="pink"}(i||(i={}));var m="SET_TEHEME",g=function(n,e){switch(n){case i.blue:switch(e){case"bomb":return Object(r.jsx)(x.a,{style:{color:"#DAAE00"}});case"flag":return Object(r.jsx)(f.a,{style:{color:"#DAAE00"}});case"question":return Object(r.jsx)(j.a,{style:{color:"#DAAE00"}});case"active_flag":return Object(r.jsx)(f.a,{style:{color:"#bb0000"}});case"active_bomb":return Object(r.jsx)(x.a,{style:{color:"#bb0000"}});default:return Object(r.jsx)("div",{style:{color:"green",fontWeight:"bold"},children:e})}case i.green:switch(e){case"bomb":return Object(r.jsx)(f.b,{style:{color:"#012601"}});case"flag":return Object(r.jsx)(f.a,{style:{color:"#012601"}});case"question":return Object(r.jsx)(j.a,{style:{color:"#012601"}});case"active_flag":return Object(r.jsx)(f.a,{style:{color:"#bb0000"}});case"active_bomb":return Object(r.jsx)(f.b,{style:{color:"#bb0000"}});default:return Object(r.jsx)("div",{style:{color:"#1DB6B6",fontWeight:"bold"},children:e})}case i.pink:switch(e){case"bomb":return Object(r.jsx)(x.b,{style:{color:"#cc0066",fontSize:30}});case"flag":return Object(r.jsx)(f.a,{style:{color:"#cc0066"}});case"question":return Object(r.jsx)(j.a,{style:{color:"#cc0066"}});case"active_flag":return Object(r.jsx)(f.a,{style:{color:"#bb0000"}});case"active_bomb":return Object(r.jsx)(x.b,{style:{color:"#bb0000",fontSize:30}});default:return Object(r.jsx)("div",{style:{color:"#3F0041",fontWeight:"bold"},children:e})}}};function v(){var n=Object(b.a)(["\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.5em;\n"]);return v=function(){return n},n}function O(){var n=Object(b.a)(["",""]);return O=function(){return n},n}function w(){var n=Object(b.a)(["\n  position: relative;\n  margin: 1px;\n  border-radius: 15%;\n  background-color: ",";\n  -webkit-touch-callout: none;\n    -webkit-user-select: none;\n     -khtml-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n"]);return w=function(){return n},n}var y=p.b.div(w(),(function(n){return n.isOpen?"gainsboro":Object(p.a)(O(),function(n){switch(n){case i.blue:return"#3e67ce";case i.green:return"#1C951C";case i.pink:return"#FF9999"}}(n.colorTheme))})),k=p.b.p(v()),F=function(n){var e=n.value,t=n.x,i=n.y,a=n.isOpen,c=n.isFlag,o=n.isQuestionMark,s=n.isLose,u=n.click,l=n.marking,d=n.theme;return Object(r.jsx)(y,{isOpen:a,onClick:function(){s||u(t,i)},onContextMenu:function(){s||l(t,i)},colorTheme:d,children:Object(r.jsxs)(k,{children:[a&&0!==e&&!c&&-1!==e&&g(d,e+""),a&&!c&&-1===e&&g(d,"active_bomb"),s&&!a&&!c&&-1===e&&g(d,"bomb"),c&&!(s&&-1!==e)&&g(d,"flag"),s&&c&&-1!==e&&g(d,"active_flag"),o&&g(d,"question")]})})},z=function(n,e){return n.isOpen===e.isOpen&&n.isFlag===e.isFlag&&n.isQuestionMark===e.isQuestionMark&&n.isLose===e.isLose&&n.value===e.value&&n.x===e.x&&n.y===e.y||(!e.isLose||!e.isFlag||-1===e.value)&&!(!e.isLose||-1===e.value)},S=Object(a.memo)(F,z);function C(){var n=Object(b.a)(["\n  height: 85vh;\n  width: 95vw;\n  display: flex;\n  margin: 25px auto;\n  justify-content: center;\n  align-items: center;\n  overflow-y: auto;\n  overflow-x: auto;\n  ::-webkit-scrollbar { \n    display: none;\n  }\n"]);return C=function(){return n},n}function E(){var n=Object(b.a)(["\n  padding: 0;\n  display: grid;\n  ","\n  width: 100%;\n  height: 100%;\n  grid-gap: 0px;\n  letter-spacing: 0px;\n  word-spacing: 0px;\n"]);return E=function(){return n},n}var M=p.b.div(E(),(function(n){return n.windowHeight*(85/n.height)/100*n.width<n.windowWidth?"grid-template-rows: repeat(".concat(n.height,", ").concat(n.windowHeight*(85/n.height)/100<30?"30px":"1fr",");\n    grid-template-columns: repeat(").concat(n.width,", ").concat(n.windowHeight*(85/n.height)/100<30?"30px":"".concat(85/n.height,"vh"),");\n    "):"grid-template-columns: repeat(".concat(n.width,", ").concat(n.windowWidth*(95/n.width)/100<30?"30px":"1fr",");\n    grid-template-rows: repeat(").concat(n.height,", ").concat(n.windowWidth*(95/n.width)/100<30?"30px":"".concat(95/n.width,"vw"),");\n    ")})),L=p.b.div(C()),A=t(49),D=function(n){var e=n.height,t=n.width,i=n.mines,c=n.setFlags,o=n.setIsLose,s=n.isLose,u=n.setIsWin,l=n.theme,h=Object(a.useState)({fields:[]}),b=Object(d.a)(h,2),p=b[0],f=b[1],x=Object(a.useState)(0),j=Object(d.a)(x,2),m=j[0],g=j[1],v=Object(a.useState)(0),O=Object(d.a)(v,2),w=O[0],y=O[1];Object(a.useEffect)((function(){f({fields:Object(A.a)(t,e,i)}),k(),window.addEventListener("resize",k)}),[t,e,i]);var k=function(){g(window.innerWidth),y(window.innerHeight)},F=function(n,r){var a=p.fields.slice();a[n][r].isFlag||(a[n][r].isOpen?C(n,r,a)&&(z(n-1,r+1,a),z(n-1,r,a),z(n-1,r-1,a),z(n,r+1,a),z(n,r-1,a),z(n+1,r+1,a),z(n+1,r,a),z(n+1,r-1,a)):z(n,r,a),f({fields:a}),function(){for(var n=!0,r=i,a=0;a<e;a++)for(var o=0;o<t;o++)-1===p.fields[a][o].value||p.fields[a][o].isOpen||(n=!1),p.fields[a][o].isFlag&&r--;c(r),u(n)}())},z=function(n,i,r){n>=0&&i>=0&&n<e&&i<t&&!r[n][i].isFlag&&(r[n][i].isOpen=!0,r[n][i].isQuestionMark=!1,-1===r[n][i].value&&o(!0),0===r[n][i].value&&(r=E(r,n,i)))},C=function(n,i,r){var a=0;return n+1<e&&i+1<t&&r[n+1][i+1].isFlag&&a++,n+1<e&&r[n+1][i].isFlag&&a++,n+1<e&&i-1>=0&&r[n+1][i-1].isFlag&&a++,i+1<t&&r[n][i+1].isFlag&&a++,i-1>=0&&r[n][i-1].isFlag&&a++,n-1>=0&&i+1<t&&r[n-1][i+1].isFlag&&a++,n-1>=0&&r[n-1][i].isFlag&&a++,n-1>=0&&i-1>=0&&r[n-1][i-1].isFlag&&a++,r[n][i].value===a},E=function(n,e,t){for(var i=[{x:e,y:t}];i.length>0;){for(var r=[],a=0;a<i.length;a++)D(i[a].x+1,i[a].y+1,r,n),D(i[a].x+1,i[a].y,r,n),D(i[a].x+1,i[a].y-1,r,n),D(i[a].x,i[a].y+1,r,n),D(i[a].x,i[a].y,r,n),D(i[a].x,i[a].y-1,r,n),D(i[a].x-1,i[a].y+1,r,n),D(i[a].x-1,i[a].y,r,n),D(i[a].x-1,i[a].y-1,r,n);i=r.slice()}return n},D=function(n,i,r,a){i>=0&&n>=0&&i<t&&n<e&&!a[n][i].isOpen&&(0===a[n][i].value&&r.push({x:n,y:i}),a[n][i].isOpen=!0,a[n][i].isFlag=!1,a[n][i].isQuestionMark=!1)},W=function(n,r){var a=p.fields,o=function(){for(var n=i,r=0;r<e;r++)for(var a=0;a<t;a++)p.fields[r][a].isFlag&&n--;return n}();a[n][r].isOpen||(a[n][r].isFlag?(a[n][r].isQuestionMark=!0,a[n][r].isFlag=!1,o++):a[n][r].isQuestionMark?a[n][r].isQuestionMark=!1:0===o?a[n][r].isQuestionMark=!0:(a[n][r].isFlag=!0,o--),f({fields:a}),c(o))};return Object(r.jsx)(L,{children:Object(r.jsx)(M,{height:e,width:t,windowWidth:m,windowHeight:w,onContextMenu:function(n){return function(n){n.preventDefault()}(n)},children:p.fields.map((function(n,e){return Object(r.jsx)(r.Fragment,{children:n.map((function(n,t){return Object(r.jsx)(S,{value:n.value,x:e,y:t,isOpen:n.isOpen,isFlag:n.isFlag,isQuestionMark:n.isQuestionMark,isLose:s,click:F,marking:W,theme:l},"".concat(e,"_").concat(t))}))})}))})})},W=t(50),T=function(n){var e=n.isRefresh,t=n.isWin,i=n.setWinTime,c=n.isLose,o=Object(a.useState)(0),s=Object(d.a)(o,2),u=s[0],l=s[1],h=Object(a.useRef)(0),b=function(){clearInterval(h.current),l(0)};return Object(a.useEffect)((function(){return function(){return b()}}),[]),Object(a.useEffect)((function(){e?b():h.current=setInterval((function(){l((function(n){return n+1===999&&clearInterval(h.current),n+1}))}),1e3)}),[e]),Object(a.useEffect)((function(){t&&(clearInterval(h.current),l((function(n){return i(n),n}))),c&&clearInterval(h.current)}),[i,t,c]),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(W.a,{style:{marginLeft:30}}),Object(r.jsx)("span",{style:{fontSize:20,margin:5},children:("000"+u).slice(-3)})]})},I=t(40);function Q(){var n=Object(b.a)(["\n  padding-top: 20px;\n  width: 100%;\n  text-align: center;\n  font-size: 36px;\n\n  @media only screen and (max-width: 450px) {\n    text-align: left;\n    padding-left: 20px;\n  }\n"]);return Q=function(){return n},n}function _(){var n=Object(b.a)(["\n  margin: auto;\n  width: 100%;\n"]);return _=function(){return n},n}var R=p.b.div(_()),B=p.b.div(Q());function U(){var n=Object(b.a)(["\n  position: absolute;\n  background-color: white;\n  width: 70%;\n  max-height: 80%;\n  margin: auto;\n  padding: 20px;\n  top: 0; \n  left: 0; \n  bottom: 0; \n  overflow-y: auto;\n  right: 0;\n  border-radius: 30px;\n  box-shadow: 5px 5px 5px teal;\n  animation: "," 0.3s ease-out;\n\n  @media only screen and (max-width: 610px) {\n    width: 80%;\n  }\n\n"]);return U=function(){return n},n}function H(){var n=Object(b.a)(["\n  margin: 0;\n  padding: 0;\n  position: absolute;\n  width: 100vw;\n  height: 100vh;\n"]);return H=function(){return n},n}function P(){var n=Object(b.a)(["\n  margin: 0;\n  padding: 0;\n  top:0;\n  position: fixed;\n  width: 100vw;\n  height: 100vh;\n  animation: "," 0.3s linear;\n  background-color: rgba(0, 0, 0, 0.8);\n  z-index: 5;\n"]);return P=function(){return n},n}function q(){var n=Object(b.a)(["\n  from {\n    transform: translate(0,-50%);\n  }\n\n  to {\n    transform: translate(0,0);\n  }\n"]);return q=function(){return n},n}function N(){var n=Object(b.a)(["\n  from {\n    background-color: rgba(0, 0, 0, 0);\n  }\n\n  to {\n    background-color: rgba(0, 0, 0, 0.8);\n  }\n"]);return N=function(){return n},n}var J=Object(p.c)(N()),X=Object(p.c)(q()),G=p.b.div(P(),J),K=p.b.div(H()),V=p.b.div(U(),X),$=function(n){var e=n.children,t=n.startOpen,i=n.close,c=Object(a.useState)(!1),o=Object(d.a)(c,2),s=o[0],u=o[1];Object(a.useEffect)((function(){u(t||!1)}),[t]);return Object(r.jsx)(r.Fragment,{children:s?Object(r.jsxs)(G,{children:[Object(r.jsx)(K,{onClick:function(){u(!1),i&&i()}}),Object(r.jsx)(V,{children:e})]}):null})},Y=t(22),Z=t.n(Y),nn=t(29);function en(){var n=Object(b.a)(["\n  margin: 25px;\n  background: none;\n  font-size: 18px;\n  padding: 9px;\n  ","\n  border-radius: 6px;\n\n  :focus{\n    ","\n  }\n"]);return en=function(){return n},n}function tn(){var n=Object(b.a)(["\n  font-size: 24px;\n  margin: 10px;\n  padding: 0;\n"]);return tn=function(){return n},n}function rn(){var n=Object(b.a)(["\n  font-size: 32px;\n  margin: 5px;\n  padding: 0;\n  font-weight: bold;\n"]);return rn=function(){return n},n}function an(){var n=Object(b.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  margin-top: 10px;\n"]);return an=function(){return n},n}function cn(){var n=Object(b.a)(["\n  font-size: 18px;\n  margin: 20px auto;\n  padding: 10px 20px;\n  border: none;\n  background-color: #2196F3;\n  color: white;\n\n  :hover{\n    cursor: pointer;\n    background-color: #1D85D4;\n  }\n"]);return cn=function(){return n},n}var on=p.b.button(cn()),sn=p.b.form(an()),un=p.b.p(rn()),ln=p.b.p(tn()),dn=p.b.input(en(),(function(n){return n.error?"border: 2px solid red;":"border: 2px solid #82BDEB;"}),(function(n){return n.error?"box-shadow: 0 0 4px red;":"box-shadow: 0 0 4px rgba(81, 203, 238, 1);"})),hn=t(32),bn=function(){if(!hn.a.apps.length){hn.a.initializeApp({apiKey:"AIzaSyARXNmjw3dtkJ05clEifNoCVpXcWxmPL-Q",authDomain:"minesweeper-d2be7.firebaseapp.com",projectId:"minesweeper-d2be7",databaseURL:"https://minesweeper-d2be7-default-rtdb.europe-west1.firebasedatabase.app/",storageBucket:"minesweeper-d2be7.appspot.com"})}},pn=function(){var n=Object(nn.a)(Z.a.mark((function n(){return Z.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return bn(),n.abrupt("return",new Promise(function(){var n=Object(nn.a)(Z.a.mark((function n(e,t){var i,r;return Z.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return i=[],n.prev=1,n.next=4,hn.a.database().ref("winners").once("value");case 4:return r=n.sent,Object.values(r.val()).forEach((function(n){i.push(n)})),n.abrupt("return",e(i));case 9:return n.prev=9,n.t0=n.catch(1),n.abrupt("return",t(null));case 12:case"end":return n.stop()}}),n,null,[[1,9]])})));return function(e,t){return n.apply(this,arguments)}}()));case 2:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),fn=function(n){var e=n.time,t=n.width,i=n.height,c=n.mines,o=n.level,s=n.closeModal,u=Object(a.useState)(""),l=Object(d.a)(u,2),h=l[0],b=l[1],p=Object(a.useState)(!1),f=Object(d.a)(p,2),x=f[0],j=f[1],m=function(){var n=Object(nn.a)(Z.a.mark((function n(r){return Z.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:r.preventDefault(),h.length>0?(a={time:e,name:h,width:t,height:i,mines:c,level:o},bn(),hn.a.database().ref("winners").push(a),s()):j(!0);case 2:case"end":return n.stop()}var a}),n)})));return function(e){return n.apply(this,arguments)}}();return Object(r.jsxs)(sn,{onSubmit:function(n){return m(n)},children:[Object(r.jsx)(un,{children:"CONGRATULATIONS"}),Object(r.jsxs)(ln,{children:["you won, your time is ",e," seconds"]}),Object(r.jsx)(dn,{type:"text",value:h,onChange:function(n){return function(n){b(n.target.value),j(""===n.target.value)}(n)},maxLength:22,onBlur:function(){j(""===h)},error:x}),Object(r.jsx)(on,{type:"submit",children:"save"})]})},xn=function(){var n=Object(h.c)((function(n){return n.gameParameters})),e=Object(h.c)((function(n){return n.gameTheme})),t=Object(a.useState)(n.width),i=Object(d.a)(t,2),c=i[0],o=i[1],s=Object(a.useState)(n.height),u=Object(d.a)(s,2),l=u[0],b=u[1],p=Object(a.useState)(n.mines),x=Object(d.a)(p,2),j=x[0],m=x[1],g=Object(a.useState)(!1),v=Object(d.a)(g,2),O=v[0],w=v[1],y=Object(a.useState)(!1),k=Object(d.a)(y,2),F=k[0],z=k[1],S=Object(a.useState)(0),C=Object(d.a)(S,2),E=C[0],M=C[1],L=Object(a.useState)(!1),A=Object(d.a)(L,2),W=A[0],Q=A[1],_=Object(a.useState)(n.mines),U=Object(d.a)(_,2),H=U[0],P=U[1],q=Object(a.useState)(!1),N=Object(d.a)(q,2),J=N[0],X=N[1],G=Object(a.useState)(e.theme),K=Object(d.a)(G,2),V=K[0],Y=K[1];Object(a.useEffect)((function(){F&&setTimeout((function(){X(!0)}),500)}),[F]),Object(a.useEffect)((function(){o(n.width),b(n.height),m(n.mines),Y(e.theme),P(n.mines),nn()}),[n,e]);var Z=function(){P(n.mines),nn()},nn=function(){w(!1),Q(!0),z(!1),setTimeout((function(){Q(!1)}),10)};return Object(r.jsxs)(R,{children:[Object(r.jsx)($,{startOpen:J,close:function(){return X(!1)},children:Object(r.jsx)(fn,{time:E,width:c,height:l,mines:j,level:n.level,closeModal:function(){return X(!1)}})}),Object(r.jsxs)(B,{children:[Object(r.jsx)(f.a,{}),Object(r.jsx)("span",{style:{display:"inline-block",width:15,fontSize:20,marginRight:30},children:H}),O?Object(r.jsx)(I.a,{style:{cursor:"pointer"},onClick:Z}):Object(r.jsx)(I.b,{style:{cursor:"pointer"},onClick:Z}),Object(r.jsx)(T,{isRefresh:W,isWin:F,setWinTime:M,isLose:O})]}),W?null:Object(r.jsx)(D,{width:c,height:l,mines:j,setFlags:P,setIsLose:w,isLose:O,setIsWin:z,theme:V})]})},jn=t.p+"static/media/bac.04a3b72d.png",mn=t.p+"static/media/button.d082d4e6.png";function gn(){var n=Object(b.a)(["\n  float: left;\n  width: 50%;\n  position: relative;\n  margin-top: 20px;\n  height: 124px;\n\n  @media screen and (orientation:portrait) {\n    width: 100%;\n\n  @media only screen and (max-width: 400px) {\n    height: 102px;\n  }\n\n}\n\n@media screen and (orientation:landscape) {\n\n  @media only screen and (max-width: 750px) {\n    height: 102px;\n  }\n\n  @media only screen and (max-width: 610px) {\n    height: 95px;\n  }\n\n}\n"]);return gn=function(){return n},n}function vn(){var n=Object(b.a)(["\n  left: 15vw;\n\n  @media screen and (orientation:landscape) {\n\n    @media only screen and (max-width: 1100px) {\n      left: 8vw;\n    }\n\n    @media only screen and (max-width: 870px) {\n      left: 10px;\n    }\n\n  }\n\n  @media screen and (orientation:portrait) {\n\n    @media only screen and (max-width: 1100px) {\n      left: 0;\n    }\n    \n  }\n"]);return vn=function(){return n},n}function On(){var n=Object(b.a)(["\n  right: 15vw;\n\n  @media screen and (orientation:landscape) {\n\n    @media only screen and (max-width: 1100px) {\n      right: 8vw;\n    }\n\n    @media only screen and (max-width: 870px) {\n      right: 10px;\n    }\n\n  }\n\n  @media screen and (orientation:portrait) {\n\n    @media only screen and (max-width: 1100px) {\n      right: 0;\n    }\n    \n  }\n"]);return On=function(){return n},n}function wn(){var n=Object(b.a)(["\n  color: #333333;\n  font-size: 30px;\n  text-align: center;\n  width: 360px;\n  height: 124px;\n  line-height: 120px;\n  background-image: url(",");\n  text-decoration: none;\n  background-repeat: no-repeat;\n  background-size: contain;\n  position: absolute;\n\n  @media screen and (orientation:portrait) {\n      margin: auto;\n      position: absolute;\n      top: 0; left: 0; bottom: 0; right: 0;\n\n    @media only screen and (max-width: 400px) {\n      width: 300px;\n      height: 102px;\n      line-height: 90px;\n    }\n\n  }\n\n  @media screen and (orientation:landscape) {\n\n    @media only screen and (max-width: 750px) {\n      width: 300px;\n      height: 102px;\n      line-height: 90px;\n    }\n\n    @media only screen and (max-width: 610px) {\n      width: 280px;\n      height: 95px;\n      line-height: 80px;\n    }\n\n  }\n"]);return wn=function(){return n},n}function yn(){var n=Object(b.a)(["\n  margin: auto;\n  text-align: center;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  @media screen and (orientation:portrait) {\n    width: 90%;\n  }\n\n  @media screen and (orientation:landscape) {\n    height: 75vh;\n  }\n"]);return yn=function(){return n},n}function kn(){var n=Object(b.a)(["\n  width: 100%;\n  min-height: 100vh;\n"]);return kn=function(){return n},n}var Fn=p.b.div(kn()),zn=p.b.img(yn()),Sn=Object(p.b)(u.b)(wn(),mn),Cn=Object(p.b)(Sn)(On()),En=Object(p.b)(Sn)(vn()),Mn=p.b.div(gn()),Ln=function(){return Object(r.jsxs)(Fn,{children:[Object(r.jsx)(zn,{src:jn}),Object(r.jsx)(Mn,{children:Object(r.jsx)(En,{to:"/score",children:"score"})}),Object(r.jsx)(Mn,{children:Object(r.jsx)(Cn,{to:"/game",children:"game"})})]})};function An(){var n=Object(b.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column; \n  padding-bottom: 20px;\n"]);return An=function(){return n},n}var Dn=p.b.div(An());function Wn(){var n=Object(b.a)(["\n  color: #66ccff;\n"]);return Wn=function(){return n},n}function Tn(){var n=Object(b.a)(["\n  width: 50%;\n  text-align: center;\n  margin-top: 35px;\n\n  @media only screen and (max-width: 900px) {\n    width: 80%;\n  }\n\n  @media only screen and (max-width: 550px) {\n    font-size: 18px;\n  }\n\n  @media only screen and (max-width: 400px) {\n    font-size: 15px;\n  }\n"]);return Tn=function(){return n},n}function In(){var n=Object(b.a)(["\n  background-color: #ff704d;\n  position: absolute;\n  height: 60px;\n  width: 60px;\n  left: -8px;\n  text-align: center;\n  font-size: 20px;\n  transform: translateX(-100%);\n\n  @media only screen and (max-width: 550px) {\n    height: 45px;\n    width: 45px;\n    font-size: 18px;\n  }\n\n  @media only screen and (max-width: 400px) {\n    height: 35px;\n    width: 35px;\n    font-size: 15px;\n  }\n"]);return In=function(){return n},n}function Qn(){var n=Object(b.a)(["\n  font-weight: bold;\n"]);return Qn=function(){return n},n}function _n(){var n=Object(b.a)(["\n  background-color: #e6e6e6;\n  line-height: 60px;\n  height: 60px;\n  position: relative;\n  display: flex;\n  align-items: center;\n  flex-direction: row;\n  flex-wrap: nowrap; \n  padding: 0 30px;\n\n  @media only screen and (max-width: 550px) {\n    height: 45px;\n    line-height: 45px;\n  }\n\n  @media only screen and (max-width: 400px) {\n    height: 35px;\n    line-height: 35px;\n    padding: 0 5px;\n  }\n"]);return _n=function(){return n},n}function Rn(){var n=Object(b.a)(["\n  width: 50%;\n  margin: 4px;\n\n  @media only screen and (max-width: 900px) {\n    width: 80%;\n    margin-left: 68px;\n  }\n\n  @media only screen and (max-width: 550px) {\n    font-size: 13px;\n    margin-left: 53px;\n  }\n\n  @media only screen and (max-width: 400px) {\n    font-size: 12px;\n    margin-left: 43px;\n  }\n"]);return Rn=function(){return n},n}var Bn,Un=p.b.div(Rn()),Hn=p.b.div(_n()),Pn=p.b.div(Qn()),qn=p.b.div(In()),Nn=p.b.div(Tn()),Jn=p.b.hr(Wn()),Xn=function(n){var e=n.name,t=n.time,i=n.id;return Object(r.jsx)(Un,{children:Object(r.jsxs)(Hn,{children:[Object(r.jsx)(qn,{children:i}),Object(r.jsx)(Pn,{style:{width:"15%"},children:"name:"}),Object(r.jsx)("div",{style:{width:"60%"},children:e}),Object(r.jsx)(Pn,{style:{width:"15%"},children:"time:"}),Object(r.jsx)("div",{style:{width:"10%"},children:t})]})})};!function(n){n[n.beginner=0]="beginner",n[n.intermadiate=1]="intermadiate",n[n.expert=2]="expert",n[n.custom=3]="custom"}(Bn||(Bn={}));var Gn="SET_PARAMETERS",Kn=function(n){var e=n.level,t=n.width,i=n.height,a=n.mines;return Object(r.jsxs)(Nn,{children:[Bn[e]," minefield: ",t," x ",i," , ",a," mines",Object(r.jsx)(Jn,{})]})},Vn=function(){var n=Object(a.useState)({winners:[]}),e=Object(d.a)(n,2),t=e[0],i=e[1],c=function(n,e){return n.time-e.time};return Object(a.useEffect)((function(){0===t.winners.length&&pn().then((function(n){for(var e=n,r=function(n){var i=e.filter((function(e){return e.level===2-n})).sort((function(n,e){return c(n,e)}));i.length>0&&t.winners.push(i)},a=0;a<3;a++)r(a);for(var o=e.filter((function(n){return 3===n.level})).sort((function(n,e){return function(n,e){return n.width<e.width||n.height<e.height||n.mines<e.mines?1:n.width>e.width||n.height>e.height||n.mines>e.mines?-1:0}(n,e)}));o.length>0;)t.winners.push(o.filter((function(n){return n.height===o[0].height&&n.width===o[0].width&&n.mines===o[0].mines})).sort((function(n,e){return c(n,e)}))),o.filter((function(n){return!(n.height===o[0].height&&n.width===o[0].width&&n.mines===o[0].mines)}));i({winners:t.winners})}))}),[t]),Object(r.jsxs)(Dn,{children:[Object(r.jsx)("h1",{children:"Score"}),t.winners.map((function(n){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(Kn,{level:n[0].level,width:n[0].width,height:n[0].height,mines:n[0].mines}),n.map((function(n,e){return Object(r.jsx)(Xn,{id:e+1,name:n.name,time:n.time})}))]})}))]})},$n=t(28),Yn=t(31),Zn=t.p+"static/media/gear.e9ab6a42.png";function ne(){var n=Object(b.a)(["\n  font-size: 18px;\n  margin: 20px auto;\n  padding: 10px 20px;\n  border: none;\n  background-color: #2196F3;\n  color: white;\n\n  :hover{\n    cursor: pointer;\n    background-color: #1D85D4;\n  }\n"]);return ne=function(){return n},n}function ee(){var n=Object(b.a)(["\n  margin-left: 10px;\n  width: 15px;\n  ","\n"]);return ee=function(){return n},n}function te(){var n=Object(b.a)(["\nwidth: 100%;\ndisplay: flex;\nalign-items: center;\njustify-content: center;\nflex-direction: row-reverse;\n\nlabel{\n  font-size: 18px;\n}\n\n  input {\n    -webkit-appearance: none;\n    width: 60%;\n    margin-left: 10px;\n    height: 10px;\n    border-radius: 5px;\n    background: #d3d3d3;\n    outline: none;\n    opacity: 0.8;\n    -webkit-transition: .2s;\n    transition: opacity .2s;\n  }\n  \n  input:hover:enabled {\n    opacity: 1;\n  }\n\n  label + input:disabled,\n  input:disabled + label,\n  input:disabled{\n    opacity: 0.4;\n    -webkit-transition: .2s;\n    transition: opacity .2s;\n  }\n  \n  input::-webkit-slider-thumb {\n    height: 16px;\n    width: 16px;\n    border: none;\n    -webkit-appearance: none;\n    border-radius: 50%;\n  }\n\n  input::-ms-thumb{\n    width: 16px;\n    height: 16px;\n    border-radius: 50%;\n    border: none;\n  }\n  \n  input::-moz-range-thumb{\n    width: 16px;\n    height: 16px;\n    border-radius: 50%;\n    border: none;\n  }\n\n  input:enabled::-webkit-slider-thumb{\n    cursor: pointer;\n  }\n\n  input:enabled::-moz-range-thumb{\n    cursor: pointer;\n  }\n\n  input:enabled::-ms-thumb{\n    cursor: pointer;\n  }\n"]);return te=function(){return n},n}function ie(){var n=Object(b.a)(["\ndiv:nth-child(4n-3){\n  input::-webkit-slider-thumb{\n    background: #fcba03;\n  }\n\n  input::-ms-thumb{\n    background: #fcba03;\n  }\n\n  input::-moz-range-thumb{\n    background: #fcba03;\n  }\n}\n\ndiv:nth-child(4n-2){\n  input::-webkit-slider-thumb{\n    background: #4CAF50;\n  }\n\n  input::-ms-thumb{\n    background: #4CAF50;\n  }\n\n  input::-moz-range-thumb{\n    background: #4CAF50;\n  }\n}\n\ndiv:nth-child(4n-1){\n  input::-webkit-slider-thumb{\n    background: #2196F3;\n  }\n\n  input::-ms-thumb{\n    background: #2196F3;\n  }\n\n  input::-moz-range-thumb{\n    background: #2196F3;\n  }\n}\n\ndiv:nth-child(4n){\n  input::-webkit-slider-thumb{\n    background: #fc03f4;\n  }\n\n  input::-ms-thumb{\n    background: #fc03f4;\n  }\n\n  input::-moz-range-thumb{\n    background: #fc03f4;\n  }\n}\n"]);return ie=function(){return n},n}function re(){var n=Object(b.a)(['\n  label{\n    display: block;\n    position: relative;\n    padding-left: 25px;\n    margin-bottom: 16px;\n    cursor: pointer;\n    font-size: 18px;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n\n  input {\n    position: absolute;\n    opacity: 0;\n    cursor: pointer;\n  }\n\n  span {\n    position: absolute;\n    top: 2px;\n    left: 0;\n    height: 16px;\n    width: 16px;\n    background-color: #eee;\n    border-radius: 50%;\n  }\n\n  :hover input ~ span{\n    background-color: #ccc;\n  }\n\n  span:after {\n    content: "";\n    position: absolute;\n    display: none;\n  }\n\n  & input:checked ~ span:after {\n    display: block;\n  }\n  }\n\n  label:nth-child(3n-2){\n    input:checked ~ span {\n      background-color: #3e67ce;\n    }\n  }\n\n  label:nth-child(3n-1){\n    input:checked ~ span {\n      background-color: #1C951C;\n    }\n  }\n\n  label:nth-child(3n){\n    input:checked ~ span {\n      background-color: #FF9999;\n    }\n  }\n']);return re=function(){return n},n}function ae(){var n=Object(b.a)(['\n  label{\n    display: block;\n    position: relative;\n    padding-left: 25px;\n    margin-bottom: 16px;\n    cursor: pointer;\n    font-size: 18px;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n\n  input {\n    position: absolute;\n    opacity: 0;\n    cursor: pointer;\n  }\n\n  span {\n    position: absolute;\n    top: 2px;\n    left: 0;\n    height: 16px;\n    width: 16px;\n    background-color: #eee;\n    border-radius: 50%;\n  }\n\n  :hover input ~ span{\n    background-color: #ccc;\n  }\n\n  span:after {\n    content: "";\n    position: absolute;\n    display: none;\n  }\n\n  & input:checked ~ span:after {\n    display: block;\n  }\n  }\n\n  label:nth-child(4n-3){\n    input:checked ~ span {\n      background-color: #fcba03;\n    }\n  }\n\n  label:nth-child(4n-2){\n    input:checked ~ span {\n      background-color: #4CAF50;\n    }\n  }\n\n  label:nth-child(4n-1){\n    input:checked ~ span {\n      background-color: #2196F3;\n    }\n  }\n\n  label:nth-child(4n){\n    input:checked ~ span {\n      background-color: #fc03f4;\n    }\n  }\n']);return ae=function(){return n},n}function ce(){var n=Object(b.a)(["\n  padding: 20px 0;\n"]);return ce=function(){return n},n}function oe(){var n=Object(b.a)(["\n  text-align: left;\n  width: 90%;\n  margin: 2px 20px;\n  padding: 20px;\n  font-size: 22px;\n  font-weight: bold;\n  color: white;\n  border: none;\n  background-color: #66ffb2;\n"]);return oe=function(){return n},n}function se(){var n=Object(b.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  margin-top: 10px;\n"]);return se=function(){return n},n}function ue(){var n=Object(b.a)(["\n  position: absolute;\n  top: 10px;\n  width: 80px;\n  height: 80px;\n  right: 10px;\n  background: url(",");\n  border: none;\n  z-index: 1;\n  background-repeat: no-repeat; \n  background-size: contain;\n  cursor: pointer;\n\n  @media only screen and (max-width: 400px) {\n    width: 70px;\n    height: 70px;\n  }\n\n  @media only screen and (max-width: 340px) {\n    width: 60px;\n    height: 60px;\n  }\n"]);return ue=function(){return n},n}var le=p.b.button(ue(),Zn),de=p.b.form(se()),he=(p.b.div(oe()),p.b.div(ce())),be=p.b.div(ae()),pe=p.b.div(re()),fe=p.b.div(ie()),xe=p.b.div(te()),je=p.b.p(ee(),(function(n){return n.disabled&&"opacity: 0.4;\n  -webkit-transition: .2s;\n  transition: opacity .2s;"})),me=p.b.button(ne()),ge=t(51);function ve(){var n=Object(b.a)(["\n  font-size: 32px;\n  transform: ",";\n"]);return ve=function(){return n},n}function Oe(){var n=Object(b.a)(["\n      max-height: 0px;\n      animation: "," 0.5s ease-out\n    "]);return Oe=function(){return n},n}function we(){var n=Object(b.a)(["\n      max-height: 100vh;\n      animation: "," 0.5s ease-out\n    "]);return we=function(){return n},n}function ye(){var n=Object(b.a)(["\n      max-height: 0px;\n    "]);return ye=function(){return n},n}function ke(){var n=Object(b.a)(["\n  width: 50%;\n  margin: 0 auto;\n  overflow-y: hidden;\n\n  @media only screen and (max-width: 610px) {\n    width: 100%;\n  }\n  \n  ","\n  ","\n  ","\n"]);return ke=function(){return n},n}function Fe(){var n=Object(b.a)(["\n  text-align: left;\n  width: 90%;\n  margin: 2px 15px;\n  padding: 20px;\n  font-size: 22px;\n  font-weight: bold;\n  color: white;\n  border: none;\n  background-color: #33ff99;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  cursor: pointer;\n"]);return Fe=function(){return n},n}function ze(){var n=Object(b.a)(["\n  from {\n    max-height: 100vh;\n  }\n\n  to {\n    max-height: 0px;\n  }\n"]);return ze=function(){return n},n}function Se(){var n=Object(b.a)(["\n  from {\n    max-height: 0px;\n  }\n\n  to {\n    max-height: 100vh;\n  }\n"]);return Se=function(){return n},n}var Ce=Object(p.c)(Se()),Ee=Object(p.c)(ze()),Me=p.b.div(Fe()),Le=p.b.div(ke(),(function(n){return!n.isDown&&!n.isUp&&Object(p.a)(ye())}),(function(n){return n.isUp&&Object(p.a)(we(),Ce)}),(function(n){return n.isDown&&Object(p.a)(Oe(),Ee)})),Ae=Object(p.b)(ge.a)(ve(),(function(n){return n.isUp?"rotate(180deg)":"rotate(0deg)"})),De=function(n){var e=n.children,t=n.title,i=Object(a.useState)(!1),c=Object(d.a)(i,2),o=c[0],s=c[1],u=Object(a.useState)(!1),l=Object(d.a)(u,2),h=l[0],b=l[1];return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)(Me,{onClick:function(){o?(b(!0),s(!1)):(b(!1),s(!0))},children:[t,Object(r.jsx)(Ae,{isDown:h,isUp:o})]}),Object(r.jsx)(Le,{isUp:o,isDown:h,children:e})]})},We=function(n){var e=n.values,t=n.handleChange;return Object(r.jsx)(De,{title:"level",children:Object(r.jsxs)(he,{children:[Object(r.jsxs)(be,{children:[Object(r.jsxs)("label",{children:[Bn[Bn.beginner],Object(r.jsx)("input",{type:"radio",name:"level",value:Bn.beginner,checked:1*e.level===Bn.beginner,onChange:function(n){return t(n)}}),Object(r.jsx)("span",{})]}),Object(r.jsxs)("label",{children:[Bn[Bn.intermadiate],Object(r.jsx)("input",{type:"radio",name:"level",value:Bn.intermadiate,checked:1*e.level===Bn.intermadiate,onChange:function(n){return t(n)}}),Object(r.jsx)("span",{})]}),Object(r.jsxs)("label",{children:[Bn[Bn.expert],Object(r.jsx)("input",{type:"radio",name:"level",value:Bn.expert,checked:1*e.level===Bn.expert,onChange:function(n){return t(n)}}),Object(r.jsx)("span",{})]}),Object(r.jsxs)("label",{children:[Bn[Bn.custom],Object(r.jsx)("input",{type:"radio",name:"level",value:Bn.custom,checked:1*e.level===Bn.custom,onChange:function(n){return t(n)}}),Object(r.jsx)("span",{})]})]}),Object(r.jsxs)(fe,{children:[Object(r.jsxs)(xe,{children:[Object(r.jsx)(je,{disabled:1*e.level!==Bn.custom,children:e.width}),Object(r.jsx)("input",{id:"width",name:"width",type:"range",value:e.width,disabled:1*e.level!==Bn.custom,min:"8",max:"30",onChange:function(n){return t(n)}}),Object(r.jsx)("label",{htmlFor:"width",children:"width"})]}),Object(r.jsxs)(xe,{children:[Object(r.jsx)(je,{disabled:1*e.level!==Bn.custom,children:e.height}),Object(r.jsx)("input",{id:"height",name:"height",type:"range",value:e.height,disabled:1*e.level!==Bn.custom,min:"8",max:"24",onChange:function(n){return t(n)}}),Object(r.jsx)("label",{htmlFor:"height",children:"height"})]}),Object(r.jsxs)(xe,{children:[Object(r.jsx)(je,{disabled:1*e.level!==Bn.custom,children:e.mines}),Object(r.jsx)("input",{id:"mines",name:"mines",type:"range",value:e.mines,disabled:1*e.level!==Bn.custom,min:"10",max:(e.width-1)*(e.height-1),onChange:function(n){return t(n)}}),Object(r.jsx)("label",{htmlFor:"mines",children:"mines"})]})]})]})})},Te=function(n){var e=n.values,t=n.handleChange;return Object(r.jsx)(De,{title:"theme",children:Object(r.jsx)(he,{children:Object(r.jsxs)(pe,{children:[Object(r.jsxs)("label",{children:[i[i.blue],Object(r.jsx)("input",{type:"radio",name:"theme",value:i.blue,checked:1*e.theme===i.blue,onChange:function(n){return t(n)}}),Object(r.jsx)("span",{})]}),Object(r.jsxs)("label",{children:[i[i.green],Object(r.jsx)("input",{type:"radio",name:"theme",value:i.green,checked:1*e.theme===i.green,onChange:function(n){return t(n)}}),Object(r.jsx)("span",{})]}),Object(r.jsxs)("label",{children:[i[i.pink],Object(r.jsx)("input",{type:"radio",name:"theme",value:i.pink,checked:1*e.theme===i.pink,onChange:function(n){return t(n)}}),Object(r.jsx)("span",{})]})]})})})};var Ie=function(){var n=Object(h.c)((function(n){return n.gameParameters})),e=Object(h.c)((function(n){return n.gameTheme})),t=Object(h.b)(),i=Object(a.useState)(n),c=Object(d.a)(i,2),o=c[0],s=c[1],u=Object(a.useState)(e),l=Object(d.a)(u,2),b=l[0],p=l[1],f=Object(a.useState)(!1),x=Object(d.a)(f,2),j=x[0],g=x[1],v=function(n){switch(n.preventDefault(),g(!1),o.level=1*o.level,o.level){case Bn.beginner:o.width=8,o.height=8,o.mines=10;break;case Bn.intermadiate:o.width=16,o.height=16,o.mines=40;break;case Bn.expert:o.width=30,o.height=16,o.mines=99;break;default:o.width=1*o.width,o.height=1*o.height,o.mines=1*o.mines}t({type:Gn,payload:o}),t({type:m,payload:b})};return Object(r.jsxs)("div",{children:[Object(r.jsx)($,{startOpen:j,close:function(){return g(!1)},children:Object(r.jsxs)(de,{onSubmit:function(n){return v(n)},children:[Object(r.jsx)(We,{values:o,handleChange:function(n){var e=n.target,t=e.name,i=e.value;if(("width"===t||"height"===t)&&o.mines>=(o.width-1)*(o.height-1)){var r="width"===t?(i-1)*(o.height-1):(o.width-1)*(i-1);s((function(n){var e;return Object(Yn.a)(Object(Yn.a)({},n),{},(e={},Object($n.a)(e,t,i),Object($n.a)(e,"mines",r),e))}))}else s((function(n){return Object(Yn.a)(Object(Yn.a)({},n),{},Object($n.a)({},t,i))}))}}),Object(r.jsx)(Te,{values:b,handleChange:function(n){var e=n.target.value;p({theme:parseInt(e)})}}),Object(r.jsx)(me,{type:"submit",children:"save"})]})}),Object(r.jsx)(le,{onClick:function(){return g(!0)}})]})};function Qe(){var n=Object(b.a)(["\n  width: 100vw;\n  height: 100vh;\n  overflow: hidden;\n"]);return Qe=function(){return n},n}var _e=p.b.div(Qe()),Re=function(){return Object(r.jsxs)(_e,{children:[Object(r.jsx)(Ie,{}),Object(r.jsx)(u.a,{children:Object(r.jsxs)(l.c,{children:[Object(r.jsx)(l.a,{exact:!0,path:"/",component:Ln}),Object(r.jsx)(l.a,{exact:!0,path:"/game",component:xn}),Object(r.jsx)(l.a,{exact:!0,path:"/score",component:Vn})]})})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Be=t(27),Ue={level:Bn.beginner,width:8,height:8,mines:10};var He={theme:i.blue};var Pe=Object(Be.b)({gameParameters:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ue,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case Gn:return e.payload;default:return n}},gameTheme:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:He,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case m:return e.payload;default:return n}}}),qe=Object(Be.c)(Pe);s.a.render(Object(r.jsx)(h.a,{store:qe,children:Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(Re,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()}))}},[[65,1,2]]]);
//# sourceMappingURL=main.55b90077.chunk.js.map