(this["webpackJsonpexpense-tracker-react"]=this["webpackJsonpexpense-tracker-react"]||[]).push([[0],{175:function(e,t,a){},334:function(e,t,a){},335:function(e,t,a){},336:function(e,t,a){},337:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(9),o=a.n(c),l=a(72),i=a(48),u=function(e,t){var a;switch(t.type){case"DELETE_TRANSACTION":return a=e.filter((function(e){return e.id!==t.payload})),localStorage.setItem("transactions",JSON.stringify(a)),a;case"ADD_TRANSACTION":return a=[t.payload].concat(Object(i.a)(e)),localStorage.setItem("transactions",JSON.stringify(a)),a;default:return e}},s=JSON.parse(localStorage.getItem("transactions"))||[],m=Object(n.createContext)(s),d=function(e){var t=e.children,a=Object(n.useReducer)(u,s),c=Object(l.a)(a,2),o=c[0],i=c[1],d=o.reduce((function(e,t){return"Expense"===t.type?e-=t.amount:e+=t.amount}),0);return console.log(o),r.a.createElement(m.Provider,{value:{deleteTransaction:function(e){return i({type:"DELETE_TRANSACTION",payload:e})},addTransaction:function(e){return i({type:"ADD_TRANSACTION",payload:e})},transactions:o,balance:d}},t)},p=(a(175),a(383)),f=a(85),b=a(377),E=a(379),y=a(380),g=a(39),O=a(156),h=a(374),j=Object(h.a)((function(){return{income:{backgroundColor:"white",color:"balck",borderRadius:"15px"},expense:{backgroundColor:"white",color:"balck",borderRadius:"15px"}}})),v=["#00AF91","#007965","#F58634","#FFCC29","#76ff61","#83d681","#6dd660","#c3ffe1","#bfffe5"],x=["#F0134D","#FF6F5E","#40BFC1","#F5DEA3","#443737","#FF5200","#FF6363","#FE346E","#D63447","#FC9D9D","#FF2E63"],C=[{type:"Business",amount:0,color:v[0]},{type:"Investments",amount:0,color:v[1]},{type:"Salary",amount:0,color:v[2]},{type:"Other",amount:0,color:v[3]}],k=[{type:"Bills",amount:0,color:x[0]},{type:"Travel",amount:0,color:x[1]},{type:"Food",amount:0,color:x[2]},{type:"Shopping",amount:0,color:x[3]},{type:"Entertainment",amount:0,color:x[4]},{type:"Other",amount:0,color:x[5]}],T=function(e){C.forEach((function(e){return e.amount=0})),k.forEach((function(e){return e.amount=0}));var t=Object(n.useContext)(m).transactions.filter((function(t){return t.type===e})),a=t.reduce((function(e,t){return e+t.amount}),0),r="Income"===e?C:k;console.log({transactionsPerType:t,total:a,categories:r}),t.forEach((function(e){var t=r.find((function(t){return t.type===e.category}));t&&(t.amount+=e.amount)}));var c=r.filter((function(e){return e.amount>0}));return{total:a,chartData:{datasets:[{data:c.map((function(e){return e.amount})),backgroundColor:c.map((function(e){return e.color}))}],labels:c.map((function(e){return e.type}))}}},N=(a.p,function(e){var t=e.title,a=j(),n=T(t),c=n.total,o=n.chartData;return r.a.createElement(b.a,{className:"Income"===t?a.income:a.expense},r.a.createElement(E.a,{title:t}),r.a.createElement(y.a,null,r.a.createElement(g.a,{variant:"h5"},"$",c),r.a.createElement(O.Doughnut,{data:o})))}),I=a(396),F=Object(h.a)((function(e){return{root:{backgroundColor:"white",color:"#dde0e3",borderRadius:"15px"},media:{height:0,paddingTop:"56.25%"},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},cardContent:{paddingTop:0},divider:{margin:"20px 0"}}})),S=Math.round(Math.random()),w=function(){return r.a.createElement("div",{style:{textAlign:"center",padding:"0 10%"}},"Try saying:",r.a.createElement("br",null),"Add ",S?"Income ":"Expense ","for ",S?"10 ":"20 "," dollars under food")},D=a(10),A=a(384),R=a(401),B=a(398),_=a(388),P=a(403),J=a(389),M=a(400),W=a(399),L=(a(334),Object(h.a)((function(e){return{root:{width:"100%","& > * + *":{marginTop:e.spacing(2)}}}}))),H=function(e){var t=e.open,a=e.setOpen,n=(L(),function(e,t){"clickaway"!==t&&a(!1)});return r.a.createElement("div",{className:"snack"},r.a.createElement(M.a,{anchorOrigin:{vertical:"top",horizontal:"right"},open:t,autoHideDuration:3e3,onClose:n},r.a.createElement(W.a,{onClose:n,severity:"success",elevation:6,variant:"filled"},"Transaction successfully created")))},$=a(131),U=a(21),z=Object(h.a)((function(){return{radioGroup:{display:"flex",justifyContent:"center"},button:{marginTop:"20px"}}})),G=function(e){var t=new Date(e),a="".concat(t.getMonth()+1),n="".concat(t.getDate()),r="".concat(t.getFullYear());return a.length<2&&(a="0".concat(a)),n.length<2&&(n="0".concat(n)),[r,a,n].join("-")},V=(a(335),{amount:"",category:"",type:"Income",date:G(new Date)}),Y=function(){var e=z(),t=Object(n.useState)(V),a=Object(l.a)(t,2),c=a[0],o=a[1],i=Object(n.useContext)(m).addTransaction,u=Object(U.useSpeechContext)().segment,s=Object(n.useState)(!1),d=Object(l.a)(s,2),f=d[0],b=d[1],E=function(){if(c.date.includes("-")){var e=Object(D.a)(Object(D.a)({},c),{},{amount:Number(c.amount),id:Object($.a)()});b(!0),i(e),o(V)}};Object(n.useEffect)((function(){if(u){if("add_expense"===u.intent.intent)o(Object(D.a)(Object(D.a)({},c),{},{type:"Expense"}));else if("add_income"===u.intent.intent)o(Object(D.a)(Object(D.a)({},c),{},{type:"Income"}));else{if(u.isFinal&&"create_transaction"===u.intent.intent)return E();if(u.isFinal&&"cancel_transaction"===u.intent.intent)return o(V)}u.entities.forEach((function(e){var t="".concat(e.value.charAt(0)).concat(e.value.slice(1).toLowerCase());switch(e.type){case"amount":o(Object(D.a)(Object(D.a)({},c),{},{amount:e.value}));break;case"category":C.map((function(e){return e.type})).includes(t)?o(Object(D.a)(Object(D.a)({},c),{},{type:"Income",category:t})):k.map((function(e){return e.type})).includes(t)&&o(Object(D.a)(Object(D.a)({},c),{},{type:"Expense",category:t}));break;case"date":o(Object(D.a)(Object(D.a)({},c),{},{date:e.value}))}})),u.isFinal&&c.amount&&c.category&&c.type&&c.date&&E()}}),[u]);var y="Income"===c.type?C:k;return r.a.createElement(p.a,{container:!0,spacing:2,className:"form"},r.a.createElement(H,{open:f,setOpen:b}),r.a.createElement(p.a,{item:!0,xs:12},r.a.createElement(g.a,{align:"center",variant:"subtitle2",gutterBottom:!0,style:{color:"black"}},u&&u.words.map((function(e){return e.value})).join(" "))),r.a.createElement(p.a,{item:!0,xs:6},r.a.createElement(A.a,{fullWidth:!0,style:{color:"black"}},r.a.createElement(R.a,{style:{color:"black"}},"Type"),r.a.createElement(B.a,{value:c.type,onChange:function(e){return o(Object(D.a)(Object(D.a)({},c),{},{type:e.target.value}))},style:{color:"black"}},r.a.createElement(_.a,{value:"Income"},"Income"),r.a.createElement(_.a,{value:"Expense"},"Expense")))),r.a.createElement(p.a,{item:!0,xs:6},r.a.createElement(A.a,{fullWidth:!0},r.a.createElement(B.a,{value:c.category,onChange:function(e){return o(Object(D.a)(Object(D.a)({},c),{},{category:e.target.value}))}},y.map((function(e){return r.a.createElement(_.a,{key:e.type,value:e.type},e.type)}))))),r.a.createElement(p.a,{item:!0,xs:6},r.a.createElement(P.a,{type:"number",label:"Amount",style:{color:"black"},fullWidth:!0,value:c.amount,onChange:function(e){return o(Object(D.a)(Object(D.a)({},c),{},{amount:e.target.value}))}})),r.a.createElement(p.a,{item:!0,xs:6},r.a.createElement(P.a,{type:"date",label:"Date",fullWidth:!0,value:c.date,onChange:function(e){return o(Object(D.a)(Object(D.a)({},c),{},{date:G(e.target.value)}))}})),r.a.createElement(J.a,{className:e.button,variant:"outlined",onClick:E,color:"secondary",fullWidth:!0},"Create"))},q=a(18),K=a(387),Q=a(390),X=a(340),Z=a(391),ee=a(404),te=a(393),ae=a(394),ne=a(382),re=a(392),ce=a(395),oe=a(86),le=Object(h.a)((function(e){return{avatarIncome:{color:"#fff",backgroundColor:"#93ff96"},avatarExpense:{color:e.palette.getContrastText(oe.a[500]),backgroundColor:"#ff8585"},list:{maxHeight:"150px",overflow:"auto",color:"white"}}})),ie=function(){var e=le(),t=Object(n.useContext)(m),a=t.deleteTransaction,c=t.transactions;return r.a.createElement(K.a,{dense:!1,className:e.list},c.map((function(t){return r.a.createElement(Q.a,{direction:"down",in:!0,mountOnEnter:!0,unMountOnExit:!0,key:t.id},r.a.createElement(X.a,null,r.a.createElement(Z.a,null,r.a.createElement(ee.a,{className:"Income"===t.type?e.avatarIncome:e.avatarExpense},r.a.createElement(re.a,null))),r.a.createElement(te.a,{primary:t.category,secondary:"$ ".concat(t.amount," - ").concat(t.date)}),r.a.createElement(ae.a,null,r.a.createElement(ne.a,Object(q.a)({edge:"end","aria-label":"delete",onClick:""},"onClick",(function(){return a(t.id)})),r.a.createElement(ce.a,null)))))})))},ue=function(){var e=F(),t=Object(n.useContext)(m).balance;return r.a.createElement(b.a,{className:e.root},r.a.createElement(E.a,{title:"iSpent",subheader:"by Eidmone 2021",className:e.promo}),r.a.createElement(y.a,null,r.a.createElement(g.a,{align:"center",variant:"h5"},"Total Balance $",t),r.a.createElement(g.a,{variant:"subtitle1",style:{lineHeight:"1.5em",marginTop:"20px"}},r.a.createElement(w,null)),r.a.createElement(I.a,{className:e.divider}),r.a.createElement(Y,null)),r.a.createElement(y.a,{className:e.cardContent},r.a.createElement(p.a,{container:!0,spacing:2},r.a.createElement(p.a,{item:!0,xs:12},r.a.createElement(ie,null)))))},se=Object(h.a)((function(e){return{desktop:Object(q.a)({},e.breakpoints.up("sm"),{display:"none"}),mobile:Object(q.a)({},e.breakpoints.down("sm"),{display:"none"}),main:Object(q.a)({},e.breakpoints.up("sm"),{paddingBottom:"5%"}),last:Object(q.a)({},e.breakpoints.down("sm"),{marginBottom:e.spacing(3),paddingBottom:"200px"}),grid:{"& > *":{margin:e.spacing(2)}}}})),me=a(160),de=a(397),pe=(a(336),Object(me.a)({typography:{fontFamily:["Ubuntu Mono","monospace"].join(",")}})),fe=function(){var e=se(),t=Object(U.useSpeechContext)().speechState,a=Object(n.useRef)(null);return Object(n.useEffect)((function(){t===U.SpeechState.Recording&&a.current.scrollIntoView()}),[t]),r.a.createElement(de.a,{theme:pe},r.a.createElement("div",{className:"main"},r.a.createElement(p.a,{className:e.grid,container:!0,spacing:0,alignItems:"center",justify:"center",style:{height:"100vh"}},r.a.createElement(p.a,{item:!0,xs:12,sm:4,style:{borderRadius:"15px"},className:e.mobile},r.a.createElement(N,{title:"Income"})),r.a.createElement(p.a,{ref:a,item:!0,xs:12,sm:3,borderRadius:"50%",style:{borderRadius:"15px"},className:e.main},r.a.createElement(ue,null)),r.a.createElement(p.a,{item:!0,xs:12,sm:4,style:{borderRadius:"15px"},className:e.desktop},r.a.createElement(N,{title:"Income"})),r.a.createElement(p.a,{item:!0,xs:12,sm:4,borderRadius:"50%",style:{borderRadius:"15px"},className:e.last},r.a.createElement(N,{title:"Expense"}))),r.a.createElement(f.PushToTalkButtonContainer,null,r.a.createElement(f.PushToTalkButton,null),r.a.createElement(f.ErrorPanel,null))))};o.a.render(r.a.createElement(U.SpeechProvider,{appId:"19de46da-14fc-412a-b1ae-1db9d21d8d99",language:"en-US"},r.a.createElement(d,null,r.a.createElement(fe,null))),document.getElementById("root"))}},[[337,1,2]]]);
//# sourceMappingURL=main.11944790.chunk.js.map