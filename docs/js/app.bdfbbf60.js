webpackJsonp([1],{"/Gts":function(t,n){},0:function(t,n,e){t.exports=e("NHnr")},"1WZz":function(t,n){},"4bnA":function(t,n){},"95Dg":function(t,n,e){t.exports=e.p+"img/icon-default-avatar.4ab43824.png"},"9avF":function(t,n){},Av2U:function(t,n){},GML9:function(t,n){},Jcpb:function(t,n){},LdiH:function(t,n){},M6kN:function(t,n,e){"use strict";e.d(n,"a",function(){return a}),e.d(n,"b",function(){return i});var a=function(){var t=this,n=t.$createElement;t._self._c;return t._m(0)},i=[function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"about"},[a("p",{staticClass:"describe"},[a("img",{staticClass:"icon",attrs:{src:e("QB7A"),alt:"app-logo"}})]),a("h1",[t._v("Air-Matters")]),a("p",[t._v("This is a personal project.")]),a("p",[t._v("It's unofficial.")])])}]},NHnr:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=e("/5sW"),i=e("95Dg"),s=e.n(i),c={name:"hamburger",data:function(){return{appVersion:"0.3.2",userName:"未登录",avatarSrc:s.a,menuList:[[{name:"空气质量指数",to:"/home"},{name:"空气质量地图",to:"/map"},{name:"排行榜",to:"/ranking"},{name:"发现",to:"/discovery"}],[{name:"编辑收藏地点列表",to:"/collection"}],[{name:"设置",to:"/setting"},{name:"关于",to:"/about"}]],touch:{start:[],end:[]}}},props:{isMenuShow:{type:Boolean,default:function(){return!1}}},computed:{setHeaderStyl:function(){var t="default";return"background-image: url('".concat(t,"')")}},methods:{cancelSelect:function(){this.$emit("cancelSelect")},changeRouter:function(){this.$emit("changeRouter")},setListIcon:function(t){return"background-image: url('".concat(t,"')")},login:function(){alert("不能登陆现在。")}},created:function(){}},o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("transition",{attrs:{name:"blank"}},[e("div",{staticClass:"hamburger"},[e("transition",{attrs:{name:"slide-left"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.isMenuShow,expression:"isMenuShow"}],staticClass:"content"},[e("div",{staticClass:"header",style:t.setHeaderStyl},[e("div",{staticClass:"user-info",on:{click:t.login}},[e("div",{staticClass:"avatar"},[e("img",{attrs:{src:t.avatarSrc,alt:"user avatar"}})]),e("p",{staticClass:"user-name"},[t._v(t._s(t.userName))])]),e("div",{staticClass:"app-version"},[t._v("\n            Ver "+t._s(t.appVersion)+"\n          ")])]),e("ul",{staticClass:"list",on:{click:t.changeRouter}},[t._l(t.menuList[0],function(n){return e("li",{key:n.to},[e("router-link",{attrs:{to:n.to,"active-class":"active"}},[e("i",{staticClass:"icon",style:t.setListIcon(n.icon)}),t._v("\n              "+t._s(n.name)+"\n            ")])],1)}),e("li",{staticClass:"line"}),t._l(t.menuList[1],function(n){return e("li",{key:n.to},[e("router-link",{attrs:{to:n.to,"active-class":"active"}},[e("i",{staticClass:"icon",style:t.setListIcon(n.icon)}),t._v("\n              "+t._s(n.name)+"\n            ")])],1)}),e("li",{staticClass:"line"}),t._l(t.menuList[2],function(n){return e("li",{key:n.to},[e("router-link",{attrs:{to:n.to,"active-class":"active"}},[e("i",{staticClass:"icon",style:t.setListIcon(n.icon)}),t._v("\n              "+t._s(n.name)+"\n            ")])],1)})],2)])]),e("transition",{attrs:{name:"fade"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.isMenuShow,expression:"isMenuShow"}],staticClass:"mask",on:{click:t.cancelSelect}})])],1)])},r=[],u=e("XyMi");function l(t){e("/Gts")}var v=!1,f=l,h="data-v-7c7823d2",d=null,m=Object(u["a"])(c,o,r,v,f,h,d),p=m.exports,_={name:"navigator",data:function(){return{title:"在意空气",isOpenMenu:!1,touch:{start:[0,0],end:[0,0]}}},components:{hamburger:p},created:function(){this.initTouchEvent()},methods:{openMenu:function(){this.isOpenMenu=!0},hideMenu:function(){this.isOpenMenu=!1},initTouchEvent:function(){var t=this;window.addEventListener("touchstart",function(n){t.touch.start[0]=n.changedTouches[0].clientX,t.touch.start[1]=n.changedTouches[0].clientY}),window.addEventListener("touchend",function(n){t.touch.end[0]=n.changedTouches[0].clientX,t.touch.end[1]=n.changedTouches[0].clientY,t.canOpenMenu()})},canOpenMenu:function(){var t=this.touch.start[0],n=this.touch.end[0],e=this.touch.start[1],a=this.touch.end[1],i=document.body.clientWidth;Math.abs(n-t)>10&&t<i/3&&Math.abs(a-e)<100&&this.openMenu()}}},g=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"navigator"},[e("div",{staticClass:"header"},[e("i",{staticClass:"icon",on:{click:t.openMenu}}),e("p",{staticClass:"title"},[t._v(t._s(t.title))])]),e("hamburger",{directives:[{name:"show",rawName:"v-show",value:t.isOpenMenu,expression:"isOpenMenu"}],attrs:{isMenuShow:t.isOpenMenu},on:{changeRouter:t.hideMenu,cancelSelect:t.hideMenu}})],1)},C=[];function y(t){e("kCfc")}var b,M=!1,k=y,O="data-v-50bfa7d9",w=null,x=Object(u["a"])(_,g,C,M,k,O,w),E=x.exports,$=(e("Y4FN"),e("EuXz"),e("y9m4"),e("mtWM")),I=e.n($),L=location.hostname;function j(){var t="".concat(b,"/all");return I.a.get(t).then(function(t){return console.log("res",t),new Promise(function(n){return n(t.data)})})}function N(t){var n="".concat(b,"/city"),e=t.id,a=t.name,i=t.country,s="zh_Hans";return I.a.get(n,{params:{id:e,city:a,country:i,lang:s}}).then(function(t){return new Promise(function(n){return n(t.data)})})}function S(){var t="".concat(b,"/ranking");return I.a.get(t).then(function(t){return console.log(t),new Promise(function(n){return n(t)})})}b="localhost"==L?"http://localhost:3000":"http://api.life1st.cn/air";var A={components:{navigator:E},created:function(){S().then(function(t){console.log(t,"get ranking.")})}},P=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[e("navigator"),e("router-view")],1)},Q=[];function q(t){e("9avF")}var H=!1,G=q,T=null,D=null,Y=Object(u["a"])(A,P,Q,H,G,T,D),V=Y.exports,W=e("/ocq"),X={name:"card",data:function(){return{info:null}},props:{cityInfo:{type:Object}},computed:{aqiColor:function(){var t=this.AQILevel(this.info.aqi.value);return this.color(t)}},methods:{color:function(t){switch(t){case 0:return"#31cd31";case 1:return"#00f";case 2:return"#e02d1c";case 3:return"#000"}},setCityData:function(){var t=this,n={country:this.cityInfo.url_key,city:this.cityInfo.name,id:this.cityInfo.place_id};N(n).then(function(n){t.info=n})},AQILevel:function(t){var n=0;return n=t<50?0:t>=50&&t<100?1:t>=100&&t<150?2:3,n},AQIGrade:function(t){var n=["优秀","良好","轻度污染","重度污染"];return n[this.AQILevel(t)]},borderC:function(t){var n=this.AQILevel(t);return this.color(n)},toDetail:function(){var t=this.cityInfo.name;this.$router.push("/detail/".concat(t))}},created:function(){this.setCityData()}},z=function(){var t=this,n=t.$createElement,e=t._self._c||n;return t.info?e("div",{staticClass:"city-card",on:{click:t.toDetail}},[e("div",{staticClass:"main-info"},[e("div",{staticClass:"left"},[e("p",{staticClass:"city-name"},[t._v(t._s(t.info.city))]),e("div",{staticClass:"aqi"},[e("span",{staticClass:"title"},[t._v("空气质量指数")]),e("span",{staticClass:"value"},[t._v(t._s(t.AQIGrade(t.info.aqi.value)))])])]),e("div",{staticClass:"right"},[e("span",{staticClass:"aqi-num"},[t._v(t._s(t.info.aqi.value))]),e("i",{staticClass:"symbol icon",style:"background: "+t.aqiColor})])]),e("div",{staticClass:"pollutant"},[e("div",{staticClass:"item pm2d5",style:"border-bottom: 2px solid "+t.borderC(t.info.pollutant["PM10"].value)},[e("span",{staticClass:"title"},[t._v("PM2.5")]),e("span",{staticClass:"value"},[t._v(t._s(t.info.pollutant["PM2.5"].value))])]),e("div",{staticClass:"item",style:"border-bottom: 2px solid "+t.borderC(t.info.pollutant["PM10"].value)},[e("span",{staticClass:"title"},[t._v("PM10")]),e("span",{staticClass:"value"},[t._v(t._s(t.info.pollutant["PM10"].value))])]),e("div",{staticClass:"item",style:"border-bottom: 2px solid "+t.borderC(t.info.pollutant["PM10"].value)},[e("span",{staticClass:"title"},[t._v("NO2")]),e("span",{staticClass:"value"},[t._v(t._s(t.info.pollutant["NO2"].value))])])])]):t._e()},R=[];function B(t){e("O74K")}var F=!1,J=B,K="data-v-3478ae3a",U=null,Z=Object(u["a"])(X,z,R,F,J,K,U),tt=Z.exports,nt={name:"home",data:function(){return{citys:[],hotCitys:[]}},components:{cityCard:tt},methods:{getHotCitys:function(){var t=["beijing","shanghai","chongqing"],n=this.citys;this.hotCitys=n.filter(function(n){n=n.name.toLowerCase();for(var e=0;e<t.length;e++){var a=t[e];if(-1!=n.indexOf(a))return!0}})}},created:function(){var t=this;j().then(function(n){t.citys=n,t.getHotCitys()}).catch(function(t){console.log(t)})}},et=function(){var t=this,n=t.$createElement,e=t._self._c||n;return t.hotCitys.length>0?e("div",{staticClass:"home"},[t._m(0),t._l(t.hotCitys,function(t){return e("city-card",{key:t.name,attrs:{cityInfo:t}})})],2):t._e()},at=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"title"},[e("p",[t._v("收藏的地点")])])}];function it(t){e("1WZz")}var st=!1,ct=it,ot="data-v-163b6186",rt=null,ut=Object(u["a"])(nt,et,at,st,ct,ot,rt),lt=ut.exports,vt=e("vu9I"),ft={name:"collection"},ht=function(){var t=this,n=t.$createElement;t._self._c;return t._m(0)},dt=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"collection"},[e("p",[t._v("this is collection page.")])])}];function mt(t){e("sYiQ")}var pt=!1,_t=mt,gt="data-v-62ab9a15",Ct=null,yt=Object(u["a"])(ft,ht,dt,pt,_t,gt,Ct),bt=yt.exports,Mt={name:"discovery"},kt=function(){var t=this,n=t.$createElement;t._self._c;return t._m(0)},Ot=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"discovery"},[e("p",[t._v("this is discovery page.")])])}];function wt(t){e("LdiH")}var xt=!1,Et=wt,$t="data-v-7ed3ba5d",It=null,Lt=Object(u["a"])(Mt,kt,Ot,xt,Et,$t,It),jt=Lt.exports,Nt={name:"airMap"},St=function(){var t=this,n=t.$createElement;t._self._c;return t._m(0)},At=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"air-map"},[e("p",[t._v("this is map components")])])}];function Pt(t){e("4bnA")}var Qt=!1,qt=Pt,Ht="data-v-e11c2576",Gt=null,Tt=Object(u["a"])(Nt,St,At,Qt,qt,Ht,Gt),Dt=Tt.exports,Yt={name:"ranking"},Vt=function(){var t=this,n=t.$createElement;t._self._c;return t._m(0)},Wt=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"ranking"},[e("p",[t._v("this is ranking page")])])}];function Xt(t){e("OVsM")}var zt=!1,Rt=Xt,Bt="data-v-1a2cf236",Ft=null,Jt=Object(u["a"])(Yt,Vt,Wt,zt,Rt,Bt,Ft),Kt=Jt.exports,Ut={name:"setting"},Zt=function(){var t=this,n=t.$createElement;t._self._c;return t._m(0)},tn=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"setting"},[e("p",[t._v("this is setting page.")])])}];function nn(t){e("GML9")}var en=!1,an=nn,sn="data-v-13528546",cn=null,on=Object(u["a"])(Ut,Zt,tn,en,an,sn,cn),rn=on.exports,un={name:"detail",computed:{cityName:function(){var t=this.$router.params.city;return t}}},ln=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"city-detail"},[e("p",[t._v("this is city detail page.")]),e("div",{staticClass:"city"},[t._v(t._s(t.cityName))])])},vn=[];function fn(t){e("Av2U")}var hn=!1,dn=fn,mn="data-v-6a3aaf02",pn=null,_n=Object(u["a"])(un,ln,vn,hn,dn,mn,pn),gn=_n.exports;a["a"].use(W["a"]);var Cn=new W["a"]({routes:[{path:"/",redirect:"/home"},{path:"/home",name:"home",component:lt},{path:"/about",name:"about",component:vt["default"]},{path:"/collection",name:"collection",component:bt},{path:"/discovery",name:"discovery",component:jt},{path:"/map",name:"map",component:Dt},{path:"/ranking",name:"ranking",component:Kt},{path:"/setting",name:"setting",component:rn},{path:"/detail/:city",name:"cityDetail",component:gn}]}),yn=e("NYxO");a["a"].use(yn["a"]);var bn=new yn["a"].Store({state:{},mutations:{},actions:{}});a["a"].config.productionTip=!1,new a["a"]({router:Cn,store:bn,render:function(t){return t(V)}}).$mount("#app")},O74K:function(t,n){},OVsM:function(t,n){},QB7A:function(t,n,e){t.exports=e.p+"img/logo.8784e059.png"},kCfc:function(t,n){},sYiQ:function(t,n){},vu9I:function(t,n,e){"use strict";var a=e("Jcpb"),i=e.n(a),s=e("M6kN"),c=e("XyMi");function o(t){e("xjgG")}var r=!1,u=o,l="data-v-4e93c3ef",v=null,f=Object(c["a"])(i.a,s["a"],s["b"],r,u,l,v);n["default"]=f.exports},xjgG:function(t,n){}},[0]);
//# sourceMappingURL=app.bdfbbf60.js.map