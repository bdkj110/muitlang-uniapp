(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/components/input-area"],{"4e85":function(t,n,o){},"62bd":function(t,n,o){"use strict";o.r(n);var e=o("683d"),i=o("cba1");for(var a in i)"default"!==a&&function(t){o.d(n,t,function(){return i[t]})}(a);o("d154");var u,s=o("f0c5"),r=Object(s["a"])(i["default"],e["b"],e["c"],!1,null,"7f962629",null,!1,e["a"],u);n["default"]=r.exports},"683d":function(t,n,o){"use strict";var e,i=function(){var t=this,n=t.$createElement;t._self._c},a=[];o.d(n,"b",function(){return i}),o.d(n,"c",function(){return a}),o.d(n,"a",function(){return e})},7063:function(t,n,o){"use strict";(function(t,e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=o("44bf"),a={name:"InputArea",props:["ifTextareaShow"],data:function(){return{langIn:i.langIn,langOut:i.langOut,sourcePopupIfShow:"hidden",objPopupIfShow:"hidden",inputH:"100%",inputToBottom:"80px",bottomAreaH:"0px",displayClipboard:"visible",chackboxOrRadio:null,form:{sourceLanguage:"auto",language:null,languageName:"目标语言",content:""}}},methods:{changeHeight:function(t){this.sourcePopupIfShow="hidden",this.objPopupIfShow="hidden"(""===this.form.content)?this.displayClipboard="visible":this.displayClipboard="hidden",this.bottomAreaH="0px",this.inputH="100%",this.inputToBottom=t.detail.height+24+"px"},lesionInput:function(){this.displayClipboard="hidden"},paste:function(){var n=this;t.getClipboardData({success:function(t){n.form.content=t.data,n.displayClipboard="hidden"}})},preventBreak:function(t){t.preventDefault()},trans:function(){this.sourcePopupIfShow="hidden",this.objPopupIfShow="hidden",this.bottomAreaH="0px",this.inputH="200px",this.inputToBottom="80px",t.vibrateShort({success:function(){console.log(e("成功震动"," at pages\\index\\components\\input-area.vue:132"))}}),this.$emit("transRequst",this.form.sourceLanguage,this.form.language,this.form.content)},cancel:function(){this.form.content=""},source:function(){this.objPopupIfShow="hidden",this.sourcePopupIfShow="visible",this.bottomAreaH="calc(100% - 200px)",this.inputH="200px",this.inputToBottom="80px"},object:function(){this.sourcePopupIfShow="hidden",this.objPopupIfShow="visible",this.bottomAreaH="calc(100% - 200px)",this.inputH="200px",this.inputToBottom="80px"},sourceChange:function(t){this.form.sourceLanguage=t.detail.value},objectChange:function(t){this.form.language=t.detail.value,this.form.languageName=this.form.language.join("/"),""===this.form.languageName&&(this.form.languageName="目标语言")}}};n.default=a}).call(this,o("6e42")["default"],o("0de9")["default"])},cba1:function(t,n,o){"use strict";o.r(n);var e=o("7063"),i=o.n(e);for(var a in e)"default"!==a&&function(t){o.d(n,t,function(){return e[t]})}(a);n["default"]=i.a},d154:function(t,n,o){"use strict";var e=o("4e85"),i=o.n(e);i.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'pages/index/components/input-area-create-component',
    {
        'pages/index/components/input-area-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('6e42')['createComponent'](__webpack_require__("62bd"))
        })
    },
    [['pages/index/components/input-area-create-component']]
]);
