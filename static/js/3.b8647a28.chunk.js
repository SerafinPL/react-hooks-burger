(this["webpackJsonpreact-hooks-burger"]=this["webpackJsonpreact-hooks-burger"]||[]).push([[3],{100:function(e,t,a){e.exports={Input:"Input_Input__3r5Ke",Label:"Input_Label__1qyHr",InputElement:"Input_InputElement__2m88K",Invalid:"Input_Invalid__16Mis",Error:"Input_Error__13mCq"}},103:function(e,t,a){e.exports={burger:"CheckoutSummary_burger__1KSC9",CheckoutSummary:"CheckoutSummary_CheckoutSummary__3PsXi"}},104:function(e,t,a){e.exports={ContactData:"ContactData_ContactData__20AK_"}},108:function(e,t,a){"use strict";a.r(t);var n=a(1),i=a(103),c=a.n(i),l=a(52),r=a(33),u=a(0),o=function(e){return Object(u.jsxs)("div",{className:c.a.CheckoutSummary,children:[Object(u.jsx)("h1",{children:"Zamawiamy burgera"}),Object(u.jsx)("div",{className:"classes.burger",children:Object(u.jsx)(l.a,{ingredients:e.ingredients})}),Object(u.jsx)(r.a,{btnType:"Danger",clicked:e.CheckoutCancel,children:"ANULUJ"}),Object(u.jsx)(r.a,{btnType:"Success",clicked:e.CheckoutContinue,children:"KONTYNUUJ"})]})},d=a(23),s=a(16),j=a(104),b=a.n(j),p=a(17),h=a(22),v=a(99),m=a(42),f=a(6),g=a(15),O=a(5),y=Object(m.a)((function(e){var t=Object(n.useState)({name:{elementType:"input",label:"Nazwa",elementConfig:{type:"text",placeholder:"Twoje Imi\u0119"},value:"",validation:{required:!0},valid:!1,touched:!1},street:{elementType:"input",label:"Ulica",elementConfig:{type:"text",placeholder:"Ulica"},value:"",validation:{required:!0},valid:!1,touched:!1},zipCode:{elementType:"input",label:"Kod pocztowy",elementConfig:{type:"text",placeholder:"Kod-pocztowy"},value:"",validation:{required:!0,minLength:5,maxLength:5,isNumeric:!0},valid:!1,touched:!1},city:{elementType:"input",label:"Miasto",elementConfig:{type:"text",placeholder:"Miasto"},value:"",validation:{required:!0},valid:!1,touched:!1},country:{elementType:"input",label:"Kraj",elementConfig:{type:"text",placeholder:"Kraj"},value:"",validation:{required:!0},valid:!1,touched:!1},email:{elementType:"input",label:"E-mail",elementConfig:{type:"email",placeholder:"Tw\xf3j Email"},value:"",validation:{required:!0,isEmail:!0},valid:!1,touched:!1},deliveryMethod:{elementType:"select",label:"Rodzaj Dostawy",elementConfig:{options:[{value:"fastest",displayValue:"Najszybciej"},{value:"chipest",displayValue:"Najtaniej"}]},value:"fastest",validation:{},valid:!0}}),a=Object(s.a)(t,2),i=a[0],c=a[1],l=Object(n.useState)(!1),o=Object(s.a)(l,2),j=o[0],p=o[1],m=Object(f.b)(),y=Object(f.c)((function(e){return e.burgerBuilder.ingredients})),C=Object(f.c)((function(e){return e.burgerBuilder.totalPrice})),x=Object(f.c)((function(e){return e.order.loading})),_=Object(f.c)((function(e){return e.auth.token})),k=Object(f.c)((function(e){return e.auth.userId})),w=[];for(var I in i)w.push({id:I,config:i[I]});var N=Object(u.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t,a,n={};for(var c in i)n[c]=i[c].value;t={ingredients:y,price:C,orderData:n,userId:k},a=_,m(g.g(t,a)),m(g.e())},children:[w.map((function(e){return Object(u.jsx)(v.a,{elementType:e.config.elementType,elementConfig:e.config.elementConfig,value:e.config.value,invalid:!e.config.valid,shouldValidate:e.config.validation,touched:e.config.touched,changed:function(t){return function(e,t){var a=Object(O.b)(i[t],{value:e.target.value,valid:Object(O.a)(e.target.value,i[t].validation),touched:!0}),n=Object(O.b)(i,Object(d.a)({},t,a)),l=!0;for(var r in n)l=n[r].valid&&l;c(n),p(l)}(t,e.id)},label:e.config.label},e.id)})),Object(u.jsx)(r.a,{btnType:"Success",disabled:!j,children:"Zam\xf3w"})]});return x&&(N=Object(u.jsx)(h.a,{})),Object(u.jsxs)("div",{className:b.a.ContactData,children:[Object(u.jsx)("h4",{children:"Wprowad\u017a dane do zam\xf3wienia:"}),N]})}),p.a),C=a(4);t.default=function(e){var t=Object(f.c)((function(e){return e.burgerBuilder.ingredients})),a=Object(f.c)((function(e){return e.order.purchased})),n=Object(u.jsx)(C.a,{to:"/"});if(t){var i=a?Object(u.jsx)(C.a,{to:"/"}):null;n=Object(u.jsxs)("div",{children:[i,Object(u.jsx)(o,{ingredients:t,CheckoutCancel:function(){e.history.goBack()},CheckoutContinue:function(){e.history.replace("/checkout/contact-data")}}),Object(u.jsx)(C.b,{path:e.match.path+"/contact-data",component:y})]})}return n}},99:function(e,t,a){"use strict";var n=a(13),i=(a(1),a(100)),c=a.n(i),l=a(0);t.a=function(e){var t=null,a=[c.a.InputElement];switch(e.invalid&&e.shouldValidate&&e.touched&&a.push(c.a.Invalid),e.elementType){case"input":t=Object(l.jsx)("input",Object(n.a)(Object(n.a)({className:a.join(" "),onChange:e.changed},e.elementConfig),{},{value:e.value}));break;case"textarea":t=Object(l.jsx)("textarea",Object(n.a)(Object(n.a)({className:a.join(" "),onChange:e.changed},e.elementConfig),{},{value:e.value}));break;case"select":t=Object(l.jsx)("select",{className:a.join(" "),onChange:e.changed,value:e.value,children:e.elementConfig.options.map((function(e){return Object(l.jsx)("option",{value:e.value,children:e.displayValue},e.value)}))});break;default:t=Object(l.jsx)("input",Object(n.a)(Object(n.a)({className:a.join(" "),onChange:e.changed},e.elementConfig),{},{value:e.value}))}var i=null;return e.invalid&&e.touched&&(i=Object(l.jsxs)("p",{className:c.a.Error,children:["Wprowad\u017a poprawne dane waro\u015b\u0107 ","password"===e.elementConfig.type?"has\u0142a":e.value," jest nieprawid\u0142owa"]})),Object(l.jsxs)("div",{className:c.a.Input,children:[Object(l.jsx)("label",{className:c.a.Label,children:e.label}),i,t]})}}}]);
//# sourceMappingURL=3.b8647a28.chunk.js.map