(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-ac548f56"],{5405:function(e,n,t){"use strict";t.r(n);t("4160"),t("d81d"),t("159b"),t("96cf");var a=t("1da1"),i=t("862d3"),r=t.n(i),o={name:"Amap",data:function(){return{key:"f616f5a0f4e91791da57d63a0f41ee39",mapDemos:null}},mounted:function(){this.mapLoad()},methods:{mapLoad:function(){var e=this;return Object(a.a)(regeneratorRuntime.mark((function n(){var t;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,r.a.load({key:e.key,version:"2.0"});case 3:t=n.sent,e.mapDemos=["normal","whitesmoke","dark","grey"].map((function(e,n){return new t.Map("map-demo-".concat(n),{zoom:17,center:[113.495497,23.451012],mapStyle:"amap://styles/".concat(e)})})),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),e.$notify.error({duration:null,message:"地图加载出错，请尝试刷新页面",description:n.t0});case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))()}},beforeDestroy:function(){var e;null===(e=this.mapDemos)||void 0===e||e.forEach((function(e){e&&e.destroy()})),window.AMap=null,this.mapDemos=null}},s=(t("c7cb"),t("2877")),c=Object(s.a)(o,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("div",{staticClass:"section-card mb-6"},[t("h3",{staticClass:"section-card__title"},[e._v("初始化地图")]),t("p",{staticClass:"mt-6 mb-2"},[e._v("1. 安装 JSAPI Loader 依赖")]),t("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[t("code",{staticClass:"shell"},[e._v(e._s("npm i @amap/amap-jsapi-loader --save"))])]),t("p",{staticClass:"mt-6 mb-2"},[e._v("2. 在 mounted 生命周期函数中或之后进行初始化")]),t("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[t("code",{staticClass:"javascript"},[e._v(e._s('import AMapLoader from \'@amap/amap-jsapi-loader\'\n\nAMapLoader.load({\n    "key": "您申请的key值", // 申请好的Web端开发者Key，首次调用 load 时必填\n    "version": "2.0", // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15\n    "plugins": [], //插件列表\n}).then((AMap) => {\n    map = new AMap.Map(\'container\');\n}).catch(e => {\n    console.log(e);\n})'))])])]),t("div",{staticClass:"section-card"},[t("h3",{staticClass:"section-card__title"},[e._v("自定义地图样式")]),t("p",[e._v("您可以使用官方提供的地图样式，对底图进行设置，可选的样式有：normal/marcaron/graffiti/whitesmoke/dark/fresh/darkblue/blue/light/grey")]),t("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[e._v("        "),t("code",{staticClass:"javascript"},[e._v(e._s("const map = new AMap.Map('container', {\n    mapStyle: 'amap://styles/whitesmoke', // 设置地图的显示样式\n})"))]),e._v("\n      ")]),t("div",{staticClass:"-m-2 flex flex-wrap"},e._l(["标准（normal）","远山黛（whitesmoke）","幻影黑（dark）","雅士灰（grey）"],(function(n,a){return t("div",{key:a,staticClass:"w-1/2 p-4 text-center"},[t("div",{staticClass:"map-demo-style",attrs:{id:"map-demo-"+a}}),t("p",{staticClass:"mt-2 text-xl"},[e._v(e._s(n))])])})),0)])])}),[],!1,null,"3c7a2869",null);n.default=c.exports},"862d3":function(e,n,t){"use strict";e.exports=function(){function e(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function n(n){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?e(Object(a),!0).forEach((function(e){var t=a[e];e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(a)):e(Object(a)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(a,e))}))}return n}if(!window)throw Error("AMap JSAPI can only be used in Browser.");var t="notload",a={key:"",version:"1.4.15",plugins:[]},i=[];return{load:function(e){return new Promise((function(r,o){if("notload"==t){var s=n({},a,{},e),c=s.key,l=s.version;if(s=s.plugins,c){window.AMap&&o("禁止多种API加载方式混用"),a={key:c,version:l,plugins:s},t="loading";var p=document.body||document.head;window.___onAPILoaded=function(e){for(delete window.___onAPILoaded,e?(t="failed",o(e)):(t="loaded",r(window.AMap));i.length;)i.splice(0,1)[0]()};var d=document.createElement("script");d.type="text/javascript",d.src="https://webapi.amap.com/maps?callback=___onAPILoaded&v="+l+"&key="+c+"&plugin="+s.join(","),d.onerror=function(e){t="failed",o(e)},p.appendChild(d)}else o("请填写key")}else if(e.key&&e.key!==a.key)o("多个不一致的 key");else if(e.version&&e.version!==a.version)o("不允许多个版本 JSAPI 混用");else{"failed"==t&&o("前次加载已经失败");var u=[];if(e.plugins)for(c=0;c<e.plugins.length;c+=1)-1==a.plugins.indexOf(e.plugins[c])&&u.push(e.plugins[c]);"loaded"==t?u.length?window.AMap.plugin(u,(function(){r(window.AMap)})):r(window.AMap):"loading"==t&&function(e){"function"==typeof e&&("loaded"==t?e(window.AMap):i.push(e))}((function(){u.length?window.AMap.plugin(u,(function(){r(window.AMap)})):r(window.AMap)}))}}))}}}()},c7cb:function(e,n,t){"use strict";var a=t("f5f6");t.n(a).a},f5f6:function(e,n,t){}}]);