(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{17:function(t,e,n){},27:function(t,e,n){"use strict";n.r(e);var c=n(0),i=n.n(c),r=n(5),o=n.n(r),u=(n(17),n(3)),l=n(2),a=n(12),d=n(4),s=function(t,e){switch(e.type){case"ADD_TODO":return{id:e.id,text:e.text,completed:!1};case"TOGGLE_TODO":return t.id!==e.id?t:Object(d.a)(Object(d.a)({},t),{},{completed:!t.completed});default:return t}},O=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"ADD_TODO":return[].concat(Object(a.a)(t),[s(void 0,e)]);case"TOGGLE_TODO":return t.map((function(t){return s(t,e)}));default:return t}},j=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"SHOW_ALL",e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"SET_VISIBILITY_FILTER":return e.filter;default:return t}},f=Object(l.c)({todos:O,visibilityFilter:j}),b=0,h=function(t){return{type:"ADD_TODO",id:b++,text:t}},v=n(1),p=function(t){var e,n=t.dispatch;return Object(v.jsxs)("div",{children:[Object(v.jsx)("input",{ref:function(t){e=t}}),Object(v.jsx)("button",{onClick:function(){n(h(e.value)),e.value=""},children:"Add Todo"})]})},m=p=Object(u.b)()(p),x=function(t){return{type:"SET_VISIBILITY_FILTER",filter:t}},T=function(t){var e=t.active,n=t.children,c=t.onClick;return e?Object(v.jsx)("span",{children:n}):Object(v.jsx)("a",{href:"#",onClick:function(t){t.preventDefault(),c()},children:n})},y=Object(u.b)((function(t,e){return{active:e.filter===t.visibilityFilter}}),(function(t,e){return{onClick:function(){t(x(e.filter))}}}))(T),_=function(){return Object(v.jsxs)("p",{children:["Show:"," ",Object(v.jsx)(y,{filter:"SHOW_ALL",children:"All"}),", ",Object(v.jsx)(y,{filter:"SHOW_ACTIVE",children:"Active"}),", ",Object(v.jsx)(y,{filter:"SHOW_COMPLETED",children:"Completed"})]})},D=function(t,e){switch(e){case"SHOW_ALL":return t;case"SHOW_COMPLETED":return t.filter((function(t){return t.completed}));case"SHOW_ACTIVE":return t.filter((function(t){return!t.completed}))}},L=function(t){return{type:"TOGGLE_TODO",id:t}},C=function(t){var e=t.onClick,n=t.completed,c=t.text;return Object(v.jsx)("li",{onClick:e,style:{textDecoration:n?"line-through":"none"},children:c})},E=function(t){var e=t.todos,n=t.onTodoClick;return Object(v.jsx)("ul",{children:e.map((function(t){return Object(v.jsx)(C,Object(d.a)(Object(d.a)({},t),{},{onClick:function(){return n(t.id)}}),t.id)}))})},S=Object(u.b)((function(t){return{todos:D(t.todos,t.visibilityFilter)}}),(function(t){return{onTodoClick:function(e){t(L(e))}}}))(E),k=function(){return Object(v.jsxs)("div",{children:[Object(v.jsx)(m,{}),Object(v.jsx)(S,{}),Object(v.jsx)(_,{})]})};var w=function(){return Object(v.jsx)(u.a,{store:Object(l.e)(f),children:Object(v.jsx)(k,{})})},A=n(6),I=Object(A.b)({name:"counter",initialState:{value:0},reducers:{increment:function(t){t.value+=1},decrement:function(t){t.value-=1},incrementByAmount:function(t,e){t.value+=e.payload}}}),g=I.actions,W=(g.increment,g.decrement,g.incrementByAmount,I.reducer),H=Object(A.a)({reducer:{counter:W}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(Object(v.jsx)(i.a.StrictMode,{children:Object(v.jsx)(u.a,{store:H,children:Object(v.jsx)(w,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}},[[27,1,2]]]);
//# sourceMappingURL=main.bd91c927.chunk.js.map