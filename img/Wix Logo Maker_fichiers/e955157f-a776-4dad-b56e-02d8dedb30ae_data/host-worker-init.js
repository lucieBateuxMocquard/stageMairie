!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("lodash")):"function"==typeof define&&define.amd?define(["lodash"],t):"object"==typeof exports?exports["host-worker-init"]=t(require("lodash")):e["host-worker-init"]=t(e.lodash)}(this,(function(e){return function(e){var t={};function r(o){if(t[o])return t[o].exports;var n=t[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,r),n.l=!0,n.exports}return r.m=e,r.c=t,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(o,n,function(t){return e[t]}.bind(null,n));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=47)}({0:function(t,r){t.exports=e},19:function(e,t,r){"use strict";function o(e,t){var r;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var o=0;return function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(r=e[Symbol.iterator]()).next.bind(r)}function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,o=new Array(t);r<t;r++)o[r]=e[r];return o}var s=r(0),i=r(48),a="platform_app_";function c(e){for(var t,r={},n=o(Object.keys(e).filter((function(e){return"string"==typeof e&&s.startsWith(e,a)})));!(t=n()).done;){var i=t.value;r[i.replace(a,"")]=e.getItem(i)}return r}e.exports={get:function(e){void 0===e&&(e=!1);var t=e?{localStorage:window.localStorage,sessionStorage:window.sessionStorage,memoryStorage:new i}:{localStorage:new i,sessionStorage:new i,memoryStorage:new i};return{serialize:function(){return JSON.stringify({local:c(t.localStorage),session:c(t.sessionStorage),memory:c(t.memoryStorage)})},setItem:function(e,r,o){t[e].setItem(a+r,o)}}}}},20:function(e,t,r){"use strict";var o=r(0),n=r(19),s=r(49),i=r(3);function a(){return"undefined"==typeof window||window.isPseudoWindow}function c(){var e="undefined"!=typeof window&&!window.clientSideRender,t=a();return{viewMode:this._hostProps.viewMode,locale:this._hostProps.locale,storage:this._storageManager.serialize(),userWarmup:this._hostProps.userWarmup,renderCycle:e&&!t?2:1,renderingEnv:t?"backend":"browser"}}function u(e,t,r,n){var i=0;return a()||(r=r&&window.fetch&&!function(e){return e.navigator&&/Edge|Trident/.test(e.navigator.userAgent)}(window),o.forEach(e,(function(e){if(r&&function(e,t){return o.startsWith(e,t)||o.startsWith(e,"http://localhost")||o.startsWith(e,"https://localhost")}(e.url,n))++i,window.fetch(e.url).then((function(e){return e.arrayBuffer()})).then((function(r){t.postMessage(s.scriptImportMessage(e.url,r),[r])}));else{var a="prefetch-"+e.id;if(!window.document.getElementById(a)){var c=window.document.createElement("link");c.setAttribute("rel","prefetch"),c.setAttribute("href",e.url),c.setAttribute("id",a),window.document.head.appendChild(c)}}}))),i}function d(e,t){if(!this._standbyWorker){var r=new window.Worker(this._hostProps.workerUrl);r.addEventListener("message",this.onmessage),this._standbyWorker=r,l.call(this,!!e,this._hostProps.staticServerUrl,t)}}function l(e,t,r){var n=this._options,a=n.applications,d=n.shouldUseWixCodeScripts,l=this._hostProps,p=l.openExperiments,_=l.baseVersion,f=l.santaBase,g=l.csrfToken,h=this._hostProps.biSessionData;r&&(h=o.assign(h,r));var m={id:"namespaces-sdk",url:this._options.namespacesSdkSource},w={id:"external-components",url:this._options.externalComponentsSource},E={id:"wixCodeNamespacesAndElementorySupport",url:this._options.wixCodeNamespacesAndElementorySupportSource},S={id:"wixCodeViewerApp",url:this._options.wixCodeViewerAppSource},A=u(function(e,t,r,n){var s=o.clone(e);return(n||o.some(t,(function(e){return e.id===i.DATA_BINDING||e.shouldUseWixCodeScripts})))&&(s=s.concat(r)),s.concat(t)}([m,w],a,[E,S],d),this._standbyWorker,e,t),y={sdkParameters:c.call(this),isDebug:this._options.isDebug,santaVersion:_,wixCodeBase:f+"/node_modules/@wix/viewer-platform-worker",sdkSource:"bundled",namespacesSdkSource:m.url,externalComponentsSource:w.url,applications:JSON.stringify(a),wixCodeNamespacesAndElementorySupportSource:E.url,wixCodeViewerAppSource:S.url,biSessionData:h,openExperiments:p,shouldUseWixCodeScripts:d,csrfToken:g},I=s.bootstrapMessage(y,A);this._standbyWorker.postMessage(I)}function p(e){this._workers[e]=this._standbyWorker,this._standbyWorker=null}function _(e,t){var r=this;return e.reduce((function(e,n){var s;return o.assign(e,((s={})[n]=r._hostProps.getUserCodeUrlsDetails(t,n),s))}),{})}function f(e){this.has(e)||(d.call(this),p.call(this,e))}function g(e){var t=this;Object.keys(e).forEach((function(r){var o=e[r];u(o),f.call(t,r),t.send(r,s.loadUserCodeMessage(r,o))}))}function h(e,t){var r=this;e.forEach((function(e){u(t),f.call(r,e),r.send(e,s.loadUserGeneratedApps(e,t))}))}function m(e){var t=this,r=this._workers[e];return!!r&&(delete this._workers[e],this._terminatedWorkers[e]=r,o.defer((function(){t.send(e,s.stopMessage(e)),delete t._terminatedWorkers[e]})),!0)}function w(e){var t=this,r=e.applications,n=e.rootIds,i=e.wixCodeScriptsByRootId,a=e.elementoryArguments,u=e.routersMap,d=e.sdkParameters,l=e.rgisByRootId,p=e.biSessionData;n.forEach((function(e){f.call(t,e);var n=o.assign({},d,c.call(t));t.send(e,s.loadMessage(e,a,i[e],r,n,u,t._storageManager.serialize(),l[e],p))}))}function E(e){var t=this,r=e.type,n=e.key,i=e.value;this._storageManager.setItem(r,n,i);var a=s.storageWasUpdatedMessage(this._storageManager.serialize());o.forEach(this._workers,(function(e,r){t.send(r,a)}))}function S(e){var t=this;return function(r){var n=r.data;o.isMatch(n,{intent:"BROWSER_API",type:"setToStorage"})&&E.call(t,n.data),e(r)}}function A(e){return function(t){var r=t.data,n=t.ports;o.includes(i.PM_RPC_INTENTS,r.intent)&&window.postMessage(r,"*",n),e(t)}}function y(e,t){var r,n,s=[],i=o.find(e,{id:t});return i&&s.push((n=(r=i).appConfig.userScript,{id:r.id,url:n.url,scriptName:n.scriptName,displayName:n.displayName,routerData:r.routerData})),s}var I=function(){function e(e,t,r){this._hostProps=function(e){var t={getElementoryArguments:function(){return null},getUserCodeUrlsDetails:y,loadUserCode:!0,viewMode:"site",locale:"",userWarmup:null,workerUrl:"",santaBase:"",baseVersion:"",openExperiments:[],biSessionData:{}};return o.assign({},t,e)}(e),this._options=r,this._workers={},this._terminatedWorkers={},this._standbyWorker=null,this._storageManager=t}var t=e.prototype;return t.has=function(e){return Boolean(this._workers[e])},t.initialize=function(e,t){this.onmessage=A.call(this,S.call(this,(function(t){var r=t.data;return e(r)}))),d.call(this,t)},t.send=function(e,t,r){var o=s.isStopMessage(t)?this._terminatedWorkers[e]:this._workers[e];o&&(r?o.postMessage(t,r):o.postMessage(t))},t.get=function(e){return this._workers[e]},t.handleWidgetsCommand=function(e,t){var r=this;switch(e.type){case"load_user_code":if(!this._hostProps.loadUserCode)break;g.call(this,_.call(this,e.rootIds,e.widgets));break;case"load_user_generated_apps":h.call(this,e.rootIds,e.applications);break;case"load_widgets":w.call(this,{applications:o.reject(e.widgets,o.overSome({type:"Page"},{type:"Popup"},{type:"masterPage"})),rootIds:e.rootIds,wixCodeScriptsByRootId:_.call(this,e.rootIds,e.widgets),elementoryArguments:this._hostProps.getElementoryArguments(e.widgets),routersMap:e.routersMap,sdkParameters:e.sdkParameters,rgisByRootId:e.rgisByRootId,biSessionData:e.biSessionData});break;case"init_widgets":o.forEach(e.contexts,(function(e,t){if(!r.has(t))throw new Error("Context id "+t+" is not loaded");r.send(t,s.initMessage(t,e))}));break;case"start_widgets":if(!e.contexts)throw new Error("Start message must contain contexts property");o.forEach(e.contexts,(function(e,t){if(!r.has(t))throw new Error("Context id "+t+" is not loaded");r.send(t,s.startMessage(e,t))}));break;case"trigger_onRender":d.call(this,void 0,e.biDataUpdates),this.send(e.contextId,e);break;case"stop_widgets":o.forEach(e.widgetIds,(function(e){m.call(r,e)}));break;case"update_wix_code_model_data_after_login":o.forEach(e.rootIds,(function(t){r.send(t,s.updateWixCodeModelDataAfterLoginMessage(t,r._hostProps.getElementoryArguments(e.widgets)))}));break;case"wix_code_worker_bi_data_update":this.send(e.contextId,s.biUpdateMessage(e));break;default:this.has(e.contextId)&&this.send(e.contextId,e,t)}},t.terminateStandbyWorker=function(){this._standbyWorker&&(this._standbyWorker.terminate(),this._standbyWorker=null)},e}();e.exports={getWorkerManager:function(e,t,r){return new I(e,n.get(t),r)}}},21:function(e,t,r){"use strict";e.exports={get:function(){var e=[],t=null;return{sendOrHoldMessage:function(r,o){t?t(r,o):e.push({message:r,ports:o})},setMessageHandler:function(r){for(t=r;e.length>0;){var o=e.shift();t(o.message,o.ports)}}}}}},3:function(e,t,r){"use strict";e.exports={APPS:{SANTA_MEMBERS:{appDefId:"14cc59bc-f0b7-15b8-e1c7-89ce41d0e0c9"},FORM_BUILDER:{appDefId:"14ce1214-b278-a7e4-1373-00cebd1bef7c"}},WIX_CODE_NAMESPACES_AND_ELEMENTORY_SUPPORT_PATH:"/wixCodeNamespacesAndElementorySupport.min.js",DATA_BINDING:"dataBinding",SEMI_NATIVE_SDK_URL:"http://static.parastorage.com/services/semi-native-sdk/1.3.0/lib/wix.min.js",PM_RPC_INTENTS:{INVOKE:"invoke",RPC_RESOLVE:"rpc-resolve",RPC_REJECT:"rpc-reject",API_DESCRIPTION:"api-desc",INVOKE_FUNCTION:"invoke-func",RESOLVE:"resolve",REJECT:"reject",REQUEST_API:"request-api"},WIX_CODE:{MESSAGE_INTENT:{WIX_CODE_MESSAGE:"WIX_CODE",WIX_CODE_SITE_API:"WIX_CODE_SITE_API",WIX_CODE_APP_API:"WIX_CODE_APP_API",SANTA_APPLICATION_CHANNEL_MESSAGE_RESPONSE:"SANTA_APPLICATION_CHANNEL_MESSAGE_RESPONSE",SANTA_APPLICATION_CHANNEL_MESSAGE:"SANTA_APPLICATION_CHANNEL_MESSAGE"},MESSAGE_TYPE:{CONSOLE:"console",IFRAME_COMMAND:"wix_code_iframe_command",GOOGLE_ANALYTICS:"googleAnalytics",UPDATE_WIX_CODE_MODEL_DATA_AFTER_LOGIN:"update_wix_code_model_data_after_login",REQUEST_API:"REQUEST_API",PERFORMANCE_METRICS_READY:"performance_metrics_ready",PLATFORM_PUBLIC_API_PREFIX:"viewer_platform_public_api_",OPEN_MESSAGE_CHANNEL:"openMessageChannel",SANTA_READY:"santaReady",SANTA_PAGE_CHANGE:"santaPageChange",WIX_CODE_WORKER_BI_DATA_UPDATE:"wix_code_worker_bi_data_update"}}}},47:function(e,t,r){"use strict";var o=r(19),n=r(20),s=r(3),i=r(50),a=r(21);e.exports={storageFacade:o,constants:s,workerMessagesService:i,messageProxy:a,workerManagerFactory:n}},48:function(e,t,r){"use strict";var o=function(){function e(){}var t=e.prototype;return t.setItem=function(e,t){this[e]=String(t)},t.getItem=function(e){return this[e]||null},t.removeItem=function(e){delete this[e]},t.clear=function(){var e=this;Object.keys(this).forEach((function(t){return e.removeItem(t)}))},t.toJSON=function(){return this.storage.toJSON()},e}();e.exports=o},49:function(e,t,r){"use strict";e.exports={bootstrapMessage:function(e,t){return{type:"wix_code_worker_bootstrap",bootstrapArguments:e,fetchScriptsCount:t}},loadUserCodeMessage:function(e,t){return{type:"wix_code_worker_load_user_code",workerId:e,wixCode:t}},loadUserGeneratedApps:function(e,t){return{type:"wix_code_load_user_generated_apps",workerId:e,applications:t}},loadMessage:function(e,t,r,o,n,s,i,a,c){return{type:"wix_code_worker_load",workerId:e,elementoryArguments:t,wixCode:r,applications:o,sdkParameters:n,routersMap:s,storage:i,rgi:a,biSessionData:c}},initMessage:function(e,t){return{type:"wix_code_worker_init",id:e,apps:t}},startMessage:function(e,t){return{type:"wix_code_worker_start",context:e,id:t}},storageWasUpdatedMessage:function(e){return{type:"storageWasUpdated",storageValue:e}},updateWixCodeModelDataAfterLoginMessage:function(e,t){return{type:"update_wix_code_model_data_after_login",workerId:e,elementoryArguments:t}},scriptImportMessage:function(e,t){return{type:"script_import_message",url:e,script:t}},stopMessage:function(e){return{contextId:e,type:"stop"}},isStopMessage:function(e){return"stop"===e.type},biUpdateMessage:function(e){return{type:"wix_code_worker_bi_data_update",updates:e.updates}}}},50:function(e,t,r){"use strict";var o=r(0),n=r(20),s=r(21),i=r(3);e.exports={getAPI:function(){var e,t=s.get(),r=[],a=[],c=!1;function u(e){r.forEach((function(t){t(e)}))}return{init:function(r){var s=function(e){return o.assign({applications:[],fetchScripts:!0},e)}(r),i=s.workerProps,a=s.fetchScripts;(e=n.getWorkerManager(i,function(){try{return window.localStorage.setItem("",""),window.localStorage.removeItem(""),!0}catch(e){return!1}}(),s)).initialize(u,a),t.setMessageHandler((function(t,r){return e.handleWidgetsCommand(t,r)})),c=!0},sendMessage:function(e,r){var n={intent:i.WIX_CODE.MESSAGE_INTENT.WIX_CODE_MESSAGE};(e=o.defaults({},e,n))&&t.sendOrHoldMessage(function(e){return a.reduce((function(e,t){return t(e)}),e)}(e),r)},sendOrHoldMessage:function(e){t.sendOrHoldMessage(e)},registerMessageHandler:function(e){r.push(e)},registerMessageModifier:function(e){a.push(e)},isAppInitiated:function(){return c},getWorkerById:function(t){return e&&e.get(t)},destroyAppsContainer:function(){e&&(e.terminateStandbyWorker(),c=!1,t=s.get())}}}}}})}));
//# sourceMappingURL=host-worker-init.js.map