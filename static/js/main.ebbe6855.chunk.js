(this["webpackJsonpexpense-tracker-react"]=this["webpackJsonpexpense-tracker-react"]||[]).push([[0],{176:function(e,t,a){},335:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(9),c=a.n(o),l=a(72),i=a(48),u=function(e,t){var a;switch(t.type){case"DELETE_TRANSACTION":return a=e.filter((function(e){return e.id!==t.payload})),localStorage.setItem("transactions",JSON.stringify(a)),a;case"ADD_TRANSACTION":return a=[t.payload].concat(Object(i.a)(e)),localStorage.setItem("transactions",JSON.stringify(a)),a;default:return e}},s=JSON.parse(localStorage.getItem("transactions"))||[],m=Object(n.createContext)(s),p=function(e){var t=e.children,a=Object(n.useReducer)(u,s),o=Object(l.a)(a,2),c=o[0],i=o[1],p=c.reduce((function(e,t){return"Expense"===t.type?e-=t.amount:e+=t.amount}),0);return console.log(c),r.a.createElement(m.Provider,{value:{deleteTransaction:function(e){return i({type:"DELETE_TRANSACTION",payload:e})},addTransaction:function(e){return i({type:"ADD_TRANSACTION",payload:e})},transactions:c,balance:p}},t)},d=(a(176),a(381)),f=a(85),b=a(375),y=a(377),E=a(378),g=a(39),x=a(157),O=a(372),h=Object(O.a)((function(){return{income:{backgroundColor:"#25282c",color:"#dde0e3",borderRadius:"15px"},expense:{backgroundColor:"#25282c",color:"#dde0e3",borderRadius:"15px"}}})),v=["#123123","#154731","#165f40","#16784f","#14915f","#10ac6e","#0bc77e","#04e38d","#00ff9d"],j=["#b50d12","#bf2f1f","#c9452c","#d3583a","#dc6a48","#e57c58","#ee8d68","#f79d79","#ffae8a","#cc474b","#f55b5f"],C=[{type:"Business",amount:0,color:v[0]},{type:"Investments",amount:0,color:v[1]},{type:"Extra income",amount:0,color:v[2]},{type:"Deposits",amount:0,color:v[3]},{type:"Lottery",amount:0,color:v[4]},{type:"Gifts",amount:0,color:v[5]},{type:"Salary",amount:0,color:v[6]},{type:"Savings",amount:0,color:v[7]},{type:"Rental income",amount:0,color:v[8]}],T=[{type:"Bills",amount:0,color:j[0]},{type:"Car",amount:0,color:j[1]},{type:"Clothes",amount:0,color:j[2]},{type:"Travel",amount:0,color:j[3]},{type:"Food",amount:0,color:j[4]},{type:"Shopping",amount:0,color:j[5]},{type:"House",amount:0,color:j[6]},{type:"Entertainment",amount:0,color:j[7]},{type:"Phone",amount:0,color:j[8]},{type:"Pets",amount:0,color:j[9]},{type:"Other",amount:0,color:j[10]}],S=function(e){C.forEach((function(e){return e.amount=0})),T.forEach((function(e){return e.amount=0}));var t=Object(n.useContext)(m).transactions.filter((function(t){return t.type===e})),a=t.reduce((function(e,t){return e+t.amount}),0),r="Income"===e?C:T;console.log({transactionsPerType:t,total:a,categories:r}),t.forEach((function(e){var t=r.find((function(t){return t.type===e.category}));t&&(t.amount+=e.amount)}));var o=r.filter((function(e){return e.amount>0}));return{total:a,chartData:{datasets:[{data:o.map((function(e){return e.amount})),backgroundColor:o.map((function(e){return e.color}))}],labels:o.map((function(e){return e.type}))}}},k=(a.p,function(e){var t=e.title,a=h(),n=S(t),o=n.total,c=n.chartData;return r.a.createElement(b.a,{className:"Income"===t?a.income:a.expense},r.a.createElement(y.a,{title:t}),r.a.createElement(E.a,null,r.a.createElement(g.a,{variant:"h5"},"Rs",o),r.a.createElement(x.Doughnut,{data:c})))}),N=a(394),I=Object(O.a)((function(e){return{root:{backgroundColor:"#25282c",color:"#dde0e3",borderRadius:"15px"},media:{height:0,paddingTop:"56.25%"},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},cardContent:{paddingTop:0},divider:{margin:"20px 0"}}})),w=Math.round(Math.random()),R=function(){return r.a.createElement("div",{style:{textAlign:"center",padding:"0 10%"}},"Try saying:",r.a.createElement("br",null),"Add ",w?"Income ":"Expense ","for ",w?"10 ":"20 "," Rupees in Category Salary for Next Monday")},D=a(10),A=a(382),B=a(399),P=a(396),_=a(386),F=a(401),M=a(387),J=a(398),L=a(397),W=Object(O.a)((function(e){return{root:{width:"100%","& > * + *":{marginTop:e.spacing(2)}}}})),H=function(e){var t=e.open,a=e.setOpen,n=W(),o=function(e,t){"clickaway"!==t&&a(!1)};return r.a.createElement("div",{className:n.root},r.a.createElement(J.a,{anchorOrigin:{vertical:"top",horizontal:"right"},open:t,autoHideDuration:3e3,onClose:o},r.a.createElement(L.a,{onClose:o,severity:"success",elevation:6,variant:"filled"},"Transaction successfully created")))},G=a(132),U=a(21),z=Object(O.a)((function(){return{radioGroup:{display:"flex",justifyContent:"center",marginBottom:"-10px"},button:{marginTop:"20px"}}})),V=function(e){var t=new Date(e),a="".concat(t.getMonth()+1),n="".concat(t.getDate()),r="".concat(t.getFullYear());return a.length<2&&(a="0".concat(a)),n.length<2&&(n="0".concat(n)),[r,a,n].join("-")},Y={amount:"",category:"",type:"Income",date:V(new Date)},q=function(){var e=z(),t=Object(n.useState)(Y),a=Object(l.a)(t,2),o=a[0],c=a[1],i=Object(n.useContext)(m).addTransaction,u=Object(U.useSpeechContext)().segment,s=Object(n.useState)(!1),p=Object(l.a)(s,2),f=p[0],b=p[1],y=function(){if(o.date.includes("-")){var e=Object(D.a)(Object(D.a)({},o),{},{amount:Number(o.amount),id:Object(G.a)()});b(!0),i(e),c(Y)}};Object(n.useEffect)((function(){if(u){if("add_expense"===u.intent.intent)c(Object(D.a)(Object(D.a)({},o),{},{type:"Expense"}));else if("add_income"===u.intent.intent)c(Object(D.a)(Object(D.a)({},o),{},{type:"Income"}));else{if(u.isFinal&&"create_transaction"===u.intent.intent)return y();if(u.isFinal&&"cancel_transaction"===u.intent.intent)return c(Y)}u.entities.forEach((function(e){var t="".concat(e.value.charAt(0)).concat(e.value.slice(1).toLowerCase());switch(e.type){case"amount":c(Object(D.a)(Object(D.a)({},o),{},{amount:e.value}));break;case"category":C.map((function(e){return e.type})).includes(t)?c(Object(D.a)(Object(D.a)({},o),{},{type:"Income",category:t})):T.map((function(e){return e.type})).includes(t)&&c(Object(D.a)(Object(D.a)({},o),{},{type:"Expense",category:t}));break;case"date":c(Object(D.a)(Object(D.a)({},o),{},{date:e.value}))}})),u.isFinal&&o.amount&&o.category&&o.type&&o.date&&y()}}),[u]);var E="Income"===o.type?C:T;return r.a.createElement(d.a,{container:!0,spacing:2},r.a.createElement(H,{open:f,setOpen:b}),r.a.createElement(d.a,{item:!0,xs:12},r.a.createElement(g.a,{align:"center",variant:"subtitle2",gutterBottom:!0,style:{color:"white"}},u&&u.words.map((function(e){return e.value})).join(" "))),r.a.createElement(d.a,{item:!0,xs:6},r.a.createElement(A.a,{fullWidth:!0},r.a.createElement(B.a,{style:{color:"white"}},"Type"),r.a.createElement(P.a,{value:o.type,onChange:function(e){return c(Object(D.a)(Object(D.a)({},o),{},{type:e.target.value}))}},r.a.createElement(_.a,{value:"Income"},"Income"),r.a.createElement(_.a,{value:"Expense"},"Expense")))),r.a.createElement(d.a,{item:!0,xs:6},r.a.createElement(A.a,{fullWidth:!0,style:{color:"white"}},r.a.createElement(B.a,{style:{color:"white"}},"Category"),r.a.createElement(P.a,{value:o.category,onChange:function(e){return c(Object(D.a)(Object(D.a)({},o),{},{category:e.target.value}))}},E.map((function(e){return r.a.createElement(_.a,{key:e.type,value:e.type},e.type)}))))),r.a.createElement(d.a,{item:!0,xs:6},r.a.createElement(F.a,{type:"number",label:"Amount",fullWidth:!0,value:o.amount,onChange:function(e){return c(Object(D.a)(Object(D.a)({},o),{},{amount:e.target.value}))}})),r.a.createElement(d.a,{item:!0,xs:6},r.a.createElement(F.a,{type:"date",label:"Date",fullWidth:!0,value:o.date,onChange:function(e){return c(Object(D.a)(Object(D.a)({},o),{},{date:V(e.target.value)}))}})),r.a.createElement(M.a,{className:e.button,variant:"outlined",onClick:y,color:"secondary",fullWidth:!0},"Create"))},K=a(18),Q=a(385),X=a(388),Z=a(338),$=a(389),ee=a(402),te=a(391),ae=a(392),ne=a(380),re=a(390),oe=a(393),ce=a(87),le=a(86),ie=Object(O.a)((function(e){return{avatarIncome:{color:"#fff",backgroundColor:ce.a[500]},avatarExpense:{color:e.palette.getContrastText(le.a[500]),backgroundColor:le.a[500]},list:{maxHeight:"150px",overflow:"auto"}}})),ue=function(){var e=ie(),t=Object(n.useContext)(m),a=t.deleteTransaction,o=t.transactions;return r.a.createElement(Q.a,{dense:!1,className:e.list},o.map((function(t){return r.a.createElement(X.a,{direction:"down",in:!0,mountOnEnter:!0,unMountOnExit:!0,key:t.id},r.a.createElement(Z.a,null,r.a.createElement($.a,null,r.a.createElement(ee.a,{className:"Income"===t.type?e.avatarIncome:e.avatarExpense},r.a.createElement(re.a,null))),r.a.createElement(te.a,{primary:t.category,secondary:"Rs ".concat(t.amount," - ").concat(t.date)}),r.a.createElement(ae.a,null,r.a.createElement(ne.a,Object(K.a)({edge:"end","aria-label":"delete",onClick:""},"onClick",(function(){return a(t.id)})),r.a.createElement(oe.a,null)))))})))},se=function(){var e=I(),t=Object(n.useContext)(m).balance;return r.a.createElement(b.a,{className:e.root},r.a.createElement(y.a,{title:"Expense Tracker",subheader:"Powered by Speechly",className:e.promo}),r.a.createElement(E.a,null,r.a.createElement(g.a,{align:"center",variant:"h5"},"Total Balance Rs",t),r.a.createElement(g.a,{variant:"subtitle1",style:{lineHeight:"1.5em",marginTop:"20px"}},r.a.createElement(R,null)),r.a.createElement(N.a,{className:e.divider}),r.a.createElement(q,null)),r.a.createElement(E.a,{className:e.cardContent},r.a.createElement(d.a,{container:!0,spacing:2},r.a.createElement(d.a,{item:!0,xs:12},r.a.createElement(ue,null)))))},me=Object(O.a)((function(e){return{desktop:Object(K.a)({},e.breakpoints.up("sm"),{display:"none"}),mobile:Object(K.a)({},e.breakpoints.down("sm"),{display:"none"}),main:Object(K.a)({},e.breakpoints.up("sm"),{paddingBottom:"5%"}),last:Object(K.a)({},e.breakpoints.down("sm"),{marginBottom:e.spacing(3),paddingBottom:"200px"}),grid:{"& > *":{margin:e.spacing(2)}}}})),pe=a(161),de=a(395),fe=Object(pe.a)({typography:{fontFamily:["Ubuntu Mono","monospace"].join(",")}}),be=function(){var e=me(),t=Object(U.useSpeechContext)().speechState,a=Object(n.useRef)(null);return Object(n.useEffect)((function(){t===U.SpeechState.Recording&&a.current.scrollIntoView()}),[t]),r.a.createElement(de.a,{theme:fe},r.a.createElement("div",null,r.a.createElement(d.a,{className:e.grid,container:!0,spacing:0,alignItems:"center",justify:"center",style:{height:"100vh"}},r.a.createElement(d.a,{item:!0,xs:12,sm:4,style:{boxShadow:"10px 5px 5px gray",borderRadius:"15px"},className:e.mobile},r.a.createElement(k,{title:"Income"})),r.a.createElement(d.a,{ref:a,item:!0,xs:12,sm:3,borderRadius:"50%",style:{boxShadow:"5px 5px 5px gray",borderRadius:"15px"},className:e.main},r.a.createElement(se,null)),r.a.createElement(d.a,{item:!0,xs:12,sm:4,style:{boxShadow:"10px 5px 5px gray",borderRadius:"15px"},className:e.desktop},r.a.createElement(k,{title:"Income"})),r.a.createElement(d.a,{item:!0,xs:12,sm:4,borderRadius:"50%",style:{boxShadow:"10px 5px 5px gray",borderRadius:"15px"},className:e.last},r.a.createElement(k,{title:"Expense"}))),r.a.createElement(f.PushToTalkButtonContainer,null,r.a.createElement(f.PushToTalkButton,null),r.a.createElement(f.ErrorPanel,null))))};c.a.render(r.a.createElement(U.SpeechProvider,{appId:"19de46da-14fc-412a-b1ae-1db9d21d8d99",language:"en-US"},r.a.createElement(p,null,r.a.createElement(be,null))),document.getElementById("root"))}},[[335,1,2]]]);
//# sourceMappingURL=main.ebbe6855.chunk.js.map