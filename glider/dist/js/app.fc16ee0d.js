(function(t){function e(e){for(var r,i,s=e[0],l=e[1],u=e[2],p=0,f=[];p<s.length;p++)i=s[p],o[i]&&f.push(o[i][0]),o[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);c&&c(e);while(f.length)f.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,s=1;s<n.length;s++){var l=n[s];0!==o[l]&&(r=!1)}r&&(a.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},o={1:0},a=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var c=l;a.push([0,0]),n()})({0:function(t,e,n){t.exports=n("Vtdi")},Vtdi:function(t,e,n){"use strict";n.r(e);n("VRzm");var r=n("Kw5r"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flightplan"},[n("div",{staticClass:"parts"},[n("Part",{attrs:{id:"part1",state:"inactive"}},[n("h1",[t._v("Hello!")])]),n("Part",{attrs:{id:"part2",state:"inactive"}},[n("h1",[t._v("Part Part Part")])]),n("ImageZoom",{attrs:{id:"imagezoom1",zoomLevel:"1",state:"inactive",asset:"http://placekitten.com/400/400"}})],1),n("div",{staticClass:"phases"}),n("div",{staticClass:"places"})])},a=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:["part","part-"+this.id,"state-"+t.state]},[t._t("default")],2)},s=[],l={name:"Part",props:{id:String,state:String}},u=l,c=n("KHd+"),p=Object(c["a"])(u,i,s,!1,null,null,null),f=p.exports,d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:["part","part-"+this.id,"state-"+t.state]},[n("div",{class:this.id+"-control"},[n("button",{on:{click:t.zoomIn}},[t._v("+")]),n("button",{on:{click:t.zoomOut}},[t._v("-")])]),n("img",{style:"zoom:"+t.zoomLevel,attrs:{src:t.asset}})])},v=[],m={name:"ImageZoom",extends:f,props:{id:String,state:String,asset:String},data:function(){return{zoomLevel:1}},methods:{zoomIn:function(t){this.zoomLevel++},zoomOut:function(){this.zoomLevel>1&&this.zoomLevel--}}},h=m,g=Object(c["a"])(h,d,v,!1,null,null,null),b=g.exports,_={name:"FlightPlan",components:{Part:f,ImageZoom:b}},y=_,O=Object(c["a"])(y,o,a,!1,null,null,null),P=O.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(P)}}).$mount("#app")}});
//# sourceMappingURL=app.fc16ee0d.js.map