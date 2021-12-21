!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.pmrpc=e():t.pmrpc=e()}("undefined"!=typeof self?self:"undefined"!=typeof global?global:this,function(){return function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:n})},r.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=136)}([function(t,e,r){var n=r(47),o="object"==typeof self&&self&&self.Object===Object&&self,u=n||o||Function("return this")();t.exports=u},function(t,e){t.exports=function(t){return null!=t&&"object"==typeof t}},function(t,e,r){var n=r(123),o=r(120);t.exports=function(t,e){var r=o(t,e);return n(r)?r:void 0}},function(t,e,r){var n=r(13),o=r(131),u=r(130),i="[object Null]",c="[object Undefined]",a=n?n.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?c:i:a&&a in Object(t)?o(t):u(t)}},function(t,e){t.exports=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}},function(t,e){var r=Array.isArray;t.exports=r},function(t,e,r){var n=r(26),o=r(41);t.exports=function(t,e,r,u){var i=!r;r||(r={});for(var c=-1,a=e.length;++c<a;){var s=e[c],f=u?u(r[s],t[s],s,r,t):void 0;void 0===f&&(f=t[s]),i?o(r,s,f):n(r,s,f)}return r}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={INVOKE:"invoke",RPC_RESOLVE:"rpc-resolve",RPC_REJECT:"rpc-reject",API_DESCRIPTION:"api-desc",INVOKE_FUNCTION:"invoke-func",RESOLVE:"resolve",REJECT:"reject",REQUEST_API:"request-api"}},function(t,e,r){var n=r(109);t.exports=function(t,e){var r=t.__data__;return n(e)?r["string"==typeof e?"string":"hash"]:r.map}},function(t,e,r){var n=r(44);t.exports=function(t,e){for(var r=t.length;r--;)if(n(t[r][0],e))return r;return-1}},function(t,e,r){var n=r(115),o=r(114),u=r(113),i=r(112),c=r(111);function a(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}a.prototype.clear=n,a.prototype.delete=o,a.prototype.get=u,a.prototype.has=i,a.prototype.set=c,t.exports=a},function(t,e,r){var n=r(3),o=r(4),u="[object AsyncFunction]",i="[object Function]",c="[object GeneratorFunction]",a="[object Proxy]";t.exports=function(t){if(!o(t))return!1;var e=n(t);return e==i||e==c||e==u||e==a}},function(t,e,r){var n=r(2)(Object,"create");t.exports=n},function(t,e,r){var n=r(0).Symbol;t.exports=n},function(t,e,r){var n=r(134);t.exports=function(t,e,r){var o=null==t?void 0:n(t,e);return void 0===o?r:o}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.deserialize=e.serialize=void 0;var n=u(r(14)),o=u(r(51));function u(t){return t&&t.__esModule?t:{default:t}}e.serialize=function(t){return Promise.reject((0,o.default)(t)?function(t){return{type:t.constructor.name,message:t.message,stack:t.stack}}(t):t)},e.deserialize=function(t){return function(){var t=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).type;return"Error"===t||(0,o.default)((0,n.default)(self,[t,"prototype"]))}(t)?function(t){var e=t.type,r=t.stack,n=t.message,o=new(self[e]||Error)(n);return o.stack=r,o}(t):t}},function(t,e,r){var n=r(65);t.exports=function(t){var e=new t.constructor(t.byteLength);return new n(e).set(new n(t)),e}},function(t,e,r){var n=r(71),o=r(28),u=r(70),i=r(69),c=r(68),a=r(3),s=r(45),f=s(n),p=s(o),l=s(u),v=s(i),d=s(c),y=a;(n&&"[object DataView]"!=y(new n(new ArrayBuffer(1)))||o&&"[object Map]"!=y(new o)||u&&"[object Promise]"!=y(u.resolve())||i&&"[object Set]"!=y(new i)||c&&"[object WeakMap]"!=y(new c))&&(y=function(t){var e=a(t),r="[object Object]"==e?t.constructor:void 0,n=r?s(r):"";if(n)switch(n){case f:return"[object DataView]";case p:return"[object Map]";case l:return"[object Promise]";case v:return"[object Set]";case d:return"[object WeakMap]"}return e}),t.exports=y},function(t,e,r){var n=r(36)(Object.getPrototypeOf,Object);t.exports=n},function(t,e,r){var n=r(75),o=r(34),u=Object.prototype.propertyIsEnumerable,i=Object.getOwnPropertySymbols,c=i?function(t){return null==t?[]:(t=Object(t),n(i(t),function(e){return u.call(t,e)}))}:o;t.exports=c},function(t,e,r){var n=r(40),o=r(80),u=r(35);t.exports=function(t){return u(t)?n(t,!0):o(t)}},function(t,e){var r=Object.prototype;t.exports=function(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||r)}},function(t,e,r){(function(t){var n=r(47),o="object"==typeof e&&e&&!e.nodeType&&e,u=o&&"object"==typeof t&&t&&!t.nodeType&&t,i=u&&u.exports===o&&n.process,c=function(){try{var t=u&&u.require&&u.require("util").types;return t||i&&i.binding&&i.binding("util")}catch(t){}}();t.exports=c}).call(this,r(24)(t))},function(t,e){t.exports=function(t){return function(e){return t(e)}}},function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},function(t,e,r){var n=r(40),o=r(83),u=r(35);t.exports=function(t){return u(t)?n(t):o(t)}},function(t,e,r){var n=r(41),o=r(44),u=Object.prototype.hasOwnProperty;t.exports=function(t,e,r){var i=t[e];u.call(t,e)&&o(i,r)&&(void 0!==r||e in t)||n(t,e,r)}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.sendResponse=e.send=void 0;var n=r(42),o=function(t){return t&&t.__esModule?t:{default:t}}(r(100));function u(t){if(Array.isArray(t)){for(var e=0,r=Array(t.length);e<t.length;e++)r[e]=t[e];return r}return Array.from(t)}function i(t,e,r,o){(0,n.isWorker)()||t instanceof Worker||t instanceof MessagePort?t.postMessage(e,o):t.postMessage(e,r,o)}e.send=function(t,e){var r=e.target,n=e.targetOrigin,c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return new Promise(function(e){var a=new MessageChannel,s=a.port1,f=a.port2;s.onmessage=function(t){var r=t.data;return e(r)},t.__port=f;try{i(r,t,n,[f].concat(u(c)))}catch(e){if(!e||"DataCloneError"!==e.name)throw e;var p=(0,o.default)(t);p.__port=f,i(r,p,n,[f].concat(u(c)))}})},e.sendResponse=function(t,e){return function(r){return t.postMessage({intent:e,result:r})}}},function(t,e,r){var n=r(2)(r(0),"Map");t.exports=n},function(t,e,r){var n=r(3),o=r(1),u="[object Symbol]";t.exports=function(t){return"symbol"==typeof t||o(t)&&n(t)==u}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(t){return t&&t.__esModule?t:{default:t}}(r(7)),o=r(15);e.default=function(t){var e=t.intent,r=t.result;switch(e){case n.default.RESOLVE:return r;case n.default.REJECT:return Promise.reject((0,o.deserialize)(r));default:return Promise.reject()}}},function(t,e,r){var n=r(32),o=r(5);t.exports=function(t,e,r){var u=e(t);return o(t)?u:n(u,r(t))}},function(t,e){t.exports=function(t,e){for(var r=-1,n=e.length,o=t.length;++r<n;)t[o+r]=e[r];return t}},function(t,e,r){var n=r(32),o=r(18),u=r(19),i=r(34),c=Object.getOwnPropertySymbols?function(t){for(var e=[];t;)n(e,u(t)),t=o(t);return e}:i;t.exports=c},function(t,e){t.exports=function(){return[]}},function(t,e,r){var n=r(11),o=r(37);t.exports=function(t){return null!=t&&o(t.length)&&!n(t)}},function(t,e){t.exports=function(t,e){return function(r){return t(e(r))}}},function(t,e){var r=9007199254740991;t.exports=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=r}},function(t,e){var r=9007199254740991,n=/^(?:0|[1-9]\d*)$/;t.exports=function(t,e){var o=typeof t;return!!(e=null==e?r:e)&&("number"==o||"symbol"!=o&&n.test(t))&&t>-1&&t%1==0&&t<e}},function(t,e,r){(function(t){var n=r(0),o=r(86),u="object"==typeof e&&e&&!e.nodeType&&e,i=u&&"object"==typeof t&&t&&!t.nodeType&&t,c=i&&i.exports===u?n.Buffer:void 0,a=(c?c.isBuffer:void 0)||o;t.exports=a}).call(this,r(24)(t))},function(t,e,r){var n=r(89),o=r(88),u=r(5),i=r(39),c=r(38),a=r(85),s=Object.prototype.hasOwnProperty;t.exports=function(t,e){var r=u(t),f=!r&&o(t),p=!r&&!f&&i(t),l=!r&&!f&&!p&&a(t),v=r||f||p||l,d=v?n(t.length,String):[],y=d.length;for(var b in t)!e&&!s.call(t,b)||v&&("length"==b||p&&("offset"==b||"parent"==b)||l&&("buffer"==b||"byteLength"==b||"byteOffset"==b)||c(b,y))||d.push(b);return d}},function(t,e,r){var n=r(91);t.exports=function(t,e,r){"__proto__"==e&&n?n(t,e,{configurable:!0,enumerable:!0,value:r,writable:!0}):t[e]=r}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.isWorker=function(){return"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope},e.getChildFrameById=function(t){return document.getElementById(t)}},function(t,e,r){var n=r(29),o=1/0;t.exports=function(t){if("string"==typeof t||n(t))return t;var e=t+"";return"0"==e&&1/t==-o?"-0":e}},function(t,e){t.exports=function(t,e){return t===e||t!=t&&e!=e}},function(t,e){var r=Function.prototype.toString;t.exports=function(t){if(null!=t){try{return r.call(t)}catch(t){}try{return t+""}catch(t){}}return""}},function(t,e,r){var n=r(126),o=r(110),u=r(108),i=r(107),c=r(106);function a(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}a.prototype.clear=n,a.prototype.delete=o,a.prototype.get=u,a.prototype.has=i,a.prototype.set=c,t.exports=a},function(t,e,r){(function(e){var r="object"==typeof e&&e&&e.Object===Object&&e;t.exports=r}).call(this,r(132))},function(t,e,r){var n=r(5),o=r(133),u=r(129),i=r(105);t.exports=function(t,e){return n(t)?t:o(t,e)?[t]:u(i(t))}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=!1;e.addSingleHandler=function(t,e){n||(n=!0,self.addEventListener("message",t)),e&&e.forEach(function(e){return e.addEventListener("message",t)})},e.removeSingleHandler=function(t){self.removeEventListener("message",t),n=!1}},function(t,e,r){var n=r(3),o=r(18),u=r(1),i="[object Object]",c=Function.prototype,a=Object.prototype,s=c.toString,f=a.hasOwnProperty,p=s.call(Object);t.exports=function(t){if(!u(t)||n(t)!=i)return!1;var e=o(t);if(null===e)return!0;var r=f.call(e,"constructor")&&e.constructor;return"function"==typeof r&&r instanceof r&&s.call(r)==p}},function(t,e,r){var n=r(3),o=r(1),u=r(50),i="[object DOMException]",c="[object Error]";t.exports=function(t){if(!o(t))return!1;var e=n(t);return e==c||e==i||"string"==typeof t.message&&"string"==typeof t.name&&!u(t)}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.deserialize=e.serialize=void 0;var n=c(r(11)),o=r(27),u=c(r(7)),i=c(r(30));function c(t){return t&&t.__esModule?t:{default:t}}e.serialize=function(t){return t.reduce(function(t,e){var r=t.args,i=t.transfer;if((0,n.default)(e)){var c=new MessageChannel,a=c.port1,s=c.port2;a.onmessage=function(t){var r=t.data,n=r.__port;Promise.resolve(e.apply(void 0,function(t){if(Array.isArray(t)){for(var e=0,r=Array(t.length);e<t.length;e++)r[e]=t[e];return r}return Array.from(t)}(r))).then((0,o.sendResponse)(n,u.default.RESOLVE),(0,o.sendResponse)(n,u.default.REJECT))};var f=i.length;r.push({type:"function",index:f,port:s}),i.push(s)}else r.push({type:"value",value:e});return{args:r,transfer:i}},{args:[],transfer:[]})},e.deserialize=function(t){return t.map(function(t){return"value"===t.type?t.value:function(){for(var e=t.port,r=arguments.length,n=Array(r),u=0;u<r;u++)n[u]=arguments[u];return(0,o.send)(n,{target:e}).then(i.default)}})}},function(t,e,r){var n=r(26),o=r(48),u=r(38),i=r(4),c=r(43);t.exports=function(t,e,r,a){if(!i(t))return t;for(var s=-1,f=(e=o(e,t)).length,p=f-1,l=t;null!=l&&++s<f;){var v=c(e[s]),d=r;if("__proto__"===v||"constructor"===v||"prototype"===v)return t;if(s!=p){var y=l[v];void 0===(d=a?a(y,v,l):void 0)&&(d=i(y)?y:u(e[s+1])?[]:{})}n(l,v,d),l=l[v]}return t}},function(t,e,r){var n=r(53);t.exports=function(t,e,r){return null==t?t:n(t,e,r)}},function(t,e,r){var n=r(17),o=r(1),u="[object Set]";t.exports=function(t){return o(t)&&n(t)==u}},function(t,e,r){var n=r(55),o=r(23),u=r(22),i=u&&u.isSet,c=i?o(i):n;t.exports=c},function(t,e,r){var n=r(17),o=r(1),u="[object Map]";t.exports=function(t){return o(t)&&n(t)==u}},function(t,e,r){var n=r(57),o=r(23),u=r(22),i=u&&u.isMap,c=i?o(i):n;t.exports=c},function(t,e,r){var n=r(4),o=Object.create,u=function(){function t(){}return function(e){if(!n(e))return{};if(o)return o(e);t.prototype=e;var r=new t;return t.prototype=void 0,r}}();t.exports=u},function(t,e,r){var n=r(59),o=r(18),u=r(21);t.exports=function(t){return"function"!=typeof t.constructor||u(t)?{}:n(o(t))}},function(t,e,r){var n=r(16);t.exports=function(t,e){var r=e?n(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.length)}},function(t,e,r){var n=r(13),o=n?n.prototype:void 0,u=o?o.valueOf:void 0;t.exports=function(t){return u?Object(u.call(t)):{}}},function(t,e){var r=/\w*$/;t.exports=function(t){var e=new t.constructor(t.source,r.exec(t));return e.lastIndex=t.lastIndex,e}},function(t,e,r){var n=r(16);t.exports=function(t,e){var r=e?n(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.byteLength)}},function(t,e,r){var n=r(0).Uint8Array;t.exports=n},function(t,e,r){var n=r(16),o=r(64),u=r(63),i=r(62),c=r(61),a="[object Boolean]",s="[object Date]",f="[object Map]",p="[object Number]",l="[object RegExp]",v="[object Set]",d="[object String]",y="[object Symbol]",b="[object ArrayBuffer]",h="[object DataView]",j="[object Float32Array]",_="[object Float64Array]",g="[object Int8Array]",x="[object Int16Array]",O="[object Int32Array]",A="[object Uint8Array]",m="[object Uint8ClampedArray]",w="[object Uint16Array]",P="[object Uint32Array]";t.exports=function(t,e,r){var E=t.constructor;switch(e){case b:return n(t);case a:case s:return new E(+t);case h:return o(t,r);case j:case _:case g:case x:case O:case A:case m:case w:case P:return c(t,r);case f:return new E;case p:case d:return new E(t);case l:return u(t);case v:return new E;case y:return i(t)}}},function(t,e){var r=Object.prototype.hasOwnProperty;t.exports=function(t){var e=t.length,n=new t.constructor(e);return e&&"string"==typeof t[0]&&r.call(t,"index")&&(n.index=t.index,n.input=t.input),n}},function(t,e,r){var n=r(2)(r(0),"WeakMap");t.exports=n},function(t,e,r){var n=r(2)(r(0),"Set");t.exports=n},function(t,e,r){var n=r(2)(r(0),"Promise");t.exports=n},function(t,e,r){var n=r(2)(r(0),"DataView");t.exports=n},function(t,e,r){var n=r(31),o=r(33),u=r(20);t.exports=function(t){return n(t,u,o)}},function(t,e,r){var n=r(31),o=r(19),u=r(25);t.exports=function(t){return n(t,u,o)}},function(t,e,r){var n=r(6),o=r(33);t.exports=function(t,e){return n(t,o(t),e)}},function(t,e){t.exports=function(t,e){for(var r=-1,n=null==t?0:t.length,o=0,u=[];++r<n;){var i=t[r];e(i,r,t)&&(u[o++]=i)}return u}},function(t,e,r){var n=r(6),o=r(19);t.exports=function(t,e){return n(t,o(t),e)}},function(t,e){t.exports=function(t,e){var r=-1,n=t.length;for(e||(e=Array(n));++r<n;)e[r]=t[r];return e}},function(t,e,r){(function(t){var n=r(0),o="object"==typeof e&&e&&!e.nodeType&&e,u=o&&"object"==typeof t&&t&&!t.nodeType&&t,i=u&&u.exports===o?n.Buffer:void 0,c=i?i.allocUnsafe:void 0;t.exports=function(t,e){if(e)return t.slice();var r=t.length,n=c?c(r):new t.constructor(r);return t.copy(n),n}}).call(this,r(24)(t))},function(t,e){t.exports=function(t){var e=[];if(null!=t)for(var r in Object(t))e.push(r);return e}},function(t,e,r){var n=r(4),o=r(21),u=r(79),i=Object.prototype.hasOwnProperty;t.exports=function(t){if(!n(t))return u(t);var e=o(t),r=[];for(var c in t)("constructor"!=c||!e&&i.call(t,c))&&r.push(c);return r}},function(t,e,r){var n=r(6),o=r(20);t.exports=function(t,e){return t&&n(e,o(e),t)}},function(t,e,r){var n=r(36)(Object.keys,Object);t.exports=n},function(t,e,r){var n=r(21),o=r(82),u=Object.prototype.hasOwnProperty;t.exports=function(t){if(!n(t))return o(t);var e=[];for(var r in Object(t))u.call(t,r)&&"constructor"!=r&&e.push(r);return e}},function(t,e,r){var n=r(3),o=r(37),u=r(1),i={};i["[object Float32Array]"]=i["[object Float64Array]"]=i["[object Int8Array]"]=i["[object Int16Array]"]=i["[object Int32Array]"]=i["[object Uint8Array]"]=i["[object Uint8ClampedArray]"]=i["[object Uint16Array]"]=i["[object Uint32Array]"]=!0,i["[object Arguments]"]=i["[object Array]"]=i["[object ArrayBuffer]"]=i["[object Boolean]"]=i["[object DataView]"]=i["[object Date]"]=i["[object Error]"]=i["[object Function]"]=i["[object Map]"]=i["[object Number]"]=i["[object Object]"]=i["[object RegExp]"]=i["[object Set]"]=i["[object String]"]=i["[object WeakMap]"]=!1,t.exports=function(t){return u(t)&&o(t.length)&&!!i[n(t)]}},function(t,e,r){var n=r(84),o=r(23),u=r(22),i=u&&u.isTypedArray,c=i?o(i):n;t.exports=c},function(t,e){t.exports=function(){return!1}},function(t,e,r){var n=r(3),o=r(1),u="[object Arguments]";t.exports=function(t){return o(t)&&n(t)==u}},function(t,e,r){var n=r(87),o=r(1),u=Object.prototype,i=u.hasOwnProperty,c=u.propertyIsEnumerable,a=n(function(){return arguments}())?n:function(t){return o(t)&&i.call(t,"callee")&&!c.call(t,"callee")};t.exports=a},function(t,e){t.exports=function(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}},function(t,e,r){var n=r(6),o=r(25);t.exports=function(t,e){return t&&n(e,o(e),t)}},function(t,e,r){var n=r(2),o=function(){try{var t=n(Object,"defineProperty");return t({},"",{}),t}catch(t){}}();t.exports=o},function(t,e){t.exports=function(t,e){for(var r=-1,n=null==t?0:t.length;++r<n&&!1!==e(t[r],r,t););return t}},function(t,e,r){var n=r(10),o=r(28),u=r(46),i=200;t.exports=function(t,e){var r=this.__data__;if(r instanceof n){var c=r.__data__;if(!o||c.length<i-1)return c.push([t,e]),this.size=++r.size,this;r=this.__data__=new u(c)}return r.set(t,e),this.size=r.size,this}},function(t,e){t.exports=function(t){return this.__data__.has(t)}},function(t,e){t.exports=function(t){return this.__data__.get(t)}},function(t,e){t.exports=function(t){var e=this.__data__,r=e.delete(t);return this.size=e.size,r}},function(t,e,r){var n=r(10);t.exports=function(){this.__data__=new n,this.size=0}},function(t,e,r){var n=r(10),o=r(97),u=r(96),i=r(95),c=r(94),a=r(93);function s(t){var e=this.__data__=new n(t);this.size=e.size}s.prototype.clear=o,s.prototype.delete=u,s.prototype.get=i,s.prototype.has=c,s.prototype.set=a,t.exports=s},function(t,e,r){var n=r(98),o=r(92),u=r(26),i=r(90),c=r(81),a=r(78),s=r(77),f=r(76),p=r(74),l=r(73),v=r(72),d=r(17),y=r(67),b=r(66),h=r(60),j=r(5),_=r(39),g=r(58),x=r(4),O=r(56),A=r(25),m=r(20),w=1,P=2,E=4,M="[object Arguments]",S="[object Function]",I="[object GeneratorFunction]",z="[object Object]",k={};k[M]=k["[object Array]"]=k["[object ArrayBuffer]"]=k["[object DataView]"]=k["[object Boolean]"]=k["[object Date]"]=k["[object Float32Array]"]=k["[object Float64Array]"]=k["[object Int8Array]"]=k["[object Int16Array]"]=k["[object Int32Array]"]=k["[object Map]"]=k["[object Number]"]=k[z]=k["[object RegExp]"]=k["[object Set]"]=k["[object String]"]=k["[object Symbol]"]=k["[object Uint8Array]"]=k["[object Uint8ClampedArray]"]=k["[object Uint16Array]"]=k["[object Uint32Array]"]=!0,k["[object Error]"]=k[S]=k["[object WeakMap]"]=!1,t.exports=function t(e,r,R,C,F,T){var D,U=r&w,B=r&P,W=r&E;if(R&&(D=F?R(e,C,F,T):R(e)),void 0!==D)return D;if(!x(e))return e;var N=j(e);if(N){if(D=y(e),!U)return s(e,D)}else{var V=d(e),L=V==S||V==I;if(_(e))return a(e,U);if(V==z||V==M||L&&!F){if(D=B||L?{}:h(e),!U)return B?p(e,c(D,e)):f(e,i(D,e))}else{if(!k[V])return F?e:{};D=b(e,V,U)}}T||(T=new n);var $=T.get(e);if($)return $;T.set(e,D),O(e)?e.forEach(function(n){D.add(t(n,r,R,n,e,T))}):g(e)&&e.forEach(function(n,o){D.set(o,t(n,r,R,o,e,T))});var J=N?void 0:(W?B?v:l:B?m:A)(e);return o(J||e,function(n,o){J&&(n=e[o=n]),u(D,o,t(n,r,R,o,e,T))}),D}},function(t,e,r){var n=r(99),o=1,u=4;t.exports=function(t){return n(t,o|u)}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.invokeApiFunction=e.getDescription=e.buildApiFromDescription=void 0;var n=p(r(7)),o=r(27),u=p(r(14)),i=p(r(54)),c=p(r(11)),a=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}(r(52)),s=r(15),f=p(r(30));function p(t){return t&&t.__esModule?t:{default:t}}function l(t){if(Array.isArray(t)){for(var e=0,r=Array(t.length);e<t.length;e++)r[e]=t[e];return r}return Array.from(t)}var v=!0;e.buildApiFromDescription=function(t,e,r){return Object.keys(e).sort().reduce(function(e,u){return(0,i.default)(e,u,function(t,e,r){return function(){for(var u=arguments.length,i=Array(u),c=0;c<u;c++)i[c]=arguments[c];var s=a.serialize(i),p=s.args,l=s.transfer;return(0,o.send)({appId:t,call:r,args:p,intent:n.default.INVOKE_FUNCTION},e,l).then(f.default)}}(t,r,u))},{})};function d(t,e){return(0,c.default)(t)?function(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}({},e.join("."),v):{}}var y=function t(e,r){var n=function(t,e){return 0===e.length?t:(0,u.default)(t,e)}(r,e),o=Object.keys(n).reduce(function(n,o){return Object.assign(n,t([].concat(l(e),[o]),r))},{});return Object.assign(d(n,e),o)};e.getDescription=function(t){return y([],t)},e.invokeApiFunction=function(t,e){try{var r=a.deserialize(e);return Promise.resolve(t.apply(void 0,l(r))).catch(s.serialize)}catch(t){return(0,s.serialize)(t)}}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.isEmpty=e.unregisterApp=e.hasApp=e.getAppData=e.getAppById=e.registerApp=void 0;var n=function(t){return t&&t.__esModule?t:{default:t}}(r(14));var o={};e.registerApp=function(t,e,r){o[t]={app:e,onApiCall:r}},e.getAppById=function(t){return(0,n.default)(o,[t,"app"])},e.getAppData=function(t){return o[t]},e.hasApp=function(t){return Boolean(o[t])},e.unregisterApp=function(t){return delete o[t]},e.isEmpty=function(){return Object.keys(o).length>0}},function(t,e){t.exports=function(t,e){for(var r=-1,n=null==t?0:t.length,o=Array(n);++r<n;)o[r]=e(t[r],r,t);return o}},function(t,e,r){var n=r(13),o=r(103),u=r(5),i=r(29),c=1/0,a=n?n.prototype:void 0,s=a?a.toString:void 0;t.exports=function t(e){if("string"==typeof e)return e;if(u(e))return o(e,t)+"";if(i(e))return s?s.call(e):"";var r=e+"";return"0"==r&&1/e==-c?"-0":r}},function(t,e,r){var n=r(104);t.exports=function(t){return null==t?"":n(t)}},function(t,e,r){var n=r(8);t.exports=function(t,e){var r=n(this,t),o=r.size;return r.set(t,e),this.size+=r.size==o?0:1,this}},function(t,e,r){var n=r(8);t.exports=function(t){return n(this,t).has(t)}},function(t,e,r){var n=r(8);t.exports=function(t){return n(this,t).get(t)}},function(t,e){t.exports=function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t}},function(t,e,r){var n=r(8);t.exports=function(t){var e=n(this,t).delete(t);return this.size-=e?1:0,e}},function(t,e,r){var n=r(9);t.exports=function(t,e){var r=this.__data__,o=n(r,t);return o<0?(++this.size,r.push([t,e])):r[o][1]=e,this}},function(t,e,r){var n=r(9);t.exports=function(t){return n(this.__data__,t)>-1}},function(t,e,r){var n=r(9);t.exports=function(t){var e=this.__data__,r=n(e,t);return r<0?void 0:e[r][1]}},function(t,e,r){var n=r(9),o=Array.prototype.splice;t.exports=function(t){var e=this.__data__,r=n(e,t);return!(r<0||(r==e.length-1?e.pop():o.call(e,r,1),--this.size,0))}},function(t,e){t.exports=function(){this.__data__=[],this.size=0}},function(t,e,r){var n=r(12),o="__lodash_hash_undefined__";t.exports=function(t,e){var r=this.__data__;return this.size+=this.has(t)?0:1,r[t]=n&&void 0===e?o:e,this}},function(t,e,r){var n=r(12),o=Object.prototype.hasOwnProperty;t.exports=function(t){var e=this.__data__;return n?void 0!==e[t]:o.call(e,t)}},function(t,e,r){var n=r(12),o="__lodash_hash_undefined__",u=Object.prototype.hasOwnProperty;t.exports=function(t){var e=this.__data__;if(n){var r=e[t];return r===o?void 0:r}return u.call(e,t)?e[t]:void 0}},function(t,e){t.exports=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}},function(t,e){t.exports=function(t,e){return null==t?void 0:t[e]}},function(t,e,r){var n=r(0)["__core-js_shared__"];t.exports=n},function(t,e,r){var n=r(121),o=function(){var t=/[^.]+$/.exec(n&&n.keys&&n.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}();t.exports=function(t){return!!o&&o in t}},function(t,e,r){var n=r(11),o=r(122),u=r(4),i=r(45),c=/^\[object .+?Constructor\]$/,a=Function.prototype,s=Object.prototype,f=a.toString,p=s.hasOwnProperty,l=RegExp("^"+f.call(p).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");t.exports=function(t){return!(!u(t)||o(t))&&(n(t)?l:c).test(i(t))}},function(t,e,r){var n=r(12);t.exports=function(){this.__data__=n?n(null):{},this.size=0}},function(t,e,r){var n=r(124),o=r(119),u=r(118),i=r(117),c=r(116);function a(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}a.prototype.clear=n,a.prototype.delete=o,a.prototype.get=u,a.prototype.has=i,a.prototype.set=c,t.exports=a},function(t,e,r){var n=r(125),o=r(10),u=r(28);t.exports=function(){this.size=0,this.__data__={hash:new n,map:new(u||o),string:new n}}},function(t,e,r){var n=r(46),o="Expected a function";function u(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError(o);var r=function(){var n=arguments,o=e?e.apply(this,n):n[0],u=r.cache;if(u.has(o))return u.get(o);var i=t.apply(this,n);return r.cache=u.set(o,i)||u,i};return r.cache=new(u.Cache||n),r}u.Cache=n,t.exports=u},function(t,e,r){var n=r(127),o=500;t.exports=function(t){var e=n(t,function(t){return r.size===o&&r.clear(),t}),r=e.cache;return e}},function(t,e,r){var n=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,o=/\\(\\)?/g,u=r(128)(function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(n,function(t,r,n,u){e.push(n?u.replace(o,"$1"):r||t)}),e});t.exports=u},function(t,e){var r=Object.prototype.toString;t.exports=function(t){return r.call(t)}},function(t,e,r){var n=r(13),o=Object.prototype,u=o.hasOwnProperty,i=o.toString,c=n?n.toStringTag:void 0;t.exports=function(t){var e=u.call(t,c),r=t[c];try{t[c]=void 0;var n=!0}catch(t){}var o=i.call(t);return n&&(e?t[c]=r:delete t[c]),o}},function(t,e){var r;r=function(){return this}();try{r=r||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(r=window)}t.exports=r},function(t,e,r){var n=r(5),o=r(29),u=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,i=/^\w*$/;t.exports=function(t,e){if(n(t))return!1;var r=typeof t;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=t&&!o(t))||i.test(t)||!u.test(t)||null!=e&&t in Object(e)}},function(t,e,r){var n=r(48),o=r(43);t.exports=function(t,e){for(var r=0,u=(e=n(e,t)).length;null!=t&&r<u;)t=t[o(e[r++])];return r&&r==u?t:void 0}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.unset=e.request=e.set=void 0;var n=l(r(14)),o=p(r(102)),u=r(42),i=l(r(7)),c=r(101),a=r(27),s=p(r(49)),f=r(15);function p(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}function l(t){return t&&t.__esModule?t:{default:t}}var v=function(t){var e=t.data,r=e.appId,u=e.intent,s=e.call,p=e.args,l=e.__port;switch(u){case i.default.REQUEST_API:var v=o.getAppById(r),d=v?(0,c.getDescription)(v):null;return l.postMessage(d),Promise.resolve();case i.default.INVOKE_FUNCTION:var y=o.getAppData(r);if(!y){var b=new Error("The API for "+r+" has been removed");return(0,a.sendResponse)(l,i.default.REJECT)((0,f.serialize)(b))}y.onApiCall&&y.onApiCall({appId:r,call:s,args:p});var h=(0,n.default)(y.app,s);return(0,c.invokeApiFunction)(h,p).then((0,a.sendResponse)(l,i.default.RESOLVE),(0,a.sendResponse)(l,i.default.REJECT))}return Promise.resolve()};e.set=function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=r.onApiCall,u=r.workers,i=arguments[3];i&&(u=i),o.hasApp(t)&&o.unregisterApp(t),o.registerApp(t,e,n),s.addSingleHandler(v,u)},e.request=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};s.addSingleHandler(v);var r=function(t){var e=t.target,r=t.initiator;switch(!0){case"undefined"!=typeof MessagePort&&e instanceof MessagePort:case"undefined"!=typeof Worker&&e instanceof Worker:return{target:e};case"undefined"!=typeof parent&&e===parent:return{target:parent,targetOrigin:"*"};case Boolean(e):return e.contentWindow?{target:e.contentWindow,targetOrigin:e.src}:{target:e,targetOrigin:"*"};case(0,u.isWorker)():return{target:self,targetOrigin:"*"};case Boolean(r):var n=(0,u.getChildFrameById)(r);return{target:n.contentWindow,targetOrigin:n.src};default:throw new Error("Invalid target")}}(e);return(0,a.send)({intent:i.default.REQUEST_API,appId:t},r).then(function(e){return e?(0,c.buildApiFromDescription)(t,e,r):Promise.reject(new Error("App with ID "+t+" not found"))})},e.unset=function(t){o.unregisterApp(t),o.isEmpty()&&s.removeSingleHandler(v)}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.api=void 0;var n=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}(r(135));e.api=n}])});
//# sourceMappingURL=pm-rpc.min.js.map