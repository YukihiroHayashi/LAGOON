(this.webpackJsonppaf=this.webpackJsonppaf||[]).push([[0],{487:function(e,t,n){e.exports=n(974)},497:function(e,t,n){},501:function(e,t,n){},974:function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"menuChange",(function(){return j}));var a=n(0),o=n.n(a),i=n(73),c=n.n(i),u=(n(497),n(95)),s=n(96),l=n(100),f=n(99),d=n(98),v=n(75),h=n(450),b=n.n(h),p={tabStatus:"STAT_REGISTRATION"};var g=Object(v.c)({Reducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ACT_MENUCHANGE":return Object.assign({},e,{tabStatus:t.tabStatus});default:return e}}});n(501),n(223);var O=n(139),w=n.n(O);function j(e){return{type:"ACT_MENUCHANGE",tabStatus:e}}n(975),n(36);var m=function(e){Object(l.a)(n,e);var t=Object(f.a)(n);function n(e){var r;return Object(u.a)(this,n),(r=t.call(this,e)).state={},r}return Object(s.a)(n,[{key:"render",value:function(){return o.a.createElement("div",null,"Hellow world")}}]),n}(o.a.Component),E=Object(d.b)(T,A)(m),k=function(e){Object(l.a)(n,e);var t=Object(f.a)(n);function n(e){return Object(u.a)(this,n),t.call(this,e)}return Object(s.a)(n,[{key:"shouldComponentUpdate",value:function(e,t){var n=w.a.isEqual(e,this.props),r=w.a.isEqual(t,this.state);return!(n&&r)}},{key:"render",value:function(){switch(this.props.Reducer.tabStatus){case"STAT_REGISTRATION":return o.a.createElement("div",null,o.a.createElement(E,null));default:return o.a.createElement("div",null,"No content...")}}}]),n}(a.Component),y=Object(d.b)(T,A)(k),C=function(e){Object(l.a)(n,e);var t=Object(f.a)(n);function n(e){var r;return Object(u.a)(this,n),(r=t.call(this,e)).state={},r}return Object(s.a)(n,[{key:"shouldComponentUpdate",value:function(e,t){var n=w.a.isEqual(e,this.props),r=w.a.isEqual(t,this.state);return!(n&&r)}},{key:"render",value:function(){var e=navigator.userAgent;switch(e){case e.indexOf("iPhone")>0||e.indexOf("Android")>0&&e.indexOf("Mobile")>0:return o.a.createElement(y,null);default:return o.a.createElement("div",null,"No content...")}}}]),n}(a.Component);function T(e){return e}function A(e){return{action:Object(v.b)(r,e)}}var N=Object(d.b)(T,A)(C),S=Object(v.d)(Object(v.a)(b.a))(v.e)(g),R=function(e){Object(l.a)(n,e);var t=Object(f.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return o.a.createElement(d.a,{store:S},o.a.createElement(N,null))}}]),n}(a.Component),x=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function I(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}n(716),n(717),n(919),n(920),n(922);c.a.render(o.a.createElement(R,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL(".",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat(".","/service-worker.js");x?(!function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):I(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")}))):I(e)}))}}()}},[[487,1,2]]]);
//# sourceMappingURL=main.da70ed88.chunk.js.map