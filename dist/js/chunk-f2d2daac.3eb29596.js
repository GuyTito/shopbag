(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f2d2daac"],{"13d5":function(e,t,c){"use strict";var n=c("23e7"),a=c("d58f").left,r=c("a640"),i=c("2d00"),s=c("605d"),b=r("reduce"),u=!s&&i>79&&i<83;n({target:"Array",proto:!0,forced:!b||u},{reduce:function(e){return a(this,e,arguments.length,arguments.length>1?arguments[1]:void 0)}})},"166c":function(e,t,c){},"63e8":function(e,t,c){"use strict";c("166c")},"6d5c":function(e,t,c){e.exports=c.p+"img/bin.37033fe1.svg"},d58f:function(e,t,c){var n=c("1c0b"),a=c("7b0b"),r=c("44ad"),i=c("50c4"),s=function(e){return function(t,c,s,b){n(c);var u=a(t),d=r(u),l=i(u.length),o=e?l-1:0,g=e?-1:1;if(s<2)while(1){if(o in d){b=d[o],o+=g;break}if(o+=g,e?o<0:l<=o)throw TypeError("Reduce of empty array with no initial value")}for(;e?o>=0:l>o;o+=g)o in d&&(b=c(b,d[o],o,u));return b}};e.exports={left:s(!1),right:s(!0)}},e51f:function(e,t,c){e.exports=c.p+"img/pencil.9c4e5594.svg"},ebb7:function(e,t,c){"use strict";c.r(t);var n=c("7a23"),a=c("e51f"),r=c.n(a),i=Object(n["G"])("data-v-09ef8b5a");Object(n["s"])("data-v-09ef8b5a");var s={key:0,class:"container-fluid mt-4 mb-4 page-head"},b={class:"d-flex justify-content-between mb-2"},u={class:"mx-2"},d=Object(n["g"])("img",{src:r.a,alt:"edit",height:"25",width:"25"},null,-1),l=Object(n["g"])("hr",{class:"bg-primary"},null,-1),o={class:"v-center p-2"},g=Object(n["g"])("hr",{class:"bg-primary"},null,-1),j={class:"mt-4 mb-4"},m=Object(n["g"])("h6",null,"Notes",-1),O=Object(n["g"])("strong",null,"Total Budget: ",-1),p=Object(n["g"])("strong",null,"Total Expense: ",-1),f=Object(n["g"])("strong",null,"Balance: ",-1);Object(n["q"])();var h=i((function(e,t,c,a,r,h){var v=Object(n["w"])("router-link"),y=Object(n["w"])("Item");return h.bag?(Object(n["p"])(),Object(n["d"])("div",s,[Object(n["g"])("div",b,[Object(n["g"])("h2",u,Object(n["y"])(h.bag.bag_name),1),Object(n["g"])(v,{to:"/edit/".concat(h.bag.bag_id),class:"mx-3"},{default:i((function(){return[d]})),_:1},8,["to"])]),l,Object(n["g"])("div",o,[(Object(n["p"])(!0),Object(n["d"])(n["a"],null,Object(n["v"])(h.bag.items,(function(e){return Object(n["p"])(),Object(n["d"])("div",{key:e.item_id},[Object(n["g"])(y,{item:e,currency:h.bag.currency,onDelItem:h.removeItem},null,8,["item","currency","onDelItem"]),g])})),128)),Object(n["g"])("div",j,[m,Object(n["f"])(" "+Object(n["y"])(h.bag.comment),1)]),Object(n["g"])("div",null,[Object(n["g"])("div",null,[O,Object(n["f"])(Object(n["y"])(h.bag.currency)+Object(n["y"])(r.total_budget),1)]),Object(n["g"])("div",null,[p,Object(n["f"])(Object(n["y"])(h.bag.currency)+Object(n["y"])(r.total_expense),1)]),Object(n["g"])("div",null,[f,Object(n["g"])("span",{class:[r.balance<0?"text-danger":""]},Object(n["y"])(h.bag.currency)+Object(n["y"])(r.balance),3)])])])])):Object(n["e"])("",!0)})),v=c("1da1"),y=(c("96cf"),c("13d5"),c("6d5c")),_=c.n(y),w=Object(n["G"])("data-v-7fdd740c");Object(n["s"])("data-v-7fdd740c");var x={class:"d-flex justify-content-between"},k={class:"float-start mx-4"},I={class:"text-black-50"},q={class:"ms-4"},B={class:"ms-4"},$={class:"ms-4"},P={class:"mt-2"},R=Object(n["g"])("img",{src:_.a,alt:"trash",height:"25",width:"25"},null,-1);Object(n["q"])();var T=w((function(e,t,c,a,r,i){return Object(n["p"])(),Object(n["d"])("div",x,[Object(n["g"])("div",null,[Object(n["g"])("input",{type:"checkbox",onChange:t[1]||(t[1]=function(){return i.markPurchased&&i.markPurchased.apply(i,arguments)}),class:"float-start mt-3 form-check"},null,32),Object(n["g"])("div",k,[Object(n["g"])("div",{class:{"is-purchased":c.item.purchased}},[Object(n["g"])("h5",null,Object(n["y"])(c.item.item_name),1)],2),Object(n["g"])("div",I,[Object(n["g"])("span",null,Object(n["y"])(c.currency)+" "+Object(n["y"])(c.item.budget_price),1),Object(n["g"])("span",q,Object(n["y"])(c.currency)+" "+Object(n["y"])(c.item.market_price),1),Object(n["g"])("span",B,Object(n["y"])(c.item.quantity),1),Object(n["g"])("span",$,Object(n["y"])(c.currency)+" "+Object(n["y"])(c.item.bought_price),1)])])]),Object(n["g"])("div",P,[Object(n["g"])("div",{onClick:t[2]||(t[2]=function(t){return e.$emit("del-item",c.item.item_id)}),class:"bg-secondary rounded-circle p-2"},[R])])])})),C={name:"Item",props:["item","currency"],methods:{markPurchased:function(){this.item.purchased=!this.item.purchased}}};c("63e8");C.render=T,C.__scopeId="data-v-7fdd740c";var D=C,E={name:"BagPage",components:{Item:D},data:function(){return{total_budget:0,total_expense:0,balance:0}},computed:{bag:function(){var e=this.$store.getters.getBag(this.$route.params.id),t=e.items,c=t.reduce((function(e,t){return e+parseInt(t.budget_price)*parseInt(t.quantity)}),0);this.total_budget=c;var n=t.reduce((function(e,t){return e+parseInt(t.bought_price)*parseInt(t.quantity)}),0);return this.total_expense=n,this.balance=c-n,e}},created:function(){this.$store.dispatch("getBags")},methods:{removeItem:function(e){var t=this;return Object(v["a"])(regeneratorRuntime.mark((function c(){return regeneratorRuntime.wrap((function(c){while(1)switch(c.prev=c.next){case 0:return c.next=2,t.$store.dispatch("removeItem",{bagId:t.bag.bag_id,itemId:e});case 2:case"end":return c.stop()}}),c)})))()}}};E.render=h,E.__scopeId="data-v-09ef8b5a";t["default"]=E}}]);
//# sourceMappingURL=chunk-f2d2daac.3eb29596.js.map