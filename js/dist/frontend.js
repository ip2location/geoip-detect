!function(){function t(t){return t&&t.__esModule?t.default:t}function e(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function r(t){return function(){var r=this,n=arguments;return new Promise((function(o,i){var a=t.apply(r,n);function c(t){e(a,o,i,c,u,"next",t)}function u(t){e(a,o,i,c,u,"throw",t)}c(void 0)}))}}function n(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t){return t&&t.constructor===Symbol?"symbol":typeof t}var a={},c=function(t){var e,r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var o=e&&e.prototype instanceof y?e:y,i=Object.create(o.prototype),a=new A(n||[]);return i._invoke=function(t,e,r){var n=f;return function(o,i){if(n===d)throw new Error("Generator is already running");if(n===h){if("throw"===o)throw i;return T()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=L(a,r);if(c){if(c===v)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=h,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=d;var u=l(t,e,r);if("normal"===u.type){if(n=r.done?h:p,u.arg===v)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=h,r.method="throw",r.arg=u.arg)}}}(t,r,a),i}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var f="suspendedStart",p="suspendedYield",d="executing",h="completed",v={};function y(){}function g(){}function m(){}var _={};u(_,i,(function(){return this}));var w=Object.getPrototypeOf,b=w&&w(w(O([])));b&&b!==r&&n.call(b,i)&&(_=b);var x=m.prototype=y.prototype=Object.create(_);function E(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function k(t,e){function r(o,i,a,c){var u=l(t[o],t,i);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"==typeof f&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(f).then((function(t){s.value=t,a(s)}),(function(t){return r("throw",t,a,c)}))}c(u.arg)}var o;this._invoke=function(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}}function L(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,L(t,r),"throw"===r.method))return v;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=l(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,v;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,v):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function S(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function A(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function O(t){if(t){var r=t[i];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}return{next:T}}function T(){return{value:e,done:!0}}return g.prototype=m,u(x,"constructor",m),u(m,"constructor",g),g.displayName=u(m,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,u(t,c,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},E(k.prototype),u(k.prototype,a,(function(){return this})),t.AsyncIterator=k,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new k(s(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},E(x),u(x,c,"Generator"),u(x,i,(function(){return this})),u(x,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=O,A.prototype={constructor:A,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(S),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),S(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;S(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:O(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),v}},t}(a);try{regeneratorRuntime=c}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=c:Function("r","regeneratorRuntime = r")(c)}var u=function(t,e,r){if(!t)return r;var n,o;Array.isArray(e)&&(n=e.slice(0));"string"==typeof e&&(n=e.split("."));"symbol"==typeof e&&(n=[e]);if(!Array.isArray(n))throw new Error("props arg must be an array, a string or a symbol");for(;n.length;){if(o=n.shift(),!t)return r;if(void 0===(t=t[o]))return r}return t};var s=function(t){return t=t.split(".").map((function(t){return"string"!=typeof t||"string"!=typeof t[0]?"":t=(t=t[0].toLowerCase()+t.slice(1)).replace(/([A-Z])/g,"_$1").toLowerCase()})).join(".")},l=function(){"use strict";function t(e,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),o(this,"data",{}),o(this,"default_locales",[]),this.data=e||{is_empty:!0},this.default_locales=["en"],this.default_locales=this._process_locales(r)}var e,r,a;return e=t,(r=[{key:"get",value:function(t,e){return this.get_with_locales(t,null,e)}},{key:"get_raw",value:function(t){return t=s(t),u(this.data,t,null)}},{key:"has_property",value:function(t){return null!==this._lookup_with_locales(t,this.default_locales,null)}},{key:"_lookup_with_locales",value:function(t,e,r){var n=void 0===r?"":r;e=this._process_locales(e),".name"===t.substr(-5)&&(t=t.substr(0,t.length-5));var o=this.get_raw(t);return null!==(o=function(t,e){if("object"==typeof t&&null!==t){if("object"==typeof t.names&&"object"==typeof e)for(var r=0;r<e.length;r++){var n=e[r];if(t.names[n])return t.names[n]}return t.name?t.name:""}return t}(o,e))&&""!==o||(o=n),o}},{key:"_process_locales",value:function(t){return"string"==typeof t&&(t=[t]),Array.isArray(t)&&0!==t.length||(t=this.default_locales),t}},{key:"get_with_locales",value:function(t,e,r){var n=this._lookup_with_locales(t,e,r);return"object"==typeof n&&console.warn('Geolocation IP Detection: The property "'+t+'" is of type "'+(void 0===n?"undefined":i(n))+'", should be string or similar',n),void 0===n?(console.warn('Geolocation IP Detection: The property "'+t+'" is not defined, please check spelling or maybe you need a different data source',{data:this.data}),""):n}},{key:"get_country_iso",value:function(){var t=this.get("country.iso_code");return t&&(t=t.substr(0,2).toLowerCase()),t}},{key:"is_empty",value:function(){return this.get("is_empty",!1)}},{key:"error",value:function(){return this.get_raw("extra.error")||""}},{key:"serialize",value:function(){return this.data}}])&&n(e.prototype,r),a&&n(e,a),t}(),f=function(t,e){var r=void 0===e?"GET":e,n=new XMLHttpRequest;return new Promise((function(e,o){n.onreadystatechange=function(){4===n.readyState&&(n.status>=200&&n.status<300?e(n):o({status:n.status,statusText:n.statusText,request:n}))},n.open(r||"GET",t,!0),n.send()}))},p=function(t){try{return JSON.parse(t)}catch(e){return d("Invalid JSON: "+t)}};function d(t){return{is_empty:!0,extra:{error:t}}}var h,v=(h=r(t(a).mark((function e(r,n){var o,i;return t(a).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=void 0===n?"GET":n,t.prev=1,t.next=4,f(r,o);case 4:if((i=t.sent).responseText&&"0"!==i.responseText){t.next=7;break}return t.abrupt("return",d("Got an empty response from server. Did you enable AJAX in the options?"));case 7:return t.abrupt("return",p(i.responseText));case 10:return t.prev=10,t.t0=t.catch(1),t.abrupt("return",p(t.t0.request.responseText));case 13:case"end":return t.stop()}}),e,null,[[1,10]])}))),function(){return h.apply(this,arguments)}),y=function(t,e,r){var n={value:e,expires_at:(new Date).getTime()+1e3*r/1};localStorage.setItem(t.toString(),JSON.stringify(n))},g=function(t,e,r){var n,o,i;Array.isArray(e)&&(n=e.slice(0));"string"==typeof e&&(n=e.split("."));"symbol"==typeof e&&(n=[e]);if(!Array.isArray(n))throw new Error("props arg must be an array, a string or a symbol");if(!(o=n.pop()))return!1;m(o);for(;i=n.shift();)if(m(i),void 0===t[i]&&(t[i]={}),!(t=t[i])||"object"!=typeof t)return!1;return t[o]=r,!0};function m(t){if("__proto__"===t||"constructor"===t||"prototype"===t)throw new Error("setting of prototype values not supported")}var _=w;function w(t,e){return t===e||(t!=t&&e!=e||{}.toString.call(t)=={}.toString.call(e)&&(t===Object(t)&&(!!t&&(Array.isArray(t)?b(t,e):"[object Set]"=={}.toString.call(t)?b(Array.from(t),Array.from(e)):"[object Object]"=={}.toString.call(t)?function(t,e){var r=Object.keys(t).sort(),n=Object.keys(e).sort(),o=r.length;if(o!=n.length)return!1;for(var i=0;i<o;i++){var a=r[i],c=n[i];if(a!=c||!w(t[a],e[c]))return!1}return!0}(t,e):function(t,e){return t.toString()===e.toString()}(t,e)))))}function b(t,e){var r=t.length;if(r!=e.length)return!1;for(var n=!0,o=0;o<r;o++)if(!w(t[o],e[o])){n=!1;break}return n}var x=new Promise((function(t){"loading"===document.readyState?document.addEventListener?document.addEventListener("DOMContentLoaded",t):document.attachEvent("onreadystatechange",(function(){"loading"!=document.readyState&&t()})):t()}));function E(t,e,r){for(var n=0;n<t.options.length;n++)if(t.options[n].getAttribute(e)===r)return t.selectedIndex=n,!0;return!1}function k(t){var e=t.getAttribute("data-options");try{return JSON.parse(e)}catch(t){return{}}}function L(){return(L=r(t(a).mark((function e(r,n,o){var i,c;return t(a).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if((i=document.getElementsByClassName(r)).length){t.next=3;break}return t.abrupt("return");case 3:return t.next=5,it();case 5:if(!(c=t.sent).error()){t.next=9;break}return console.error("Geolocation IP Detection Error ("+n+"): "+c.error()),t.abrupt("return");case 9:Array.from(i).forEach((function(t){return o(t,c)}));case 10:case"end":return t.stop()}}),e)})))).apply(this,arguments)}function j(t,e,r){return L.apply(this,arguments)}function S(t,e,r){var n=void 0===r?null:r,o=k(t);return n=n||o.property,o.skip_cache&&console.warn("Geolocation IP Detection: The property 'skip_cache' is ignored in AJAX mode. You could disable the response caching on the server by setting the constant GEOIP_DETECT_READER_CACHE_TIME."),e.get_with_locales(n,o.lang,o.default)}var A=!1;function O(t,e,r){var n,o=void 0===r?null:r;A=!0,window.CustomEvent&&"function"==typeof window.CustomEvent?n=new CustomEvent(e,{detail:o}):(n=document.createEvent("CustomEvent")).initCustomEvent(e,!0,!0,o),t.dispatchEvent(n),A=!1}var T=!1,P=0;function G(t){if(!A){var e=t.target;(null==e?void 0:e.matches)&&e.matches(".js-geoip-detect-input-autosave")&&I(e)}}function I(t){var e=k(t).property,r=t.value;if(P++,T||P>100?(console.warn("Error: Thats weird! autosave change detected a recursion ("+P+")! Please file a bug report about this."),0):(T=!0,1)){if(t.matches("select.js-geoip-detect-country-select")){var n=t.options[t.selectedIndex];Z("country.iso_code",(null==n?void 0:n.getAttribute("data-c")).toUpperCase(),{reevaluate:!1})}Z(e,r,{reevaluate:!0}),T=!1}}function N(t,e){t.innerText=S(t,e)}function C(t,e){var r=e.get_country_iso()||k(t).default;r&&t.classList.add("flag-icon-"+r)}function D(t,e){if(E(t,"data-c",e.get_country_iso()))O(t,"change");else{var r=k(t).default;if(k(t).default&&E(t,"data-c",r))return I(t),void O(t,"change");E(t,"data-c","")&&(I(t),O(t,"change"))}}function J(t,e){t.value=S(t,e),O(t,"change")}var R=function(t,e){if(!Array.isArray(t)||!Array.isArray(e))throw new Error("expected both arguments to be arrays");for(var r=[],n=t.length,o=0;o<n;o++){var i=t[o];e.indexOf(i)>-1&&-1==r.indexOf(i)&&r.push(i)}return r};function F(t,e){var r=k(t);(function(t,e,r){var n=["name","iso_code","iso_code3","code","geoname_id"],o="or"!==t.op;t.conditions.forEach((function(i){var a=!1,c=[],u=r.get_raw(i.p);null===u?a=!1:"object"==typeof u?n.forEach((function(t){u[t]?c.push(u[t]):"name"==t&&c.push(r.get_with_locales(i.p,e.lang))})):c=[u],a=function(t,e){!0===e[0]?e=["true","yes","y","1"]:!1===e[0]&&(e=["false","no","n","0",""]);if(e=e.map((function(t){return String(t).toLowerCase()})),-1!==(t=t.split(",")).indexOf("")&&0===e.length)return!0;return R(t,e).length>0}(i.v,c),i.not&&(a=!a),o="or"===t.op?o||a:o&&a})),t.not&&(o=!o);return o})(r.parsed,r,e)?(t.style.display="",t.classList.remove("geoip-hidden"),t.classList.add("geoip-shown")):(t.style.display="none",t.classList.add("geoip-hidden"),t.classList.remove("geoip-shown"))}var U,M=function(){document.addEventListener("change",G,!1)},q=(U=r(t(a).mark((function e(){return t(a).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x;case 2:j("js-geoip-detect-shortcode","could not execute shortcode(s) [geoip_detect2 ...]",N),j("js-geoip-detect-flag","could not configure the flag(s)",C),j("js-geoip-text-input","could not set the value of the text input field(s)",J),j("js-geoip-detect-country-select","could not set the value of the select field(s)",D),j("js-geoip-detect-show-if","could not execute the show-if/hide-if conditions",F);case 7:case"end":return t.stop()}}),e)}))),function(){return U.apply(this,arguments)});function z(){return(z=r(t(a).mark((function e(){var r;return t(a).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,it();case 2:if(!(r=t.sent).error()){t.next=6;break}return console.error("Geolocation IP Detection Error (could not add CSS-classes to body): "+r.error()),t.abrupt("return");case 6:return t.next=8,x;case 8:W(r);case 9:case"end":return t.stop()}}),e)})))).apply(this,arguments)}function W(t){var e,r,n,o=function(t){return{country:t.get("country.iso_code"),"country-is-in-european-union":t.get("country.is_in_european_union",!1),continent:t.get("continent.code"),province:t.get("most_specific_subdivision.iso_code")}}(t),i=document.getElementsByTagName("body")[0];r="geoip-",n=(e=i).className.split(" ").filter((function(t){return!t.startsWith(r)})),e.className=n.join(" ").trim();var a=!0,c=!1,u=void 0;try{for(var s,l=Object.keys(o)[Symbol.iterator]();!(a=(s=l.next()).done);a=!0){var f=s.value,p=o[f];p&&("string"==typeof p?i.classList.add("geoip-".concat(f,"-").concat(p)):i.classList.add("geoip-".concat(f)))}}catch(t){c=!0,u=t}finally{try{a||null==l.return||l.return()}finally{if(c)throw u}}}var X,Y=!0;function B(){Y&&(M(),Y=!1),V.do_body_classes&&function(){z.apply(this,arguments)}(),q()}function H(t){return"number"==typeof(t=t||{})&&(t={duration_in_days:t}),t.duration_in_days=t.duration_in_days||V.cookie_duration_in_days,t.duration_in_days<0?(console.warn("Geolocation IP Detection set_override_data() did nothing: A negative duration doesn't make sense. If you want to remove the override, use remove_override() instead."),!1):(void 0===t.reevaluate&&(t.reevaluate=!0),t)}function Z(t,e,r){var n=K()||{};t=s(t=t||"");var o=u(n,t);"object"==typeof o&&"object"==typeof o.names&&(t+=".name"),t.endsWith(".name")&&(t+="s",e={en:e}),g(n,t,e),$(n,r)}function $(t,e){return e=H(e),t&&"function"==typeof t.serialize&&(t=t.serialize()),function(t,e){g(t=t||{},"extra.override",!0);var r=K();if(y(V.cookie_name,t,86400*e.duration_in_days),e.reevaluate&&!_(t,r))return B(),!0;return!1}(t,e)}function K(){return function(t){var e=null;try{e=JSON.parse(localStorage.getItem(t.toString()))}catch(t){return null}if(null!==e){if(!(null!==e.expires_at&&e.expires_at<(new Date).getTime()))return e.value;localStorage.removeItem(t.toString())}return null}(V.cookie_name)}function Q(t,e){y(V.cookie_name,t,e)}var V=(null===(X=window.geoip_detect)||void 0===X?void 0:X.options)||{ajaxurl:"/wp-admin/admin-ajax.php",default_locales:["en"],cookie_duration_in_days:7,cookie_name:"geoip-detect-result",do_body_classes:!1},tt=null;function et(){if(!tt){var t=V.ajaxurl+"?action=geoip_detect2_get_info_from_current_ip";(tt=v(t)).then((function(t){var e;(null==t||null===(e=t.extra)||void 0===e?void 0:e.error)&&console.error("Geolocation IP Detection Error: Server returned an error: "+t.extra.error)}))}return tt}function rt(){return(rt=r(t(a).mark((function e(){var r,n,o,i,c;return t(a).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=!1,n=!1,!V.cookie_name){t.next=7;break}if(!(n=K())||!n.extra){t.next=7;break}return!0===n.extra.override?console.info("Geolocation IP Detection: Using cached response (override)"):console.info("Geolocation IP Detection: Using cached response"),t.abrupt("return",n);case 7:return t.prev=7,t.next=10,et();case 10:r=t.sent,t.next=17;break;case 13:t.prev=13,t.t0=t.catch(7),console.log("Weird: Uncaught error...",t.t0),r=t.t0.responseJSON||t.t0;case 17:if(!V.cookie_name){t.next=26;break}if(!0!==(null==(n=K())||null===(o=n.extra)||void 0===o?void 0:o.override)){t.next=23;break}return console.info("Geolocation IP Detection: Using cached response (override)"),t.abrupt("return",n);case 23:c=86400*V.cookie_duration_in_days,(null==r||null===(i=r.extra)||void 0===i?void 0:i.error)&&(c=60),Q(r,c);case 26:return t.abrupt("return",r);case 27:case"end":return t.stop()}}),e,null,[[7,13]])})))).apply(this,arguments)}function nt(){return rt.apply(this,arguments)}function ot(){return(ot=r(t(a).mark((function e(){var r,n;return t(a).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,nt();case 2:return"object"!=typeof(r=t.sent)&&(console.error("Geolocation IP Detection Error: Record should be an object, not a "+(void 0===r?"undefined":i(r)),r),r={extra:{error:r||"Network error, look at the original server response ..."}}),n=new l(r,V.default_locales),t.abrupt("return",n);case 6:case"end":return t.stop()}}),e)})))).apply(this,arguments)}function it(){return ot.apply(this,arguments)}B(),window.geoip_detect.get_info=it,window.geoip_detect.set_override=$,window.geoip_detect.remove_override=function(t){return t=H(t),y(V.cookie_name,{},-1),t.reevaluate&&B(),!0}}();
//# sourceMappingURL=frontend.js.map
