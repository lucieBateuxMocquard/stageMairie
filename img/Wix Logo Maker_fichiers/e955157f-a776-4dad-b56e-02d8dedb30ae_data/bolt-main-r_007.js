(this.webpackJsonp=this.webpackJsonp||[]).push([[3],{149:function(e,i,t){"use strict";t(458);var n=p(t(1019)),r=p(t(460)),o=p(t(461)),a=p(t(462)),d=p(t(25)),u=p(t(63)),c=t(239),f=p(t(463));function p(e){return e&&e.__esModule?e:{default:e}}function s(e){for(var i=1;i<arguments.length;i++){var t=null!=arguments[i]?arguments[i]:{},n=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.forEach(function(i){l(e,i,t[i])})}return e}function l(e,i,t){return i in e?Object.defineProperty(e,i,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[i]=t,e}function w(e,i){if(null==e)return{};var t,n,r=function(e,i){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],i.indexOf(t)>=0||(r[t]=e[t]);return r}(e,i);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],i.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var m=(0,d.default)(window),g=(0,u.default)(window.rendererModel.runningExperiments,m,"viewer"),b=function(e){var i=g[e];return!(!i||"old"===i||"false"===i)},v=window.serviceTopology,h={staticMediaUrl:v.staticMediaUrl,mediaRootUrl:v.mediaRootUrl,experiments:{},isViewerMode:!window.rendererModel.previewMode,devicePixelRatio:/iemobile/i.test(navigator.userAgent)?Math.round(window.screen.availWidth/(window.screen.width||window.document.documentElement.clientWidth)):window.devicePixelRatio},I={init:function(e){return new a.default(e)}},x={init:function(e){return window.addEventListener("resize",e)}},M={bi:[],tpaBi:[]},D={initialized:!1,biData:{},reportBI:function(e,i){M.bi.push({reportDef:e,params:i})},reportTpaBiEvent:function(e){var i=e.reportDef,t=e.params,n=e.compId,r=e.isWixTPA,o=e.widgetId,a=e.appDefinitionId;if(this.initialized){var d=this.biData.getTime(),u={compId:n,pageId:this.biData.getPageId(),pageNo:this.biData.getPageNumber(),ssr:!1,loadingTime:d.loadingTime,totalLoadingTime:d.totalLoadingTime};r?(u.widgetId=o,u.appDefinitionId=a):t&&t.widgetId&&t.appDefinitionId||(u.externalWidgetId=o,u.externalAppDefinitionId=a);var c=s({},u,t);this.reportBI(i,c)}else M.tpaBi.push({reportDef:i,params:t,compId:n,isWixTPA:r,widgetId:o,appDefinitionId:a})}},y={mutationService:o.default,biService:D,isExperimentOpen:b},O=s({getMediaDimensionsByEffect:function(e,i,t,n){var r=f.default[e]||{},o=r.getMediaDimensions,a=w(r,["getMediaDimensions"]);return o?s({},o(i,t,n),a):s({width:i,height:t},a)}},y),B={bi:function(e,i){e&&i&&(D.biData=e,D.reportBI=i,D.initialized=!0,M.bi.forEach(function(e){return D.reportBI(e.reportDef,e.params)}),M.bi=[],M.tpaBi.forEach(function(e){return D.reportTpaBiEvent(e)}),M.tpaBi=[])}},P=n.default.init({resizeService:I,windowResizeService:x});P.defineWixDropdownMenu(y),P.defineWixBgImage(O,h),P.defineWixBgMedia(O,h),P.defineWixImage(O,h);var W={prefersReducedMotion:(0,c.prefersReducedMotion)()&&b("bv_reducedMotion"),staticVideoUrl:v.staticVideoUrl};P.defineWixVideo(y,W),e.exports={defineWixIframe:P.defineWixIframe.bind(null,y),setServices:B,loadedModules:{imageClientApi:r.default}}},239:function(e,i,t){"use strict";e.exports={prefersReducedMotion:function(e){return!(!(e=e||("undefined"!=typeof window?window:void 0))||!e.matchMedia)&&e.matchMedia("(prefers-reduced-motion: reduce)").matches}}}}]);
//# sourceMappingURL=bolt-main-r.custom-elements.js.map