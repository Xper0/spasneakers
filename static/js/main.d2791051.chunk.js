(this.webpackJsonpsneakers=this.webpackJsonpsneakers||[]).push([[0],{21:function(e,t,c){},41:function(e,t,c){},43:function(e,t,c){},44:function(e,t,c){},51:function(e,t,c){},52:function(e,t,c){},72:function(e,t,c){"use strict";c.r(t);var r=c(0),a=c.n(r),s=c(33),n=c.n(s),i=c(13),o=(c(41),c(14)),d=c(7),l=c.n(d),j=c(12),u=c(5),b=(c(43),c(3)),p=(c(44),Object(r.createContext)({})),x=function(){var e=Object(r.useContext)(p),t=e.drawerCard;return{openDraw:e.openDraw,setOpenDraw:e.setOpenDraw,totalPrice:t.reduce((function(e,t){return parseInt(t.cost+e)}),0)}},h=c(1),m=function(){var e=Object(r.useContext)(p).setOpenDraw,t=x().totalPrice;return Object(h.jsxs)("div",{className:"Header",children:[Object(h.jsx)(i.b,{to:"/spasneakers/",style:{textDecoration:"none"},children:Object(h.jsxs)("div",{className:"Header-logo",children:[Object(h.jsx)("img",{className:"Header__img",src:"./img/logo.svg",alt:"logo"}),Object(h.jsxs)("div",{className:"Header-body",children:[Object(h.jsx)("h2",{className:"Header-body__title",children:"REACT SNEAKERS"}),Object(h.jsx)("p",{className:"Header-body__desc",children:"\u041c\u0430\u0433\u0430\u0437\u0438\u043d \u043b\u0443\u0447\u0448\u0438\u0445 \u043a\u0440\u043e\u0441\u0441\u043e\u0432\u043e\u043a"})]})]})}),Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("ul",{className:"Header-controls",children:[Object(h.jsxs)("li",{className:"Header-controls__list",onClick:function(){e(!0)},children:[Object(h.jsx)("img",{src:"./img/order.svg",alt:""}),Object(h.jsxs)("span",{children:[t," \u0440\u0443\u0431"]})]}),Object(h.jsx)("li",{className:"Header-controls__list",children:Object(h.jsxs)(i.b,{to:"/spasneakers/favorite",children:[Object(h.jsx)("img",{src:"./img/favorite.svg",alt:""})," "]})}),Object(h.jsx)("li",{className:"Header-controls__list",children:Object(h.jsx)(i.b,{to:"/spasneakers/orders",children:Object(h.jsx)("img",{src:"./img/user.svg",alt:""})})})]})})]})},O=c(18),f=(c(21),function(e){var t=e.items,c=e.favorited,a=void 0!==c&&c,s=(e.loading,Object(r.useState)(a)),n=Object(u.a)(s,2),i=n[0],o=n[1],d=Object(r.useContext)(p),l=d.onAddCard,j=d.onAddItemElected,b=d.isItemAdded;return Object(h.jsxs)("div",{className:"Card-info",children:[Object(h.jsx)("img",{className:"cards__elected",src:i?"./img/unelected.svg":"./img/elected.svg",alt:"elected",onClick:function(){return e=Object(O.a)({},t),o(!a),void j(e);var e}}),Object(h.jsx)("img",{className:"cards__img",src:"./".concat(t.img),alt:"sneakers"}),Object(h.jsx)("h2",{className:"cards__title",children:t.title}),Object(h.jsxs)("div",{className:"cards__control",children:[Object(h.jsxs)("div",{className:"cards-info-cost",children:[Object(h.jsx)("p",{className:"cards__price",children:"\u0426\u0435\u043d\u0430: "}),Object(h.jsxs)("span",{className:"cards_cost",children:[t.cost," \u0440\u0443\u0431."]})]}),Object(h.jsx)("img",{className:"cards__btn",src:b(t)?"./img/Ok.svg":"./img/plus.svg",alt:"Plus",onClick:function(){return e=Object(O.a)(Object(O.a)({},t),{},{parentId:t.id}),void l(e);var e}})]})]})}),g=(c(51),c(52),function(e){var t=e.image,c=e.title,a=e.description,s=Object(r.useContext)(p).setOpenDraw;return Object(h.jsx)("div",{className:"Drawer-content",children:Object(h.jsxs)("div",{className:"Drawer-status",onClick:function(e){return e.stopPropagation()},children:[Object(h.jsx)("img",{src:"./".concat(t),alt:"status"}),Object(h.jsx)("h2",{className:"Drawer-status__title",children:c}),Object(h.jsx)("p",{className:"Drawer-status__desc",children:a}),Object(h.jsxs)(i.b,{to:"/spasneakers/",children:[Object(h.jsx)("button",{className:"Drawer-status__btn",onClick:function(){s(!1)},children:"\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043d\u0430\u0437\u0430\u0434"})," "]})]})})}),v=c(6),N=c.n(v),w=function(e){return new Promise((function(t){return setTimeout(t,e)}))},_=function(){var e=Object(r.useContext)(p),t=e.drawerCard,c=e.onRemoveCard,s=e.setDrawerCard,n=x(),i=n.openDraw,o=n.setOpenDraw,d=n.totalPrice,b=Object(r.useState)(null),m=Object(u.a)(b,2),O=m[0],f=m[1],v=a.a.useState(!1),_=Object(u.a)(v,2),k=_[0],C=_[1];function D(){o(!1)}function y(){return(y=Object(j.a)(l.a.mark((function e(){var c,r,a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N.a.post("https://611644418f38520017a387c1.mockapi.io/orders",{items:t});case 3:c=e.sent,r=c.data,f(r.id),C(!0),s([]),a=0;case 9:if(!(a<t.length)){e.next=18;break}return n=t[a],e.next=13,N.a.delete("https://611644418f38520017a387c1.mockapi.io/drawer/"+n.id);case 13:return e.next=15,w(1e3);case 15:a++,e.next=9;break;case 18:e.next=23;break;case 20:e.prev=20,e.t0=e.catch(0),alert("\u043e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u043e\u0444\u043e\u0440\u043c\u043b\u0435\u043d\u0438\u0438 \u0437\u0430\u043a\u0430\u0437\u0430");case 23:case"end":return e.stop()}}),e,null,[[0,20]])})))).apply(this,arguments)}return Object(h.jsx)("div",{className:"Drawer ".concat(i?"Drawer-active":""),onClick:D,children:t.length>0?Object(h.jsxs)("div",{className:"Drawer-content",onClick:function(e){return e.stopPropagation()},children:[Object(h.jsx)("h1",{onClick:D,children:"\u041a\u043e\u0440\u0437\u0438\u043d\u0430"}),Object(h.jsx)("div",{className:"Drawer-items",children:t.map((function(e,t){return Object(h.jsxs)("div",{className:"Drawer-card",children:[Object(h.jsx)("img",{className:"Drawer-card__img",src:"./".concat(e.img),alt:"cart"}),Object(h.jsxs)("div",{className:"Drawer-card__body",children:[Object(h.jsx)("h2",{className:"Drawer-card__title",children:e.title}),Object(h.jsxs)("span",{className:"Drawer-card__cost",children:[e.cost," \u0440\u0443\u0431."]})]}),Object(h.jsx)("img",{className:"Drawer-card__close",src:"./img/close.svg",alt:"close",onClick:function(){return function(e){c(e.id)}(e)}})]},t)}))}),Object(h.jsxs)("div",{className:"Drawer-price",children:[Object(h.jsxs)("li",{className:"Drawer-price__item",children:[Object(h.jsx)("p",{className:"Drawer-price__desk",children:"\u0418\u0442\u043e\u0433\u043e:"}),Object(h.jsx)("div",{}),Object(h.jsxs)("span",{children:[d," \u0440\u0443\u0431."]})]}),Object(h.jsxs)("li",{className:"Drawer-price__item",children:[Object(h.jsx)("p",{className:"Drawer-price__desk",children:"\u041d\u0430\u043b\u043e\u0433 5%"}),Object(h.jsx)("div",{}),Object(h.jsxs)("span",{children:[d/100*5," \u0440\u0443\u0431."]})]}),Object(h.jsx)("button",{className:"Drawer-price__btn",onClick:function(){return y.apply(this,arguments)},children:"\u041e\u043e\u0440\u043c\u0438\u0442\u044c \u0437\u0430\u043a\u0430\u0437"})]})]}):Object(h.jsx)(g,{image:k?"/img/order_Complete.png":"/img/drawer_clear.png",title:k?"\u0417\u0430\u043a\u0430\u0437 \u043e\u0444\u043e\u0440\u043c\u043b\u0435\u043d!":"\u041a\u043e\u0440\u0437\u0438\u043d\u0430 \u043f\u0443\u0441\u0442\u0430\u044f",description:k?"\u0412\u0430\u0448 \u0437\u0430\u043a\u0430\u0437 #".concat(O," \u0441\u043a\u043e\u0440\u043e \u0431\u0443\u0434\u0435\u0442 \u043f\u0435\u0440\u0435\u0434\u0430\u043d \u043a\u0443\u0440\u044c\u0435\u0440\u0441\u043a\u043e\u0439 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0435"):"\u0414\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u0445\u043e\u0442\u044f \u0431\u044b \u043e\u0434\u043d\u0443 \u043f\u0430\u0440\u0443 \u043a\u0440\u043e\u0441\u0441\u043e\u0432\u043e\u043a, \u0447\u0442\u043e\u0431\u044b \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u0437\u0430\u043a\u0430\u0437."})})},k=c(35),C=c(36),D=function(){for(var e=Object(r.useState)(""),t=Object(u.a)(e,2),c=t[0],a=t[1],s=Object(r.useContext)(p),n=s.card,i=s.isLoading,d=s.page,l=s.setPage,j=8*d,b=j-8,x=n.slice(b,j),O=Math.ceil(n.length/8),g=[],v=1;v<=O;v++)g.push(v);var N={width:"200px",height:"70px",margin:"-280px 1px",background:"none",color:"#8BB43C",fontSize:"38px"},w=[{des:"Stan Smith Forever!",imgSrc:"./img/slider1.png"},{des:"Stan Smith Forever!",imgSrc:"./img/Hustle.jpg"}].map((function(e,t){return Object(h.jsxs)("div",{style:{height:"400px",width:"100%"},children:[Object(h.jsx)("img",{src:e.imgSrc,alt:"slider"}),Object(h.jsx)("p",{style:N,children:e.des})]},t)}));return Object(h.jsxs)("div",{children:[Object(h.jsx)(m,{}),Object(h.jsx)(k.a,{accEle:{dots:!1},slideCpnts:w,sliderBoxStyle:{height:"100%",width:"90%",marginTop:"20px",background:"transparent",borderRadius:"20px",zIndex:1},buttonSetting:{placeOn:"middle-inside",style:{left:{borderRadius:"30px",background:"#FFFFFF",color:"#C8C8C8",boxShadow:"0px 4px 8px rgba(0, 0, 0, 0.4)"},right:{borderRadius:"30px",background:"#FFFFFF",color:"#C8C8C8",boxShadow:"0px 4px 8px rgba(0, 0, 0, 0.4)"}}}}),Object(h.jsxs)("div",{className:"cards-content",children:[Object(h.jsxs)("div",{className:"cards-header",children:[Object(h.jsx)("h1",{className:"cards__title",children:"\u0412\u0441\u0435 \u043a\u0440\u043e\u0441\u0441\u043e\u0432\u043a\u0438"}),Object(h.jsxs)("div",{className:"search-body",children:[Object(h.jsx)("img",{src:"./img/search.svg",alt:"search"}),Object(h.jsx)("input",{className:"search__input",placeholder:"\u041f\u043e\u0438\u0441\u043a...",onChange:function(e){a(e.target.value)},value:c})]})]}),Object(h.jsx)("div",{className:"Cards-body",children:i?Object(o.a)(Array(8)).map((function(e,t){return Object(h.jsx)("div",{className:"Card-info",children:Object(h.jsxs)(C.a,{speed:2,width:155,height:250,viewBox:"0 0 155 265",backgroundColor:"#f3f3f3",foregroundColor:"#ecebeb",children:[Object(h.jsx)("rect",{x:"1",y:"0",rx:"10",ry:"10",width:"155",height:"155"}),Object(h.jsx)("rect",{x:"0",y:"167",rx:"5",ry:"5",width:"155",height:"15"}),Object(h.jsx)("rect",{x:"0",y:"187",rx:"5",ry:"5",width:"100",height:"15"}),Object(h.jsx)("rect",{x:"1",y:"234",rx:"5",ry:"5",width:"80",height:"25"}),Object(h.jsx)("rect",{x:"124",y:"230",rx:"10",ry:"10",width:"32",height:"32"})]})},t)})):x.filter((function(e){return e.title.toLowerCase().includes(c.toLowerCase())||e.cost>=c})).map((function(e,t){return Object(h.jsx)(f,{items:e,loading:i},t)}))}),Object(h.jsx)("div",{className:"pagination",children:Object(h.jsxs)("ul",{className:"pagination__items",children:[Object(h.jsx)("li",{className:"pagination__list",onClick:function(){l((function(e){return e-1}))},children:Object(h.jsx)("a",{href:"/#",children:"<"})}),g.map((function(e,t){return Object(h.jsx)("li",{className:"pagination__list",onClick:function(e){return function(e){var t=e.target.innerText;l(t)}(e)},children:Object(h.jsx)("a",{href:"/spasneakers?page=".concat(d,"&limit=").concat(8),className:"active",children:e})},t)})),Object(h.jsx)("li",{className:"pagination__list",onClick:function(){l((function(e){return e+1}))},children:Object(h.jsx)("a",{href:"/#",children:">"})})]})})]}),Object(h.jsx)(_,{})]})},y=function(){var e=Object(r.useState)([]),t=Object(u.a)(e,2),c=t[0],a=t[1];function s(){return(s=Object(j.a)(l.a.mark((function e(){var t,r,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a([]),e.next=3,N.a.get("https://611644418f38520017a387c1.mockapi.io/orders");case 3:t=e.sent,r=t.data,s=0;case 6:if(!(s<r.length)){e.next=13;break}return console.log(c[s]),e.next=10,N.a.delete("https://611644418f38520017a387c1.mockapi.io/orders/"+r[s].id);case 10:s++,e.next=6;break;case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(r.useEffect)((function(){Object(j.a)(l.a.mark((function e(){var t,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N.a.get("https://611644418f38520017a387c1.mockapi.io/orders");case 3:t=e.sent,c=t.data,console.log(c),a(c.reduce((function(e,t){return[].concat(Object(o.a)(e),Object(o.a)(t.items))}),[])),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),alert("\u043e\u0448\u0438\u0431\u043a\u0430 \u0437\u0430\u043a\u0430\u0437\u0430"),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})))()}),[]),Object(h.jsx)("div",{children:Object(h.jsxs)("div",{className:"Orders",children:[Object(h.jsx)(m,{}),Object(h.jsx)(_,{}),Object(h.jsxs)("div",{className:"cards-content",children:[Object(h.jsxs)("div",{className:"cards-header",children:[Object(h.jsx)("h1",{className:"Favorite__title",children:"\u041c\u043e\u0438 \u0437\u0430\u043a\u0430\u0437\u044b"}),Object(h.jsx)("button",{style:{cursor:"pointer",background:"#9DD579",width:"200px",height:"35px",borderRadius:"20px",border:"none",color:"#FFF",fontSize:"16px"},onClick:function(){return s.apply(this,arguments)},children:"\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044c \u0432\u0441\u0435 \u0437\u0430\u043a\u0430\u0437\u044b"})]}),c.length>0?Object(h.jsx)("div",{className:"Cards-body",children:c.map((function(e,t){return Object(h.jsx)(f,{items:e},t)}))}):Object(h.jsx)(g,{image:"/img/smileOrder.png",title:"\u0423 \u0432\u0430\u0441 \u043d\u0435\u0442 \u0437\u0430\u043a\u0430\u0437\u043e\u0432",description:"\u041e\u0444\u043e\u0440\u043c\u0438\u0442\u0435 \u0445\u043e\u0442\u044f \u0431\u044b \u043e\u0434\u0438\u043d \u0437\u0430\u043a\u0430\u0437."})]})]})})},S=function(){var e=Object(r.useContext)(p).cardElected;return Object(h.jsxs)("div",{className:"Favorite",children:[Object(h.jsx)(m,{}),Object(h.jsx)(_,{}),Object(h.jsxs)("div",{className:"cards-content",children:[Object(h.jsx)("div",{className:"cards-header",children:Object(h.jsx)("h1",{className:"Favorite__title",children:"\u041c\u043e\u0438 \u0437\u0430\u043a\u043b\u0430\u0434\u043a\u0438"})}),e.length>0?Object(h.jsx)("div",{className:"Cards-body",children:e.map((function(e,t){return Object(h.jsx)(f,{items:e,favorited:!0},t)}))}):Object(h.jsx)(g,{image:"/img/smileFavorite.png",title:"\u0417\u0430\u043a\u043b\u0430\u0434\u043e\u043a \u043d\u0435\u0442 :(",description:"\u0412\u044b \u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u043b\u0438 \u0432 \u0437\u0430\u043a\u043b\u0430\u0434\u043a\u0438"})]})]})};var F=function(){var e=Object(r.useState)([]),t=Object(u.a)(e,2),c=t[0],a=t[1],s=Object(r.useState)([]),n=Object(u.a)(s,2),i=n[0],d=n[1],x=Object(r.useState)(!1),m=Object(u.a)(x,2),O=m[0],f=m[1],g=Object(r.useState)([]),v=Object(u.a)(g,2),w=v[0],_=v[1],k=Object(r.useState)(!0),C=Object(u.a)(k,2),F=C[0],P=C[1],I=Object(r.useState)(1),E=Object(u.a)(I,2),H=E[0],A=E[1];Object(r.useEffect)((function(){function e(){return(e=Object(j.a)(l.a.mark((function e(){var t,c,r,s,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Promise.all([N.a.get("https://611644418f38520017a387c1.mockapi.io/card"),N.a.get("https://611644418f38520017a387c1.mockapi.io/drawer"),N.a.get("https://611644418f38520017a387c1.mockapi.io/elected")]);case 3:t=e.sent,c=Object(u.a)(t,3),r=c[0],s=c[1],n=c[2],P(!1),a(r.data),d(s.data),_(n.data),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),alert("\u043e\u0448\u0438\u0431\u043a\u0430");case 17:case"end":return e.stop()}}),e,null,[[0,14]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var R=function(){var e=Object(j.a)(l.a.mark((function e(t){var c,r,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!(c=i.find((function(e){return Number(e.parentId)===Number(t.id)})))){e.next=8;break}return d((function(e){return e.filter((function(e){return Number(e.parentId)!==Number(t.id)}))})),e.next=6,N.a.delete("https://611644418f38520017a387c1.mockapi.io/drawer/".concat(c.id));case 6:e.next=13;break;case 8:return e.next=10,N.a.post("https://611644418f38520017a387c1.mockapi.io/drawer",t);case 10:r=e.sent,a=r.data,d((function(e){return[].concat(Object(o.a)(e),[a])}));case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(0),alert("\u043e\u0448\u0438\u0431\u043a\u0430 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u0442\u043e\u0432\u0430\u0440\u0430");case 18:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(t){return e.apply(this,arguments)}}(),B=function(){var e=Object(j.a)(l.a.mark((function e(t){var c,r,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!(c=w.find((function(e){return Number(e.id)===Number(t.id)})))){e.next=7;break}_((function(e){return e.filter((function(e){return Number(e.id)!==Number(t.id)}))})),N.a.delete("https://611644418f38520017a387c1.mockapi.io/elected/".concat(c.id)),e.next=12;break;case 7:return e.next=9,N.a.post("https://611644418f38520017a387c1.mockapi.io/elected",t);case 9:r=e.sent,a=r.data,_((function(e){return[].concat(Object(o.a)(e),[a])}));case 12:e.next=18;break;case 14:e.prev=14,e.t0=e.catch(0),alert("\u043e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0438 \u0432 \u0438\u0437\u0431\u0440\u0430\u043d\u043d\u044b\u0435"),console.error(e.t0);case 18:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(t){return e.apply(this,arguments)}}();return Object(h.jsx)("div",{className:"App",children:Object(h.jsxs)(p.Provider,{value:{card:c,setCard:a,drawerCard:i,onAddCard:R,onRemoveCard:function(e){console.log(e,i);try{N.a.delete("https://611644418f38520017a387c1.mockapi.io/drawer/".concat(e)),d((function(t){return t.filter((function(t){return Number(t.id)!==Number(e)}))}))}catch(t){alert(t)}},openDraw:O,setOpenDraw:f,isItemAdded:function(e){return i.some((function(t){return Number(t.parentId)===Number(e.id)}))},cardElected:w,onAddItemElected:B,isLoading:F,setDrawerCard:d,page:H,setPage:A},children:[Object(h.jsx)(b.a,{exact:!0,path:"/spasneakers/",component:D}),Object(h.jsx)(b.a,{path:"/spasneakers/favorite",component:S}),Object(h.jsx)(b.a,{path:"/spasneakers/orders",component:y})]})})},P=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,73)).then((function(t){var c=t.getCLS,r=t.getFID,a=t.getFCP,s=t.getLCP,n=t.getTTFB;c(e),r(e),a(e),s(e),n(e)}))};n.a.render(Object(h.jsx)(i.a,{children:Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(F,{})})}),document.getElementById("root")),P()}},[[72,1,2]]]);
//# sourceMappingURL=main.d2791051.chunk.js.map