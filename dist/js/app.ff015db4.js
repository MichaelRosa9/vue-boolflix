(function(t){function e(e){for(var a,o,s=e[0],c=e[1],u=e[2],p=0,f=[];p<s.length;p++)o=s[p],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&f.push(r[o][0]),r[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);l&&l(e);while(f.length)f.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,s=1;s<n.length;s++){var c=n[s];0!==r[c]&&(a=!1)}a&&(i.splice(e--,1),t=o(o.s=n[0]))}return t}var a={},r={app:0},i=[];function o(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=a,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(n,a,function(e){return t[e]}.bind(null,a));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var l=c;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},1298:function(t,e,n){"use strict";n("fdd5")},"2c79":function(t,e,n){"use strict";n("7956")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("header",[n("div",{staticClass:"logo"}),n("Nav",{on:{searchText:function(e){return t.searchShow(e)},categorySelect:t.categorySelect}})],1),n("main",[n("div",{staticClass:"container"},t._l(t.shows,(function(e){return n("Thumbnail",{key:e.id,staticClass:"thumbnail",attrs:{show:e,category:t.category}})})),1)])])},i=[],o=n("bc3a"),s=n.n(o),c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.inputText,expression:"inputText"}],attrs:{type:"text"},domProps:{value:t.inputText},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.searchText(t.inputText)},input:function(e){e.target.composing||(t.inputText=e.target.value)}}}),n("button",{on:{click:function(e){return t.searchText(t.inputText)}}},[t._v("search")]),n("div",{staticClass:"category"},[n("h3",[t._v("Category")]),n("ul",[n("li",{on:{click:function(e){return t.select("tv")}}},[n("a",{attrs:{href:"#"}},[t._v("tv")])]),n("li",{on:{click:function(e){return t.select("movie")}}},[n("a",{attrs:{href:"#"}},[t._v("movie")])])])])])},u=[],l={name:"Nav",props:{},data:function(){return{inputText:""}},methods:{searchText:function(){this.$emit("searchText",this.inputText)},select:function(t){this.$emit("categorySelect",t)}}},p=l,f=(n("1298"),n("2877")),h=Object(f["a"])(p,c,u,!1,null,"4f63aa8b",null),v=h.exports,d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"show-wrap",on:{click:function(e){t.infoActive=!t.infoActive}}},[null!==t.show.poster_path?n("img",{attrs:{src:t.imgBaseURL+t.width500+t.show.poster_path,alt:t.show.title}}):n("div",{staticClass:"not-found"},[n("h4",[t._v(" immage unavailable")])]),n("transition",{attrs:{name:"fade"}},[t.infoActive?n("div",{staticClass:"info-wrap"},[n("div",{staticClass:"info"},[n("h3",[t._v(" "+t._s(t.show.title||t.show.name)+" ")]),n("h4",[t._v(" "+t._s(t.show.originaltitle||t.show.originalname)+" ")]),n("div",{staticClass:"lang-flag"},[n("flag",{attrs:{iso:t.show.original_language}})],1),"en"===t.show.original_language?n("div",[n("flag",{attrs:{iso:"gb"}})],1):"ja"===t.show.original_language?n("div",[n("flag",{attrs:{iso:"jp"}})],1):t._e(),n("div",{staticClass:"stars"},[t._l(t.convertRatingTo5,(function(t){return n("span",{key:t+"full-star"},[n("i",{staticClass:"fas fa-star"})])})),t._l(t.emptyStars,(function(t){return n("span",{key:t+"empty-star"},[n("i",{staticClass:"far fa-star"})])}))],2)])]):t._e()])],1)},g=[],m={name:"Thumbnail",props:{show:Object,category:String},data:function(){return{imgBaseURL:"https://image.tmdb.org/t/p/",width500:"w500",rating:5,infoActive:!1}},computed:{convertRatingTo5:function(){var t=10,e=parseInt(Math.ceil(this.rating*this.show.vote_average)/t);return e},emptyStars:function(){var t=5,e=parseInt(t-this.convertRatingTo5);return e}}},y=m,b=(n("2c79"),Object(f["a"])(y,d,g,!1,null,"6fbcc598",null)),w=b.exports,_={name:"App",components:{Nav:v,Thumbnail:w},data:function(){return{apiURL:"https://api.themoviedb.org/3/search/movie",apiKey:"be3fa3bd2b20925e1d6c0b3adfcb12d6",query:"mostpopular",lang:"it-IT",inputTextNav:"",shows:[],category:"movie",results:"",page:"",totalPages:""}},methods:{searchShow:function(t){var e=this;this.inputTextNav=t,s.a.get(this.apiURL,{params:{api_key:this.apiKey,query:t,language:this.lang}}).then((function(t){e.results=t.data.total_results,e.shows=t.data.results,e.page=t.data.page})).catch((function(t){console.log(t)}))},categorySelect:function(t){this.category=t,this.apiURL="tv"===t?"https://api.themoviedb.org/3/search/tv":"https://api.themoviedb.org/3/search/movie",this.searchShow(this.inputTextNav)}}},x=_,T=(n("5c0b"),Object(f["a"])(x,r,i,!1,null,null,null)),k=T.exports,O=n("d61f");a["a"].use(O["a"]),a["a"].config.productionTip=!1,new a["a"]({render:function(t){return t(k)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";n("9c0c")},7956:function(t,e,n){},"9c0c":function(t,e,n){},fdd5:function(t,e,n){}});
//# sourceMappingURL=app.ff015db4.js.map