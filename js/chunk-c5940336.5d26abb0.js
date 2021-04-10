(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-c5940336"],{"0c58":function(t,e,s){},"239d":function(t,e,s){"use strict";var a=s("0c58");s.n(a).a},"2cf7":function(t,e,s){"use strict";var a=s("45fb");s.n(a).a},"45fb":function(t,e,s){},5567:function(t,e,s){"use strict";s.r(e);var a={name:"TodoBar",data:function(){return{filters:[{id:"1",label:"所有任务",icon:"menu"},{id:"2",label:"已完成",icon:"check"},{id:"3",label:"已加星标",icon:"star"},{id:"4",label:"回收站",icon:"trash"}],tags:[{id:"5",label:"前端开发",color:"primary"},{id:"6",label:"后端开发",color:"success"},{id:"7",label:"UI 设计",color:"warning"},{id:"8",label:"架构设计",color:"danger"}]}},computed:{selectedKeys:function(){return this.$store.state.todo.barKey}},methods:{onOpenDrawer:function(){this.$store.commit("todo/SET_TODO_DRAWER_STATUS",!0)},onClickMenuItem:function(t){var e=t.key;this.$store.commit("todo/SET_TODO_BAR_KEY",e)}}},r=(s("2cf7"),s("2877")),i=Object(r.a)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"px-6 py-6"},[s("a-button",{staticClass:"w-full flex justify-center items-center",attrs:{size:"large",type:"primary"},on:{click:t.onOpenDrawer}},[s("feather",{staticClass:"mr-1",attrs:{size:"20",type:"plus"}}),t._v(" 创建任务 ")],1)],1),s("perfect-scrollbar",{staticClass:"select-none overflow-hidden",staticStyle:{height:"calc(100% - 88px)"},attrs:{options:{suppressScrollX:!0,maxScrollbarLength:160,wheelSpeed:.6}}},[s("a-menu",{staticClass:"todo-bar-menu",attrs:{mode:"inline","selected-keys":t.selectedKeys},on:{click:t.onClickMenuItem}},[s("a-menu-item",{staticClass:"m-0 bg-white cursor-default",attrs:{disabled:""}},[t._v(" 查看任务 ")]),t._l(t.filters,(function(e){var a=e.id,r=e.label,i=e.icon;return s("a-menu-item",{key:a},[s("div",{staticClass:"flex items-center"},[s("feather",{staticClass:"side-menu-icon anticon",attrs:{size:"20",type:i}}),s("span",{staticStyle:{"margin-top":"1px"}},[t._v(t._s(r))])],1)])})),s("a-menu-item",{staticClass:"mt-6 mb-0 bg-white cursor-default",attrs:{disabled:""}},[t._v(" 任务标签 ")]),t._l(t.tags,(function(e){var a=e.id,r=e.label,i=e.color;return s("a-menu-item",{key:a},[s("div",{staticClass:"flex justify-between items-center"},[s("span",{staticStyle:{"margin-top":"1px"}},[t._v(t._s(r))]),s("div",{staticClass:"w-2 h-2 mr-2 rounded-full",class:"bg-"+i})])])}))],2)],1)],1)}),[],!1,null,"160bf077",null).exports,o={name:"FlipList",props:{tag:{type:String,default:"ul"}}},n=(s("239d"),{name:"TodoList",components:{FlipList:Object(r.a)(o,(function(){var t=this.$createElement;return(this._self._c||t)("transition-group",{attrs:{name:"flip-list",tag:this.tag}},[this._t("default")],2)}),[],!1,null,null,null).exports},data:function(){return{searchInputText:"搜索任务...",tags:{1:{text:"前端开发",color:"primary"},2:{text:"后端开发",color:"success"},3:{text:"UI 设计",color:"warning"},4:{text:"架构设计",color:"danger"}}}},computed:{filterItems:function(){return this.$store.getters["todo/filterItems"]},currEditItem:function(){return this.$store.state.todo.currEditTodo},isDrawerOpened:function(){return this.$store.state.todo.isTodoDrawerOpened}},methods:{onOpenDrawer:function(t){t.id!==this.currEditItem.id?(this.$store.commit("todo/SET_CURR_EDIT_TODO",t),this.$store.commit("todo/SET_TODO_DRAWER_STATUS",!0)):this.$store.commit("todo/SET_TODO_DRAWER_STATUS",!this.isDrawerOpened)}}}),c=(s("b701"),Object(r.a)(n,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"relative"},[s("div",[s("a-input",{staticClass:"search-input",attrs:{size:"large",placeholder:t.searchInputText},on:{focus:function(e){t.searchInputText="请输入任务关键字..."},blur:function(e){t.searchInputText="搜索任务..."}},scopedSlots:t._u([{key:"prefix",fn:function(){return[s("feather",{attrs:{size:"20",type:"search"}})]},proxy:!0}])})],1),s("perfect-scrollbar",{staticClass:"todo-list",attrs:{options:{maxScrollbarLength:160,wheelSpeed:.6}}},[t.filterItems.length>0?s("flip-list",{staticStyle:{"min-width":"800px"}},t._l(t.filterItems,(function(e){return s("li",{key:e.id,staticClass:"todo-list__item",class:{"todo-list__item-active":e.id===t.currEditItem.id},on:{click:function(s){return t.onOpenDrawer(e)}}},[s("a-checkbox",{staticClass:"mr-4",on:{click:function(t){t.stopPropagation()}},model:{value:e.done,callback:function(s){t.$set(e,"done",s)},expression:"todo.done"}}),s("div",{staticClass:"flex-1 truncate"},[t._v(t._s(e.title))]),s("div",{staticClass:"ml-auto flex items-center flex-wrap"},[s("div",{staticClass:"flex-1 flex items-center select-none"},t._l(e.tag,(function(e){return s("div",{key:e,staticClass:"ml-2 px-2 py-1 rounded-lg text-sm",class:[t.tags[e].color,"bg-"+t.tags[e].color+"-light"]},[t._v(t._s(t.tags[e].text))])})),0),s("feather",{staticClass:"ml-2 transition",class:e.star?"warning":"text-gray-500",attrs:{size:"20",type:"star"},on:{click:function(t){t.stopPropagation(),e.star=!e.star}}})],1)],1)})),0):s("a-empty",{staticClass:"h-full flex flex-col justify-center items-center"})],1)],1)}),[],!1,null,"4ba131fb",null).exports),l=s("cd3f"),u=s.n(l),d={name:"TodoDrawer",computed:{isTodoDrawerOpened:function(){return this.$store.state.todo.isTodoDrawerOpened}},data:function(){return{currTodo:{}}},watch:{"$store.state.todo.currEditTodo":{handler:function(t){this.currTodo=u()(t)},immediate:!0}},methods:{onCloseDrawer:function(){this.$store.commit("todo/SET_TODO_DRAWER_STATUS",!1)}}},f=(s("c6cf1"),{name:"Todo",components:{TodoBar:i,TodoList:c,TodoDrawer:Object(r.a)(d,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("a-drawer",{staticClass:"relative",attrs:{width:"400",closable:!1,mask:!1,"get-container":!1,"wrap-style":{position:"absolute"},visible:t.isTodoDrawerOpened},scopedSlots:t._u([{key:"title",fn:function(){return[s("div",{staticClass:"flex items-center"},[t.currTodo.title?s("div",{staticClass:"px-6 py-2 flex items-center primary hover:text-white bg-primary-light hover:bg-primary transition rounded-md text-sm cursor-pointer",on:{click:function(e){return t.$message.success("已完成一项任务，太棒了！")}}},[s("feather",{staticClass:"mr-1",attrs:{size:"18",type:"check"}}),t._v(" 设为已完成 ")],1):t._e(),s("div",{staticClass:"ml-auto flex items-center text-gray-600"},[s("feather",{staticClass:"ml-2 cursor-pointer",attrs:{size:"18",type:"link"}}),s("a-dropdown",{attrs:{trigger:["click"]},scopedSlots:t._u([{key:"overlay",fn:function(){return[s("a-menu",t._l([{text:"添加到其他项目"},{text:"复制为新任务"},{text:"丢弃该任务"}],(function(e,a){var r=e.text;return s("a-menu-item",{key:a,staticClass:"text-center text-sm text-gray-700",on:{click:function(e){return t.$message.success(r)}}},[t._v(" "+t._s(r)+" ")])})),1)]},proxy:!0}])},[s("feather",{staticClass:"ml-2 cursor-pointer",attrs:{size:"20",type:"more-vertical"}})],1),s("feather",{staticClass:"ml-2 cursor-pointer",attrs:{size:"21",type:"x"},on:{click:t.onCloseDrawer}})],1)])]},proxy:!0}])},[s("div",{staticClass:"sec"},[s("h4",{staticClass:"sec__title"},[t._v("标题信息")]),s("a-textarea",{attrs:{placeholder:"请输入标题信息","auto-size":{minRows:2,maxRows:6}},model:{value:t.currTodo.title,callback:function(e){t.$set(t.currTodo,"title",e)},expression:"currTodo.title"}})],1),s("div",{staticClass:"sec"},[s("h4",{staticClass:"sec__title"},[t._v("任务周期")]),s("a-range-picker",{staticClass:"w-full",model:{value:t.currTodo.date,callback:function(e){t.$set(t.currTodo,"date",e)},expression:"currTodo.date"}})],1),s("div",{staticClass:"sec"},[s("h4",{staticClass:"sec__title"},[t._v("任务标签")]),s("a-select",{staticClass:"w-full text-base",attrs:{mode:"tags",size:"large",placeholder:"请选择任务标签（可选）"},model:{value:t.currTodo.tag,callback:function(e){t.$set(t.currTodo,"tag",e)},expression:"currTodo.tag"}},t._l([{id:"1",label:"前端开发"},{id:"2",label:"后端开发"},{id:"3",label:"UI 设计"},{id:"4",label:"架构设计"}],(function(e){var a=e.id,r=e.label;return s("a-select-option",{key:a},[t._v(" "+t._s(r)+" ")])})),1)],1),s("div",{staticClass:"absolute right-0 bottom-0 mr-3 mb-3"},[s("a-button",{attrs:{type:"primary"},on:{click:t.onCloseDrawer}},[t._v(" "+t._s(t.currTodo.title?"完成编辑":"创建任务")+" ")])],1)])}),[],!1,null,"663fe9d2",null).exports}}),m=(s("f602"),Object(r.a)(f,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"todo-app"},[e("div",{staticClass:"left"},[e("todo-bar",{staticClass:"h-full"})],1),e("div",{staticClass:"right"},[e("todo-list",{staticClass:"h-full"})],1),e("todo-drawer")],1)}),[],!1,null,"3f437196",null));e.default=m.exports},"80ee":function(t,e,s){},9671:function(t,e,s){},b701:function(t,e,s){"use strict";var a=s("c342");s.n(a).a},c342:function(t,e,s){},c6cf1:function(t,e,s){"use strict";var a=s("80ee");s.n(a).a},f602:function(t,e,s){"use strict";var a=s("9671");s.n(a).a}}]);