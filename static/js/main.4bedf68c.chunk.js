(this["webpackJsonpreact-hooks-burger"]=this["webpackJsonpreact-hooks-burger"]||[]).push([[0],[,,function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"m",(function(){return c})),n.d(t,"o",(function(){return a})),n.d(t,"h",(function(){return i})),n.d(t,"k",(function(){return o})),n.d(t,"j",(function(){return u})),n.d(t,"l",(function(){return s})),n.d(t,"i",(function(){return d})),n.d(t,"g",(function(){return l})),n.d(t,"f",(function(){return j})),n.d(t,"d",(function(){return b})),n.d(t,"e",(function(){return f})),n.d(t,"b",(function(){return h})),n.d(t,"c",(function(){return g})),n.d(t,"n",(function(){return O}));var r="ADD_INGREDIENT",c="REMOVE_INGREDIENT",a="SET_INGREDIENTS",i="FETCH_INGREDIENTS_FAIL",o="PURCHASE_BURGER_SUCCESS",u="PURCHASE_BURGER_FAIL",s="PURCHASE_INIT",d="LOADING_START",l="FECHT_ORDERS_SUCCESS",j="FECHT_ORDERS_FALI",b="AUTH_START",f="AUTH_SUCCESS",h="AUTH_FAIL",g="AUTH_LOGOUT",O="SET_AUTH_REDIRECT_PATH"},,,function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return a}));var r=n(13),c=function(e,t){return Object(r.a)(Object(r.a)({},e),t)},a=function(e,t){var n=!0;if(t){if(t.required&&(n=""!==e.trim()&&n),t.minLength&&(n=e.length>=t.minLength&&n),t.maxLength&&(n=e.length<=t.maxLength&&n),t.isEmail){n=/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(e)&&n}if(t.isNumeric){n=/^\d+$/.test(e)&&n}}return n}},,,,function(e,t,n){"use strict";t.a=function(e){return e.children}},,,,,function(e,t,n){e.exports={BreadBottom:"BurgerIngredient_BreadBottom__2US69",BreadTop:"BurgerIngredient_BreadTop__3Y4-R",Seeds1:"BurgerIngredient_Seeds1__J6vUJ",Seeds2:"BurgerIngredient_Seeds2__2Ylex",Meat:"BurgerIngredient_Meat__3flwI",Cheese:"BurgerIngredient_Cheese__3rOTJ",Salad:"BurgerIngredient_Salad__KLnhy",Bacon:"BurgerIngredient_Bacon__1KK6n"}},function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"i",(function(){return i})),n.d(t,"e",(function(){return o})),n.d(t,"g",(function(){return l})),n.d(t,"h",(function(){return h})),n.d(t,"d",(function(){return g})),n.d(t,"b",(function(){return v})),n.d(t,"f",(function(){return y})),n.d(t,"j",(function(){return B})),n.d(t,"c",(function(){return S}));var r=n(2),c=n(17),a=function(e){return{type:r.a,ingredientName:e}},i=function(e){return{type:r.m,ingredientName:e}},o=function(){return function(e){c.a.get("/ingredients.json").then((function(t){e(s(t.data))})).catch((function(t){e(u())}))}},u=function(){return{type:r.h}},s=function(e){return{type:r.o,ing:e}},d=n(13),l=function(e,t){return function(n){n(f()),c.a.post("/orders.json?auth="+t,e).then((function(t){console.log(t.data),n(j(t.data.name,e))})).catch((function(e){n(b(e))}))}},j=function(e,t){return{type:r.k,orderId:e,orderData:t}},b=function(e){return{type:r.j,error:e}},f=function(){return{type:r.i}},h=function(){return{type:r.l}},g=function(e,t){return function(n){n(f());var r="?auth="+e+'&orderBy="userId"&equalTo="'+t+'"';c.a.get("/orders.json"+r).then((function(e){var t=[];for(var r in e.data)t.push(Object(d.a)(Object(d.a)({},e.data[r]),{},{id:r}));n(O(t))})).catch((function(e){n(p(e))}))}},O=function(e){return{type:r.g,orders:e}},p=function(e){return{type:r.f,error:e}},_=n(31),x=n.n(_),m=function(e,t){return{type:r.e,token:e,userId:t}},v=function(e,t,n){return function(c){c({type:r.d});var a={email:e,password:t,returnSecureToken:!0},i="https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAajveW_nh7r6fSr-xjR3tmVR4uA9zhri0";n||(i="https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAajveW_nh7r6fSr-xjR3tmVR4uA9zhri0"),x.a.post(i,a).then((function(e){var t=new Date((new Date).getTime()+1e3*e.data.expiresIn);localStorage.setItem("token",e.data.idToken),localStorage.setItem("expirationDate",t),localStorage.setItem("userId",e.data.localId),c(m(e.data.idToken,e.data.localId)),c(k(e.data.expiresIn))})).catch((function(e){c(function(e){return{type:r.b,error:e}}(e))}))}},k=function(e){return function(t){setTimeout((function(){t(y())}),1e3*e-6e4)}},y=function(){return localStorage.removeItem("token"),localStorage.removeItem("expirationDate"),localStorage.removeItem("userId"),{type:r.c}},B=function(e){return{type:r.n,path:e}},S=function(){return function(e){var t=localStorage.getItem("token");if(t){var n=new Date(localStorage.getItem("expirationDate"));if(n>new Date){var r=localStorage.getItem("userId");e(m(t,r)),e(k((n.getTime()-(new Date).getTime())/1e3))}else e(y())}else e(y())}}},,function(e,t,n){"use strict";var r=n(31),c=n.n(r).a.create({baseURL:"https://burger-5d89b-default-rtdb.firebaseio.com/"});t.a=c},,,function(e,t,n){e.exports={SideDrawer:"SideDrawer_SideDrawer__3kXLK",Open:"SideDrawer_Open__1tCv1",Close:"SideDrawer_Close__9j7x-",Logo:"SideDrawer_Logo__3voUv"}},,function(e,t,n){"use strict";n(1);var r=n(62),c=n.n(r),a=n(0);t.a=function(){return Object(a.jsx)("div",{className:c.a.loader,children:"Loading..."})}},,,,function(e,t,n){e.exports={BulidControl:"BuildControl_BulidControl__19Kq7",Label:"BuildControl_Label__TQkTk",Less:"BuildControl_Less__3Ttg8",More:"BuildControl_More__1MY7B"}},,,function(e,t,n){"use strict";n(1);var r=n(59),c=n.n(r),a=n(0);t.a=function(e){return e.show?Object(a.jsx)("div",{className:c.a.Backdrop,onClick:e.clicked}):null}},function(e,t,n){"use strict";var r=n(1),c=n.n(r),a=n(61),i=n.n(a),o=n(9),u=n(29),s=n(0),d=function(e){return Object(s.jsxs)(o.a,{children:[Object(s.jsx)(u.a,{show:e.show,clicked:e.modalClosed}),Object(s.jsx)("div",{className:i.a.Modal,style:{transform:e.show?"translateY(0)":"translateY(-200vh)",opacity:e.show?"1":"0"},children:e.children})]})};t.a=c.a.memo(d,(function(e,t){return t.show===e.show&&t.children===e.children}))},,function(e,t,n){e.exports={Toolbar:"Toolbar_Toolbar__ApScI",Logo:"Toolbar_Logo__3Lk47",DesktopOnly:"Toolbar_DesktopOnly__LuPaL"}},function(e,t,n){"use strict";n(1);var r=n(41),c=n.n(r),a=n(0);t.a=function(e){return Object(a.jsx)("button",{disabled:e.disabled,onClick:e.clicked,className:[c.a.Button,c.a[e.btnType]].join(" "),children:e.children})}},,,,function(e,t,n){e.exports={NavigationItem:"NavigationItem_NavigationItem__2SpXc",active:"NavigationItem_active__2v2td"}},,,function(e,t,n){e.exports={BuildControls:"BuildControls_BuildControls__1YmbS",OrderButton:"BuildControls_OrderButton___M-Du",enable:"BuildControls_enable__9xLsD"}},function(e,t,n){e.exports={Button:"Button_Button__3gFiX",Success:"Button_Success__2Rka1",Danger:"Button_Danger__2ogZq"}},function(e,t,n){"use strict";var r=n(13),c=n(16),a=n(1),i=n(30),o=n(9),u=n(0);t.a=function(e,t){return function(n){var s=function(e){var t=Object(a.useState)(null),n=Object(c.a)(t,2),r=n[0],i=n[1],o=e.interceptors.request.use((function(e){return i(null),e})),u=e.interceptors.response.use((function(e){return e}),(function(e){i(e)}));return Object(a.useEffect)((function(){return function(){e.interceptors.request.eject(o),e.interceptors.response.eject(u)}}),[o,u]),[r,function(){i(!1)}]}(t),d=Object(c.a)(s,2),l=d[0],j=d[1];return Object(u.jsxs)(o.a,{children:[Object(u.jsx)(i.a,{show:l,modalClosed:j,children:l?l.message:null}),Object(u.jsx)(e,Object(r.a)({},n))]})}}},,,,,,,,,,function(e,t,n){"use strict";var r=n(64),c=(n(1),n(4)),a=n(60),i=n.n(a),o=n(14),u=n.n(o),s=n(0),d=function(e){var t=null;switch(e.type){case"bread-bottom":t=Object(s.jsx)("div",{className:u.a.BreadBottom});break;case"bread-top":t=Object(s.jsxs)("div",{className:u.a.BreadTop,children:[Object(s.jsx)("div",{className:u.a.Seeds1}),Object(s.jsx)("div",{className:u.a.Seeds2})]});break;case"meat":t=Object(s.jsx)("div",{className:u.a.Meat});break;case"cheese":t=Object(s.jsx)("div",{className:u.a.Cheese});break;case"bacon":t=Object(s.jsx)("div",{className:u.a.Bacon});break;case"salad":t=Object(s.jsx)("div",{className:u.a.Salad});break;default:t=null}return t};t.a=Object(c.g)((function(e){var t=Object.keys(e.ingredients).map((function(t){return Object(r.a)(Array(e.ingredients[t])).map((function(e,n){return Object(s.jsx)(d,{type:t},t+n)}))})).reduce((function(e,t){return e.concat(t)}),[]);return 0===t.length&&(t=Object(s.jsx)("p",{children:"Prosz\u0119 doda\u0107 sk\u0142adniki"})),Object(s.jsxs)("div",{className:i.a.Burger,children:[Object(s.jsx)(d,{type:"bread-top"}),t,Object(s.jsx)(d,{type:"bread-bottom"})]})}))},,,function(e,t,n){e.exports={content:"Layout_content__1QeJi"}},function(e,t,n){e.exports={Logo:"Logo_Logo__1N0xH"}},function(e,t,n){e.exports={NavigationItems:"NavigationItems_NavigationItems__1fnFX"}},function(e,t,n){e.exports={Menu:"DrawerToggle_Menu__1__YQ",DrawerToggle:"DrawerToggle_DrawerToggle__m405X"}},function(e,t,n){e.exports={Backdrop:"Backdrop_Backdrop__3j6VK"}},function(e,t,n){e.exports={Burger:"Burger_Burger__10T8F"}},function(e,t,n){e.exports={Modal:"Modal_Modal__1-5dN"}},function(e,t,n){e.exports={loader:"Spinner_loader__fTuX5",load2:"Spinner_load2__2gkgc"}},,,,,,,function(e,t,n){},,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),a=n(27),i=n.n(a),o=(n(69),n(16)),u=n(6),s=n(55),d=n.n(s),l=n(9),j=n(32),b=n.n(j),f=n.p+"static/media/burger-logo.ec69c7f6.png",h=n(56),g=n.n(h),O=n(0),p=function(e){return Object(O.jsx)("div",{className:g.a.Logo,children:Object(O.jsx)("img",{src:f,alt:"burger logo"})})},_=n(21),x=n(37),m=n.n(x),v=function(e){return Object(O.jsx)("li",{className:m.a.NavigationItem,children:Object(O.jsx)(_.b,{to:e.link,activeClassName:m.a.active,exact:e.exact,children:e.children})})},k=n(57),y=n.n(k),B=function(e){return Object(O.jsxs)("ul",{className:y.a.NavigationItems,children:[Object(O.jsx)(v,{link:"/",exact:!0,children:"Stw\xf3rz Burgera"}),e.isAuthenticated?Object(O.jsx)(v,{link:"/orders",children:"Zam\xf3wienia"}):null,e.isAuthenticated?Object(O.jsx)(v,{link:"/logout",children:"Wyloguj"}):Object(O.jsx)(v,{link:"/auth",children:"Zaloguj / Zarejestruj"})]})},S=n(58),I=n.n(S),N=function(e){return Object(O.jsxs)("div",{onClick:e.clicked,className:I.a.DrawerToggle,children:[Object(O.jsx)("div",{}),Object(O.jsx)("div",{}),Object(O.jsx)("div",{})]})},T=function(e){return Object(O.jsxs)("header",{className:b.a.Toolbar,children:[Object(O.jsx)(N,{clicked:e.drawerToggleClicked}),Object(O.jsx)("div",{className:b.a.Logo,children:Object(O.jsx)(p,{})}),Object(O.jsx)("nav",{className:b.a.DesktopOnly,children:Object(O.jsx)(B,{isAuthenticated:e.isAuth})})]})},C=n(20),w=n.n(C),A=n(29),D=function(e){var t=[w.a.SideDrawer,w.a.Close];return e.open&&(t=[w.a.SideDrawer,w.a.Open]),Object(O.jsxs)(l.a,{children:[Object(O.jsx)(A.a,{show:e.open,clicked:e.closed}),Object(O.jsxs)("div",{className:t.join(" "),onClick:e.closed,children:[Object(O.jsx)("div",{className:w.a.Logo,children:Object(O.jsx)(p,{})}),Object(O.jsx)("nav",{children:Object(O.jsx)(B,{isAuthenticated:e.isAuth})})]})]})},L=function(e){var t=Object(u.c)((function(e){return null!==e.auth.token})),n=Object(r.useState)(!1),c=Object(o.a)(n,2),a=c[0],i=c[1];return Object(O.jsxs)(l.a,{children:[Object(O.jsx)(T,{isAuth:t,drawerToggleClicked:function(){i(!a)}}),Object(O.jsx)(D,{isAuth:t,open:a,closed:function(){i(!1)}}),Object(O.jsx)("main",{className:d.a.content,children:e.children})]})},E=n(13),R=n(52),z=n(40),U=n.n(z),M=n(26),P=n.n(M),F=function(e){return Object(O.jsxs)("div",{className:P.a.BulidControl,children:[Object(O.jsx)("div",{className:P.a.Label,children:e.label}),Object(O.jsx)("button",{className:P.a.Less,onClick:e.removed,disabled:e.disabled,children:"Mniej"}),Object(O.jsx)("button",{className:P.a.More,onClick:e.added,children:"Wi\u0119cej"})]})},H=[{label:"Sa\u0142ata",type:"salad"},{label:"Bekon",type:"bacon"},{label:"Ser",type:"cheese"},{label:"Mi\u0119so",type:"meat"}],W=function(e){return Object(O.jsxs)("div",{className:U.a.BuildControls,children:[Object(O.jsxs)("p",{children:["Aktulana Cena: ",Object(O.jsx)("strong",{children:e.price.toFixed(2)})," z\u0142"]}),H.map((function(t){return Object(O.jsx)(F,{label:t.label,type:t.type,added:function(){return e.ingredientAdded(t.type)},removed:function(){return e.ingredientRemove(t.type)},disabled:e.disabled[t.type]},t.label)})),Object(O.jsx)("button",{className:U.a.OrderButton,disabled:!e.purchasable,onClick:e.ordered,children:e.isAuth?"ZAM\xd3W":"ZALOGUJ ABY ZAM\xd3WI\u0106"})]})},G=n(30),J=n(33),Y=function(e){var t=[{label:"Sa\u0142ata",type:"salad"},{label:"Bekon",type:"bacon"},{label:"Ser",type:"cheese"},{label:"Mi\u0119so",type:"meat"}],n=Object.keys(e.ingredients).map((function(n){var r=t.findIndex((function(e){return n===e.type}));return Object(O.jsxs)("li",{children:[Object(O.jsx)("span",{style:{textTransform:"capitalize"},children:t[r].label}),": ",e.ingredients[n]]},n)}));return Object(O.jsxs)(l.a,{children:[Object(O.jsx)("h3",{children:"Twoje zam\xf3winie"}),Object(O.jsx)("p",{children:"Przepyszny Burger z poni\u017cszymi sk\u0142adnikami"}),Object(O.jsx)("ul",{children:n}),Object(O.jsx)("p",{children:Object(O.jsxs)("strong",{children:["Cena Burgera: ",e.price.toFixed(2)," z\u0142"]})}),Object(O.jsx)("p",{children:"Chcesz z\u0142o\u017cy\u0107 zam\xf3wienie?"}),Object(O.jsx)(J.a,{btnType:"Danger",clicked:e.purchaseCanceled,children:"ANULUJ"}),Object(O.jsx)(J.a,{btnType:"Success",clicked:e.purchaseContinue,children:"KONTYNUUJ"})]})},K=n(22),Z=n(17),q=n(42),X=n(15),V=Object(q.a)((function(e){var t=Object(u.b)(),n=Object(r.useCallback)((function(){return t(X.e())}),[t]),c=Object(u.c)((function(e){return e.burgerBuilder.ingredients})),a=Object(u.c)((function(e){return e.burgerBuilder.totalPrice})),i=Object(u.c)((function(e){return e.burgerBuilder.error})),s=Object(u.c)((function(e){return null!==e.auth.token})),d=Object(u.c)((function(e){return e.burgerBuilder.itWasBuild}));Object(r.useEffect)((function(){d||n()}),[d,n]);var j=Object(r.useState)(!1),b=Object(o.a)(j,2),f=b[0],h=b[1],g=function(){h(!1)},p=Object(E.a)({},c);for(var _ in p)p[_]=p[_]<=0;var x,m=null,v=i?Object(O.jsx)("p",{style:{textAlign:"center"},children:"Sk\u0142adnik\xf3w nie da si\u0119 za\u0142adowa\u0107"}):Object(O.jsx)(K.a,{});return c&&(v=Object(O.jsxs)(l.a,{children:[Object(O.jsx)(R.a,{ingredients:c}),Object(O.jsx)(W,{ingredientAdded:function(e){return t(X.a(e))},ingredientRemove:function(e){return t(X.i(e))},disabled:p,purchasable:(x=c,Object.keys(x).map((function(e){return x[e]})).reduce((function(e,t){return e+t}),0)>0),isAuth:s,price:a,ordered:function(){var n;s?h(!0):(n="/checkout",t(X.j(n)),e.history.push("/auth"))}})]}),m=Object(O.jsx)(Y,{ingredients:c,purchaseCanceled:g,purchaseContinue:function(){t(X.h()),e.history.push("/checkout")},price:a})),Object(O.jsxs)(l.a,{children:[Object(O.jsx)(G.a,{show:f,modalClosed:g,children:m}),v]})}),Z.a),Q=n(4),$=c.a.lazy((function(){return n.e(4).then(n.bind(null,105))})),ee=c.a.lazy((function(){return n.e(5).then(n.bind(null,109))})),te=c.a.lazy((function(){return n.e(3).then(n.bind(null,108))})),ne=c.a.lazy((function(){return n.e(6).then(n.bind(null,106))})),re=function(e){var t=Object(u.c)((function(e){return null!==e.auth.token})),n=Object(u.b)(),c=Object(r.useCallback)((function(){return n(X.c())}),[n]);Object(r.useEffect)((function(){t||c()}),[c,t]);var a=Object(O.jsxs)(Q.d,{children:[Object(O.jsx)(Q.b,{path:"/auth",render:function(){return Object(O.jsx)(r.Suspense,{fallback:Object(O.jsx)(K.a,{}),children:Object(O.jsx)($,{})})}}),Object(O.jsx)(Q.b,{path:"/",exact:!0,component:V}),Object(O.jsx)(Q.a,{to:"/"})]});return t&&(a=Object(O.jsx)(r.Suspense,{fallback:Object(O.jsx)(K.a,{}),children:Object(O.jsxs)(Q.d,{children:[Object(O.jsx)(Q.b,{path:"/orders",exact:!0,component:ee}),Object(O.jsx)(Q.b,{path:"/checkout",component:te}),Object(O.jsx)(Q.b,{path:"/logout",component:ne}),Object(O.jsx)(Q.b,{path:"/auth",component:$}),Object(O.jsx)(Q.b,{path:"/",component:V}),Object(O.jsx)(Q.a,{to:"/"})]})})),Object(O.jsx)("div",{children:Object(O.jsx)(_.a,{children:Object(O.jsx)(L,{children:a})})})},ce=function(e){e&&e instanceof Function&&n.e(7).then(n.bind(null,107)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),r(e),c(e),a(e),i(e)}))},ae=n(18),ie=n(23),oe=n(2),ue=n(5),se={ingredients:null,totalPrice:4,error:!1,itWasBuild:!1},de={salad:.5,cheese:.4,meat:1.3,bacon:.7},le=function(e,t){var n=Object(ie.a)({},t.ingredientName,e.ingredients[t.ingredientName]+1),r={ingredients:Object(ue.b)(e.ingredients,n),totalPrice:e.totalPrice+de[t.ingredientName],itWasBuild:!0};return Object(ue.b)(e,r)},je=function(e,t){var n=Object(ie.a)({},t.ingredientName,e.ingredients[t.ingredientName]-1),r={ingredients:Object(ue.b)(e.ingredients,n),totalPrice:e.totalPrice-de[t.ingredientName],itWasBuild:!0};return Object(ue.b)(e,r)},be=function(e,t){var n=Object.keys(t.ing),r=4;return n.map((function(e){return r+=t.ing[e]*de[e],!0})),Object(ue.b)(e,{ingredients:{salad:t.ing.salad,bacon:t.ing.bacon,cheese:t.ing.cheese,meat:t.ing.meat},error:!1,totalPrice:r,itWasBuild:!1})},fe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case oe.a:return le(e,t);case oe.m:return je(e,t);case oe.o:return be(e,t);case oe.h:return Object(ue.b)(e,{error:!0});default:return e}},he={error:null,loading:!1,orders:[],purchased:!1},ge=function(e,t){var n=Object(ue.b)(t.orderData,{id:t.orderId});return Object(ue.b)(e,{loading:!1,orders:e.orders.concat(n),purchased:!0})},Oe=function(e,t){return Object(ue.b)(e,{loading:!1,error:t.error})},pe=function(e,t){return Object(ue.b)(e,{loading:!1,orders:t.orders})},_e=function(e,t){return Object(ue.b)(e,{loading:!1,error:t.error})},xe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:he,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case oe.l:return Object(ue.b)(e,{purchased:!1});case oe.k:return ge(e,t);case oe.j:return Oe(e,t);case oe.i:return Object(ue.b)(e,{loading:!0});case oe.g:return pe(e,t);case oe.f:return _e(e,t);default:return e}},me={token:null,userId:null,error:null,loading:!1,pathToRedirect:"/"},ve=function(e,t){return Object(ue.b)(e,{error:!1,loading:!1,token:t.token,userId:t.userId})},ke=function(e,t){return Object(ue.b)(e,{error:t.error,loading:!1})},ye=function(e,t){return Object(ue.b)(e,{token:null,userId:null})},Be=function(e,t){return Object(ue.b)(e,{pathToRedirect:t.path})},Se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:me,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case oe.d:return Object(ue.b)(e,{error:!1,loading:!0});case oe.e:return ve(e,t);case oe.b:return ke(e,t);case oe.c:return ye(e);case oe.n:return Be(e,t);default:return e}},Ie=n(63),Ne=ae.d,Te=Object(ae.c)({burgerBuilder:fe,order:xe,auth:Se}),Ce=Object(ae.e)(Te,Ne(Object(ae.a)(Ie.a)));i.a.render(Object(O.jsx)(u.a,{store:Ce,children:Object(O.jsx)(re,{})}),document.getElementById("root")),ce()}],[[98,1,2]]]);
//# sourceMappingURL=main.4bedf68c.chunk.js.map