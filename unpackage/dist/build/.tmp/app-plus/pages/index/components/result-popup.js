(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/components/result-popup"],{"353d":function(t,n,e){"use strict";var u=e("4c7a"),o=e.n(u);o.a},"3cf9":function(t,n,e){"use strict";e.r(n);var u=e("f54b"),o=e("6ba6");for(var s in o)"default"!==s&&function(t){e.d(n,t,function(){return o[t]})}(s);e("353d");var c,a=e("f0c5"),r=Object(a["a"])(o["default"],u["b"],u["c"],!1,null,"f3409ef6",null,!1,u["a"],c);n["default"]=r.exports},"4c7a":function(t,n,e){},"6ba6":function(t,n,e){"use strict";e.r(n);var u=e("7f40"),o=e.n(u);for(var s in u)"default"!==s&&function(t){e.d(n,t,function(){return u[t]})}(s);n["default"]=o.a},"7f40":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={name:"resultPopup",props:["currentlanguage","sourceLanguage","transBackResult","currentTransResult"],data:function(){return{currentResult:!0}},methods:{magi:function(n){plus.runtime.openURL("https://magi.com/search?q="+this.transBackResult,function(n){console.log(t(n," at pages\\index\\components\\result-popup.vue:41"))})},google:function(n){plus.runtime.openURL("https://www.google.com/search?q="+this.transBackResult,function(n){console.log(t(n," at pages\\index\\components\\result-popup.vue:46"))})},googlePhoto:function(n){plus.runtime.openURL("https://www.google.com/search?tbm=isch&q="+this.transBackResult,function(n){console.log(t(n," at pages\\index\\components\\result-popup.vue:51"))})},wiki:function(n){plus.runtime.openURL("https://en.wikipedia.org/wiki/"+this.transBackResult,function(n){console.log(t(n," at pages\\index\\components\\result-popup.vue:56"))})}}};n.default=e}).call(this,e("0de9")["default"])},f54b:function(t,n,e){"use strict";var u,o=function(){var t=this,n=t.$createElement;t._self._c},s=[];e.d(n,"b",function(){return o}),e.d(n,"c",function(){return s}),e.d(n,"a",function(){return u})}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'pages/index/components/result-popup-create-component',
    {
        'pages/index/components/result-popup-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('6e42')['createComponent'](__webpack_require__("3cf9"))
        })
    },
    [['pages/index/components/result-popup-create-component']]
]);
