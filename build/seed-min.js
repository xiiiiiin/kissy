/*
Copyright 2010, KISSY UI Library v1.1.7dev
MIT Licensed
build time: ${build.time}
*/
(function(c,q){var v={mix:function(j,m,o,d){if(!m||!j)return j;if(o===q)o=true;var g,a,e;if(d&&(e=d.length))for(g=0;g<e;g++){a=d[g];if(a in m)if(o||!(a in j))j[a]=m[a]}else for(a in m)if(o||!(a in j))j[a]=m[a];return j}},s=this,r=s[c]||{},t=0;if(!r.mix)r.mix=v.mix;c=s[c]=r;c.mix(c,{__HOST:s,__APP_MEMBERS:["namespace"],__APP_INIT_METHODS:["__init"],version:"1.1.7dev",merge:function(){var j={},m,o=arguments.length;for(m=0;m<o;++m)c.mix(j,arguments[m]);return j},augment:function(){var j=arguments,m=
j.length-2,o=j[0],d=j[m],g=j[m+1],a=1;if(!c.isArray(g)){d=g;g=q;m++}if(!c.isBoolean(d)){d=q;m++}for(;a<m;a++)c.mix(o.prototype,j[a].prototype||j[a],d,g);return o},extend:function(j,m,o,d){if(!m||!j)return j;var g=Object.prototype,a=m.prototype,e=function(h){function k(){}k.prototype=h;return new k}(a);j.prototype=e;e.constructor=j;j.superclass=a;if(m!==Object&&a.constructor===g.constructor)a.constructor=m;o&&c.mix(e,o);d&&c.mix(j,d);return j},__init:function(){this.Config=this.Config||{};this.Env=
this.Env||{};this.Config.debug=""},namespace:function(){var j=arguments,m=j.length,o=null,d,g,a,e=j[m-1]===true&&m--;for(d=0;d<m;++d){a=(""+j[d]).split(".");o=e?s:this;for(g=s[a[0]]===o?1:0;g<a.length;++g)o=o[a[g]]=o[a[g]]||{}}return o},app:function(j,m){var o=c.isString(j),d=o?s[j]||{}:j,g=0,a=c.__APP_INIT_METHODS.length;for(c.mix(d,this,true,c.__APP_MEMBERS);g<a;++g)c[c.__APP_INIT_METHODS[g]].call(d);c.mix(d,c.isFunction(m)?m():m);o&&(s[j]=d);return d},log:function(j,m,o){if(c.Config.debug){if(o)j=
o+": "+j;if(s.console!==q&&console.log)console[m&&console[m]?m:"log"](j)}},error:function(j){if(c.Config.debug)throw j;},guid:function(j){return(j||"")+t++}});c.__init()})("KISSY");
(function(c,q){var v=c.__HOST,s=Array.prototype.indexOf,r=Array.prototype.lastIndexOf,t=Array.prototype.filter,j=String.prototype.trim,m=/^\s+|\s+$/g,o={};c.mix(c,{type:function(d){return d==null?String(d):o[Object.prototype.toString.call(d)]||"object"},isNull:function(d){return d===null},isUndefined:function(d){return d===q},isEmptyObject:function(d){for(var g in d)return false;return true},trim:j?function(d){return d==q?"":j.call(d)}:function(d){return d==q?"":d.toString().replace(m,"")},substitute:function(d,
g,a){if(!c.isString(d)||!c.isPlainObject(g))return d;return d.replace(a||/\\?\{([^{}]+)\}/g,function(e,h){if(e.charAt(0)==="\\")return e.slice(1);return g[h]!==q?g[h]:""})},each:function(d,g,a){var e,h=0,k=d.length,i=k===q||c.type(d)==="function";a=a||v;if(i)for(e in d){if(g.call(a,d[e],e,d)===false)break}else for(e=d[0];h<k&&g.call(a,e,h,d)!==false;e=d[++h]);return d},indexOf:s?function(d,g){return s.call(g,d)}:function(d,g){for(var a=0,e=g.length;a<e;++a)if(g[a]===d)return a;return-1},lastIndexOf:r?
function(d,g){return r.call(g,d)}:function(d,g){for(var a=g.length-1;a>=0;a--)if(g[a]===d)break;return a},unique:function(d,g){g&&d.reverse();for(var a=d.slice(),e=0,h,k;e<a.length;){for(k=a[e];(h=c.lastIndexOf(k,a))!==e;)a.splice(h,1);e+=1}g&&a.reverse();return a},inArray:function(d,g){return c.indexOf(d,g)>-1},filter:t?function(d,g,a){return t.call(d,g,a)}:function(d,g,a){var e=[];c.each(d,function(h,k,i){g.call(a,h,k,i)&&e.push(h)});return e},now:function(){return(new Date).getTime()}});c.each("Boolean Number String Function Array Date RegExp Object".split(" "),
function(d,g){o["[object "+d+"]"]=g=d.toLowerCase();c["is"+d]=function(a){return c.type(a)==g}})})(KISSY);
(function(c,q){function v(b){var f=typeof b;return b===null||f!=="object"&&f!=="function"}function s(b){return Array.prototype.slice.call(b)}var r=c.__HOST,t=r.document,j=t.documentElement,m=Object.prototype.hasOwnProperty,o=encodeURIComponent("[]"),d=false,g=[],a=false,e=/^#?([\w-]+)$/,h=/^(\w+)\[\]$/,k=/\S/;c.mix(c,{isWindow:function(b){return b&&typeof b==="object"&&"setInterval"in b},isPlainObject:function(b){if(!b||c.type(b)!=="object"||b.nodeType||c.isWindow(b))return false;if(b.constructor&&
!m.call(b,"constructor")&&!m.call(b.constructor.prototype,"isPrototypeOf"))return false;for(var f in b);return f===q||m.call(b,f)},clone:function(b){var f=b,n,l;if(b&&((n=c.isArray(b))||c.isPlainObject(b))){f=n?[]:{};for(l in b)if(b.hasOwnProperty(l))f[l]=c.clone(b[l])}return f},makeArray:function(b){if(b===null||b===q)return[];if(c.isArray(b))return b;if(typeof b.length!=="number"||c.isString(b)||c.isFunction(b))return[b];return s(b)},unparam:function(b,f){if(typeof b!=="string"||(b=c.trim(b)).length===
0)return{};for(var n={},l=b.split(f||"&"),p,u,w,x,y=0,z=l.length;y<z;++y){p=l[y].split("=");u=decodeURIComponent(p[0]);try{w=decodeURIComponent(p[1]||"")}catch(A){w=p[1]||""}if((x=u.match(h))&&x[1]){n[x[1]]=n[x[1]]||[];n[x[1]].push(w)}else n[u]=w}return n},param:function(b,f){if(!c.isPlainObject(b))return"";f=f||"&";var n=[],l,p;for(l in b){p=b[l];l=encodeURIComponent(l);if(v(p))n.push(l,"=",encodeURIComponent(p+""),f);else if(c.isArray(p)&&p.length)for(var u=0,w=p.length;u<w;++u)v(p[u])&&n.push(l,
o+"=",encodeURIComponent(p[u]+""),f)}n.pop();return n.join("")},later:function(b,f,n,l,p){f=f||0;l=l||{};var u=b,w=c.makeArray(p),x;if(c.isString(b))u=l[b];u||c.error("method undefined");b=function(){u.apply(l,w)};x=n?setInterval(b,f):setTimeout(b,f);return{id:x,interval:n,cancel:function(){this.interval?clearInterval(x):clearTimeout(x)}}},globalEval:function(b){if(b&&k.test(b)){var f=t.getElementsByTagName("head")[0]||j,n=t.createElement("script");n.text=b;f.insertBefore(n,f.firstChild);f.removeChild(n)}},
ready:function(b){a||this._bindReady();d?b.call(r,this):g.push(b);return this},_bindReady:function(){var b=this,f=t.documentElement.doScroll,n=f?"onreadystatechange":"DOMContentLoaded",l=function(){b._fireReady()};a=true;if(t.readyState==="complete")return l();if(t.addEventListener){var p=function(){t.removeEventListener(n,p,false);l()};t.addEventListener(n,p,false);r.addEventListener("load",l,false)}else{var u=function(){if(t.readyState==="complete"){t.detachEvent(n,u);l()}};t.attachEvent(n,u);r.attachEvent("onload",
l);var w=false;try{w=r.frameElement==null}catch(x){}if(f&&w){var y=function(){try{f("left");l()}catch(z){setTimeout(y,1)}};y()}}},_fireReady:function(){if(!d){d=true;if(g){for(var b,f=0;b=g[f++];)b.call(r,this);g=null}}},available:function(b,f){if((b=(b+"").match(e)[1])&&c.isFunction(f))var n=1,l=c.later(function(){if(t.getElementById(b)&&(f()||1)||++n>500)l.cancel()},40,true)}});try{s(j.childNodes)}catch(i){s=function(b){for(var f=[],n=b.length-1;n>=0;n--)f[n]=b[n];return f}}if(location&&(location.search||
"").indexOf("ks-debug")!==-1)c.Config.debug=true})(KISSY);
(function(c,q){var v=c.__HOST.document,s=v.getElementsByTagName("head")[0]||v.documentElement,r=2,t=3,j=4,m=c.mix,o=v.createElement("script").readyState?function(a,e){var h=a.onreadystatechange;a.onreadystatechange=function(){var k=a.readyState;if(k==="loaded"||k==="complete"){a.onreadystatechange=null;h&&h();e.call(this)}}}:function(a,e){a.addEventListener("load",e,false)},d=/\.css(?:\?|$)/i,g;g={add:function(a,e,h){var k=this.Env.mods,i;if(c.isString(a)&&!h&&c.isPlainObject(e)){i={};i[a]=e;a=i}if(c.isPlainObject(a)){c.each(a,
function(b,f){b.name=f;k[f]&&m(b,k[f],false)});m(k,a)}else{h=h||{};i=k[a]||{};a=h.host||i.host||a;i=k[a]||{};m(i,{name:a,status:r});if(!i.fns)i.fns=[];e&&i.fns.push(e);m(k[a]=i,h);i.attach!==false&&this.__isAttached(i.requires)&&this.__attachMod(i)}return this},use:function(a,e,h){a=a.replace(/\s+/g,"").split(",");h=h||{};var k=this,i=k.Env.mods,b=(h||0).global,f,n=a.length,l,p,u;b&&k.__mixMods(b);if(k.__isAttached(a))e&&e(k);else{for(f=0;f<n&&(l=i[a[f]]);f++)if(l.status!==j){if(h.order&&f>0){if(!l.requires)l.requires=
[];l._requires=l.requires.concat();p=a[f-1];if(!c.inArray(p,l.requires)&&!c.inArray(l.name,i[p].requires||[]))l.requires.push(p)}k.__attach(l,function(){if(l._requires){l.requires=l._requires;delete l._requires}if(!u&&k.__isAttached(a)){u=true;e&&e(k)}},b)}return k}},__attach:function(a,e,h){function k(){b=a.requires||[];if(i.__isAttached(b)){a.status===r&&i.__attachMod(a);a.status===j&&e()}}for(var i=this,b=a.requires||[],f=0,n=b.length;f<n;f++)i.__attach(i.Env.mods[b[f]],k,h);i.__buildPath(a);i.__load(a,
k,h)},__mixMods:function(a){var e=this.Env.mods,h=a.Env.mods,k;for(k in h)this.__mixMod(e,h,k,a)},__mixMod:function(a,e,h,k){var i=a[h]||{},b=i.status;c.mix(i,c.clone(e[h]));if(b)i.status=b;k&&this.__buildPath(i,k.Config.base);a[h]=i},__attachMod:function(a){var e=this;if(a.fns){c.each(a.fns,function(h){h&&h(e)});a.fns=q}a.status=j},__isAttached:function(a){for(var e=this.Env.mods,h,k=(a=c.makeArray(a)).length-1;k>=0&&(h=e[a[k]]);k--)if(h.status!==j)return false;return true},__load:function(a,e,h){function k(){f[b]=
r;if(a.status!==t){h&&i.__mixMod(i.Env.mods,h.Env.mods,a.name,h);if(a.status!==j)a.status=r;e()}}var i=this,b=a.fullpath,f=c.Env._loadQueue,n=f[b];a.status=a.status||0;if(a.status<1&&n)a.status=n.nodeName?1:r;if(c.isString(a.cssfullpath)){i.getScript(a.cssfullpath);a.cssfullpath=r}if(a.status<1&&b){a.status=1;n=i.getScript(b,{success:function(){KISSY.log(a.name+" is loaded.","info");k()},error:function(){a.status=t;f[b]=r},charset:a.charset});d.test(b)||(f[b]=n)}else a.status===1?o(n,k):e()},__buildPath:function(a,
e){function h(i,b){if(!a[b]&&a[i])a[b]=(e||k.base)+a[i];if(a[b]&&k.debug)a[b]=a[b].replace(/-min/g,"")}var k=this.Config;h("path","fullpath");a.cssfullpath!==r&&h("csspath","cssfullpath")},getScript:function(a,e,h){var k=d.test(a),i=v.createElement(k?"link":"script"),b=e,f,n,l;if(c.isPlainObject(b)){e=b.success;f=b.error;n=b.timeout;h=b.charset}if(k){i.href=a;i.rel="stylesheet"}else{i.src=a;i.async=true}if(h)i.charset=h;if(k)c.isFunction(e)&&e.call(i);else o(i,function(){if(l){l.cancel();l=q}c.isFunction(e)&&
e.call(i);s&&i.parentNode&&s.removeChild(i)});if(c.isFunction(f))l=c.later(function(){l=q;f()},(n||this.Config.timeout)*1E3);s.insertBefore(i,s.firstChild);return i}};m(c,g);c.__initLoader=function(){var a=v.getElementsByTagName("script");a=a[a.length-1].src.replace(/^(.*)(seed|kissy).*$/i,"$1");this.Env.mods={};this.Env._loadQueue={};this.Config.base=a;this.Config.timeout=10};c.__initLoader();c.each(g,function(a,e){c.__APP_MEMBERS.push(e)});c.__APP_INIT_METHODS.push("__initLoader")})(KISSY);
(function(c){var q={core:{path:"packages/core-min.js",charset:"utf-8"}};c.each(["sizzle","dd","datalazyload","flash","switchable","suggest","calendar","uibase","overlay","imagezoom"],function(v){q[v]={path:v+"/"+v+"-pkg-min.js",requires:["core"],charset:"utf-8"}});q.calendar.csspath="calendar/default-min.css";q.overlay.requires=["uibase"];c.add(q)})(KISSY);
