(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8b2e5094"],{"13d5":function(e,t,c){"use strict";var n=c("23e7"),a=c("d58f").left,r=c("a640"),i=c("2d00"),s=c("605d"),b=r("reduce"),u=!s&&i>79&&i<83;n({target:"Array",proto:!0,forced:!b||u},{reduce:function(e){return a(this,e,arguments.length,arguments.length>1?arguments[1]:void 0)}})},"1a3b":function(e,t,c){"use strict";c("b10e")},a640:function(e,t,c){"use strict";var n=c("d039");e.exports=function(e,t){var c=[][e];return!!c&&n((function(){c.call(null,t||function(){throw 1},1)}))}},b10e:function(e,t,c){},d58f:function(e,t,c){var n=c("1c0b"),a=c("7b0b"),r=c("44ad"),i=c("50c4"),s=function(e){return function(t,c,s,b){n(c);var u=a(t),l=r(u),o=i(u.length),d=e?o-1:0,g=e?-1:1;if(s<2)while(1){if(d in l){b=l[d],d+=g;break}if(d+=g,e?d<0:o<=d)throw TypeError("Reduce of empty array with no initial value")}for(;e?d>=0:o>d;d+=g)d in l&&(b=c(b,l[d],d,u));return b}};e.exports={left:s(!1),right:s(!0)}},e51f:function(e,t,c){e.exports=c.p+"img/pencil.9c4e5594.svg"},ebb7:function(e,t,c){"use strict";c.r(t);var n=c("7a23"),a=c("e51f"),r=c.n(a),i=Object(n["G"])("data-v-2e39a2ce");Object(n["s"])("data-v-2e39a2ce");var s={key:0,class:"container-fluid mt-4 mb-4 page-head"},b={class:"d-flex justify-content-between mb-2"},u={class:"mx-2"},l=Object(n["g"])("img",{src:r.a,alt:"edit",height:"25",width:"25"},null,-1),o=Object(n["g"])("hr",{class:"bg-primary"},null,-1),d={class:"v-center p-2"},g=Object(n["g"])("hr",{class:"bg-primary"},null,-1),m={class:"mt-4 mb-4"},j=Object(n["g"])("strong",null,"Total Budget: ",-1),O=Object(n["g"])("strong",null,"Total Expenses: ",-1),f=Object(n["g"])("strong",null,"Balance: ",-1),p=Object(n["g"])("h6",null,"Notes",-1),h=Object(n["g"])("img",{src:r.a,alt:"edit",height:"25",width:"25",class:"mt-3"},null,-1);Object(n["q"])();var v=i((function(e,t,c,a,r,v){var y=Object(n["w"])("router-link"),_=Object(n["w"])("Item");return r.bag?(Object(n["p"])(),Object(n["d"])("div",s,[Object(n["g"])("div",b,[Object(n["g"])("h2",u,Object(n["y"])(r.bag.bag_name),1),Object(n["g"])(y,{to:"/edit/".concat(r.bag.bag_id),class:"mx-3"},{default:i((function(){return[l]})),_:1},8,["to"])]),o,Object(n["g"])("div",d,[(Object(n["p"])(!0),Object(n["d"])(n["a"],null,Object(n["v"])(r.bag.items,(function(e){return Object(n["p"])(),Object(n["d"])("div",{key:e.item_id},[Object(n["g"])(_,{item:e,currency:r.bag.currency,onDelItem:v.removeItem},null,8,["item","currency","onDelItem"]),g])})),128)),Object(n["g"])("div",m,[Object(n["g"])("div",null,[j,Object(n["f"])(Object(n["y"])(r.bag.currency)+Object(n["y"])(r.total_budget),1)]),Object(n["g"])("div",null,[O,Object(n["f"])(Object(n["y"])(r.bag.currency)+Object(n["y"])(r.total_expense),1)]),Object(n["g"])("div",null,[f,Object(n["g"])("span",{class:[r.balance<0?"text-danger":""]},Object(n["y"])(r.bag.currency)+Object(n["y"])(r.balance),3)])]),Object(n["g"])("div",null,[p,Object(n["f"])(" "+Object(n["y"])(r.bag.comment),1)])]),Object(n["g"])(y,{class:"fab shadow bg-light",to:"/edit/".concat(r.bag.bag_id)},{default:i((function(){return[h]})),_:1},8,["to"])])):Object(n["e"])("",!0)})),y=c("1da1"),_=(c("96cf"),c("4de4"),c("13d5"),c("6033")),w=c("6d5c"),x=c.n(w),k=Object(n["G"])("data-v-2685e5e7");Object(n["s"])("data-v-2685e5e7");var I={class:"d-flex justify-content-between"},q={class:"float-start mx-4"},E={class:"text-black-50"},B={class:"ms-4"},P={class:"ms-4"},R={class:"ms-4"},T={class:"mt-2"},C=Object(n["g"])("img",{src:x.a,alt:"trash",height:"25",width:"25"},null,-1);Object(n["q"])();var D=k((function(e,t,c,a,r,i){return Object(n["p"])(),Object(n["d"])("div",I,[Object(n["g"])("div",null,[Object(n["g"])("input",{type:"checkbox",onChange:t[1]||(t[1]=function(){return i.markPurchased&&i.markPurchased.apply(i,arguments)}),class:"float-start mt-3 form-check"},null,32),Object(n["g"])("div",q,[Object(n["g"])("div",{class:{"is-purchased":c.item.purchased}},[Object(n["g"])("h5",null,Object(n["y"])(c.item.item_name),1)],2),Object(n["g"])("div",E,[Object(n["g"])("span",null,"b: "+Object(n["y"])(c.currency)+Object(n["y"])(c.item.budget_price),1),Object(n["g"])("span",B,"m: "+Object(n["y"])(c.currency)+" "+Object(n["y"])(c.item.market_price),1),Object(n["g"])("span",P,"q: "+Object(n["y"])(c.item.quantity),1),Object(n["g"])("span",R,"ex: "+Object(n["y"])(c.currency)+Object(n["y"])(c.item.bought_price),1)])])]),Object(n["g"])("div",T,[Object(n["g"])("div",{onClick:t[2]||(t[2]=function(t){return e.$emit("del-item",c.item.item_id)}),class:"bg-secondary rounded-circle p-2"},[C])])])})),G={name:"Item",props:["item","currency"],methods:{markPurchased:function(){this.item.purchased=!this.item.purchased}}};c("1a3b");G.render=D,G.__scopeId="data-v-2685e5e7";var J=G,$={name:"BagPage",components:{Item:J},data:function(){return{total_budget:0,total_expense:0,balance:0,bag:{}}},methods:{removeItem:function(e){var t=this;return Object(y["a"])(regeneratorRuntime.mark((function c(){var n;return regeneratorRuntime.wrap((function(c){while(1)switch(c.prev=c.next){case 0:return t.bag.items=t.bag.items.filter((function(t){return t.item_id!==e})),t.calcExpenses(t.bag.items),n={bagId:t.bag.bag_id,itemId:e},c.next=5,_["a"].removeItem(n);case 5:case"end":return c.stop()}}),c)})))()},calcExpenses:function(e){var t=e.reduce((function(e,t){return e+parseInt(t.budget_price)*parseInt(t.quantity)}),0);this.total_budget=t;var c=e.reduce((function(e,t){return e+parseInt(t.bought_price)*parseInt(t.quantity)}),0);this.total_expense=c,this.balance=t-c}},mounted:function(){var e=this;_["a"].getBag(this.$route.params.id).then((function(t){e.bag=t,e.calcExpenses(t.items)}))}};$.render=v,$.__scopeId="data-v-2e39a2ce";t["default"]=$}}]);
//# sourceMappingURL=chunk-8b2e5094.3aabe11a.js.map