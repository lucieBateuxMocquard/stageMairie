!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("wixRecorder",[],t):"object"==typeof exports?exports.wixRecorder=t():e.wixRecorder=t()}("undefined"!=typeof self?self:this,(function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="https://static.parastorage.com/services/wix-recorder/1.18.0/",n(n.s=0)}([function(e,t,n){"use strict";n.r(t),n.d(t,"addLabel",(function(){return Z})),n.d(t,"withExperiments",(function(){return $})),n.d(t,"addCustomAttribute",(function(){return ee})),n.d(t,"recordUrl",(function(){return te})),n.d(t,"__forceRecording",(function(){return ne}));var r=function(){return window[window._fs_namespace]},o=function(){if(!!!r())throw Error("FullStory is not loaded, please ensure the init function is invoked before calling FullStory API functions")},i=function(){o();for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.every((function(e){return r()[e]}))},u=function(e){return function(){if(window._fs_dev_mode){var t="FullStory is in dev mode and is not recording: ".concat(e," method not executed");return console.warn(t),t}var n;return i(e)?(n=r())[e].apply(n,arguments):(console.warn("FS.".concat(e," not ready")),null)}},s=u("event"),c=(u("log"),u("getCurrentSessionURL")),a=u("identify"),l=(u("setUserVars"),u("consent"),u("shutdown")),f=(u("restart"),u("anonymize"),function(e,t){return function(){window._fs_initialized?t&&console.warn(t):(e.apply(void 0,arguments),window._fs_initialized=!0)}}((function(e){if(r())console.warn("The FullStory snippet has already been defined elsewhere (likely in the <head> element)");else if(e.recordCrossDomainIFrames&&(window._fs_run_in_iframe=!0),e.recordOnlyThisIFrame&&(window._fs_is_outer_script=!0),function(e){var t,n,r,o,i,u,s,c,a=e.orgId,l=e.namespace,f=void 0===l?"FS":l,d=e.debug,p=void 0!==d&&d,h=e.host,y=void 0===h?"fullstory.com":h,w=e.script,v=void 0===w?"edge.fullstory.com/s/fs.js":w;if(!a)throw new Error("FullStory orgId is a required parameter");window._fs_debug=p,window._fs_host=y,window._fs_script=v,window._fs_org=a,window._fs_namespace=f,t=window,n=document,r=window._fs_namespace,o="script",i="user",r in t?t.console&&t.console.log&&t.console.log('FullStory namespace conflict. Please set window["_fs_namespace"].'):((s=t[r]=function(e,t,n){s.q?s.q.push([e,t,n]):s._api(e,t,n)}).q=[],(u=n.createElement(o)).async=1,u.crossOrigin="anonymous",u.src="https://"+_fs_script,(c=n.getElementsByTagName(o)[0]).parentNode.insertBefore(u,c),s.identify=function(e,t,n){s(i,{uid:e},n),t&&s(i,t,n)},s.setUserVars=function(e,t){s(i,e,t)},s.event=function(e,t,n){s("event",{n:e,p:t},n)},s.anonymize=function(){s.identify(!1)},s.shutdown=function(){s("rec",!1)},s.restart=function(){s("rec",!0)},s.log=function(e,t){s("log",[e,t])},s.consent=function(e){s("consent",!arguments.length||e)},s.identifyAccount=function(e,t){u="account",(t=t||{}).acctId=e,s(u,t)},s.clearUserCookie=function(){},s.setVars=function(e,t){s("setVars",[e,t])},s._w={},c="XMLHttpRequest",s._w[c]=t[c],c="fetch",s._w[c]=t[c],t[c]&&(t[c]=function(){return s._w[c].apply(this,arguments)}),s._v="1.3.0")}(e),!0===e.devMode){var t="FullStory was initialized in devMode and will stop recording";s("FullStory Dev Mode",{message_str:t}),l(),window._fs_dev_mode=!0,console.warn(t)}}),"FullStory init has already been called once, additional invocations are ignored"));function d(){return{id:p("wixClient").split("|")[6]||p("_wixCIDX")}}function p(e){return(document.cookie.match(e+"=([^;]*)")||[""]).pop()}var h=function(){function e(){this.listeners=[],this.setupListeners()}return e.parseEventMessage=function(e){var t=("string"==typeof e?e:"").split("|");return{eventName:t[0],payload:t[1]}},e.prototype.setupListeners=function(){var t=this;window.addEventListener("message",(function(n){var r=e.parseEventMessage(n.data),o=r.eventName,i=r.payload;o&&t.listeners.filter((function(e){return e.name===o})).forEach((function(e){var r=e.name,o=e.callback,u=e.once;o(n,i),u&&t.removeListener(r,o)}))}))},e.prototype.listen=function(e,t){var n=this;return this.listeners.push({name:e,callback:t}),function(){n.removeListener(e,t)}},e.prototype.listenOnce=function(e,t){var n=this;return this.listeners.push({name:e,callback:t,once:!0}),function(){n.removeListener(e,t)}},e.prototype.removeListener=function(e,t){this.listeners=this.listeners.filter((function(n){return n.name!==e&&n.callback!==t}))},e.prototype.emit=function(e,t,n,r){void 0===t&&(t=""),void 0===n&&(n=window.parent),void 0===r&&(r="*"),n&&n.postMessage(e+"|"+t,r)},e}(),y=function(e,t){return(y=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)};var w,v=function(){return(v=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function m(e,t,n,r){return new(n||(n=Promise))((function(o,i){function u(e){try{c(r.next(e))}catch(e){i(e)}}function s(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(u,s)}c((r=r.apply(e,t||[])).next())}))}function b(e,t){var n,r,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;u;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,r=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!(o=u.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1],o=i;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(i);break}o[2]&&u.ops.pop(),u.trys.pop();continue}i=t.call(e,u)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}}function _(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}!function(e){e.Default="",e.OwnerAccount="owner-account"}(w||(w={}));var g="__WIXEXP_USE_NEW_API",x="__WIXEXP_CONDUCTION_METHOD_",I="__WIXEXP_OWNER_ACCOUNT_ID_",S="__WIXEXP_LOGGED_IN_USER_ID_";function O(e,t,n){var r,o;if("undefined"!=typeof self)if("function"==typeof n){if(void 0!==n(self[t]))return(r={})[e]=n(self[t]),r}else if(typeof self[t]===n)return(o={})[e]=self[t],o;return{}}var U=function(e){return Object.keys(w).filter((function(t){return w[t]===e})).length>0?e:void 0};function R(e){return function(e){return e.conductionMethod===w.OwnerAccount&&e.siteOwnerId&&e.loggedInUserId}(e)?{forSiteOwner:{siteOwnerId:e.siteOwnerId,loggedInUserId:e.loggedInUserId}}:{}}var C=function(e){return"string"==typeof e&&""!==e};function A(e){void 0===e&&(e={});var t=e.forSiteOwner,n=e.forSiteVisitors,r=e.overrideCriteria,o="";if(["forSiteOwner","forSiteVisitors"].reduce((function(t,n){return e[n]?t+1:t}),0)>1)throw new Error('Only one of "forSiteOwner" or "forSiteVisitors" is accepted.');return t&&(o+=function(e){return C(e.loggedInUserId)&&C(e.siteOwnerId)?"&requestContext.forSiteOwner.loggedInUserId="+e.loggedInUserId+"&requestContext.forSiteOwner.siteOwnerId="+e.siteOwnerId:""}(t)),n&&(o+=function(e){return C(e.visitorId)&&C(e.siteOwnerId)?"&requestContext.forSiteVisitors.visitorId="+e.visitorId+"&requestContext.forSiteVisitors.siteOwnerId="+e.siteOwnerId:""}(n)),r&&(o+=function(e){return C(e.entityId)?"&requestContext.overrideCriteria.entityId="+e.entityId:""}(r)),o}function E(e){if("string"==typeof e)try{return JSON.parse(e)}catch(e){}return e}var L={conductAllInScope:"/_api/wix-laboratory-server/v1/laboratory/platform/conductAllInScope",conductExperiment:"/_api/wix-laboratory-server/v1/laboratory/platform/conductExperiment"},P={conductAllInScope:"/_api/wix-laboratory-server/laboratory/conductAllInScope",conductExperiment:"/_api/wix-laboratory-server/laboratory/conductExperiment"};function F(e,t){return-1!==e.indexOf(t?L.conductAllInScope:P.conductAllInScope)}var k=function(e,t,n){return void 0===e&&(e=""),void 0===t&&(t=""),void 0===n&&(n=!1),n?L.conductExperiment+"?key="+encodeURIComponent(e)+"&fallbackValue="+encodeURIComponent(t):P.conductExperiment+"?key="+encodeURIComponent(e)+"&fallback="+encodeURIComponent(t)};function N(e,t,n){var r=""+k(t,"",n);return e.includes(r)}var T=function(){function e(){this.urlMap=new Map,this.pendingUrlMap=new Map}return e.prototype.addUrlRequest=function(e,t){return m(this,void 0,void 0,(function(){var n=this;return b(this,(function(r){switch(r.label){case 0:return this.pendingUrlMap.set(e,t),[4,t.then((function(t){return n.addUrlResponse(e,t)}))];case 1:return r.sent(),[2]}}))}))},e.prototype.addUrlResponse=function(e,t){this.urlMap.set(e,t)},e.prototype.getUrlResponse=function(e){return this.urlMap.get(e)},e.prototype.getUrlRequest=function(e){return this.pendingUrlMap.get(e)},e.prototype.getExperimentValue=function(e,t){var n,r;try{for(var o=_(this.urlMap.keys()),i=o.next();!i.done;i=o.next()){var u=i.value;if(N(u,e,t))return this.urlMap.get(u);if(F(u,t)){var s=E(this.urlMap.get(u));if("object"==typeof s&&e in s)return s[e]}}}catch(e){n={error:e}}finally{try{i&&!i.done&&(r=o.return)&&r.call(o)}finally{if(n)throw n.error}}},e}();!function(){function e(){}e.prototype.addUrlRequest=function(){},e.prototype.addUrlResponse=function(){},e.prototype.getUrlResponse=function(){},e.prototype.getUrlRequest=function(){},e.prototype.getExperimentValue=function(){}}();function M(){return void 0===self.experimentsCacheV2&&(self.experimentsCacheV2=new T),self.experimentsCacheV2}var q=function(){function e(e){var t;this.experiments=null!==(t=e.experiments)&&void 0!==t?t:{}}return e.prototype.get=function(e){return this.experiments[e]},e.prototype.enabled=function(e){return"true"===this.get(e)},e.prototype.pending=function(){return!1},e.prototype.ready=function(){return Promise.resolve()},e.prototype.all=function(){return this.experiments},e}(),j=function(){},X=function(e){function t(t){void 0===t&&(t={});var n=e.call(this,t)||this,r=v(v(v(v({},O("useNewApi",g,"boolean")),O("conductionMethod",x,U)),O("siteOwnerId",I,"string")),O("loggedInUserId",S,"string"));return n.useNewApi=void 0!==t.useNewApi?t.useNewApi:r.useNewApi||!1,n.experiments=t.experiments||{},n.loaders=new Map,n.baseUrl=(n.useNewApi,t.baseUrl||""),n.requestContext=t.requestContext||R(r),n.onError=t.onError||j,t.scope&&n.load(t.scope),t.scopes&&t.scopes.forEach(n.load.bind(n)),n}return function(e,t){function n(){this.constructor=e}y(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}(t,e),t.prototype.add=function(e){this.experiments=v(v({},this.experiments),e)},t.prototype._addLoader=function(e,t){var n=this;return this.loaders.set(e,t),t.then((function(){n.loaders.delete(e)})),t},t.prototype._getUrlWithFallback=function(e,t){var n=this,r=M().getUrlResponse(e);if(void 0!==r)return Promise.resolve(r);var o=M().getUrlRequest(e);if(void 0!==o)return o;var i=this.loaders.get(e);if(void 0!==i)return i;var u=function(e){return new Promise((function(t,n){var r=new XMLHttpRequest;r.open("GET",e,!0),r.responseType="text",r.withCredentials=!0,r.onload=function(){r.status>=200&&r.status<400?t(r.responseText):n(new Error("Failed to load "+e+", status "+r.status))},r.onerror=function(){return n(new Error("Failed to load "+e))},r.send()}))}(e);return M().addUrlRequest(e,u),u.catch((function(e){return n.onError(e),t}))},t.prototype.load=function(e){var t=this,n=function(e,t){return void 0===e&&(e=""),void 0===t&&(t=!1),t?L.conductAllInScope+"?scope="+encodeURIComponent(e):P.conductAllInScope+"?scope="+encodeURIComponent(e)}(e,this.useNewApi),r=this.useNewApi?A(this.requestContext):"",o=""+this.baseUrl+n+r,i=this._getUrlWithFallback(o,"{}").then((function(e){return E(e)})).then((function(e){return t.useNewApi?e.values:e})).then((function(e){return t.add(e),e}));return this._addLoader(o,i)},t.prototype.conduct=function(e,t){var n=this,r=M().getExperimentValue(e,this.useNewApi);if(void 0!==r)return this._addConductResult(e,r);var o=k(e,t,this.useNewApi),i=this.useNewApi?A(this.requestContext):"",u=""+this.baseUrl+o+i,s=this._getUrlWithFallback(u,null!=t?t:"").then((function(t){return n._addConductResult(e,t)}));return this._addLoader(u,s)},t.prototype.pending=function(){return!!this.loaders.size},t.prototype.ready=function(){return Promise.all(Array.from(this.loaders.values()))},t.prototype._addConductResult=function(e,t){var n,r=this.useNewApi?JSON.parse(t).value:t;return this.add(((n={})[e]=r,n)),Promise.resolve(r)},t}(q),W=function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function u(e){try{c(r.next(e))}catch(e){i(e)}}function s(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(u,s)}c((r=r.apply(e,t||[])).next())}))},V=function(e,t){var n,r,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;u;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,r=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!(o=u.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1],o=i;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(i);break}o[2]&&u.ops.pop(),u.trys.pop();continue}i=t.call(e,u)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}},G=new X({useNewApi:!0});function D(e){return W(this,void 0,Promise,(function(){var t;return V(this,(function(n){switch(n.label){case 0:return[4,G.conduct(e,"false")];case 1:return[2,"true"===(t=n.sent())||"new"===t]}}))}))}var Y=function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function u(e){try{c(r.next(e))}catch(e){i(e)}}function s(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(u,s)}c((r=r.apply(e,t||[])).next())}))},z=function(e,t){var n,r,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;u;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,r=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!(o=u.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1],o=i;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(i);break}o[2]&&u.ops.pop(),u.trys.pop();continue}i=t.call(e,u)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}},H=function(){function e(e){var t=this;this.options=e,this.isChild=window!==window.top,this.emitter=new h,this._isLoaded=!1,this.sessionUrl="",window._fs_ready=function(){return t.onFsReady()}}return e.prototype.getCurrentSessionUrl=function(){return Y(this,void 0,Promise,(function(){return z(this,(function(e){return[2,this.sessionUrl]}))}))},e.prototype.onFsReady=function(){this._isLoaded=!0,this.options.onReady&&this.options.onReady(),this.sendUserDetails(),this.sessionUrl=c(!0)},e.prototype.isLoaded=function(){return this._isLoaded},e.prototype.sendUserDetails=function(){return Y(this,void 0,void 0,(function(){var e;return z(this,(function(t){return(e=d().id)&&a(e),[2]}))}))},e.prototype.addCustomAttribute=function(e,t){var n;this.isLoaded()&&s("wix recorder custom attribute",((n={})[e]=t,n))},e.prototype.shouldTopFrameRecord=function(){return Y(this,void 0,Promise,(function(){return z(this,(function(e){return-1!==window.location.toString().indexOf("alwaysgb")||this.sample()?[2,!0]:window===window.top?[2,this.options.smallApp?this.conductSmallAppExperiment():D("specs.fedinfra.Glassbox")]:[2,!1]}))}))},e.prototype.sample=function(){var e=this.options.sample;return e&&Math.random()<e&&!d().id},e.prototype.conductSmallAppExperiment=function(){return Y(this,void 0,Promise,(function(){return z(this,(function(e){return[2,D("specs.fedinfra.GlassboxSmallApp")]}))}))},e.prototype.isContainerRecording=function(){var e=this;return new Promise((function(t){var n=0,r=function(){5!==n&&(e.emitter.emit("WIX_FULLSTORY_PING",".",window.parent),n++,o=setTimeout(r,1e3))},o=setTimeout(r,0);e.emitter.listenOnce("WIX_FULLSTORY_PONG",(function(){clearTimeout(o),t(!0)}))}))},e.prototype.forceRecording=function(){this.emitter.emit("WIX_FULLSTORY_FORCE_RECORD","",window.parent)},e.prototype.setupForceListeners=function(){var e=this;this.emitter.listen("WIX_FULLSTORY_FORCE_RECORD",(function(){return Y(e,void 0,void 0,(function(){var e,t;return z(this,(function(n){switch(n.label){case 0:return[4,this.conductSmallAppExperiment()];case 1:if(!n.sent())return[2];for(this.load(),e=0;e<window.frames.length;e+=1)t=window.frames[e],this.emitter.emit("WIX_FULLSTORY_PONG","",t);return[2]}}))}))}))},e.prototype.listenPingAndReplyPong=function(){var e=this;this.emitter.listen("WIX_FULLSTORY_PING",(function(t,n){e.isChild&&e.emitter.emit("WIX_FULLSTORY_PING",n,window.parent),e.emitter.emit("WIX_FULLSTORY_PONG","",t.source,t.origin)}))},e.prototype.loadAndListen=function(){this.load(),this.listenPingAndReplyPong()},e.prototype.load=function(){f({orgId:"11CC00",recordCrossDomainIFrames:!0})},e.prototype.forceLoadFullstory=function(){return Y(this,void 0,void 0,(function(){return z(this,(function(e){return this.isChild||this.isLoaded()||this.loadAndListen(),[2]}))}))},e.prototype.setup=function(){return Y(this,void 0,void 0,(function(){return z(this,(function(e){switch(e.label){case 0:return this.isChild?(this.options.smallApp&&this.forceRecording(),[4,this.isContainerRecording()]):[3,2];case 1:return e.sent()&&this.loadAndListen(),[3,4];case 2:return this.setupForceListeners(),[4,this.shouldTopFrameRecord().catch((function(){return!1}))];case 3:e.sent()&&this.loadAndListen(),e.label=4;case 4:return[2]}}))}))},e}(),B=function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function u(e){try{c(r.next(e))}catch(e){i(e)}}function s(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(u,s)}c((r=r.apply(e,t||[])).next())}))},J=function(e,t){var n,r,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;u;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,r=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!(o=u.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1],o=i;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(i);break}o[2]&&u.ops.pop(),u.trys.pop();continue}i=t.call(e,u)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}},K=function(){var e,t={};try{var n=null===(e=null===document||void 0===document?void 0:document.currentScript)||void 0===e?void 0:e.dataset;n&&(t.sample="string"==typeof n.sample?parseFloat(n.sample):void 0,t.smallApp="true"===n.smallApp)}catch(e){}return t}(),Q=new H({onReady:window.__wr_on_ready,sample:K.sample,smallApp:K.smallApp});function Z(e){return B(this,void 0,void 0,(function(){return J(this,(function(t){return[2,Q.addCustomAttribute("label",e)]}))}))}function $(e){return B(this,void 0,Promise,(function(){return J(this,(function(t){return Object.keys(e).map((function(t){return Q.addCustomAttribute(t,e[t])})),[2]}))}))}function ee(e,t){return B(this,void 0,Promise,(function(){return J(this,(function(n){return Q.addCustomAttribute(e,t),[2]}))}))}function te(){return B(this,void 0,Promise,(function(){return J(this,(function(e){return[2,Q.getCurrentSessionUrl()]}))}))}function ne(){return B(this,void 0,Promise,(function(){return J(this,(function(e){return[2,Q.forceLoadFullstory()]}))}))}Q.setup()}])}));
//# sourceMappingURL=app.bundle.min.js.map