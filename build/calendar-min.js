/*
Copyright 2011, KISSY UI Library v1.1.7dev
MIT Licensed
build time: ${build.time}
*/
KISSY.add("calendar/base",function(i,n,l,j){function g(a,c){this._init(a,c)}var k=i.require("node/node"),e=i.require("event/target");i.augment(g,{_init:function(a,c){var d=k.one(a);this.id=this.C_Id=this._stamp(d);this._buildParam(c);if(this.popup){this.trigger=d;this.con=new k("<div>");k.one("body").append(this.con);this.C_Id=this._stamp(this.con);this.con.css({top:"0px",position:"absolute",background:"white",visibility:"hidden"})}else this.con=d;d=function(){};i.augment(d,e);d=new d;i.mix(this,
d);this.render();this._buildEvent();return this},render:function(a){var c=0,d,b;a=a||{};this._parseParam(a);this.ca=[];this.con.addClass("ks-cal-call ks-clearfix multi-"+this.pages);this.con.html("");c=0;for(b=[this.year,this.month];c<this.pages;c++){if(c===0)a=true;else{a=false;b=this._computeNextMonth(b)}d=c==this.pages-1;this.ca.push(new this.Page({year:b[0],month:b[1],prevArrow:a,nextArrow:d,showTime:this.showTime},this));this.ca[c].render()}return this},_stamp:function(a){if(a.attr("id")===j||
a.attr("id")==="")a.attr("id","K_"+i.now());return a.attr("id")},_showdate:function(a,c){var d=new Date(c-0+a*864E5);d=d.getFullYear()+"/"+(d.getMonth()+1)+"/"+d.getDate();return new Date(d)},_buildEvent:function(){var a=this;if(!a.popup)return this;for(var c=0;c<a.EV.length;c++)a.EV[c]!==j&&a.EV[c].detach();a.EV[0]=k.one("body").on("click",function(d){if(d.target.attr("id")!==a.C_Id)if(!((d.target.hasClass("ks-next")||d.target.hasClass("ks-prev"))&&d.target[0].tagName==="A"))if(d.target.attr("id")!=
a.id)if(a.con.css("visibility")!="hidden")(function(b,f){return b[0]>f[0].x&&b[0]<f[1].x&&b[1]>f[0].y&&b[1]<f[1].y})([d.pageX,d.pageY],[{x:a.con.offset().left,y:a.con.offset().top},{x:a.con.offset().left+a.con.width(),y:a.con.offset().top+a.con.height()}])||a.hide()});for(c=0;c<a.triggerType.length;c++)a.EV[1]=k.one("#"+a.id).on(a.triggerType[c],function(d){d.target=k(d.target);d.preventDefault();var b=a.triggerType;if(i.inArray("click",b)&&i.inArray("focus",b))d.type=="focus"&&a.toggle();else if(i.inArray("click",
b)&&!i.inArray("focus",b))d.type=="click"&&a.toggle();else!i.inArray("click",b)&&i.inArray("focus",b)?setTimeout(function(){a.toggle()},170):a.toggle()});return this},toggle:function(){this.con.css("visibility")=="hidden"?this.show():this.hide()},show:function(){this.con.css("visibility","");var a=this.trigger.offset().left,c=this.trigger[0].offsetHeight||this.trigger.height();c=this.trigger.offset().top+c;this.con.css("left",a.toString()+"px");this.con.css("top",c.toString()+"px");return this},hide:function(){this.con.css("visibility",
"hidden");return this},_buildParam:function(a){function c(m,h){var o=a[h];d[h]=o===j||o===null?m:o}var d=this;if(a===j||a===null)a={};i.each({date:new Date,startDay:0,pages:1,closable:false,rangeSelect:false,minDate:false,maxDate:false,multiSelect:false,navigator:true,popup:false,showTime:false,triggerType:["click"]},c);if(typeof a.triggerType==="string")a.triggerType=[a.triggerType];c(d.date,"selected");if(a.startDay)d.startDay=(7-a.startDay)%7;if(a.range!==j&&a.range!==null){var b=d._showdate(1,
new Date(a.range.start.getFullYear()+"/"+(a.range.start.getMonth()+1)+"/"+a.range.start.getDate())),f=d._showdate(1,new Date(a.range.end.getFullYear()+"/"+(a.range.end.getMonth()+1)+"/"+a.range.end.getDate()));d.range={start:b,end:f}}else d.range={start:null,end:null};d.EV=[];return this},_parseParam:function(a){var c;if(a===j||a===null)a={};for(c in a)this[c]=a[c];this._handleDate();return this},_templetShow:function(a,c){var d,b,f,m;if(c instanceof Array){d="";for(b=0;b<c.length;b++)d+=arguments.callee(a,
c[b]);a=d}else{d=a.match(/{\$(.*?)}/g);if(c!==j&&d!==null){b=0;for(f=d.length;b<f;b++){m=d[b].replace(/({\$)|}/g,"");m=c[m]!==j?c[m]:"";a=a.replace(d[b],m)}}}return a},_handleDate:function(){var a=this.date;this.weekday=a.getDay()+1;this.day=a.getDate();this.month=a.getMonth();this.year=a.getFullYear();return this},_getHeadStr:function(a,c){return a.toString()+"\u5e74"+(Number(c)+1).toString()+"\u6708"},_monthAdd:function(){if(this.month==11){this.year++;this.month=0}else this.month++;this.date=new Date(this.year.toString()+
"/"+(this.month+1).toString()+"/"+this.day.toString());return this},_monthMinus:function(){if(this.month===0){this.year--;this.month=11}else this.month--;this.date=new Date(this.year.toString()+"/"+(this.month+1).toString()+"/"+this.day.toString());return this},_computeNextMonth:function(a){var c=a[0];a=a[1];if(a==11){c++;a=0}else a++;return[c,a]},_handleOffset:function(){var a=["\u65e5","\u4e00","\u4e8c","\u4e09","\u56db","\u4e94","\u516d"],c=this.startDay,d="";d=[];for(var b=0;b<7;b++)d[b]={day:a[(b-c+7)%7]};d=this._templetShow("<span>{$day}</span>",
d);return{day_html:d}},_handleRange:function(a){if(this.range.start===null&&this.range.end===null||this.range.start!==null&&this.range.end!==null){this.range.start=a;this.range.end=null;this.render()}else if(this.range.start!==null&&this.range.end===null){this.range.end=a;if(this.range.start.getTime()>this.range.end.getTime()){a=this.range.start;this.range.start=this.range.end;this.range.end=a}this.fire("rangeSelect",this.range);this.render()}return this}});return g},{requires:["node","event"]});
KISSY.add("calendar/date",function(){var i=function(){var n=/w{1}|d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZ]|"[^"]*"|'[^']*'/g,l=/\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,j=/[^-+\dA-Z]/g,g=function(a,c){a=String(a);for(c=c||2;a.length<c;)a="0"+a;return a},k={"default":"ddd mmm dd yyyy HH:MM:ss",shortDate:"m/d/yy",longDate:"mmmm d, yyyy",fullDate:"dddd, mmmm d, yyyy",shortTime:"h:MM TT",longTime:"h:MM:ss TT Z",
isoDate:"yyyy-mm-dd",isoTime:"HH:MM:ss",isoDateTime:"yyyy-mm-dd'T'HH:MM:ss",isoUTCDateTime:"UTC:yyyy-mm-dd'T'HH:MM:ss'Z'",localShortDate:"yy\u5e74mm\u6708dd\u65e5",localShortDateTime:"yy\u5e74mm\u6708dd\u65e5 hh:MM:ss TT",localLongDate:"yyyy\u5e74mm\u6708dd\u65e5",localLongDateTime:"yyyy\u5e74mm\u6708dd\u65e5 hh:MM:ss TT",localFullDate:"yyyy\u5e74mm\u6708dd\u65e5 w",localFullDateTime:"yyyy\u5e74mm\u6708dd\u65e5 w hh:MM:ss TT"},e={dayNames:["Sun","Mon","Tue","Wed","Thu","Fri","Sat","Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","\u661f\u671f\u65e5","\u661f\u671f\u4e00","\u661f\u671f\u4e8c","\u661f\u671f\u4e09","\u661f\u671f\u56db","\u661f\u671f\u4e94",
"\u661f\u671f\u516d"],monthNames:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","January","February","March","April","May","June","July","August","September","October","November","December"]};return function(a,c,d){if(arguments.length==1&&Object.prototype.toString.call(a)=="[object String]"&&!/\d/.test(a)){c=a;a=undefined}a=a?new Date(a):new Date;if(isNaN(a))throw SyntaxError("invalid date");c=String(k[c]||c||k["default"]);if(c.slice(0,4)=="UTC:"){c=c.slice(4);d=true}var b=d?"getUTC":"get",
f=a[b+"Date"](),m=a[b+"Day"](),h=a[b+"Month"](),o=a[b+"FullYear"](),p=a[b+"Hours"](),s=a[b+"Minutes"](),t=a[b+"Seconds"]();b=a[b+"Milliseconds"]();var r=d?0:a.getTimezoneOffset(),u={d:f,dd:g(f,undefined),ddd:e.dayNames[m],dddd:e.dayNames[m+7],w:e.dayNames[m+14],m:h+1,mm:g(h+1,undefined),mmm:e.monthNames[h],mmmm:e.monthNames[h+12],yy:String(o).slice(2),yyyy:o,h:p%12||12,hh:g(p%12||12,undefined),H:p,HH:g(p,undefined),M:s,MM:g(s,undefined),s:t,ss:g(t,undefined),l:g(b,3),L:g(b>99?Math.round(b/10):b,undefined),
t:p<12?"a":"p",tt:p<12?"am":"pm",T:p<12?"A":"P",TT:p<12?"AM":"PM",Z:d?"UTC":(String(a).match(l)||[""]).pop().replace(j,""),o:(r>0?"-":"+")+g(Math.floor(Math.abs(r)/60)*100+Math.abs(r)%60,4),S:["th","st","nd","rd"][f%10>3?0:(f%100-f%10!=10)*f%10]};return c.replace(n,function(q){return q in u?u[q]:q.slice(1,q.length-1)})}}();return{format:function(n,l,j){return i(n,l,j)},parse:function(n){var l=null;if(l instanceof Date)n=l;else{l=new Date(n);n=l instanceof Date&&l!="Invalid Date"&&!isNaN(l)?l:null}return n}}});
KISSY.add("calendar/page",function(i,n,l,j){var g=i.require("node/node");i.augment(j,{Page:function(k,e){this.father=e;this.month=Number(k.month);this.year=Number(k.year);this.prevArrow=k.prevArrow;this.nextArrow=k.nextArrow;this.timmer=this.node=null;this.id="";this.EV=[];this.html=['<div class="ks-cal-box" id="{$id}"><div class="ks-cal-hd"><a href="javascript:void(0);" class="ks-prev {$prev}"><</a><a href="javascript:void(0);" class="ks-title">{$title}</a><a href="javascript:void(0);" class="ks-next {$next}">></a></div><div class="ks-cal-bd"><div class="ks-whd">',
e._handleOffset().day_html,'</div><div class="ks-dbd ks-clearfix">{$ds}</div></div><div class="ks-setime hidden"></div><div class="ks-cal-ft {$showtime}"><div class="ks-cal-time">\u65f6\u95f4\uff1a00:00 &hearts;</div></div><div class="ks-selectime hidden"></div></div><!--#ks-cal-box--\>'].join("");this.nav_html='<p>\u6708<select value="{$the_month}"><option class="m1" value="1">01</option><option class="m2" value="2">02</option><option class="m3" value="3">03</option><option class="m4" value="4">04</option><option class="m5" value="5">05</option><option class="m6" value="6">06</option><option class="m7" value="7">07</option><option class="m8" value="8">08</option><option class="m9" value="9">09</option><option class="m10" value="10">10</option><option class="m11" value="11">11</option><option class="m12" value="12">12</option></select></p><p>\u5e74<input type="text" value="{$the_year}" onfocus="this.select()"/></p><p><button class="ok">\u786e\u5b9a</button><button class="cancel">\u53d6\u6d88</button></p>';
this.Verify=function(){return{isDay:function(a){if(!/^\d+$/i.test(a))return false;a=Number(a);return!(a<1||a>31)},isYear:function(a){if(!/^\d+$/i.test(a))return false;a=Number(a);return!(a<100||a>1E4)},isMonth:function(a){if(!/^\d+$/i.test(a))return false;a=Number(a);return!(a<1||a>12)}}};this._renderUI=function(){var a={};this.HTML="";a.prev="";a.next="";a.title="";a.ds="";if(!this.prevArrow)a.prev="hidden";if(!this.nextArrow)a.next="hidden";if(!this.father.showtime)a.showtime="hidden";a.id=this.id=
"ks-cal-"+Math.random().toString().replace(/.\./i,"");a.title=this.father._getHeadStr(this.year,this.month);this.createDS();a.ds=this.ds;this.father.con.append(this.father._templetShow(this.html,a));this.node=g.one("#"+this.id);if(this.father.showTime){a=this.node.one(".ks-cal-ft");a.removeClass("hidden");this.timmer=new this.father.TimeSelector(a,this.father)}return this};this._buildEvent=function(){var a=this,c,d=g.one("#"+a.id);for(c=0;c<a.EV.length;c++)typeof a.EV[c]!="undefined"&&a.EV[c].detach();
a.EV[0]=d.one("div.ks-dbd").on("click",function(b){b.target=g(b.target);if(!b.target.hasClass("ks-null"))if(!b.target.hasClass("ks-disabled")){b=Number(b.target.html());var f=new Date("2010/01/01");f.setDate(b);f.setYear(a.year);f.setMonth(a.month);a.father.dt_date=f;a.father.fire("select",{date:f});a.father.popup&&a.father.closable&&a.father.hide();a.father.rangeSelect&&a.father._handleRange(f);a.father.render({selected:f})}});a.EV[1]=d.one("a.ks-prev").on("click",function(b){b.preventDefault();
a.father._monthMinus().render();a.father.fire("monthChange",{date:new Date(a.father.year+"/"+(a.father.month+1)+"/01")})});a.EV[2]=d.one("a.ks-next").on("click",function(b){b.preventDefault();a.father._monthAdd().render();a.father.fire("monthChange",{date:new Date(a.father.year+"/"+(a.father.month+1)+"/01")})});if(a.father.navigator){a.EV[3]=d.one("a.ks-title").on("click",function(b){try{a.timmer.hidePopup();b.preventDefault()}catch(f){}b.target=g(b.target);b=d.one(".ks-setime");b.html("");var m=
a.father._templetShow(a.nav_html,{the_month:a.month+1,the_year:a.year});b.html(m);b.removeClass("hidden");d.one("input").on("keydown",function(h){h.target=g(h.target);if(h.keyCode==38){h.target.val(Number(h.target.val())+1);h.target[0].select()}if(h.keyCode==40){h.target.val(Number(h.target.val())-1);h.target[0].select()}if(h.keyCode==13){h=d.one(".ks-setime").one("select").val();var o=d.one(".ks-setime").one("input").val();d.one(".ks-setime").addClass("hidden");if(a.Verify().isYear(o))if(a.Verify().isMonth(h)){a.father.render({date:new Date(o+
"/"+h+"/01")});a.father.fire("monthChange",{date:new Date(o+"/"+h+"/01")})}}})});a.EV[4]=d.one(".ks-setime").on("click",function(b){b.preventDefault();b.target=g(b.target);if(b.target.hasClass("ok")){b=d.one(".ks-setime").one("select").val();var f=d.one(".ks-setime").one("input").val();d.one(".ks-setime").addClass("hidden");if(a.Verify().isYear(f))if(a.Verify().isMonth(b)){a.father.render({date:new Date(f+"/"+b+"/01")});a.father.fire("monthChange",{date:new Date(f+"/"+b+"/01")})}}else b.target.hasClass("cancel")&&
d.one(".ks-setime").addClass("hidden")})}return this};this._getNode=function(){return this.node};this._getNumOfDays=function(a,c){return 32-(new Date(a,c-1,32)).getDate()};this.createDS=function(){var a="",c=((new Date(this.year+"/"+(this.month+1)+"/01")).getDay()+this.father.startDay+7)%7,d=this._getNumOfDays(this.year,this.month+1)+c,b,f;for(b=0;b<d;b++){f=/532/.test(n.webkit)?new Date(this.year+"/"+Number(this.month+1)+"/"+(b+1-c).toString()):new Date(this.year+"/"+Number(this.month+1)+"/"+(b+
2-c).toString());var m=new Date(this.year+"/"+Number(this.month+1)+"/"+(b+1-c).toString());a+=b<c?'<a href="javascript:void(0);" class="ks-null">0</a>':this.father.minDate instanceof Date&&(new Date(this.year+"/"+(this.month+1)+"/"+(b+2-c))).getTime()<this.father.minDate.getTime()+1?'<a href="javascript:void(0);" class="ks-disabled">'+(b-c+1)+"</a>":this.father.maxDate instanceof Date&&(new Date(this.year+"/"+(this.month+1)+"/"+(b+1-c))).getTime()>this.father.maxDate.getTime()?'<a href="javascript:void(0);" class="ks-disabled">'+
(b-c+1)+"</a>":this.father.range.start!==null&&this.father.range.end!==null&&f.getTime()>=this.father.range.start.getTime()&&m.getTime()<this.father.range.end.getTime()?b==c+(new Date).getDate()-1&&(new Date).getFullYear()==this.year&&(new Date).getMonth()==this.month?'<a href="javascript:void(0);" class="ks-range ks-today">'+(b-c+1)+"</a>":'<a href="javascript:void(0);" class="ks-range">'+(b-c+1)+"</a>":b==c+(new Date).getDate()-1&&(new Date).getFullYear()==this.year&&(new Date).getMonth()==this.month?
'<a href="javascript:void(0);" class="ks-today">'+(b-c+1)+"</a>":b==c+this.father.selected.getDate()-1&&this.month==this.father.selected.getMonth()&&this.year==this.father.selected.getFullYear()?'<a href="javascript:void(0);" class="ks-selected">'+(b-c+1)+"</a>":'<a href="javascript:void(0);">'+(b-c+1)+"</a>"}if(d%7!==0)for(b=0;b<7-d%7;b++)a+='<a href="javascript:void(0);" class="ks-null">0</a>';this.ds=a;return this};this.render=function(){this._renderUI();this._buildEvent();return this}}});return j},
{requires:["ua","node","calendar/base"]});
KISSY.add("calendar/time",function(i,n,l){var j=i.require("node/node");i.augment(l,{TimeSelector:function(g,k){this.father=k;this.fcon=g.parent(".ks-cal-box");this.popupannel=this.fcon.one(".ks-selectime");if(typeof k._time=="undefined")k._time=new Date;this.time=k._time;this.status="s";this.ctime=j('<div class="ks-cal-time">\u65f6\u95f4\uff1a<span class="h">h</span>:<span class="m">m</span>:<span class="s">s</span><!--{{arrow--\><div class="cta"><button class="u"></button><button class="d"></button></div><!--arrow}}--\></div>');this.button=
j('<button class="ct-ok">\u786e\u5b9a</button>');this.h_a=["00","01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23"];this.m_a=["00","10","20","30","40","50"];this.s_a=["00","10","20","30","40","50"];this.parseSubHtml=function(e){for(var a="",c=0;c<e.length;c++)a+='<a href="javascript:void(0);" class="item">'+e[c]+"</a>";a+='<a href="javascript:void(0);" class="x">x</a>';return a};this.showPopup=function(e){this.popupannel.html(e);this.popupannel.removeClass("hidden");
e=this.status;this.ctime.all("span").removeClass("on");switch(e){case "h":this.ctime.all(".h").addClass("on");break;case "m":this.ctime.all(".m").addClass("on");break;case "s":this.ctime.all(".s").addClass("on")}};this.hidePopup=function(){this.popupannel.addClass("hidden")};this.render=function(){var e=this.get("h"),a=this.get("m"),c=this.get("s");this.father._time=this.time;this.ctime.all(".h").html(e);this.ctime.all(".m").html(a);this.ctime.all(".s").html(c);return this};this.set=function(e,a){a=
Number(a);switch(e){case "h":this.time.setHours(a);break;case "m":this.time.setMinutes(a);break;case "s":this.time.setSeconds(a)}this.render()};this.get=function(e){var a=this.time;switch(e){case "h":return a.getHours();case "m":return a.getMinutes();case "s":return a.getSeconds()}};this.add=function(){var e=this.status,a=this.get(e);a++;this.set(e,a)};this.minus=function(){var e=this.status,a=this.get(e);a--;this.set(e,a)};this._init=function(){var e=this;g.html("").append(e.ctime);g.append(e.button);
e.render();e.popupannel.on("click",function(a){a=j(a.target);if(a.hasClass("x"))e.hidePopup();else if(a.hasClass("item")){a=Number(a.html());e.set(e.status,a);e.hidePopup()}});e.button.on("click",function(){var a=typeof e.father.dt_date=="undefined"?e.father.date:e.father.dt_date;a.setHours(e.get("h"));a.setMinutes(e.get("m"));a.setSeconds(e.get("s"));e.father.fire("timeSelect",{date:a});e.father.popup&&e.father.closable&&e.father.hide()});e.ctime.on("keyup",function(a){if(a.keyCode==38||a.keyCode==
37){a.preventDefault();e.add()}if(a.keyCode==40||a.keyCode==39){a.preventDefault();e.minus()}});e.ctime.one(".u").on("click",function(){e.hidePopup();e.add()});e.ctime.one(".d").on("click",function(){e.hidePopup();e.minus()});e.ctime.one(".h").on("click",function(){var a=e.parseSubHtml(e.h_a);e.status="h";e.showPopup(a)});e.ctime.one(".m").on("click",function(){var a=e.parseSubHtml(e.m_a);e.status="m";e.showPopup(a)});e.ctime.one(".s").on("click",function(){var a=e.parseSubHtml(e.s_a);e.status="s";
e.showPopup(a)})};this._init()}});return l},{requires:["node","calendar/base"]});KISSY.add("calendar",function(i,n){return n},{requires:["calendar/base","calendar/page","calendar/time","calendar/date"]});
