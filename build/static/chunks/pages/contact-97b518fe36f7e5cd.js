(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9335],{715:function(e,t,n){"use strict";var r=n(8216),c=n(5997),s=n(169),a=n(8184),o=n(2953),l=n(7294),i=n(5893);function u(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,o.Z)(e);if(t){var c=(0,o.Z)(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return(0,a.Z)(this,n)}}var m=function(e){(0,s.Z)(n,e);var t=u(n);function n(){return(0,r.Z)(this,n),t.apply(this,arguments)}return(0,c.Z)(n,[{key:"render",value:function(){return(0,i.jsx)("section",{className:"newsletter-area",children:(0,i.jsx)("div",{className:"container",children:(0,i.jsx)("div",{className:"newsletter-inner-area",children:(0,i.jsxs)("div",{className:"newsletter-content",children:[(0,i.jsx)("span",{className:"sub-title",children:"Get Started Instantly!"}),(0,i.jsx)("h2",{children:"Get the only new update from this newsletter"}),(0,i.jsxs)("form",{className:"newsletter-form",children:[(0,i.jsx)("input",{type:"email",className:"form-control",placeholder:"Enter your email",name:"email",required:!0}),(0,i.jsx)("button",{type:"submit",children:"Subscribe!"})]})]})})})})}}]),n}(l.Component);t.Z=m},352:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return S}});var r=n(8216),c=n(5997),s=n(169),a=n(8184),o=n(2953),l=n(7294),i=n(8180),u=n(1670),m=n(5893);function f(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,o.Z)(e);if(t){var c=(0,o.Z)(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return(0,a.Z)(this,n)}}var d=function(e){(0,s.Z)(n,e);var t=f(n);function n(){return(0,r.Z)(this,n),t.apply(this,arguments)}return(0,c.Z)(n,[{key:"render",value:function(){return(0,m.jsx)("div",{className:"contact-info-area pt-100 pb-70",children:(0,m.jsx)("div",{className:"container",children:(0,m.jsxs)("div",{className:"row justify-content-center",children:[(0,m.jsx)("div",{className:"col-lg-4 col-md-6",children:(0,m.jsxs)("div",{className:"contact-info-box",children:[(0,m.jsx)("div",{className:"icon",children:(0,m.jsx)("i",{className:"pe-7s-mail"})}),(0,m.jsx)("h3",{children:"Mail Here"}),(0,m.jsx)("p",{children:(0,m.jsx)("a",{href:"mailto:: contact@inovumcommunication.com",children:": contact@inovumcommunication.com"})})]})}),(0,m.jsx)("div",{className:"col-lg-4 col-md-6",children:(0,m.jsxs)("div",{className:"contact-info-box",children:[(0,m.jsx)("div",{className:"icon",children:(0,m.jsx)("i",{className:"pe-7s-map-2"})}),(0,m.jsx)("h3",{children:"Visit Here"}),(0,m.jsxs)("p",{children:["No 53, 11th Cross ,Near Deepa Complex, Papareddy palya ",(0,m.jsx)("br",{})," ","Nagarabhavi, Karnataka, Bengaluru \u2013 560072"]})]})}),(0,m.jsx)("div",{className:"col-lg-4 col-md-6",children:(0,m.jsxs)("div",{className:"contact-info-box",children:[(0,m.jsx)("div",{className:"icon",children:(0,m.jsx)("i",{className:"pe-7s-call"})}),(0,m.jsx)("h3",{children:"Call Here"}),(0,m.jsx)("p",{children:(0,m.jsx)("a",{href:"tel:+91-9900419833",children:"+91-9900419833"})})]})})]})})})}}]),n}(l.Component),h=n(266),p=n(2809),x=n(809),j=n.n(x),v=n(9669),y=n.n(v),N=n(6455),b=n.n(N),g=n(7630),Z=n.n(g),w=n(3908);function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function C(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(Object(n),!0).forEach((function(t){(0,p.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var P=Z()(b()),R={name:"",email:"",number:"",subject:"",text:""},k=function(){var e=(0,l.useState)(R),t=e[0],n=e[1],r=function(e){var t=e.target,r=t.name,c=t.value;n((function(e){return C(C({},e),{},(0,p.Z)({},r,c))}))},c=function(){var e=(0,h.Z)(j().mark((function e(r){var c,s,a,o,l,i,u,m;return j().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.preventDefault(),e.prev=1,c="".concat(w.Z,"/api/contact"),s=t.name,a=t.email,o=t.number,l=t.subject,i=t.text,u={name:s,email:a,number:o,subject:l,text:i},e.next=7,y().post(c,u);case 7:m=e.sent,console.log(m),n(R),P.fire({title:"Congratulations!",text:"Your message was successfully send and will back to you soon",icon:"success",timer:2e3,timerProgressBar:!0,showConfirmButton:!1}),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(1),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t){return e.apply(this,arguments)}}();return(0,m.jsxs)("div",{className:"contact-form",children:[(0,m.jsx)("h2",{children:"Get In Touch"}),(0,m.jsx)("form",{onSubmit:c,children:(0,m.jsx)("div",{className:"container",children:(0,m.jsxs)("div",{className:"row",children:[(0,m.jsx)("div",{className:"col-lg-6",children:(0,m.jsx)("div",{className:"form-group",children:(0,m.jsx)("input",{type:"text",name:"name",placeholder:"Name",className:"form-control",value:t.name,onChange:r,required:!0})})}),(0,m.jsx)("div",{className:"col-lg-6",children:(0,m.jsx)("div",{className:"form-group",children:(0,m.jsx)("input",{type:"text",name:"email",placeholder:"Email",className:"form-control",value:t.email,onChange:r,required:!0})})}),(0,m.jsx)("div",{className:"col-lg-6",children:(0,m.jsx)("div",{className:"form-group",children:(0,m.jsx)("input",{type:"text",name:"number",placeholder:"Phone number",className:"form-control",value:t.number,onChange:r,required:!0})})}),(0,m.jsx)("div",{className:"col-lg-6",children:(0,m.jsx)("div",{className:"form-group",children:(0,m.jsx)("input",{type:"text",name:"subject",placeholder:"Subject",className:"form-control",value:t.subject,onChange:r,required:!0})})}),(0,m.jsx)("div",{className:"col-lg-12 col-md-12",children:(0,m.jsx)("div",{className:"form-group",children:(0,m.jsx)("textarea",{name:"text",cols:"30",rows:"6",placeholder:"Write your message...",className:"form-control",value:t.text,onChange:r,required:!0})})}),(0,m.jsx)("div",{className:"col-lg-12 col-sm-12",children:(0,m.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Send Message"})})]})})})]})},_=n(715),B=n(9501);function E(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,o.Z)(e);if(t){var c=(0,o.Z)(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return(0,a.Z)(this,n)}}var S=function(e){(0,s.Z)(n,e);var t=E(n);function n(){return(0,r.Z)(this,n),t.apply(this,arguments)}return(0,c.Z)(n,[{key:"render",value:function(){return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(i.Z,{}),(0,m.jsx)(u.Z,{pageTitle:"Contact Us",BGImage:"bg-one"}),(0,m.jsx)(d,{}),(0,m.jsx)(k,{}),(0,m.jsx)("div",{className:"ptb-100",children:(0,m.jsx)(_.Z,{})}),(0,m.jsx)(B.Z,{})]})}}]),n}(l.Component)},3908:function(e,t){"use strict";t.Z="https://trynext-react.envytheme.com"},3269:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/contact",function(){return n(352)}])}},function(e){e.O(0,[3777,5608,9774,2888,179],(function(){return t=3269,e(e.s=t);var t}));var t=e.O();_N_E=t}]);