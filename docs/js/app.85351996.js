webpackJsonp([1],{"+bB6":function(t,n){},0:function(t,n,e){t.exports=e("NHnr")},"1WZz":function(t,n){},"4bnA":function(t,n){},"95Dg":function(t,n,e){t.exports=e.p+"img/icon-default-avatar.4ab43824.png"},"9avF":function(t,n){},GML9:function(t,n){},LdiH:function(t,n){},NHnr:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=e("/5sW"),i=e("95Dg"),s=e.n(i),c={name:"hamburger",data:function(){return{appVersion:"0.1.0",userName:"未登录",avatarSrc:s.a,menuList:[[{name:"空气质量指数",to:"/home"},{name:"空气质量地图",to:"/map"},{name:"排行榜",to:"/ranking"},{name:"发现",to:"/discovery"}],[{name:"编辑收藏地点列表",to:"/collection"}],[{name:"设置",to:"/setting"},{name:"关于",to:"/about"}]],touch:{start:[],end:[]}}},props:{isMenuShow:{type:Boolean,default:function(){return!1}}},computed:{setHeaderStyl:function(){var t="default";return"background-image: url('".concat(t,"')")}},methods:{cancelSelect:function(){this.$emit("cancelSelect")},changeRouter:function(){this.$emit("changeRouter")},setListIcon:function(t){return"background-image: url('".concat(t,"')")},login:function(){alert("不能登陆现在。")}},created:function(){}},o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("transition",{attrs:{name:"blank"}},[e("div",{staticClass:"hamburger"},[e("transition",{attrs:{name:"slide-left"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.isMenuShow,expression:"isMenuShow"}],staticClass:"content"},[e("div",{staticClass:"header",style:t.setHeaderStyl},[e("div",{staticClass:"user-info",on:{click:t.login}},[e("div",{staticClass:"avatar"},[e("img",{attrs:{src:t.avatarSrc,alt:"user avatar"}})]),e("p",{staticClass:"user-name"},[t._v(t._s(t.userName))])]),e("div",{staticClass:"app-version"},[t._v("\n            Ver "+t._s(t.appVersion)+"\n          ")])]),e("ul",{staticClass:"list",on:{click:t.changeRouter}},[t._l(t.menuList[0],function(n){return e("li",{key:n.to},[e("router-link",{attrs:{to:n.to,"active-class":"active"}},[e("i",{staticClass:"icon",style:t.setListIcon(n.icon)}),t._v("\n              "+t._s(n.name)+"\n            ")])],1)}),e("li",{staticClass:"line"}),t._l(t.menuList[1],function(n){return e("li",{key:n.to},[e("router-link",{attrs:{to:n.to,"active-class":"active"}},[e("i",{staticClass:"icon",style:t.setListIcon(n.icon)}),t._v("\n              "+t._s(n.name)+"\n            ")])],1)}),e("li",{staticClass:"line"}),t._l(t.menuList[2],function(n){return e("li",{key:n.to},[e("router-link",{attrs:{to:n.to,"active-class":"active"}},[e("i",{staticClass:"icon",style:t.setListIcon(n.icon)}),t._v("\n              "+t._s(n.name)+"\n            ")])],1)})],2)])]),e("transition",{attrs:{name:"fade"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.isMenuShow,expression:"isMenuShow"}],staticClass:"mask",on:{click:t.cancelSelect}})])],1)])},r=[],u=e("XyMi");function l(t){e("b83N")}var v=!1,f=l,h="data-v-1a301a4e",d=null,m=Object(u["a"])(c,o,r,v,f,h,d),p=m.exports,_={name:"navigator",data:function(){return{title:"在意空气",isOpenMenu:!1,touch:{start:[0,0],end:[0,0]}}},components:{hamburger:p},created:function(){this.initTouchEvent()},methods:{openMenu:function(){this.isOpenMenu=!0},hideMenu:function(){this.isOpenMenu=!1},initTouchEvent:function(){var t=this;window.addEventListener("touchstart",function(n){t.touch.start[0]=n.changedTouches[0].clientX,t.touch.start[1]=n.changedTouches[0].clientY}),window.addEventListener("touchend",function(n){t.touch.end[0]=n.changedTouches[0].clientX,t.touch.end[1]=n.changedTouches[0].clientY,t.canOpenMenu()})},canOpenMenu:function(){var t=this.touch.start[0],n=this.touch.end[0],e=this.touch.start[1],a=this.touch.end[1],i=document.body.clientWidth;Math.abs(n-t)>10&&t<i/3&&Math.abs(a-e)<100&&this.openMenu()}}},C=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"navigator"},[e("div",{staticClass:"header"},[e("i",{staticClass:"icon",on:{click:t.openMenu}}),e("p",{staticClass:"title"},[t._v(t._s(t.title))])]),e("hamburger",{directives:[{name:"show",rawName:"v-show",value:t.isOpenMenu,expression:"isOpenMenu"}],attrs:{isMenuShow:t.isOpenMenu},on:{changeRouter:t.hideMenu,cancelSelect:t.hideMenu}})],1)},g=[];function y(t){e("kCfc")}var b=!1,M=y,k="data-v-50bfa7d9",w=null,O=Object(u["a"])(_,C,g,b,M,k,w),E=O.exports,$={components:{navigator:E}},x=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[e("navigator"),e("router-view")],1)},L=[];function I(t){e("9avF")}var j=!1,S=I,N=null,P=null,q=Object(u["a"])($,x,L,j,S,N,P),H=q.exports,A=e("/ocq"),Q=(e("EuXz"),e("y9m4"),e("mtWM")),T=e.n(Q),D="http://api.life1st.cn/air";function V(){var t="".concat(D,"/all");return T.a.get(t).then(function(t){return console.log("res",t),new Promise(function(n){return n(t.data)})})}function W(t){var n="".concat(D,"/city"),e=t.id,a=t.name,i=t.country,s="zh_Hans";return T.a.get(n,{params:{id:e,city:a,country:i,lang:s}}).then(function(t){return new Promise(function(n){return n(t.data)})})}var Y={name:"card",data:function(){return{info:null}},props:{cityInfo:{type:Object}},computed:{aqiColor:function(){var t=this.AQILevel(this.info.aqi.value);return this.color(t)}},methods:{color:function(t){switch(t){case 0:return"#31cd31";case 1:return"#00f";case 2:return"#e02d1c";case 3:return"#000"}},setCityData:function(){var t=this,n={country:this.cityInfo.url_key,city:this.cityInfo.name,id:this.cityInfo.place_id};W(n).then(function(n){t.info=n})},AQILevel:function(t){var n=0;return n=t<50?0:t>=50&&t<100?1:t>=100&&t<150?2:3,n},AQIGrade:function(t){var n=["优秀","良好","轻度污染","重度污染"];return n[this.AQILevel(t)]},borderC:function(t){var n=this.AQILevel(t);return this.color(n)},toDetail:function(){var t=this.cityInfo.name;this.$router.push("/detail/".concat(t))}},created:function(){this.setCityData()}},z=function(){var t=this,n=t.$createElement,e=t._self._c||n;return t.info?e("div",{staticClass:"city-card",on:{click:t.toDetail}},[e("div",{staticClass:"main-info"},[e("div",{staticClass:"left"},[e("p",{staticClass:"city-name"},[t._v(t._s(t.info.city))]),e("div",{staticClass:"aqi"},[e("span",{staticClass:"title"},[t._v("空气质量指数")]),e("span",{staticClass:"value"},[t._v(t._s(t.AQIGrade(t.info.aqi.value)))])])]),e("div",{staticClass:"right"},[e("span",{staticClass:"aqi-num"},[t._v(t._s(t.info.aqi.value))]),e("i",{staticClass:"symbol icon",style:"background: "+t.aqiColor})])]),e("div",{staticClass:"pollutant"},[e("div",{staticClass:"item pm2d5",style:"border-bottom: 2px solid "+t.borderC(t.info.pollutant["PM10"].value)},[e("span",{staticClass:"title"},[t._v("PM2.5")]),e("span",{staticClass:"value"},[t._v(t._s(t.info.pollutant["PM2.5"].value))])]),e("div",{staticClass:"item",style:"border-bottom: 2px solid "+t.borderC(t.info.pollutant["PM10"].value)},[e("span",{staticClass:"title"},[t._v("PM10")]),e("span",{staticClass:"value"},[t._v(t._s(t.info.pollutant["PM10"].value))])]),e("div",{staticClass:"item",style:"border-bottom: 2px solid "+t.borderC(t.info.pollutant["PM10"].value)},[e("span",{staticClass:"title"},[t._v("NO2")]),e("span",{staticClass:"value"},[t._v(t._s(t.info.pollutant["NO2"].value))])])])]):t._e()},G=[];function R(t){e("kM7f")}var X=!1,B=R,F="data-v-09e51f43",Z=null,J=Object(u["a"])(Y,z,G,X,B,F,Z),K=J.exports,U={name:"home",data:function(){return{citys:[],hotCitys:[]}},components:{cityCard:K},methods:{getHotCitys:function(){var t=["beijing","shanghai","chongqing"],n=this.citys;this.hotCitys=n.filter(function(n){n=n.name.toLowerCase();for(var e=0;e<t.length;e++){var a=t[e];if(-1!=n.indexOf(a))return!0}})}},created:function(){var t=this;V().then(function(n){t.citys=n,t.getHotCitys()}).catch(function(t){console.log(t)})}},tt=function(){var t=this,n=t.$createElement,e=t._self._c||n;return t.hotCitys.length>0?e("div",{staticClass:"home"},[t._m(0),t._l(t.hotCitys,function(t){return e("city-card",{key:t.name,attrs:{cityInfo:t}})})],2):t._e()},nt=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"title"},[e("p",[t._v("收藏的地点")])])}];function et(t){e("1WZz")}var at=!1,it=et,st="data-v-163b6186",ct=null,ot=Object(u["a"])(U,tt,nt,at,it,st,ct),rt=ot.exports,ut=function(){var t=this,n=t.$createElement;t._self._c;return t._m(0)},lt=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"about"},[e("h1",[t._v("This is an about page")])])}],vt=null,ft=!1,ht=null,dt=null,mt=null,pt=Object(u["a"])(vt,ut,lt,ft,ht,dt,mt),_t=pt.exports,Ct={name:"collection"},gt=function(){var t=this,n=t.$createElement;t._self._c;return t._m(0)},yt=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"collection"},[e("p",[t._v("this is collection page.")])])}];function bt(t){e("sYiQ")}var Mt=!1,kt=bt,wt="data-v-62ab9a15",Ot=null,Et=Object(u["a"])(Ct,gt,yt,Mt,kt,wt,Ot),$t=Et.exports,xt={name:"discovery"},Lt=function(){var t=this,n=t.$createElement;t._self._c;return t._m(0)},It=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"discovery"},[e("p",[t._v("this is discovery page.")])])}];function jt(t){e("LdiH")}var St=!1,Nt=jt,Pt="data-v-7ed3ba5d",qt=null,Ht=Object(u["a"])(xt,Lt,It,St,Nt,Pt,qt),At=Ht.exports,Qt={name:"airMap"},Tt=function(){var t=this,n=t.$createElement;t._self._c;return t._m(0)},Dt=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"air-map"},[e("p",[t._v("this is map components")])])}];function Vt(t){e("4bnA")}var Wt=!1,Yt=Vt,zt="data-v-e11c2576",Gt=null,Rt=Object(u["a"])(Qt,Tt,Dt,Wt,Yt,zt,Gt),Xt=Rt.exports,Bt={name:"ranking"},Ft=function(){var t=this,n=t.$createElement;t._self._c;return t._m(0)},Zt=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"ranking"},[e("p",[t._v("this is ranking page")])])}];function Jt(t){e("OVsM")}var Kt=!1,Ut=Jt,tn="data-v-1a2cf236",nn=null,en=Object(u["a"])(Bt,Ft,Zt,Kt,Ut,tn,nn),an=en.exports,sn={name:"setting"},cn=function(){var t=this,n=t.$createElement;t._self._c;return t._m(0)},on=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"setting"},[e("p",[t._v("this is setting page.")])])}];function rn(t){e("GML9")}var un=!1,ln=rn,vn="data-v-13528546",fn=null,hn=Object(u["a"])(sn,cn,on,un,ln,vn,fn),dn=hn.exports,mn={name:"detail"},pn=function(){var t=this,n=t.$createElement;t._self._c;return t._m(0)},_n=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"city-detail"},[e("p",[t._v("this is city detail page.")])])}];function Cn(t){e("+bB6")}var gn=!1,yn=Cn,bn="data-v-89b919d2",Mn=null,kn=Object(u["a"])(mn,pn,_n,gn,yn,bn,Mn),wn=kn.exports;a["a"].use(A["a"]);var On=new A["a"]({routes:[{path:"/",redirect:"/home"},{path:"/home",name:"home",component:rt},{path:"/about",name:"about",component:_t},{path:"/collection",name:"collection",component:$t},{path:"/discovery",name:"discovery",component:At},{path:"/map",name:"map",component:Xt},{path:"/ranking",name:"ranking",component:an},{path:"/setting",name:"setting",component:dn},{path:"/detail/:city",name:"cityDetail",component:wn}]}),En=e("NYxO");a["a"].use(En["a"]);var $n=new En["a"].Store({state:{},mutations:{},actions:{}});a["a"].config.productionTip=!1,new a["a"]({router:On,store:$n,render:function(t){return t(H)}}).$mount("#app")},OVsM:function(t,n){},b83N:function(t,n){},kCfc:function(t,n){},kM7f:function(t,n){},sYiQ:function(t,n){}},[0]);
//# sourceMappingURL=app.85351996.js.map