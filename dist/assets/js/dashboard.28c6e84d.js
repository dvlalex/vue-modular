(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["dashboard"],{0:function(t,n,e){t.exports=e("f3bd")},"4e2c":function(t,n,e){},"6eca":function(t,n,e){"use strict";e("4e2c")},"8c1b":function(t,n,e){"use strict";e.d(n,"a",(function(){return v})),e.d(n,"b",(function(){return w})),e.d(n,"c",(function(){return j}));var a=e("2b0e"),r=e("5530"),o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[t._m(0),e("router-view")],1)},c=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"nav"},[e("a",{attrs:{href:"/"}},[t._v("Landing")]),e("a",{attrs:{href:"/dashboard"}},[t._v("Dashboard")])])}],u=(e("6eca"),e("2877")),s={},i=Object(u["a"])(s,o,c,!1,null,null,null),d=i.exports,f=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("button",t._g(t._b({},"button",t.$attrs,!1),t.$listeners),[t._t("default")],2)},b=[],l={name:"CButton"},h=l,p=Object(u["a"])(h,f,b,!1,null,null,null),m=p.exports,v=function(t){return a["a"].component("CButton",m),new a["a"](Object(r["a"])(Object(r["a"])({},t),{},{render:function(t){return t(d)}})).$mount("#app")},_=e("8c4f"),w=function(t){return a["a"].use(_["a"]),new _["a"](Object(r["a"])(Object(r["a"])({},t),{},{mode:"history",base:"/"}))},O=e("2f62"),j=function(t){return a["a"].use(O["a"]),new O["a"].Store(t)},C=!0;a["a"].config.silent=C,a["a"].config.productionTip=!C,a["a"].config.performance=!C,a["a"].config.devtools=!C},f3bd:function(t,n,e){"use strict";e.r(n);e("e260"),e("e6cf"),e("cca6"),e("a79d");var a=e("8c1b"),r=(e("d3b7"),[{path:"/dashboard",name:"Dashboard",component:function(){return e.e("chunk-2d21df46").then(e.bind(null,"d400"))}}]),o={namespaced:!0,state:{dashboardCounter:0},getters:{COUNTER:function(t){return t.dashboardCounter}},mutations:{INCREASE:function(t){t.dashboardCounter+=1}}};(function(){Object(a["a"])({router:Object(a["b"])({routes:r}),store:Object(a["c"])({modules:{dashboard:o}})})})()}},[[0,"runtime","vendors"]]]);