(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/components/result-list"],{"34b4":function(t,n,e){"use strict";(function(t,e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={name:"resultList",props:["languageRes","transResult"],methods:{transBack:function(t){this.$emit("transBack",t)},paste:function(n){wx.vibrateShort(),t.setClipboardData({data:this.transResult[n],success:function(){console.log(e("success"," at pages\\index\\components\\result-list.vue:31"))}})}}};n.default=a}).call(this,e("6e42")["default"],e("0de9")["default"])},"43d3":function(t,n,e){"use strict";var a=e("c137"),u=e.n(a);u.a},6100:function(t,n,e){"use strict";e.r(n);var a=e("8ab1"),u=e("d048");for(var s in u)"default"!==s&&function(t){e.d(n,t,function(){return u[t]})}(s);e("43d3");var c,r=e("f0c5"),i=Object(r["a"])(u["default"],a["b"],a["c"],!1,null,"b8b75ec2",null,!1,a["a"],c);n["default"]=i.exports},"8ab1":function(t,n,e){"use strict";var a,u=function(){var t=this,n=t.$createElement;t._self._c},s=[];e.d(n,"b",function(){return u}),e.d(n,"c",function(){return s}),e.d(n,"a",function(){return a})},c137:function(t,n,e){},d048:function(t,n,e){"use strict";e.r(n);var a=e("34b4"),u=e.n(a);for(var s in a)"default"!==s&&function(t){e.d(n,t,function(){return a[t]})}(s);n["default"]=u.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'pages/index/components/result-list-create-component',
    {
        'pages/index/components/result-list-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('6e42')['createComponent'](__webpack_require__("6100"))
        })
    },
    [['pages/index/components/result-list-create-component']]
]);
