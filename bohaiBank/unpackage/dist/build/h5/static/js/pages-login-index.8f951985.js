(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-login-index"],{"0184":function(e,t,n){"use strict";var o=n("288e"),a=o(n("795b")),i=n("1965"),c=i.getStorage;function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.method,n=void 0===t?"GET":t,o=e.url,i=void 0===o?"":o,r=e.data,s=void 0===r?{}:r,d=e.dataType,u=void 0===d?"json":d,l=e.responseType,p=void 0===l?"text":l,h=e.header,f=void 0===h?{}:h,g=e.needToken,v=void 0===g||g,x=e.showLoading,m=void 0===x||x,b=e.loadingText,w=void 0===b?"数据加载中":b,C=e.hideLoading,T=void 0===C||C,E=e.showSucessToast,S=void 0!==E&&E,_=e.successText,y=void 0===_?"数据加载成功":_,O=e.showErrorModal,I=void 0===O||O,L=e.errorText,k=void 0===L?"数据加载失败":L,P=e.returnHeader,N=void 0!==P&&P,A=e.returnErrorCode,M=void 0!==A&&A,V=e.checkCode,F=void 0===V||V,G=null,H=new a.default(function(e,t){if(m&&uni.showLoading({title:w}),v){var o=c("tempToken");i=i+(-1===i.indexOf("?")?"?token=":"&token=")+o}G=uni.request({method:n,url:i,data:s,dataType:u,responseType:p,header:f,success:function(n){if(T&&uni.hideLoading(),!F)return e(n);var o=n.statusCode,a=n.header;n.msg;if(200===o){var i=n.data,c=i.code;if(0===c)S&&uni.showToast({title:y}),e(N?{header:a,data:i.data}:i.data);else{var r="".concat(k,": ").concat(o," - ").concat(i.message||i.msg);I&&uni.showModal({content:r,showCancel:!1}),t(M?{code:c,msg:r}:r)}}else{var s="".concat(k,": ").concat(o,"-").concat(n.errMsg);I&&uni.showModal({content:s,showCancel:!1}),t(s)}},fail:function(e){T&&uni.hideLoading(),I&&uni.showModal({content:"哦豁，网络开小差了，再次请求试试",showCancel:!1}),t(e)}})});return H.abort=function(){G.abort()},H}e.exports={request:r}},"0c9d":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n("149b"),a=n("2248"),i=n("1965"),c=n("e171"),r={data:function(){return{img:o.BOHAI_LOGIN,codeValue:"获取验证码",param:{phone:"",code:""}}},onLoad:function(){},methods:{getCode:function(){var e=this;"获取验证码"==this.codeValue&&/^1\d{0,10}$/g.test(this.param.phone)?(0,a.sendVerificationCode)({phone:this.param.phone}).then(function(t){e.getCodeTime()}):wx.showToast({title:"请填写手机号码",icon:"none",duration:2e3})},getCodeTime:function(e){var t=this,n=90;t.codeValue=n+"秒";var o=setInterval(function(){t.codeValue=n-1+"秒",n--,n<=0&&(clearInterval(o),t.codeValue="获取验证码")},1e3)},login:function(){var e=this;this.param.phone&&this.param.code?(0,a.getPhoneLogin)(this.param).then(function(t){(0,i.setStorage)("isLogin",!0),(0,i.setStorage)("phone",e.param.phone),uni.switchTab({url:getApp().globalData.fm,fail:function(){uni.reLaunch({url:c.APPLY})}})}):uni.showToast({title:"信息不全,请完善",icon:"none",duration:2e3})}}};t.default=r},"0ca2":function(e,t,n){"use strict";var o=n("beba"),a=n.n(o);a.a},"149b":function(e,t,n){"use strict";var o="http://47.104.232.184/images";e.exports={BOHAI:"".concat(o,"/20200311142811_bohai.png"),BOHAI_LOGIN:"".concat(o,"/20200311142957_bohailogo.jpg"),RIGHT:"".concat(o,"/20200311155711_对@2x.png")}},2248:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.sendVerificationCode=i,t.getPhoneLogin=c;var o=n("0184"),a=n("52c9");function i(e){return(0,o.request)({method:"post",url:a.SEND_VERIFICATION_CODE,showSuccessToast:!0,data:e,needToken:!1})}function c(e){return(0,o.request)({method:"POST",url:a.LOGIN_NOWECAHT_LOGIN,showSuccessToast:!0,data:e,needToken:!1})}},"499b":function(e,t,n){t=e.exports=n("2350")(!1),t.push([e.i,".login[data-v-7064b0fa]{height:100px;background:#fff}.login-hd[data-v-7064b0fa]{height:65px;padding:28px 0 12px 0;text-align:center}.login-hd uni-image[data-v-7064b0fa]{height:65px;width:65px}.text[data-v-7064b0fa]{width:109px;height:25px;font-size:18px;font-family:PingFangSC-Semibold,PingFang SC;font-weight:600;color:#333;line-height:25px;margin:0 auto}.input[data-v-7064b0fa]{width:104px;height:24px;font-size:17px;font-family:PingFangSC-Regular,PingFang SC;font-weight:400;color:#ccc;line-height:24px}.getcode[data-v-7064b0fa]{width:72px;height:20px;font-size:14px;font-family:PingFangSC-Regular,PingFang SC;font-weight:400;color:#333;line-height:20px}.btn[data-v-7064b0fa]{margin:30.25px 16px;height:47px;background:#e8be2e;border-radius:2px;text-align:center;line-height:47px;color:#fff;font-size:18px}",""])},"52c9":function(e,t,n){"use strict";var o="http://47.104.232.184:1001";"".concat(o,"/wx/user");e.exports={LOGIN_NOWECAHT_LOGIN:"".concat(o,"/info/phoneCodeLogin"),SEND_VERIFICATION_CODE:"".concat(o,"/info/code"),SUBMIT:"".concat(o,"/info/submit"),UPLOAD:"".concat(o,"/ftp/upload")}},"928d":function(e,t,n){"use strict";n.r(t);var o=n("0c9d"),a=n.n(o);for(var i in o)"default"!==i&&function(e){n.d(t,e,function(){return o[e]})}(i);t["default"]=a.a},"98c2":function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"login"},[n("v-uni-view",{staticClass:"login-hd"},[n("v-uni-image",{attrs:{src:e.img,mode:""}})],1),n("v-uni-view",{staticStyle:{height:"25px"}},[n("v-uni-view",{staticClass:"text"},[e._v("渤海银行专属")])],1),n("v-uni-view",{staticStyle:{margin:"36px 16px 0","padding-bottom":"13.75px","border-bottom":"0.5px solid #EEEEEE",display:"flex"}},[n("v-uni-input",{staticStyle:{flex:"1"},attrs:{placeholder:"请输入手机号",type:"number",maxlength:"13","placeholder-class":"input"},model:{value:e.param.phone,callback:function(t){e.$set(e.param,"phone",t)},expression:"param.phone"}}),n("v-uni-view",{staticClass:"getcode",staticStyle:{"flex-basis":"72px"}},[n("span",{on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.getCode.apply(void 0,arguments)}}},[e._v(e._s(e.codeValue))])])],1),n("v-uni-view",{staticStyle:{margin:"14.25px 16px 0","padding-bottom":"13.75px","border-bottom":"0.5px solid #EEEEEE",display:"flex"}},[n("v-uni-input",{staticStyle:{flex:"1"},attrs:{placeholder:"请输入验证码",type:"number",maxlength:"6","placeholder-class":"input"},model:{value:e.param.code,callback:function(t){e.$set(e.param,"code",t)},expression:"param.code"}})],1),n("v-uni-view",{staticClass:"btn",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.login.apply(void 0,arguments)}}},[e._v("登录")])],1)},a=[];n.d(t,"a",function(){return o}),n.d(t,"b",function(){return a})},beba:function(e,t,n){var o=n("499b");"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var a=n("4f06").default;a("2373e666",o,!0,{sourceMap:!1,shadowMode:!1})},beda:function(e,t,n){"use strict";n.r(t);var o=n("98c2"),a=n("928d");for(var i in a)"default"!==i&&function(e){n.d(t,e,function(){return a[e]})}(i);n("0ca2");var c=n("2877"),r=Object(c["a"])(a["default"],o["a"],o["b"],!1,null,"7064b0fa",null);t["default"]=r.exports}}]);