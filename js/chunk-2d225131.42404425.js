(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-2d225131"],{e39f:function(t,e,o){"use strict";o.r(e);var r={name:"AntIcon",data:function(){return{icons:[{type:"deployment-unit"},{type:"cloud-upload"},{type:"usergroup-delete"},{type:"file-protect"},{type:"smile",theme:"twoTone"},{type:"heart",theme:"twoTone",twoToneColor:"#ff5b5c"},{type:"check-circle",theme:"twoTone",twoToneColor:"#39da8a"}]}}},s=o("2877"),i=Object(s.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",this._l(this.icons,(function(t){var o=t.type,r=t.theme;void 0===r&&(r="outlined");var s=t.twoToneColor;return e("a-icon",{key:o,staticClass:"mr-6 text-2xl",attrs:{type:o,theme:r,"two-tone-color":s}})})),1)}),[],!1,null,null,null).exports,n={name:"FeatherIcon",data:function(){return{icons:[{type:"sliders"},{type:"headphones"},{type:"navigation"},{type:"gitlab",size:25},{type:"at-sign",size:30},{type:"twitter",size:35,strokeWidth:1.6},{type:"thumbs-up",size:40,stroke:"#fdac41",fill:"rgba(253, 172, 65, .15)"}]}}},l=Object(s.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",this._l(this.icons,(function(t){var o=t.type,r=t.stroke,s=t.fill,i=t.strokeWidth,n=t.size;return void 0===n&&(n=22),e("feather",{key:o,staticClass:"mr-6",attrs:{type:o,size:n,stroke:r,fill:s,"stroke-width":i}})})),1)}),[],!1,null,null,null).exports,a={size:"1em",strokeWidth:4,strokeLinecap:"round",strokeLinejoin:"round",rtl:!1,theme:"outline",colors:{outline:{fill:"#333",background:"transparent"},filled:{fill:"#333",background:"#FFF"},twoTone:{fill:"#333",twoTone:"#2F88FF"},multiColor:{outStrokeColor:"#333",outFillColor:"#2F88FF",innerStrokeColor:"#FFF",innerFillColor:"#43CCF8"}},prefix:"i"};function c(t,e,o){return{name:"icon-"+t,inject:["ICON_CONFIGS"],props:["size","strokeWidth","strokeLinecap","strokeLinejoin","theme","fill","spin"],data:function(){return{id:"icon-"+(4294967296*(1+Math.random())|0).toString(16).substring(1)}},inheritAttrs:!1,render:function(r){var s=this.size,i=this.strokeWidth,n=this.strokeLinecap,l=this.strokeLinejoin,c=this.theme,h=this.fill,p=this.id,k=this.spin,u=this.ICON_CONFIGS,d=void 0===u?a:u,f=function(t,e,o){var r="string"==typeof e.fill?[e.fill]:e.fill||[],s=[];switch(e.theme||o.theme){case"outline":s.push("string"==typeof r[0]?r[0]:"currentColor"),s.push("transparent"),s.push("string"==typeof r[0]?r[0]:"currentColor"),s.push("transparent");break;case"filled":s.push("string"==typeof r[0]?r[0]:"currentColor"),s.push("string"==typeof r[0]?r[0]:"currentColor"),s.push("#FFF"),s.push("#FFF");break;case"two-tone":s.push("string"==typeof r[0]?r[0]:"currentColor"),s.push("string"==typeof r[1]?r[1]:o.colors.twoTone.twoTone),s.push("string"==typeof r[0]?r[0]:"currentColor"),s.push("string"==typeof r[1]?r[1]:o.colors.twoTone.twoTone);break;case"multi-color":s.push("string"==typeof r[0]?r[0]:"currentColor"),s.push("string"==typeof r[1]?r[1]:o.colors.multiColor.outFillColor),s.push("string"==typeof r[2]?r[2]:o.colors.multiColor.innerStrokeColor),s.push("string"==typeof r[3]?r[3]:o.colors.multiColor.innerFillColor)}return{size:e.size||o.size,strokeWidth:e.strokeWidth||o.strokeWidth,strokeLinecap:e.strokeLinecap||o.strokeLinecap,strokeLinejoin:e.strokeLinejoin||o.strokeLinejoin,colors:s,id:t}}(p,{size:s,strokeWidth:i,strokeLinecap:n,strokeLinejoin:l,theme:c,fill:h},d),m=[d.prefix+"-icon"];return m.push(d.prefix+"-icon-"+t),e&&d.rtl&&m.push(d.prefix+"-icon-rtl"),k&&m.push(d.prefix+"-icon-spin"),r("span",{class:m.join(" ")},[o(r,f)])}}}var h=c("camera",!0,(function(t,e){return t("svg",{attrs:{width:e.size,height:e.size,viewBox:"0 0 48 48",fill:"none"}},[t("path",{attrs:{d:"M15 12L18 6H30L33 12H15Z",fill:e.colors[1],stroke:e.colors[0],"stroke-width":e.strokeWidth,"stroke-linejoin":e.strokeLinejoin}}),t("rect",{attrs:{x:"4",y:"12",width:"40",height:"30",rx:"3",fill:e.colors[1],stroke:e.colors[0],"stroke-width":e.strokeWidth,"stroke-linejoin":e.strokeLinejoin}}),t("path",{attrs:{d:"M24 35C28.4183 35 32 31.4183 32 27C32 22.5817 28.4183 19 24 19C19.5817 19 16 22.5817 16 27C16 31.4183 19.5817 35 24 35Z",fill:e.colors[3],stroke:e.colors[2],"stroke-width":e.strokeWidth,"stroke-linejoin":e.strokeLinejoin}})])})),p=c("unlock",!0,(function(t,e){return t("svg",{attrs:{width:e.size,height:e.size,viewBox:"0 0 48 48",fill:"none"}},[t("rect",{attrs:{x:"7",y:"22.0476",width:"34",height:"22",rx:"2",fill:e.colors[1],stroke:e.colors[0],"stroke-width":e.strokeWidth,"stroke-linejoin":e.strokeLinejoin}}),t("path",{attrs:{d:"M14 22V14.0047C13.9948 8.87022 17.9227 4.56718 23.0859 4.05117C28.249 3.53516 32.9673 6.97408 34 12.0059",stroke:e.colors[0],"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin}}),t("path",{attrs:{d:"M24 30V36",stroke:e.colors[2],"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin}})])})),k=c("experiment",!0,(function(t,e){return t("svg",{attrs:{width:e.size,height:e.size,viewBox:"0 0 48 48",fill:"none"}},[t("path",{attrs:{d:"M12 4H36",stroke:e.colors[0],"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap}}),t("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M18.019 4V15.0386L6.27443 39.3014C5.48692 40.9283 6.16737 42.8855 7.79427 43.673C8.23882 43.8882 8.7263 44 9.22019 44H38.7875C40.595 44 42.0602 42.5347 42.0602 40.7273C42.0602 40.2348 41.9491 39.7488 41.7351 39.3052L30.0282 15.0386V4H18.019Z",stroke:e.colors[0],"stroke-width":e.strokeWidth,"stroke-linejoin":e.strokeLinejoin}}),t("path",{attrs:{d:"M10.9604 29.9998C13.1241 31.3401 15.2893 32.0103 17.4559 32.0103C19.6226 32.0103 21.7908 31.3401 23.9605 29.9998C26.1088 28.6735 28.2664 28.0103 30.433 28.0103C32.5997 28.0103 34.7755 28.6735 36.9604 29.9998",stroke:e.colors[0],"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap}})])})),u=c("home",!0,(function(t,e){return t("svg",{attrs:{width:e.size,height:e.size,viewBox:"0 0 48 48",fill:"none"}},[t("path",{attrs:{d:"M9 18V42H39V18L24 6L9 18Z",fill:e.colors[1]}}),t("path",{attrs:{d:"M9 42V18L4 22L24 6L44 22L39 18V42H9Z",stroke:e.colors[0],"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin}}),t("path",{attrs:{d:"M19 29V42H29V29H19Z",fill:e.colors[3],stroke:e.colors[2],"stroke-width":e.strokeWidth,"stroke-linejoin":e.strokeLinejoin}}),t("path",{attrs:{d:"M9 42H39",stroke:e.colors[0],"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap}})])})),d=o("5530"),f=Object(d.a)({},a),m={name:"IconPark",provide:function(){return{ICON_CONFIGS:f}},components:{Home:u,Experiment:k,Unlock:p,Camera:h}},C={name:"IconLib",components:{AntIcon:i,FeatherIcon:l,IconPark:Object(s.a)(m,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("home",{staticClass:"mr-6",attrs:{size:"24"}}),e("experiment",{staticClass:"mr-6",attrs:{size:"24"}}),e("unlock",{staticClass:"mr-6",attrs:{size:"24"}}),e("camera",{attrs:{theme:"multi-color",size:"35",fill:["#333","#6485ff","#FFF","#43CCF8"]}})],1)}),[],!1,null,null,null).exports}},w=Object(s.a)(C,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{staticClass:"section-card mb-8"},[e("h3",{staticClass:"section-card__title flex items-center text-xl"},[this._v(" Antd Icon "),e("a",{staticClass:"mt-1 ml-2",attrs:{target:"_blank",rel:"noopener noreferrer",href:"https://www.antdv.com/components/icon-cn/"}},[e("feather",{attrs:{type:"external-link",size:"18"}})],1)]),e("p",{staticClass:"mb-6 text-gray-600"},[this._v("由 Ant Design Vue 组件库提供的语义化矢量图形")]),e("ant-icon")],1),e("div",{staticClass:"section-card mb-8"},[e("h3",{staticClass:"section-card__title flex items-center text-xl"},[this._v(" Feather Icon "),e("a",{staticClass:"mt-1 ml-2",attrs:{target:"_blank",rel:"noopener noreferrer",href:"https://feathericons.com/"}},[e("feather",{attrs:{type:"external-link",size:"18"}})],1)]),e("p",{staticClass:"mb-6 text-gray-600"},[this._v("简单漂亮的开源图标，注重简洁性，一致性和灵活性")]),e("feather-icon")],1),e("div",{staticClass:"section-card mb-8"},[e("h3",{staticClass:"section-card__title flex items-center text-xl"},[this._v(" Icon Park "),e("a",{staticClass:"mt-1 ml-2",attrs:{target:"_blank",rel:"noopener noreferrer",href:"http://iconpark.bytedance.com/official"}},[e("feather",{attrs:{type:"external-link",size:"18"}})],1)]),e("p",{staticClass:"mb-6 text-gray-600"},[this._v("具备丰富的分类、更轻量的代码和更灵活的使用场景；致力于构建高质量、统一化、可定义的图标资源，让大多数人都能够选择适合自己的风格图标")]),e("icon-park")],1),this._m(0)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"section-card mb-8"},[e("h3",{staticClass:"section-card__title text-xl"},[this._v("更多优秀的图标库")]),e("a",{staticClass:"primary",attrs:{href:"https://ionicons.com/",target:"_blank",rel:"noopener noreferrer"}},[this._v("Ionicons")]),this._v(" 、 "),e("a",{staticClass:"primary",attrs:{href:"https://boxicons.com/",target:"_blank",rel:"noopener noreferrer"}},[this._v("Boxicons")])])}],!1,null,null,null);e.default=w.exports}}]);