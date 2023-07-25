(function(){"use strict";var e={4207:function(e,r,n){var t=n(9242),o=n(3396);function l(e,r){const n=(0,o.up)("router-view");return(0,o.wg)(),(0,o.j4)(n)}var a=n(89);const u={},i=(0,a.Z)(u,[["render",l]]);var s=i,d=n(2483),c=n(7139);const m={class:"home"},f={class:"login"},p={class:"registry"};function g(e,r,n,t,l,a){const u=(0,o.up)("el-input"),i=(0,o.up)("el-form-item"),s=(0,o.up)("el-option"),d=(0,o.up)("el-select"),g=(0,o.up)("el-button"),h=(0,o.up)("el-link"),b=(0,o.up)("el-form");return(0,o.wg)(),(0,o.iD)("div",m,[(0,o._)("div",f,[(0,o.Wm)(b,{ref:"formRef",model:t.form,rules:t.rules,style:{width:"100%"},"label-position":"top"},{default:(0,o.w5)((()=>["login"===t.type?((0,o.wg)(),(0,o.j4)(i,{key:0,label:"账号/手机号",prop:"user"},{default:(0,o.w5)((()=>[(0,o.Wm)(u,{modelValue:t.form.user,"onUpdate:modelValue":r[0]||(r[0]=e=>t.form.user=e),clearable:"",placeholder:"请输入账号/手机号"},null,8,["modelValue"])])),_:1})):(0,o.kq)("",!0),"login"===t.type?((0,o.wg)(),(0,o.j4)(i,{key:1,style:{"margin-bottom":"30px"},label:"密码",prop:"pass"},{default:(0,o.w5)((()=>[(0,o.Wm)(u,{modelValue:t.form.pass,"onUpdate:modelValue":r[1]||(r[1]=e=>t.form.pass=e),type:"password",clearable:"",placeholder:"请输入密码"},null,8,["modelValue"])])),_:1})):(0,o.kq)("",!0),"login"!==t.type?((0,o.wg)(),(0,o.j4)(i,{key:2,label:"账号",prop:"rUser"},{default:(0,o.w5)((()=>[(0,o.Wm)(u,{modelValue:t.form.rUser,"onUpdate:modelValue":r[2]||(r[2]=e=>t.form.rUser=e),clearable:"",placeholder:"请输入账号"},null,8,["modelValue"])])),_:1})):(0,o.kq)("",!0),"login"!==t.type?((0,o.wg)(),(0,o.j4)(i,{key:3,label:"密码",prop:"rPass"},{default:(0,o.w5)((()=>[(0,o.Wm)(u,{modelValue:t.form.rPass,"onUpdate:modelValue":r[3]||(r[3]=e=>t.form.rPass=e),clearable:"",placeholder:"请输入密码"},null,8,["modelValue"])])),_:1})):(0,o.kq)("",!0),"login"!==t.type?((0,o.wg)(),(0,o.j4)(i,{key:4,label:"昵称",prop:"rName"},{default:(0,o.w5)((()=>[(0,o.Wm)(u,{modelValue:t.form.rName,"onUpdate:modelValue":r[4]||(r[4]=e=>t.form.rName=e),clearable:"",placeholder:"请输入昵称"},null,8,["modelValue"])])),_:1})):(0,o.kq)("",!0),"login"!==t.type?((0,o.wg)(),(0,o.j4)(i,{key:5,label:"邮箱",prop:"rEmail"},{default:(0,o.w5)((()=>[(0,o.Wm)(u,{modelValue:t.form.rEmail,"onUpdate:modelValue":r[5]||(r[5]=e=>t.form.rEmail=e),clearable:"",placeholder:"请输入邮箱"},null,8,["modelValue"])])),_:1})):(0,o.kq)("",!0),"login"!==t.type?((0,o.wg)(),(0,o.j4)(i,{key:6,label:"角色",prop:"rRole"},{default:(0,o.w5)((()=>[(0,o.Wm)(d,{style:{width:"100%"},modelValue:t.form.rRole,"onUpdate:modelValue":r[6]||(r[6]=e=>t.form.rRole=e),clearable:"",placeholder:"请选择角色"},{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(t.options,(e=>((0,o.wg)(),(0,o.j4)(s,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1})):(0,o.kq)("",!0),"login"!==t.type?((0,o.wg)(),(0,o.j4)(i,{key:7,style:{"margin-bottom":"30px"},label:"手机号",prop:"rPhone"},{default:(0,o.w5)((()=>[(0,o.Wm)(u,{modelValue:t.form.rPhone,"onUpdate:modelValue":r[7]||(r[7]=e=>t.form.rPhone=e),clearable:"",placeholder:"请输入手机号"},null,8,["modelValue"])])),_:1})):(0,o.kq)("",!0),(0,o.Wm)(g,{style:{width:"100%","margin-bottom":"10px"},type:"primary",onClick:t.loginHandle},{default:(0,o.w5)((()=>[(0,o.Uk)((0,c.zw)("login"===t.type?"登录":"注册"),1)])),_:1},8,["onClick"]),(0,o._)("div",p,[(0,o.Wm)(h,{type:"primary",onClick:t.changeHandle},{default:(0,o.w5)((()=>[(0,o.Uk)((0,c.zw)("login"===t.type?"注册账号":"返回登录"),1)])),_:1},8,["onClick"])])])),_:1},8,["model","rules"])])])}n(7658);var h=n(4870),b=n(7178);const v={user:[{required:!0,message:"请输入账号/手机号",trigger:"blur"}],pass:[{required:!0,message:"请输入密码",trigger:"blur"}],rUser:[{required:!0,message:"请输入账号",trigger:"blur"}],rPass:[{required:!0,message:"请输入密码",trigger:"blur"}],rRole:[{required:!0,message:"请选择角色",trigger:"blur"}],rPhone:[{required:!0,message:"请输入手机号",trigger:"blur"}]},y=[{label:"红色",value:"1"},{label:"白色",value:"2"}];var w={setup(){const e=(0,d.tv)(),r=(0,h.iH)(),n=(0,h.iH)("login"),t=(0,h.qj)({user:"",pass:"",rUser:"",rPass:"",rName:"",rEmail:"",rRole:"",rPhone:""}),o=()=>{n.value="login"===n.value?"registry":"login",r.value&&r.value.resetFields()},l=()=>{r.value&&r.value.validate((r=>{r&&("login"===n.value?(b.z8.success("登录成功"),e.push({name:"main"})):(b.z8.success("注册成功"),n.value="login"))}))};return{form:t,rules:v,formRef:r,type:n,options:y,changeHandle:o,loginHandle:l}}};const k=(0,a.Z)(w,[["render",g],["__scopeId","data-v-a475d66a"]]);var V=k;const j=[{path:"/",name:"home",component:V},{path:"/main",name:"main",component:()=>n.e(79).then(n.bind(n,1079)),redirect:"/main/menu",children:[{path:"/main/menu",name:"menu",component:()=>n.e(173).then(n.bind(n,4173))},{path:"/main/role",name:"role",component:()=>n.e(338).then(n.bind(n,6338))},{path:"/main/user",name:"user",component:()=>n.e(646).then(n.bind(n,7646))},{path:"/main/log",name:"log",component:()=>n.e(967).then(n.bind(n,1967))},{path:"/main/scoreTask",name:"scoreTask",component:()=>n.e(138).then(n.bind(n,5138))},{path:"/main/scoreList",name:"scoreList",component:()=>n.e(350).then(n.bind(n,6350))}]}],_=(0,d.p7)({history:(0,d.r5)(),routes:j});var q=_,C=n(65),P=(0,C.MT)({state:{},getters:{},mutations:{},actions:{},modules:{}}),U=n(6380);n(4415);(0,t.ri)(s).use(P).use(q).use(U.Z).mount("#app")}},r={};function n(t){var o=r[t];if(void 0!==o)return o.exports;var l=r[t]={exports:{}};return e[t].call(l.exports,l,l.exports,n),l.exports}n.m=e,function(){var e=[];n.O=function(r,t,o,l){if(!t){var a=1/0;for(d=0;d<e.length;d++){t=e[d][0],o=e[d][1],l=e[d][2];for(var u=!0,i=0;i<t.length;i++)(!1&l||a>=l)&&Object.keys(n.O).every((function(e){return n.O[e](t[i])}))?t.splice(i--,1):(u=!1,l<a&&(a=l));if(u){e.splice(d--,1);var s=o();void 0!==s&&(r=s)}}return r}l=l||0;for(var d=e.length;d>0&&e[d-1][2]>l;d--)e[d]=e[d-1];e[d]=[t,o,l]}}(),function(){n.n=function(e){var r=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(r,{a:r}),r}}(),function(){n.d=function(e,r){for(var t in r)n.o(r,t)&&!n.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(r,t){return n.f[t](e,r),r}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{79:"dbfe220f",138:"c21d1382",173:"1d689676",338:"08f25891",350:"6a93df3c",646:"73f35bd0",967:"a26183f2"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+"."+{79:"300b7017",173:"3e23e4c9",338:"435bad61",646:"bca1ac5f"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)}}(),function(){var e={},r="school:";n.l=function(t,o,l,a){if(e[t])e[t].push(o);else{var u,i;if(void 0!==l)for(var s=document.getElementsByTagName("script"),d=0;d<s.length;d++){var c=s[d];if(c.getAttribute("src")==t||c.getAttribute("data-webpack")==r+l){u=c;break}}u||(i=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,n.nc&&u.setAttribute("nonce",n.nc),u.setAttribute("data-webpack",r+l),u.src=t),e[t]=[o];var m=function(r,n){u.onerror=u.onload=null,clearTimeout(f);var o=e[t];if(delete e[t],u.parentNode&&u.parentNode.removeChild(u),o&&o.forEach((function(e){return e(n)})),r)return r(n)},f=setTimeout(m.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=m.bind(null,u.onerror),u.onload=m.bind(null,u.onload),i&&document.head.appendChild(u)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){if("undefined"!==typeof document){var e=function(e,r,n,t,o){var l=document.createElement("link");l.rel="stylesheet",l.type="text/css";var a=function(n){if(l.onerror=l.onload=null,"load"===n.type)t();else{var a=n&&("load"===n.type?"missing":n.type),u=n&&n.target&&n.target.href||r,i=new Error("Loading CSS chunk "+e+" failed.\n("+u+")");i.code="CSS_CHUNK_LOAD_FAILED",i.type=a,i.request=u,l.parentNode&&l.parentNode.removeChild(l),o(i)}};return l.onerror=l.onload=a,l.href=r,n?n.parentNode.insertBefore(l,n.nextSibling):document.head.appendChild(l),l},r=function(e,r){for(var n=document.getElementsByTagName("link"),t=0;t<n.length;t++){var o=n[t],l=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(l===e||l===r))return o}var a=document.getElementsByTagName("style");for(t=0;t<a.length;t++){o=a[t],l=o.getAttribute("data-href");if(l===e||l===r)return o}},t=function(t){return new Promise((function(o,l){var a=n.miniCssF(t),u=n.p+a;if(r(a,u))return o();e(t,u,null,o,l)}))},o={143:0};n.f.miniCss=function(e,r){var n={79:1,173:1,338:1,646:1};o[e]?r.push(o[e]):0!==o[e]&&n[e]&&r.push(o[e]=t(e).then((function(){o[e]=0}),(function(r){throw delete o[e],r})))}}}(),function(){var e={143:0};n.f.j=function(r,t){var o=n.o(e,r)?e[r]:void 0;if(0!==o)if(o)t.push(o[2]);else{var l=new Promise((function(n,t){o=e[r]=[n,t]}));t.push(o[2]=l);var a=n.p+n.u(r),u=new Error,i=function(t){if(n.o(e,r)&&(o=e[r],0!==o&&(e[r]=void 0),o)){var l=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;u.message="Loading chunk "+r+" failed.\n("+l+": "+a+")",u.name="ChunkLoadError",u.type=l,u.request=a,o[1](u)}};n.l(a,i,"chunk-"+r,r)}},n.O.j=function(r){return 0===e[r]};var r=function(r,t){var o,l,a=t[0],u=t[1],i=t[2],s=0;if(a.some((function(r){return 0!==e[r]}))){for(o in u)n.o(u,o)&&(n.m[o]=u[o]);if(i)var d=i(n)}for(r&&r(t);s<a.length;s++)l=a[s],n.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return n.O(d)},t=self["webpackChunkschool"]=self["webpackChunkschool"]||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))}();var t=n.O(void 0,[998],(function(){return n(4207)}));t=n.O(t)})();
//# sourceMappingURL=app.4868dba8.js.map